"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

interface DashboardChartProps {
  type: "visitors" | "pageviews" | "engagement"
}

export function DashboardChart({ type }: DashboardChartProps) {
  const [chartData, setChartData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Generate last 30 days as labels
    const generateLabels = () => {
      const labels = []
      const today = new Date()
      for (let i = 29; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)
        labels.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }))
      }
      return labels
    }

    // Generate random data based on chart type
    const generateData = () => {
      const baseData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500)

      if (type === "visitors") {
        return baseData.map((value) => value * 0.8)
      } else if (type === "pageviews") {
        return baseData.map((value) => value * 2.5)
      } else {
        // Engagement (average time in minutes)
        return baseData.map(() => Math.floor(Math.random() * 10) + 1)
      }
    }

    const labels = generateLabels()
    const data = generateData()

    // Set chart configuration
    setChartData({
      labels,
      datasets: [
        {
          label: type === "visitors" ? "Unique Visitors" : type === "pageviews" ? "Page Views" : "Avg. Time (minutes)",
          data,
          borderColor: "hsl(var(--primary))",
          backgroundColor: "hsla(var(--primary), 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 2,
          pointHoverRadius: 5,
        },
      ],
    })

    setIsLoading(false)
  }, [type])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "hsla(var(--border), 0.5)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  }

  if (isLoading) {
    return <div className="h-80 w-full bg-muted animate-pulse rounded"></div>
  }

  return <div className="h-80 w-full">{chartData && <Line data={chartData} options={options} />}</div>
}

