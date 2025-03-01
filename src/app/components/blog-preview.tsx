import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "./ui/badge"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
}

export function BlogPreview({ title, excerpt, date, author, category, image, slug }: BlogPreviewProps) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg mb-4">
        <Link href={`/blog/${slug}`}>
          <div className="relative aspect-[16/9]">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>
      <Badge variant="secondary" className="mb-3">
        {category}
      </Badge>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-muted-foreground mb-3">{excerpt}</p>
      <div className="flex items-center text-sm text-muted-foreground">
        <Calendar className="h-4 w-4 mr-2" />
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>By {author}</span>
      </div>
    </div>
  )
}

