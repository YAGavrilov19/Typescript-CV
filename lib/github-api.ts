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

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  updated_at: string
  topics: string[]
  fork: boolean
}

interface GitHubContribution {
  total: number
  weeks: Array<{
    w: number
    a: number
    d: number
    c: number
  }>
}

const GITHUB_USERNAME = "YAGavrilov19" // Your GitHub username

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
    if (!response.ok) throw new Error("Failed to fetch user data")
    return await response.json()
  } catch (error) {
    console.error("Error fetching GitHub user:", error)
    return null
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
    if (!response.ok) throw new Error("Failed to fetch repositories")
    const repos = await response.json()

    // For each repo, if language is null, try to fetch languages breakdown
    const reposWithLanguages = await Promise.all(
      repos.map(async (repo: GitHubRepo) => {
        if (!repo.language) {
          try {
            // Fetch languages for this specific repo
            const langResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`)
            if (langResponse.ok) {
              const languages = await langResponse.json()
              // Get the language with the highest byte count
              const topLanguage = Object.entries(languages).sort(([, a], [, b]) => (b as number) - (a as number))[0]
              if (topLanguage) {
                repo.language = topLanguage[0]
              }
            }
          } catch (error) {
            console.warn(`Could not fetch languages for ${repo.name}:`, error)
          }
        }
        return repo
      }),
    )

    // Filter out forks and sort by stars
    return reposWithLanguages
      .filter((repo: GitHubRepo) => !repo.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}

export async function fetchGitHubStats(): Promise<{
  totalRepos: number
  totalStars: number
  totalCommits: number
  topLanguages: { [key: string]: number }
} | null> {
  try {
    const repos = await fetchGitHubRepos()
    const user = await fetchGitHubUser()

    if (!repos || !user) return null

    const totalRepos = user.public_repos
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

    // Calculate language statistics
    const languageStats: { [key: string]: number } = {}
    repos.forEach((repo) => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1
      }
    })

    // Get current year contributions (approximate)
    const currentYear = new Date().getFullYear()
    const startOfYear = new Date(currentYear, 0, 1)
    const daysSinceStart = Math.floor((Date.now() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
    const estimatedCommits = Math.floor(daysSinceStart * 2.5) // Rough estimate

    return {
      totalRepos,
      totalStars,
      totalCommits: estimatedCommits,
      topLanguages: languageStats,
    }
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return null
  }
}
