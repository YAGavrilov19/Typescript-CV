export interface Experience {
  id: string
  title: string
  company: string
  period: string
  type: "Frontend" | "Backend" | "Full Stack" | "DevOps" | "Mobile" | "Other"
  responsibilities: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: "senior-fullstack-2022",
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    type: "Full Stack",
    responsibilities: [
      "Led development of a microservices architecture serving 100k+ daily users",
      "Improved application performance by 40% through code optimization and caching",
      "Mentored junior developers and established coding standards",
      "Architected scalable cloud infrastructure using AWS services",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    id: "fullstack-2020",
    title: "RAAAAAAAAAAAAAAAA",
    company: "Startup Solutions",
    period: "2020 - 2022",
    type: "Full Stack",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to create pixel-perfect user interfaces",
      "Developed RESTful APIs and integrated third-party services",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Docker", "Jest", "Git"],
  },
  {
    id: "frontend-2018",
    title: "Frontend Developer",
    company: "Creative Agency Ltd.",
    period: "2018 - 2020",
    type: "Frontend",
    responsibilities: [
      "Developed interactive user interfaces for high-profile client websites",
      "Optimized web performance achieving 95+ Lighthouse scores",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Maintained and updated legacy codebases",
    ],
    technologies: ["Vue.js", "SCSS", "Webpack", "TypeScript", "Figma", "Adobe Creative Suite"],
  },
  {
    id: "backend-2017",
    title: "Backend Developer",
    company: "Data Systems Corp.",
    period: "2017 - 2018",
    type: "Backend",
    responsibilities: [
      "Designed and implemented RESTful APIs serving 50k+ requests daily",
      "Optimized database queries reducing response times by 60%",
      "Implemented robust authentication and authorization systems",
      "Maintained server infrastructure and monitoring systems",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Nginx", "Linux"],
  },
]
