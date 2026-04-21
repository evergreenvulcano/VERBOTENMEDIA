import { DocumentMetadata, DocumentRecord, IntakeInput, IntakeType, Scope } from "@/lib/types";

const GITHUB_API = "https://api.github.com";
const READ_TTL_MS = 60_000;
const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 20;
const MAX_COLLISION_ATTEMPTS = 500;
const EXCLUDED_GPT_MODULE_PATH = "modules/_gpt/";
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ALLOWED_TYPES = new Set<IntakeType>(["essay", "criticism", "literary", "fragment", "analysis"]);

const SCOPE_ROOTS = {
  published: "static-pages/writings/",
  sandbox: "static-pages/experimental-sandbox/",
  inbox: "inbox/writings/",
  modules: "modules/",
} as const;

type ContentScope = keyof typeof SCOPE_ROOTS;

type CachedRead = {
  value: DocumentRecord[];
  expiresAt: number;
};

let docsCache: CachedRead | null = null;
let defaultBranchCache: { branch: string; expiresAt: number } | null = null;

class GitHubError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

function getRepoConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (!token || !owner || !repo) {
    throw new Error("Missing GITHUB_TOKEN, GITHUB_OWNER, or GITHUB_REPO environment variables.");
  }

  return { token, owner, repo };
}

async function githubRequest(path: string, init?: RequestInit) {
  const { token } = getRepoConfig();
  const response = await fetch(`${GITHUB_API}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    let message = `GitHub API request failed (${response.status})`;
    try {
      const body = (await response.json()) as { message?: string };
      if (body.message) {
        message = body.message;
      }
    } catch {
      // Ignore parse failures.
    }

    throw new GitHubError(message, response.status);
  }

  return response;
}

async function getDefaultBranch(): Promise<string> {
  if (process.env.GITHUB_BRANCH) {
    return process.env.GITHUB_BRANCH;
  }

  if (defaultBranchCache && defaultBranchCache.expiresAt > Date.now()) {
    return defaultBranchCache.branch;
  }

  const { owner, repo } = getRepoConfig();
  const response = await githubRequest(`/repos/${owner}/${repo}`);
  const body = (await response.json()) as { default_branch: string };
  const branch = body.default_branch;

  defaultBranchCache = {
    branch,
    expiresAt: Date.now() + READ_TTL_MS,
  };

  return branch;
}

function isMarkdown(path: string): boolean {
  return path.toLowerCase().endsWith(".md");
}

function isAllowedPath(path: string): boolean {
  if (!path || path.includes("\\") || path.includes("../") || path.includes("..\\")) {
    return false;
  }

  if (path.startsWith(EXCLUDED_GPT_MODULE_PATH)) {
    return false;
  }

  return path.startsWith(SCOPE_ROOTS.published) ||
    path.startsWith(SCOPE_ROOTS.sandbox) ||
    path.startsWith(SCOPE_ROOTS.inbox) ||
    (path.startsWith(SCOPE_ROOTS.modules) && !path.startsWith(EXCLUDED_GPT_MODULE_PATH));
}

function ensureAllowedPath(path: string): string {
  const normalized = path.replace(/^\/+/, "").replace(/\/+/g, "/");

  if (!normalized || normalized.split("/").some((segment) => segment === ".." || segment === "")) {
    throw new GitHubError("Invalid path", 400);
  }

  if (!isAllowedPath(normalized)) {
    throw new GitHubError("Path is outside allowed scopes", 403);
  }

  return normalized;
}

function encodeContentPath(path: string): string {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function detectScope(path: string): ContentScope {
  if (path.startsWith(SCOPE_ROOTS.published)) {
    return "published";
  }

  if (path.startsWith(SCOPE_ROOTS.sandbox)) {
    return "sandbox";
  }

  if (path.startsWith(SCOPE_ROOTS.inbox)) {
    return "inbox";
  }

  return "modules";
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; body: string } {
  if (!raw.startsWith("---\n")) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const end = raw.indexOf("\n---", 4);

  if (end < 0) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const frontmatterRaw = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\n/, "");
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterRaw.split("\n")) {
    const separator = line.indexOf(":");
    if (separator <= 0) {
      continue;
    }

    const key = line.slice(0, separator).trim();
    const value = stripQuotes(line.slice(separator + 1));

    if (key) {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, body };
}

function createExcerpt(body: string, query?: string): string {
  const normalizedBody = body.replace(/\s+/g, " ").trim();

  if (!normalizedBody) {
    return "";
  }

  if (query) {
    const lowerBody = normalizedBody.toLowerCase();
    const index = lowerBody.indexOf(query.toLowerCase());

    if (index >= 0) {
      const start = Math.max(0, index - 80);
      const end = Math.min(normalizedBody.length, index + query.length + 140);
      return normalizedBody.slice(start, end);
    }
  }

  return normalizedBody.slice(0, 220);
}

function toMetadata(document: DocumentRecord): DocumentMetadata {
  return {
    path: document.path,
    scope: document.scope,
    title: document.title,
    date: document.date,
    summary: document.summary,
    type: document.type,
    status: document.status,
    author: document.author,
    excerpt: document.excerpt,
  };
}

function normalizeDocument(path: string, rawContent: string): DocumentRecord {
  const { frontmatter, body } = parseFrontmatter(rawContent);
  const fallbackTitle = path.split("/").pop()?.replace(/\.md$/i, "") ?? path;

  return {
    path,
    scope: detectScope(path),
    title: frontmatter.title || fallbackTitle,
    date: frontmatter.date,
    summary: frontmatter.summary,
    type: frontmatter.type,
    status: frontmatter.status,
    author: frontmatter.author,
    body,
    excerpt: createExcerpt(frontmatter.summary || body),
  };
}

async function fetchMarkdownContent(path: string, branch: string): Promise<string> {
  const { owner, repo } = getRepoConfig();
  const response = await githubRequest(
    `/repos/${owner}/${repo}/contents/${encodeContentPath(path)}?ref=${encodeURIComponent(branch)}`,
  );

  const payload = (await response.json()) as { content: string; encoding: string };

  if (payload.encoding !== "base64" || !payload.content) {
    throw new GitHubError(`Unsupported encoding for ${path}`, 500);
  }

  // GitHub returns base64 with line breaks; remove them before decoding.
  return Buffer.from(payload.content.replace(/\n/g, ""), "base64").toString("utf8");
}

async function loadAllDocumentsWithBody(): Promise<DocumentRecord[]> {
  if (docsCache && docsCache.expiresAt > Date.now()) {
    return docsCache.value;
  }

  const branch = await getDefaultBranch();
  const { owner, repo } = getRepoConfig();

  const treeResponse = await githubRequest(
    `/repos/${owner}/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`,
  );

  const treePayload = (await treeResponse.json()) as {
    tree?: Array<{ path: string; type: string }>;
  };

  const paths = (treePayload.tree ?? [])
    .filter((entry) => entry.type === "blob")
    .map((entry) => entry.path)
    .filter((path) => isMarkdown(path) && isAllowedPath(path));

  const docs = await Promise.all(
    paths.map(async (path) => {
      const content = await fetchMarkdownContent(path, branch);
      return normalizeDocument(path, content);
    }),
  );

  docs.sort((a, b) => a.path.localeCompare(b.path));

  docsCache = {
    value: docs,
    expiresAt: Date.now() + READ_TTL_MS,
  };

  return docs;
}

function applyScope(documents: DocumentRecord[], scope: Scope): DocumentRecord[] {
  if (scope === "all") {
    return documents;
  }

  return documents.filter((document) => document.scope === scope);
}

function applyPrefix(documents: DocumentRecord[], prefix?: string): DocumentRecord[] {
  if (!prefix) {
    return documents;
  }

  const normalizedPrefix = prefix.replace(/^\/+/, "");
  return documents.filter((document) => document.path.startsWith(normalizedPrefix));
}

function clampLimit(limit?: number): number {
  if (!limit || Number.isNaN(limit)) {
    return DEFAULT_LIMIT;
  }

  return Math.max(1, Math.min(MAX_LIMIT, Math.floor(limit)));
}

export async function listDocuments(params: {
  scope?: Scope;
  prefix?: string;
  limit?: number;
}): Promise<DocumentMetadata[]> {
  const scope = params.scope ?? "all";
  const limit = clampLimit(params.limit);
  const docs = await loadAllDocumentsWithBody();

  return applyPrefix(applyScope(docs, scope), params.prefix)
    .slice(0, limit)
    .map(toMetadata);
}

export async function getDocument(path: string): Promise<DocumentRecord> {
  const normalizedPath = ensureAllowedPath(path);
  const docs = await loadAllDocumentsWithBody();
  const match = docs.find((document) => document.path === normalizedPath);

  if (!match) {
    throw new GitHubError("Document not found", 404);
  }

  return match;
}

export async function searchDocuments(params: {
  query: string;
  scope?: Scope;
  limit?: number;
}): Promise<DocumentMetadata[]> {
  const query = params.query.trim().toLowerCase();

  if (!query) {
    return [];
  }

  const limit = clampLimit(params.limit);
  const docs = applyScope(await loadAllDocumentsWithBody(), params.scope ?? "all");

  const scored = docs
    .map((document) => {
      const titleMatch = document.title.toLowerCase().includes(query);
      const summaryMatch = (document.summary ?? "").toLowerCase().includes(query);
      const pathMatch = document.path.toLowerCase().includes(query);
      const bodyMatch = document.body.toLowerCase().includes(query);

      const score =
        (titleMatch ? 300 : 0) +
        (summaryMatch ? 200 : 0) +
        (pathMatch ? 150 : 0) +
        (bodyMatch ? 50 : 0);

      if (!score) {
        return null;
      }

      const excerpt = summaryMatch ? (document.summary ?? "") : createExcerpt(document.body, query);

      return {
        ...document,
        excerpt,
        score,
      };
    })
    .filter((entry): entry is DocumentRecord & { score: number } => Boolean(entry))
    .sort((a, b) => b.score - a.score || a.path.localeCompare(b.path))
    .slice(0, limit)
    .map((entry) => toMetadata(entry));

  return scored;
}

function normalizeDate(value?: string): string {
  if (!value) {
    return new Date().toISOString().slice(0, 10);
  }

  if (!ISO_DATE_PATTERN.test(value)) {
    throw new GitHubError("date must use YYYY-MM-DD format", 400);
  }

  return value;
}

function slugify(value: string): string {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return slug || "untitled";
}

function serializeFrontmatter(input: {
  title: string;
  date: string;
  summary: string;
  type: IntakeType;
  body: string;
}): string {
  const frontmatter = [
    "---",
    `title: ${JSON.stringify(input.title)}`,
    `date: ${JSON.stringify(input.date)}`,
    `summary: ${JSON.stringify(input.summary)}`,
    `type: ${JSON.stringify(input.type)}`,
    `status: ${JSON.stringify("draft")}`,
    "---",
  ].join("\n");

  return `${frontmatter}\n\n${input.body}`;
}

async function fileExists(path: string, branch: string): Promise<boolean> {
  const { owner, repo, token } = getRepoConfig();

  const response = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeContentPath(path)}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    return false;
  }

  if (!response.ok) {
    const text = await response.text();
    throw new GitHubError(text || "Failed to check existing file", response.status);
  }

  return true;
}

async function resolveUniqueInboxPath(baseSlug: string, branch: string): Promise<string> {
  // V1 collision handling is intentionally sequential and simple: slug, slug-2, slug-3...
  let index = 1;

  while (index <= MAX_COLLISION_ATTEMPTS) {
    const suffix = index === 1 ? "" : `-${index}`;
    const path = `inbox/writings/${baseSlug}${suffix}.md`;

    if (!(await fileExists(path, branch))) {
      return path;
    }

    index += 1;
  }

  throw new GitHubError("Could not find an available filename after multiple attempts", 409);
}

export async function createIntakeDocument(input: IntakeInput) {
  const title = input.title?.trim();
  const summary = input.summary?.trim();

  if (!title || !summary || !input.body || !input.body.trim()) {
    throw new GitHubError("title, summary, and body are required", 400);
  }

  const date = normalizeDate(input.date?.trim());
  const type = input.type && ALLOWED_TYPES.has(input.type) ? input.type : "fragment";
  const desiredSlug = slugify((input.slug || title).trim());
  const branch = await getDefaultBranch();
  const targetPath = await resolveUniqueInboxPath(desiredSlug, branch);
  const slug = targetPath.split("/").pop()?.replace(/\.md$/i, "") ?? desiredSlug;

  const content = serializeFrontmatter({
    title,
    date,
    summary,
    type,
    body: input.body,
  });

  const { owner, repo } = getRepoConfig();

  await githubRequest(`/repos/${owner}/${repo}/contents/${encodeContentPath(targetPath)}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `intake: add ${slug} to inbox`,
      content: Buffer.from(content, "utf8").toString("base64"),
      branch,
    }),
  });

  docsCache = null;

  return {
    path: targetPath,
    slug,
    date,
    type,
    status: "draft" as const,
  };
}

export function toErrorResponse(error: unknown): { status: number; error: string } {
  if (error instanceof GitHubError) {
    return {
      status: error.status,
      error: error.message,
    };
  }

  return {
    status: 500,
    error: error instanceof Error ? error.message : "Unexpected server error",
  };
}
