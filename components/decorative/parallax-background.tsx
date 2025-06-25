"use client"

import type React from "react"

import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps {
  className?: string
  speed?: number
  children?: React.ReactNode
}

export function ParallaxBackground({ className, speed = 0.1, children }: ParallaxBackgroundProps) {
  const parallax = useParallax({ speed, direction: "up", reverse: true })

  return (
    <div className="relative overflow-hidden">
      <div ref={parallax.ref} className={cn("absolute inset-0 w-full h-full -z-10", className)} style={parallax.style}>
        {children}
      </div>
    </div>
  )
}
