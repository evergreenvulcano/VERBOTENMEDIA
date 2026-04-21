import { requireBearer, unauthorizedBearer } from "@/lib/auth";
import { handleMcpRequest, McpRequest } from "@/lib/mcp";
import { toErrorResponse } from "@/lib/github-content";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!requireBearer(request)) {
    return unauthorizedBearer();
  }

  let payload: McpRequest;

  try {
    payload = (await request.json()) as McpRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const result = await handleMcpRequest(payload);
    return NextResponse.json({ jsonrpc: "2.0", id: payload.id ?? null, result });
  } catch (error) {
    const mapped = toErrorResponse(error);
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        id: payload.id ?? null,
        error: {
          code: mapped.status,
          message: mapped.error,
        },
      },
      { status: mapped.status },
    );
  }
}
