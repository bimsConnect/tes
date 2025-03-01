"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, ChevronRight, FileText } from "lucide-react"

interface MonthlyArchive {
  month: string
  year: number
  count: number
  slug: string
}

export function MonthlyArchives() {
  const [archives, setArchives] = useState<MonthlyArchive[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchArchives = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/admin/archives')
        // const data = await response.json()

        // Simulated data
        setTimeout(() => {
          setArchives([
            { month: "March", year: 2023, count: 12, slug: "2023-03" },
            { month: "February", year: 2023, count: 8, slug: "2023-02" },
            { month: "January", year: 2023, count: 10, slug: "2023-01" },
            { month: "December", year: 2022, count: 15, slug: "2022-12" },
            { month: "November", year: 2022, count: 9, slug: "2022-11" },
            { month: "October", year: 2022, count: 11, slug: "2022-10" },
          ])
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to fetch archives:", error)
        setIsLoading(false)
      }
    }

    fetchArchives()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 bg-muted animate-pulse rounded"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {archives.map((archive) => (
        <Link
          key={archive.slug}
          href={`/admin/posts/archives/${archive.slug}`}
          className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
        >
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {archive.month} {archive.year}
            </span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <FileText className="h-4 w-4 mr-1" />
            <span>{archive.count}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
      ))}
    </div>
  )
}

