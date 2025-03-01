"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
}

export function StatsCard({ icon, title, value, description }: StatsCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full p-2 bg-primary/10">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-sm text-muted-foreground">{description}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

