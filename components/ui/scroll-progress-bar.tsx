"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ScrollProgressBarProps {
  className?: string
  barClassName?: string
  height?: number
  color?: string
  showPercentage?: boolean
}

export function ScrollProgressBar({
  className,
  barClassName,
  height = 3,
  color = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  showPercentage = false,
}: ScrollProgressBarProps) {
  const progress = useScrollProgress()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div
        className={cn("h-full transition-all duration-150 ease-out", barClassName)}
        style={{
          height: `${height}px`,
          width: `${progress}%`,
          background: color,
        }}
      />
      {showPercentage && (
        <div className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium shadow-sm">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  )
}
