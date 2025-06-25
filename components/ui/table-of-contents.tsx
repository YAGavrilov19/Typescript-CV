"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface Section {
  id: string
  label: string
}

interface TableOfContentsProps {
  sections: Section[]
  className?: string
}

export function TableOfContents({ sections, className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px 0px 0% 0px",
      threshold: 0,
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

  return (
    <div className={cn("hidden lg:block sticky top-32 self-start", className)}>
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border">
        <h3 className="text-sm font-semibold mb-3 text-slate-900">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={cn(
                    "text-sm block py-1 px-2 rounded transition-colors",
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
