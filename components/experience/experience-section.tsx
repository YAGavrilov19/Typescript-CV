import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ExperienceCard } from "./experience-card"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  // Count experiences by type for summary
  const typeCounts = experiences.reduce(
    (acc, exp) => {
      acc[exp.type] = (acc[exp.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
          Work Experience
        </CardTitle>

        {/* Experience Type Summary */}
        <div className="flex flex-wrap gap-2 mt-3">
          {Object.entries(typeCounts).map(([type, count]) => (
            <Badge key={type} variant="secondary" className="text-xs">
              {count} {type} Role{count > 1 ? "s" : ""}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={experience.id}>
            <ExperienceCard
              title={experience.title}
              company={experience.company}
              period={experience.period}
              type={experience.type}
              responsibilities={experience.responsibilities}
              technologies={experience.technologies}
              delay={200 * (index + 1)}
            />
            {index < experiences.length - 1 && <Separator className="my-6" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
