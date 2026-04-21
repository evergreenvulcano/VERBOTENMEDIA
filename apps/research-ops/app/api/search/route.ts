import { requireBearer, unauthorizedBearer } from "@/lib/auth";
import { searchDocuments, toErrorResponse } from "@/lib/github-content";
import { SCOPES, Scope } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (!requireBearer(request)) {
    return unauthorizedBearer();
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const scopeParam = searchParams.get("scope");

  if (scopeParam && !SCOPES.includes(scopeParam as Scope)) {
    return NextResponse.json({ error: "Invalid scope" }, { status: 400 });
  }

  const limit = Number(searchParams.get("limit") ?? "20");

  try {
    const results = await searchDocuments({
      query,
      scope: (scopeParam as Scope | null) ?? undefined,
      limit,
    });

    return NextResponse.json({ results });
  } catch (error) {
    const mapped = toErrorResponse(error);
    return NextResponse.json({ error: mapped.error }, { status: mapped.status });
  }
}
