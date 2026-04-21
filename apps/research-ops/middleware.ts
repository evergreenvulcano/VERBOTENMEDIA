import { NextRequest, NextResponse } from "next/server";
import { requireBasicAuthForUi } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/health") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  return requireBasicAuthForUi(request) ?? NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
