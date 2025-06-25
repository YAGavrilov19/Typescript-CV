"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface SlideInCardProps {
  children: ReactNode
  delay?: number
  direction?: "left" | "right"
  className?: string
}

export function SlideInCard({ children, delay = 0, direction = "left", className = "" }: SlideInCardProps) {
  const ref = useScrollAnimation()

  const transformClass = direction === "left" ? "-translate-x-full" : "translate-x-full"

  return (
    <div
      ref={ref}
      className={`opacity-0 ${transformClass} transition-all duration-800 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
