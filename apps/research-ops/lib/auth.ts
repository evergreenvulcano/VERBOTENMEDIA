import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

function secureEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  if (left.length !== right.length) {
    return false;
  }

  return timingSafeEqual(left, right);
}

export function unauthorizedBearer() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function requireBearer(request: Request): boolean {
  const expected = process.env.OPS_API_TOKEN;
  const header = request.headers.get("authorization") ?? "";

  if (!expected || !header.startsWith("Bearer ")) {
    return false;
  }

  const provided = header.slice("Bearer ".length).trim();
  return secureEqual(provided, expected);
}

export function requireBasicAuthForUi(request: NextRequest): NextResponse | null {
  const username = process.env.OPS_USERNAME;
  const password = process.env.OPS_PASSWORD;

  if (!username || !password) {
    return NextResponse.json({ error: "Missing OPS_USERNAME/OPS_PASSWORD" }, { status: 500 });
  }

  const header = request.headers.get("authorization") ?? "";

  if (!header.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Research Ops"' },
    });
  }

  let decoded = "";

  try {
    decoded = atob(header.slice("Basic ".length));
  } catch {
    return new NextResponse("Invalid authentication", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Research Ops"' },
    });
  }

  const separator = decoded.indexOf(":");

  if (separator < 0) {
    return new NextResponse("Invalid authentication", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Research Ops"' },
    });
  }

  const providedUser = decoded.slice(0, separator);
  const providedPass = decoded.slice(separator + 1);

  if (!secureEqual(providedUser, username) || !secureEqual(providedPass, password)) {
    return new NextResponse("Invalid credentials", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Research Ops"' },
    });
  }

  return null;
}
