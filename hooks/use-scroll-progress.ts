"use client"

import { useState, useEffect } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      // Get the total scrollable height (total document height minus viewport height)
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

      // Calculate current scroll position as a percentage
      const scrolled = Math.max(0, Math.min(100, (window.scrollY / scrollableHeight) * 100))

      setProgress(scrolled)
    }

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress, { passive: true })

    // Initial calculation
    updateScrollProgress()

    // Clean up event listener
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return progress
}
