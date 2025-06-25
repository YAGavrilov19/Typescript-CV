"use client"

import { useEffect, useState, useRef } from "react"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function useParallax({ speed = 0.2, direction = "up", reverse = false }: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const elementTop = elementRef.current.getBoundingClientRect().top
      const elementHeight = elementRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the viewport center
      const distanceFromCenter = elementTop - windowHeight / 2 + elementHeight / 2

      // Calculate the parallax offset based on the distance from center
      const parallaxOffset = distanceFromCenter * speed * (reverse ? -1 : 1)

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, reverse])

  const getTransform = () => {
    switch (direction) {
      case "up":
      case "down":
        return `translateY(${direction === "down" ? offset : -offset}px)`
      case "left":
      case "right":
        return `translateX(${direction === "right" ? offset : -offset}px)`
      default:
        return `translateY(${-offset}px)`
    }
  }

  return { ref: elementRef, style: { transform: getTransform() } }
}
