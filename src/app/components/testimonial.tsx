"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  company: string
  image: string
}

export function Testimonial({ quote, name, company, image }: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-lg p-6 shadow-md border border-border"
    >
      <Quote className="h-8 w-8 text-primary/40 mb-4" />
      <p className="text-muted-foreground mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

