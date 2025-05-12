import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import ScrollProgress from "@/components/scroll-progress"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antriksh Dubey | Full Stack Web Developer",
  description:
    "Portfolio of Antriksh Dubey, a Full Stack Web Developer specializing in React, Next.js, Node.js, and more.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
