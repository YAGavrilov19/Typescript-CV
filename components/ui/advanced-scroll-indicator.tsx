"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface Section {
  id: string
  label: string
}

interface AdvancedScrollIndicatorProps {
  className?: string
  sections?: Section[]
  showLabels?: boolean
}

export function AdvancedScrollIndicator({ className, sections = [], showLabels = true }: AdvancedScrollIndicatorProps) {
  const progress = useScrollProgress()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!mounted) return null

  return (
    <div className={cn("fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2", className)}>
      {/* Main progress bar - now vertical */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-1 h-64">
        
      </div>

      {/* Section indicators */}
      {sections.length > 0 && (
        <div className="hidden md:flex flex-col gap-3 items-start h-64 justify-start ml-6 space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex gap-3 items-center"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeSection === section.id
                    ? "w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-slate-300 group-hover:bg-slate-400",
                )}
              />
              {showLabels && (
                <span
                  className={cn(
                    "text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                    activeSection === section.id ? "opacity-100 text-slate-800" : "text-slate-500",
                  )}
                >
                  {section.label}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
