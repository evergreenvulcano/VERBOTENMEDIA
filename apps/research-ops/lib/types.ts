export const SCOPES = ["published", "sandbox", "inbox", "modules", "all"] as const;

export type Scope = (typeof SCOPES)[number];

export type ContentScope = Exclude<Scope, "all">;

export type DocumentRecord = {
  path: string;
  scope: ContentScope;
  title: string;
  date?: string;
  summary?: string;
  type?: string;
  status?: string;
  author?: string;
  body: string;
  excerpt: string;
};

export type DocumentMetadata = Omit<DocumentRecord, "body">;

export type IntakeType = "essay" | "criticism" | "literary" | "fragment" | "analysis";

export type IntakeInput = {
  title: string;
  summary: string;
  body: string;
  date?: string;
  type?: IntakeType;
  slug?: string;
};
