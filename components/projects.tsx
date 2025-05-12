"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "PG Life",
    description:
      "PG house booking app using ReactJS, PHP, and DBMS. Allows users to search, filter, and book PG accommodations with user reviews and ratings.",
    icon: "🏠",
    color: "from-blue-500 to-cyan-400",
    tags: ["ReactJS", "PHP", "MySQL", "Responsive Design"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "TextUtils",
    description:
      "A utility-based text formatter made with React, responsive and uses React Router. Features include text transformation, character counting, and more.",
    icon: "📝",
    color: "from-green-500 to-emerald-400",
    tags: ["React", "React Router", "CSS", "JavaScript"],
    link: "https://antriksh97.github.io/textutils/",
    github: "https://github.com/ANTRIKSH97/textutils",
  },
  {
    id: 3,
    title: "AI-powered SaaS Platform",
    description:
      "Built with Next.js, Cloudinary, Prisma, NeonDB — supports image/video post generation for social platforms with AI capabilities.",
    icon: "🤖",
    color: "from-purple-500 to-indigo-400",
    tags: ["Next.js", "Cloudinary", "Prisma", "NeonDB", "AI"],
    link: "#",
    github: "https://github.com/ANTRIKSH97/AI-powered-Saas-platform",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "A full-featured frontend + backend e-commerce site built using React, Node.js, Express.js, and MongoDB with user authentication and payment integration.",
    icon: "🛒",
    color: "from-red-500 to-orange-400",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://ecommerce-website-green-delta.vercel.app/",
    github: "https://github.com/ANTRIKSH97/Ecommerce-website",
  },
]

export default function Projects() {
  const containerRef = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const scrollToProject = (index: number) => {
    setActiveIndex(index)
    if (carouselRef.current) {
      const scrollAmount = index * (window.innerWidth * 0.8)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div style={{ opacity }} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-foreground/80">
              Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and
              solution.
            </p>
          </motion.div>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={projects[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                onClick={() => scrollToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
