"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically initialize your analytics
    // For example, with Google Analytics:
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA-MEASUREMENT-ID', {
    //     page_path: pathname,
    //   })
    // }

    // For this example, we'll just log page views to console
    console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ""}`)

    // Here you would also make an API call to your backend to record the page view
    const recordPageView = async () => {
      try {
        await fetch("/api/analytics/pageview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: pathname,
            referrer: document.referrer || null,
          }),
        })
      } catch (error) {
        console.error("Failed to record page view:", error)
      }
    }

    recordPageView()
  }, [pathname, searchParams])

  return null
}

