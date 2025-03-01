import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "./components/analystics"
import Header from "./components/header"
import Footer from "./components/ui/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cipta Mandiri Perkasa - General Contractor & Supplier",
  description:
    "Cipta Mandiri Perkasa is a general contractor and supplier company providing high-quality construction services and materials.",
  keywords: "construction, contractor, supplier, building materials, construction services, Indonesia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

