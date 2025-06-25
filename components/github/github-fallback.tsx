import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { FloatingShape } from "@/components/decorative/floating-shape"
import { GridPattern } from "@/components/decorative/shapes"
import { Github } from "lucide-react"
import Link from "next/link"

export function GitHubFallback() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
          GitHub Activity
        </CardTitle>
        <CardDescription>My development activity and contributions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <StaggerContainer className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <FloatingShape className="inset-0 text-blue-500" speed={0.25} direction="right">
                <GridPattern className="w-full h-full opacity-10" />
              </FloatingShape>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Active Repositories</h4>
              <p className="text-2xl font-bold text-blue-600">15+</p>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Languages Used</h4>
              <p className="text-2xl font-bold text-green-600">8+</p>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Years Active</h4>
              <p className="text-2xl font-bold text-purple-600">6+</p>
            </div>
          </StaggerContainer>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Primary Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Node.js", "Python", "C#", "SQL"].map((tech) => (
                <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="hover:scale-105 transition-transform">
              <Link href="https://github.com/YAGavrilov19" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View Full GitHub Profile
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
