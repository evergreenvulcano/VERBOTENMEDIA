import { requireBearer, unauthorizedBearer } from "@/lib/auth";
import { createIntakeDocument, toErrorResponse } from "@/lib/github-content";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!requireBearer(request)) {
    return unauthorizedBearer();
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const result = await createIntakeDocument(payload as {
      title: string;
      summary: string;
      body: string;
      date?: string;
      type?: "essay" | "criticism" | "literary" | "fragment" | "analysis";
      slug?: string;
    });

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    const mapped = toErrorResponse(error);
    return NextResponse.json({ error: mapped.error }, { status: mapped.status });
  }
}
