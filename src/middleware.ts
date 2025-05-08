import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // 미들웨어는 서버 상태라 로컬스토리지에 접근 불가
  const token = req.cookies.get("sb-access-token")?.value;
  console.log(token);
  const { pathname } = req.nextUrl;

  const protectedPaths = ['/my-page', '/write'];
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));
  if (isProtectedPath && !token) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const publicOnlyPaths = ['/login', '/signup', '/find'];
  const isPublicOnlyPath = publicOnlyPaths.some((path) => pathname.startsWith(path));
  if (isPublicOnlyPath && token) {
    return NextResponse.redirect(new URL('/my-page', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-page/:path*', '/write/:path*', '/login', '/signup', '/find/:path*'],
};