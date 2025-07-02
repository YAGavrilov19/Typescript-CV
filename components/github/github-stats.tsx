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
    // Fallback data when GitHub API is unavailable
    const fallbackStats = {
      totalRepos: 6,
      totalStars: 17,
      totalCommits: 150,
      topLanguages: { "C#": 1, Python: 2, JavaScript: 1, TypeScript: 1, "C++": 1 },
    }

    const fallbackRepos = [
      {
        id: 1,
        name: "Panopticon-Face-Detection",
        description:
          "Advanced face detection security application built with .NET and OpenCV for real-time monitoring and access control.",
        html_url: "https://github.com/YAGavrilov19/Panopticon-Face-Detection",
        stargazers_count: 3,
        language: "C#",
        topics: ["security", "face-detection", "opencv"],
      },
      {
        id: 2,
        name: "Python-Family-Tree-Explorer",
        description:
          "Object-oriented Python application for exploring family relationships with interactive tree visualization.",
        html_url: "https://github.com/YAGavrilov19/Python-Family-Tree-Explorer",
        stargazers_count: 3,
        language: "Python",
        topics: ["python", "oop", "family-tree"],
      },
      {
        id: 3,
        name: "Python-Optimised-Algorithms",
        description:
          "Performance optimization project reducing algorithm execution time from 60+ seconds to milliseconds.",
        html_url: "https://github.com/YAGavrilov19/Python-Optimised-Algorithms",
        stargazers_count: 4,
        language: "Python",
        topics: ["algorithms", "optimization", "performance"],
      },
      {
        id: 4,
        name: "Scheme-Family-Tree-Explorer",
        description: "Functional programming approach to family tree exploration using Scheme language paradigms.",
        html_url: "https://github.com/YAGavrilov19/Scheme-Family-Tree-Explorer",
        stargazers_count: 3,
        language: "Scheme",
        topics: ["functional-programming", "scheme"],
      },
      {
        id: 5,
        name: "CV-Website",
        description:
          "Modern, responsive portfolio website built with Next.js, featuring smooth animations and GitHub integration.",
        html_url: "https://github.com/YAGavrilov19/cv-website",
        stargazers_count: 4,
        language: "TypeScript",
        topics: ["nextjs", "portfolio", "react"],
      },
    ]

    const fallbackUser = {
      login: "YAGavrilov19",
      name: "Yoan Gavrilov",
      bio: "Full Stack Developer & Computer Science Student",
      public_repos: 25,
      followers: 28,
      following: 15,
      html_url: "https://github.com/YAGavrilov19",
    }

    const topLanguages = Object.entries(fallbackStats.topLanguages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)

    return (
      <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
            GitHub Activity
          </CardTitle>
          <CardDescription>My development activity and contributions (Offline Mode)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Stats Overview */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full">
                <FloatingShape className="inset-0 text-blue-500" speed={0.25} direction="right">
                  <GridPattern className="w-full h-full opacity-10" />
                </FloatingShape>
              </div>
              <div className="text-center relative z-10">
                <h4 className="font-semibold text-slate-900">Repositories</h4>
                <p className="text-2xl font-bold text-blue-600">{fallbackStats.totalRepos}</p>
              </div>
              <div className="text-center relative z-10">
                <h4 className="font-semibold text-slate-900">Total Stars</h4>
                <p className="text-2xl font-bold text-green-600">{fallbackStats.totalStars}</p>
              </div>
              <div className="text-center relative z-10">
                <h4 className="font-semibold text-slate-900">Est. Commits (2024)</h4>
                <p className="text-2xl font-bold text-purple-600">{fallbackStats.totalCommits}</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fallbackRepos.map((repo) => (
                    <div
                      key={repo.id}
                      className="border rounded-lg p-3 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h5 className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors break-words">
                          {repo.name}
                        </h5>
                        <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                          <Star className="w-3 h-3" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mb-2 line-clamp-2">{repo.description}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex items-center gap-2">
                          {repo.language && (
                            <Badge variant="outline" className="text-xs">
                              {repo.language}
                            </Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2 self-start sm:self-auto">
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
                <Link href={fallbackUser.html_url} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View Full GitHub Profile
                </Link>
              </Button>
            </div>

            {/* Offline Notice */}
            <div className="text-center">
              <p className="text-xs text-slate-500 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                📡 GitHub API temporarily unavailable - showing cached data
              </p>
            </div>
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
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
              <h4 className="font-semibold text-slate-900">Total Commits</h4>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="border rounded-lg p-3 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-slate-50 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h5 className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors break-words">
                        {repo.name}
                      </h5>
                      <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                        <Star className="w-3 h-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div className="flex items-center gap-2">
                        {repo.language && (
                          <Badge variant="outline" className="text-xs">
                            {repo.language}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild className="h-6 px-2 self-start sm:self-auto">
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
