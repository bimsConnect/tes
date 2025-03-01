import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  // Clear the auth cookie
  cookies().delete("auth_token")

  // Redirect to login page
  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"))
}

