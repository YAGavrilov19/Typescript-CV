import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar"
import { AdvancedScrollIndicator } from "@/components/ui/advanced-scroll-indicator"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideInCard } from "@/components/animations/slide-in-card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { FloatingShape } from "@/components/decorative/floating-shape"
import { ParallaxBackground } from "@/components/decorative/parallax-background"
import {
  Blob,
  Circle,
  DotsPattern,
  GridPattern,
  Triangle,
  DiagonalLines,
  Hexagons,
} from "@/components/decorative/shapes"
import { CalendarDays, MedalIcon, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GitHubStats } from "@/components/github/github-stats"

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "education", label: "Education" },
]

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar height={3} color="linear-gradient(to right, #3b82f6, #8b5cf6)" />

      {/* Section Navigation Dots - Hidden on mobile */}
      <div className="hidden lg:block">
        <AdvancedScrollIndicator sections={sections} className="fixed right-8 top-1/2 -translate-y-1/2 z-50" />
      </div>

      {/* Enhanced Background Decorative Elements - Reduced on mobile */}
      <div className="hidden sm:block">
        <FloatingShape className="top-[5%] right-[8%] text-blue-200" speed={0.3} direction="up">
          <Blob className="w-60 sm:w-80 h-60 sm:h-80 opacity-30 animate-parallax-float" />
        </FloatingShape>

        <FloatingShape className="top-[25%] left-[2%] text-purple-200" speed={0.4} direction="down">
          <Blob className="w-48 sm:w-64 h-48 sm:h-64 opacity-25 animate-parallax-float" />
        </FloatingShape>

        <FloatingShape className="bottom-[15%] right-[12%] text-teal-200" speed={0.35} direction="up">
          <Blob className="w-56 sm:w-72 h-56 sm:h-72 opacity-30 animate-parallax-float" />
        </FloatingShape>

        <FloatingShape className="top-[55%] left-[5%] text-amber-200" speed={0.45} direction="down">
          <Blob className="w-44 sm:w-56 h-44 sm:h-56 opacity-25 animate-parallax-float" />
        </FloatingShape>
      </div>

      {/* Smaller floating elements for mobile */}
      <div className="block sm:hidden">
        <FloatingShape className="top-[10%] right-[5%] text-blue-200" speed={0.2} direction="up">
          <Blob className="w-32 h-32 opacity-20 animate-parallax-float" />
        </FloatingShape>

        <FloatingShape className="bottom-[20%] left-[5%] text-purple-200" speed={0.25} direction="down">
          <Blob className="w-28 h-28 opacity-20 animate-parallax-float" />
        </FloatingShape>
      </div>

      {/* Floating Circles with Enhanced Movement */}
      <FloatingShape className="top-[8%] left-[20%]" speed={0.2} direction="right">
        <Circle className="w-8 h-8 bg-blue-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="top-[18%] right-[25%]" speed={0.25} direction="left">
        <Circle className="w-6 h-6 bg-purple-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="bottom-[35%] right-[30%]" speed={0.3} direction="up">
        <Circle className="w-10 h-10 bg-green-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="bottom-[12%] left-[35%]" speed={0.35} direction="right">
        <Circle className="w-7 h-7 bg-amber-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="top-[45%] right-[45%]" speed={0.15} direction="down">
        <Circle className="w-5 h-5 bg-rose-400 opacity-30" />
      </FloatingShape>

      {/* Enhanced Triangles */}
      <FloatingShape className="top-[35%] right-[38%]" speed={0.2} direction="down">
        <Triangle className="border-l-[20px] border-r-[20px] border-b-[35px] border-b-indigo-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="bottom-[45%] left-[42%]" speed={0.25} direction="up">
        <Triangle className="border-l-[15px] border-r-[15px] border-b-[25px] border-b-teal-400 opacity-30" />
      </FloatingShape>

      <FloatingShape className="top-[65%] right-[15%]" speed={0.18} direction="left">
        <Triangle className="border-l-[12px] border-r-[12px] border-b-[20px] border-b-pink-400 opacity-30" />
      </FloatingShape>

      {/* Multiple Background Patterns with Different Speeds */}
      <ParallaxBackground className="text-slate-300" speed={0.1}>
        <GridPattern className="w-full h-full" />
      </ParallaxBackground>

      <FloatingShape className="top-0 left-0 w-full h-full text-slate-400" speed={0.15} direction="right">
        <DiagonalLines className="w-full h-full opacity-5" />
      </FloatingShape>

      <FloatingShape className="top-0 left-0 w-full h-full text-slate-500" speed={0.08} direction="left">
        <Hexagons className="w-full h-full opacity-5" />
      </FloatingShape>

      {/* Header */}
      <header className="bg-white/90 shadow-sm border-b sticky top-0 z-40 backdrop-blur-md">
        <FadeIn direction="down">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
              <div className="relative floating-animation">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="sm:w-[120px] sm:h-[120px] rounded-full border-4 border-white relative z-10"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Yoan Gavrilov</h1>
                <p className="text-lg sm:text-xl text-slate-600 mb-4">Full Stack Developer</p>
                <StaggerContainer>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm text-slate-500">
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>London, UK</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:yoan.gavrilov24@gmail.com" className="break-all sm:break-normal">
                        yoan.gavrilov24@gmail.com
                      </a>
                    </div>
                  </div>
                </StaggerContainer>
              </div>
              <StaggerContainer className="flex gap-3 mt-4 sm:mt-0">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform bg-transparent"
                >
                  <Link href="https://github.com/YAGavrilov19" target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform bg-transparent"
                >
                  <Link href="https://www.linkedin.com/in/yoan-gavrilov-08667322b" target="_blank">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
              </StaggerContainer>
            </div>
          </div>
        </FadeIn>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16 relative">
        {/* About Section */}
        <section id="about" className="relative scroll-mt-24">
          <FloatingShape className="-top-16 -left-20 text-blue-500" speed={0.4} direction="right">
            <DotsPattern className="w-48 h-48" />
          </FloatingShape>

          <FloatingShape className="-bottom-12 -right-12 text-indigo-400" speed={0.3} direction="left">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-300 to-indigo-300 opacity-20 blur-lg"></div>
          </FloatingShape>

          <SlideInCard direction="left">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {
                    "• Passionate developer with six years of hands-on software development experience and expertise across multiple programming languages and development environments."
                  }
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {
                    "• Computer Science undergraduate at the University of Greenwich pursuing B.Sc. (Hons) with currently achieved First-Class Honors for Year 1."
                  }
                </p>
              </CardContent>
            </Card>
          </SlideInCard>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative scroll-mt-24">
          <FloatingShape className="-bottom-16 -right-20 text-purple-500" speed={0.45} direction="left">
            <DotsPattern className="w-48 h-48" />
          </FloatingShape>

          <FloatingShape className="-top-8 -left-8 text-green-400" speed={0.35} direction="right">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-300 to-emerald-300 opacity-20 blur-lg"></div>
          </FloatingShape>

          <SlideInCard direction="right" delay={200}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></div>
                  Technigcal Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FadeIn delay={100}>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Frontend</h4>
                      <StaggerContainer className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "PHP", "CSS3"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:scale-105 transition-transform cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </StaggerContainer>
                    </div>
                  </FadeIn>
                  <FadeIn delay={200}>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Backend</h4>
                      <StaggerContainer className="flex flex-wrap gap-2">
                        {["Node.js", "Python", "C#", "C++", "SSMS SQL"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:scale-105 transition-transform cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </StaggerContainer>
                    </div>
                  </FadeIn>
                  <FadeIn delay={300}>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Tools & Cloud</h4>
                      <StaggerContainer className="flex flex-wrap gap-2">
                        {["Git", "GitHub Actions", "AWS", "Linux", "Vercel", "phpMyAdmin"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="hover:scale-105 transition-transform cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </StaggerContainer>
                    </div>
                  </FadeIn>
                </div>
              </CardContent>
            </Card>
          </SlideInCard>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative scroll-mt-24">
          <FloatingShape className="top-1/2 -translate-y-1/2 -left-32" speed={0.5} direction="right">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-40 blur-2xl"></div>
          </FloatingShape>

          <FloatingShape className="top-0 right-0 text-purple-400" speed={0.3} direction="down">
            <Hexagons className="w-40 h-40" />
          </FloatingShape>

          <FadeIn delay={100}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FadeIn delay={200}>
                  <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Localization Engineer</h3>
                          <Badge variant="default" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            Mobile
                          </Badge>
                        </div>
                        <p className="text-slate-600">EnLoc</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CalendarDays className="w-4 h-4" />
                        <span>Sep. 2023 - Sep. 2023</span>
                      </div>
                    </div>
                    <StaggerContainer>
                      <ul className="text-slate-600 space-y-1 ml-4">
                        <li>• Localized code for a mobile application designed for apartment rentals</li>
                        <li>• Collaborated with developers to implement localized code seamlessly</li>
                        <li>• Contributed to the successful launch of the mobile app in the German market</li>
                      </ul>
                    </StaggerContainer>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        Javascript
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Android Studio
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Python
                      </Badge>
                    </div>
                  </div>
                </FadeIn>

                <Separator />

                <FadeIn delay={400}>
                  <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Game Development</h3>
                          <Badge variant="default" className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                            Full Stack
                          </Badge>
                        </div>
                        <p className="text-slate-600">Arc Academy</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CalendarDays className="w-4 h-4" />
                        <span>Jul. 2023 - Jul. 2023</span>
                      </div>
                    </div>
                    <StaggerContainer>
                      <ul className="text-slate-600 space-y-1 ml-4">
                        <li>• Participated in a summer program focused on game development</li>
                        <li>
                          • Honed skills in working with game engines and modifying game code to gain a deeper
                          understanding of game logic
                        </li>
                      </ul>
                    </StaggerContainer>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        C++
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Visual Studio
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Git
                      </Badge>
                    </div>
                  </div>
                </FadeIn>

                <Separator />

                <FadeIn delay={600}>
                  <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Software Development Intern</h3>
                          <Badge variant="default" className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
                            Full Stack
                          </Badge>
                        </div>
                        <p className="text-slate-600">Scalefocus</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CalendarDays className="w-4 h-4" />
                        <span>Jan. 2023 - Jul. 2023</span>
                      </div>
                    </div>
                    <StaggerContainer>
                      <ul className="text-slate-600 space-y-1 ml-4">
                        <li>
                          • Developed a security application that connects and shares information with a database,
                          enhancing data accessibility and user interaction.
                        </li>
                        <li>
                          • Gained hands-on experience in .NET development, which deepened my understanding of
                          application functionality and .NET wrappers.
                        </li>
                        <li>
                          • Engaged in testing and debugging processes, helping to ensure the application was reliable
                          and met quality standards
                        </li>
                      </ul>
                    </StaggerContainer>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        C#
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        .NET
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        OpenCV
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AForge.NET
                      </Badge>
                    </div>
                  </div>
                </FadeIn>

                <Separator />

                <FadeIn delay={800}>
                  <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Intern</h3>
                          <Badge variant="default" className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
                            Backend
                          </Badge>
                        </div>
                        <p className="text-slate-600">Technologica</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CalendarDays className="w-4 h-4" />
                        <span>Oct. 2022 - Nov. 2022</span>
                      </div>
                    </div>
                    <StaggerContainer>
                      <ul className="text-slate-600 space-y-1 ml-4">
                        <li>
                          • Developed a solid understanding of teamwork dynamics through collaboration on a project.
                        </li>
                        <li>• Enhanced my ability to communicate effectively with team members.</li>
                      </ul>
                    </StaggerContainer>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        C#
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Git
                      </Badge>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={600}>
                  <div className="hover:bg-slate-50 p-4 rounded-lg transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Intern</h3>
                          <Badge variant="default" className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                            Frontend
                          </Badge>
                        </div>
                        <p className="text-slate-600">A-Data Pro</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <CalendarDays className="w-4 h-4" />
                        <span>Nov. 2021 - July 2022</span>
                      </div>
                    </div>
                    <StaggerContainer>
                      <ul className="text-slate-600 space-y-1 ml-4">
                        <li>
                          • Gained hands-on experience from company employees, which deepened my understanding of the
                          work environment and C++ programming language.
                        </li>
                        <li>
                          • Gained hands-on experience in .NET development, which deepened my understanding of
                          application functionality and .NET wrappers.
                        </li>
                        <li>
                          • Engaged in testing and debugging processes, helping to ensure the application was reliable
                          and met quality standards
                        </li>
                      </ul>
                    </StaggerContainer>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">
                        C++
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Git
                      </Badge>
                    </div>
                  </div>
                </FadeIn>
              </CardContent>
            </Card>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative scroll-mt-24">
          <FloatingShape className="top-1/2 -translate-y-1/2 -right-32" speed={0.55} direction="left">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-200 to-teal-200 opacity-40 blur-2xl"></div>
          </FloatingShape>

          <FloatingShape className="bottom-0 left-0 text-teal-400" speed={0.25} direction="up">
            <DiagonalLines className="w-36 h-36" />
          </FloatingShape>

          <SlideInCard direction="left" delay={300}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
                  Featured Projects
                </CardTitle>
                <CardDescription>Some of my recent work and contributions</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Featured Repositories - Mobile responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <StaggerContainer>
                    <div className="border rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-semibold text-slate-900">"Panopticon" - Face Detection Security App</h3>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                            <Link href="https://github.com/YAGavrilov19/Panopticon-Face-Detection" target="_blank">
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        Full-featured e-commerce platform with payment integration, inventory management, and admin
                        dashboard.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {[".NET", "C#", "SQL (SSMS)", "Git"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-slate-100 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-semibold text-slate-900">Algorithm optimization through Python</h3>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                            <Link href="https://github.com/YAGavrilov19/Python-Optimised-Algorithms" target="_blank">
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        An series of optimisations on an equation which aim to decrease the time of completion from
                        under 60 seconds to be as short as possible.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["Vue.js", "Python", "FastAPI", "Chart.js"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-slate-100 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-semibold text-slate-900">Family Tree Explorer Python</h3>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                            <Link href="https://github.com/YAGavrilov19/Python-Family-Tree-Explorer" target="_blank">
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        A Python project where the user can explore a Family Tree from a given array of the members,
                        their age and their relations to eachother, made through the use of Object Oriented Programming,
                        Encapsulation and Abstraction.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["Python", "Git", "Github"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-slate-100 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 hover:shadow-md hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <h3 className="font-semibold text-slate-900">Scheme Family Tree Explorer</h3>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                            <Link href="https://github.com/YAGavrilov19/Scheme-Family-Tree-Explorer" target="_blank">
                              <Github className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">
                        A redo of my Family Tree Explorer, redone in Scheme, differing from the Python approach by using
                        Functional Programming instead of Object Oriented Programming.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["TypeScript", "React", "Rollup", "Jest"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-slate-100 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </StaggerContainer>
                </div>
              </CardContent>
            </Card>
          </SlideInCard>
        </section>

        {/* GitHub Contributions */}
        <section id="github" className="relative scroll-mt-24">
          <FloatingShape className="-bottom-16 left-1/2 -translate-x-1/2" speed={0.4} direction="up">
            <div className="w-80 h-24 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-30 blur-2xl"></div>
          </FloatingShape>

          <FloatingShape className="top-0 right-1/4 text-indigo-400" speed={0.2} direction="down">
            <GridPattern className="w-32 h-32" />
          </FloatingShape>

          <FadeIn delay={400}>
            <GitHubStats />
          </FadeIn>
        </section>

        {/* Education */}
        <section id="education" className="relative scroll-mt-24">
          <FloatingShape className="-top-16 right-0" speed={0.35} direction="left">
            <DotsPattern className="w-48 h-48 text-teal-500" />
          </FloatingShape>

          <FloatingShape className="-bottom-8 -left-8 text-cyan-400" speed={0.3} direction="right">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-teal-300 to-cyan-300 opacity-25 blur-lg"></div>
          </FloatingShape>

          <SlideInCard direction="right" delay={500}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full"></div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start hover:bg-slate-50 p-4 rounded-lg transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://i.imgur.com/KSQxdNK.png?height=60&width=60"
                        alt="University of Greenwich Logo"
                        width={60}
                        height={60}
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Bachelor of Science in Computer Science</h3>
                      <p className="text-slate-600">University of Greenwich, London</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <CalendarDays className="w-4 h-4" />
                    <span>2024 - Now</span>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex justify-between items-start hover:bg-slate-50 p-4 rounded-lg transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://i.imgur.com/icXwTfZ.png?height=60&width=60"
                        alt="Vocational School Logo"
                        width={60}
                        height={60}
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Programming Assurance</h3>
                      <p className="text-slate-600">Vocational School of Computer Programming and Innovations</p>
                      <ul className="text-slate-600 space-y-1 ml-4 mt-2">
                        <li> ‎ </li>
                        <li>
                          • Learned Programming, Object-Oriented Programming and Algorithms and Data Structures with
                          C++, C# and JavaScript
                        </li>
                        <li>• Learned working with Databases in SQL</li>
                        <li>
                          • Participated in many extracurricular activities (Arduino, Company Internships, Mentoring
                          School Projects)
                        </li>
                        <li>
                          • Gained many certificates and badges by various companies (Adobe, Apple, Cisco, Microsoft,
                          Project Management Institute)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-slate-500 whitespace-nowrap">
                    <CalendarDays className="w-4 h-4" />
                    <span>2019 - 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideInCard>
        </section>
      </main>

      {/* Footer */}
      <div className="relative">
        <FloatingShape className="bottom-0 left-0 right-0 h-48" speed={0.3} direction="up">
          <div className="w-full h-full bg-gradient-to-t from-slate-900/30 to-transparent opacity-40"></div>
        </FloatingShape>

        <FadeIn delay={600}>
          {/* Footer */}
          <footer className="bg-slate-900 text-white py-6 sm:py-8 mt-12 sm:mt-16 relative">
            <div className="absolute inset-0 overflow-hidden">
              <FloatingShape className="inset-0" speed={0.2} direction="up">
                <GridPattern className="w-full h-full text-white opacity-5" />
              </FloatingShape>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
              <p className="mb-4 text-sm sm:text-base">Let's connect and build something amazing together!</p>
              <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button variant="secondary" asChild className="hover:scale-105 transition-transform w-full sm:w-auto">
                  <a href="mailto:yoan.gavrilov24@gmail.com" className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="secondary" asChild className="hover:scale-105 transition-transform w-full sm:w-auto">
                  <Link
                    href="https://www.linkedin.com/in/yoan-gavrilov-08667322b"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="secondary" asChild className="hover:scale-105 transition-transform w-full sm:w-auto">
                  <Link
                    href="https://github.com/YAGavrilov19"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="secondary" asChild className="hover:scale-105 transition-transform w-full sm:w-auto">
                  <Link
                    href="https://www.credly.com/users/yoan-gavrilov"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <MedalIcon className="w-4 h-4 mr-2" />
                    Badges
                  </Link>
                </Button>
              </StaggerContainer>
            </div>
          </footer>
        </FadeIn>
      </div>
    </div>
  )
}
