"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = "" }: StaggerContainerProps) {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className={`stagger-container ${className}`}>
      {children}
    </div>
  )
}
