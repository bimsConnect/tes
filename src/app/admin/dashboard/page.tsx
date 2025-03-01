"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, Users, Eye, RefreshCw, TrendingUp, TrendingDown, Plus } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { AdminLayout } from "../../components/admin/layout"
import { DashboardChart } from "../../components/admin/dashboard-chart"
import { RecentPosts } from "../../components/admin/recent-posts"
import { MonthlyArchives } from "../../components/admin/monthly-archives"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    articles: 0,
    visitors: 0,
    pageViews: 0,
    updates: 0,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching data from API
    const fetchStats = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/admin/stats')
        // const data = await response.json()

        // Simulated data
        setTimeout(() => {
          setStats({
            articles: 120,
            visitors: 25432,
            pageViews: 75891,
            updates: 52,
          })
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to fetch stats:", error)
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <a href="/admin/posts/new">
            <Plus className="mr-2 h-4 w-4" /> New Post
          </a>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Articles"
          value={stats.articles}
          description="Published articles"
          icon={<FileText className="h-8 w-8" />}
          trend={{ value: 12, isPositive: true }}
          isLoading={isLoading}
        />
        <StatsCard
          title="Monthly Visitors"
          value={stats.visitors}
          description="Unique visitors"
          icon={<Users className="h-8 w-8" />}
          trend={{ value: 8.5, isPositive: true }}
          isLoading={isLoading}
        />
        <StatsCard
          title="Page Views"
          value={stats.pageViews}
          description="Total page views"
          icon={<Eye className="h-8 w-8" />}
          trend={{ value: 5.2, isPositive: true }}
          isLoading={isLoading}
        />
        <StatsCard
          title="Content Updates"
          value={stats.updates}
          description="This year"
          icon={<RefreshCw className="h-8 w-8" />}
          trend={{ value: 2.1, isPositive: false }}
          isLoading={isLoading}
        />
      </div>

      {/* Analytics Chart */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Website Analytics</CardTitle>
          <CardDescription>Visitor and page view statistics for the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visitors">
            <TabsList className="mb-4">
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="pageviews">Page Views</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="visitors">
              <DashboardChart type="visitors" />
            </TabsContent>
            <TabsContent value="pageviews">
              <DashboardChart type="pageviews" />
            </TabsContent>
            <TabsContent value="engagement">
              <DashboardChart type="engagement" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Content Management */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Latest blog posts and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentPosts />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Archives</CardTitle>
              <CardDescription>Content organized by month</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyArchives />
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}

interface StatsCardProps {
  title: string
  value: number
  description: string
  icon: React.ReactNode
  trend: {
    value: number
    isPositive: boolean
  }
  isLoading: boolean
}

function StatsCard({ title, value, description, icon, trend, isLoading }: StatsCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-2 bg-primary/10 text-primary">{icon}</div>
            {!isLoading && (
              <div className={`flex items-center text-sm ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
                {trend.isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                <span>{trend.value}%</span>
              </div>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
            {isLoading ? (
              <div className="h-8 w-24 bg-muted animate-pulse rounded mt-1"></div>
            ) : (
              <div className="text-3xl font-bold mt-1">{value.toLocaleString()}</div>
            )}
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

