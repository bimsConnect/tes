"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-lg p-6 shadow-md border border-border hover:border-primary transition-colors"
    >
      <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10">
        <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link
        href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-primary hover:underline"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  )
}

