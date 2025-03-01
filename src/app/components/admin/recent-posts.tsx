"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, Edit, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"

interface Post {
  id: string
  title: string
  status: "published" | "draft"
  category: string
  date: string
  views: number
}

export function RecentPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/admin/posts/recent')
        // const data = await response.json()

        // Simulated data
        setTimeout(() => {
          setPosts([
            {
              id: "1",
              title: "5 Trends Shaping the Future of Construction",
              status: "published",
              category: "Industry Trends",
              date: "2023-03-15",
              views: 1245,
            },
            {
              id: "2",
              title: "Sustainable Building Materials for Eco-Friendly Construction",
              status: "published",
              category: "Sustainability",
              date: "2023-02-28",
              views: 987,
            },
            {
              id: "3",
              title: "How to Choose the Right Contractor for Your Project",
              status: "published",
              category: "Tips & Advice",
              date: "2023-01-20",
              views: 756,
            },
            {
              id: "4",
              title: "The Impact of Technology on Modern Construction",
              status: "draft",
              category: "Technology",
              date: "2023-03-10",
              views: 0,
            },
            {
              id: "5",
              title: "Safety Protocols Every Construction Site Should Follow",
              status: "published",
              category: "Safety",
              date: "2023-02-15",
              views: 543,
            },
          ])
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to fetch posts:", error)
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleDelete = (id: string) => {
    // In a real app, this would call an API
    // await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })

    // Update local state
    setPosts(posts.filter((post) => post.id !== id))
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-muted animate-pulse rounded"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Views</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>
                <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
              </TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
              <TableCell>{post.views.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/blog/${post.id}`}>
                        <Eye className="mr-2 h-4 w-4" /> View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/posts/edit/${post.id}`}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

