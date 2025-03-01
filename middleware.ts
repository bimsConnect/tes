import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /admin
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("auth_token")

    // If there's no token, redirect to login
    if (!token) {
      const url = new URL("/login", request.url)
      url.searchParams.set("from", pathname)
      return NextResponse.redirect(url)
    }

    // In a real application, you would verify the token here
    // For example, by checking it against a JWT secret or validating with your auth service
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

