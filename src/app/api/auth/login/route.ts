import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // In a real application, you would validate credentials against a database
    // This is a simplified example for demonstration purposes
    if (email === "admin@example.com" && password === "password") {
      // Set a secure HTTP-only cookie
      cookies().set({
        name: "auth_token",
        value: "example_token_value",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 })
  }
}

