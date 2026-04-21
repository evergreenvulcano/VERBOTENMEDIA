import { requireBearer, unauthorizedBearer } from "@/lib/auth";
import { listDocuments, toErrorResponse } from "@/lib/github-content";
import { SCOPES, Scope } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (!requireBearer(request)) {
    return unauthorizedBearer();
  }

  const { searchParams } = new URL(request.url);
  const scopeParam = (searchParams.get("scope") ?? "all") as Scope;

  if (!SCOPES.includes(scopeParam)) {
    return NextResponse.json({ error: "Invalid scope" }, { status: 400 });
  }

  const prefix = searchParams.get("prefix") ?? undefined;
  const limit = Number(searchParams.get("limit") ?? "20");

  try {
    const documents = await listDocuments({ scope: scopeParam, prefix, limit });
    return NextResponse.json({ documents });
  } catch (error) {
    const mapped = toErrorResponse(error);
    return NextResponse.json({ error: mapped.error }, { status: mapped.status });
  }
}
