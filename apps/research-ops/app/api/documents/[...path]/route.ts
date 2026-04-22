import { requireBearer, unauthorizedBearer } from "@/lib/auth";
import { getDocument, toErrorResponse } from "@/lib/github-content";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{ path: string[] }>;
};

export async function GET(request: Request, { params }: Params) {
  if (!requireBearer(request)) {
    return unauthorizedBearer();
  }

  const resolved = await params;
  const path = resolved.path.join("/");

  try {
    const document = await getDocument(path);
    return NextResponse.json({ document });
  } catch (error) {
    const mapped = toErrorResponse(error);
    return NextResponse.json({ error: mapped.error }, { status: mapped.status });
  }
}
