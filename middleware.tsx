import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // return NextResponse.next();
  const res = NextResponse.rewrite(request.nextUrl)
  return res;
}
