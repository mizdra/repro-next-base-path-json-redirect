import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname === '/base' ||
    req.nextUrl.pathname.startsWith('/base/')
  ) {
    const newUrl = new URL(req.nextUrl.pathname.replace('/base', ''), req.nextUrl.origin);
    return NextResponse.rewrite(newUrl);
  } else {
    return NextResponse.next();
  }
}
