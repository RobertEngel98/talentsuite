import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";

  // non-www → www mit 301 (Permanent Redirect)
  if (host === "talentsuite.io") {
    const url = request.nextUrl.clone();
    url.host = "www.talentsuite.io";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
