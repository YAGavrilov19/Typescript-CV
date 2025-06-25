"use client"

import type React from "react"

import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface FloatingShapeProps {
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
  children?: React.ReactNode
}

export function FloatingShape({
  className,
  speed = 0.2,
  direction = "up",
  reverse = false,
  children,
}: FloatingShapeProps) {
  const parallax = useParallax({ speed, direction, reverse })

  return (
    <div ref={parallax.ref} className={cn("absolute pointer-events-none z-0", className)} style={parallax.style}>
      {children}
    </div>
  )
}
