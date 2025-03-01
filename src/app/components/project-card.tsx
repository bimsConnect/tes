"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] w-full relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="text-sm font-medium text-primary mb-2">{category}</div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-white hover:text-primary transition-colors"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

