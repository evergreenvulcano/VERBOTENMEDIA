import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Research Ops"' },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/health") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const username = process.env.OPS_USERNAME;
  const password = process.env.OPS_PASSWORD;

  if (!username || !password) {
    return NextResponse.json({ error: "Missing OPS_USERNAME/OPS_PASSWORD" }, { status: 500 });
  }

  const header = request.headers.get("authorization") ?? "";

  if (!header.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  let decoded = "";

  try {
    decoded = atob(header.slice("Basic ".length));
  } catch {
    return unauthorizedResponse();
  }

  const separator = decoded.indexOf(":");
  if (separator < 0) {
    return unauthorizedResponse();
  }

  const providedUser = decoded.slice(0, separator);
  const providedPass = decoded.slice(separator + 1);

  if (providedUser !== username || providedPass !== password) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
