"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { FadeIn } from "@/components/animations/fade-in"
import { FloatingShape } from "@/components/decorative/floating-shape"
import { GridPattern } from "@/components/decorative/shapes"
import { Github, Star } from "lucide-react"
import Link from "next/link"
import { fetchGitHubStats, fetchGitHubRepos, fetchGitHubUser } from "@/lib/github-api"

interface GitHubStatsData {
  totalRepos: number
  totalStars: number
  totalCommits: number
  topLanguages: { [key: string]: number }
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  updated_at: string
  topics: string[]
}

interface GitHubUser {
  login: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  avatar_url: string
  html_url: string
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadGitHubData() {
      try {
        setLoading(true)
        const [statsData, reposData, userData] = await Promise.all([
          fetchGitHubStats(),
          fetchGitHubRepos(),
          fetchGitHubUser(),
        ])

        setStats(statsData)
        setRepos(reposData.slice(0, 6)) // Show top 6 repos
        setUser(userData)
      } catch (err) {
        setError("Failed to load GitHub data")
        console.error("GitHub API Error:", err)
      } finally {
        setLoading(false)
      }
    }

    loadGitHubData()
  }, [])

  if (loading) {
    return (
      <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            GitHub Activity
          </CardTitle>
          <CardDescription>Loading GitHub data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error || !stats || !user) {
    return (
      <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            GitHub Activity
          </CardTitle>
          <CardDescription>Unable to load GitHub data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-slate-600 mb-4">Could not fetch GitHub statistics</p>
            <Button asChild>
              <Link href="https://github.com/YAGavrilov19" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const topLanguages = Object.entries(stats.topLanguages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
          GitHub Activity
        </CardTitle>
        <CardDescription>Real-time data from my GitHub profile</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Stats Overview */}
          <StaggerContainer className="grid grid-cols-3 gap-4 p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <FloatingShape className="inset-0 text-blue-500" speed={0.25} direction="right">
                <GridPattern className="w-full h-full opacity-10" />
              </FloatingShape>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Repositories</h4>
              <p className="text-2xl font-bold text-blue-600">{stats.totalRepos}</p>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Total Stars</h4>
              <p className="text-2xl font-bold text-green-600">{stats.totalStars}</p>
            </div>
            <div className="text-center relative z-10">
              <h4 className="font-semibold text-slate-900">Est. Commits (2024)</h4>
              <p className="text-2xl font-bold text-purple-600">{stats.totalCommits}</p>
            </div>
          </StaggerContainer>

          {/* Top Languages */}
          <FadeIn delay={200}>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Top Languages</h4>
              <div className="flex flex-wrap gap-2">
                {topLanguages.map(([language, count]) => (
                  <Badge key={language} variant="secondary" className="hover:scale-105 transition-transform">
                    {language} ({count})
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Featured Repositories */}
          <FadeIn delay={300}>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Featured Repositories</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="border rounded-lg p-3 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                        {repo.name}
                      </h5>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Star className="w-3 h-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {repo.language && (
                          <Badge variant="outline" className="text-xs">
                            {repo.language}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                        <Link href={repo.html_url} target="_blank">
                          <Github className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Profile Link */}
          <div className="text-center">
            <Button asChild className="hover:scale-105 transition-transform">
              <Link href={user.html_url} target="_blank">
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
