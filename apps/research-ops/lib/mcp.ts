import { getDocument, listDocuments, searchDocuments } from "@/lib/github-content";
import { Scope } from "@/lib/types";

export type McpRequest = {
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
};

export async function handleMcpRequest(request: McpRequest) {
  if (request.method === "tools/list") {
    return {
      tools: [
        {
          name: "list_documents",
          description: "List document metadata from allowed repository scopes.",
          inputSchema: {
            type: "object",
            properties: {
              scope: { type: "string" },
              prefix: { type: "string" },
              limit: { type: "number" },
            },
          },
        },
        {
          name: "get_document",
          description: "Get one normalized document including full body by allowed repository path.",
          inputSchema: {
            type: "object",
            properties: {
              path: { type: "string" },
            },
            required: ["path"],
          },
        },
        {
          name: "search_documents",
          description: "Plain text search over allowed documents with ranking and excerpts.",
          inputSchema: {
            type: "object",
            properties: {
              query: { type: "string" },
              scope: { type: "string" },
              limit: { type: "number" },
            },
            required: ["query"],
          },
        },
      ],
    };
  }

  if (request.method === "tools/call") {
    const name = String(request.params?.name ?? "");
    const args = (request.params?.arguments ?? {}) as Record<string, unknown>;

    if (name === "list_documents") {
      const result = await listDocuments({
        scope: (args.scope as Scope | undefined) ?? "all",
        prefix: args.prefix as string | undefined,
        limit: Number(args.limit ?? 20),
      });

      return { result };
    }

    if (name === "get_document") {
      const path = String(args.path ?? "");
      const result = await getDocument(path);
      return { result };
    }

    if (name === "search_documents") {
      const query = String(args.query ?? "");
      const result = await searchDocuments({
        query,
        scope: args.scope as Scope | undefined,
        limit: Number(args.limit ?? 20),
      });

      return { result };
    }

    throw new Error(`Unknown MCP tool: ${name}`);
  }

  throw new Error(`Unsupported MCP method: ${request.method}`);
}
