import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { FadeIn } from "@/components/animations/fade-in"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  type: "Frontend" | "Backend" | "Full Stack" | "DevOps" | "Mobile" | "Other"
  responsibilities: string[]
  technologies: string[]
  delay?: number
}

const typeColors = {
  Frontend: "bg-gradient-to-r from-orange-500 to-red-600",
  Backend: "bg-gradient-to-r from-indigo-500 to-blue-600",
  "Full Stack": "bg-gradient-to-r from-green-500 to-teal-600",
  DevOps: "bg-gradient-to-r from-purple-500 to-pink-600",
  Mobile: "bg-gradient-to-r from-cyan-500 to-blue-500",
  Other: "bg-gradient-to-r from-slate-500 to-gray-600",
}

export function ExperienceCard({
  title,
  company,
  period,
  type,
  responsibilities,
  technologies,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <Badge variant="default" className={`${typeColors[type]} text-white`}>
                {type}
              </Badge>
            </div>
            <p className="text-slate-600">{company}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500 ml-4">
            <CalendarDays className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>
        <StaggerContainer>
          <ul className="text-slate-600 space-y-1 ml-4">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>• {responsibility}</li>
            ))}
          </ul>
        </StaggerContainer>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs hover:bg-slate-100 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
