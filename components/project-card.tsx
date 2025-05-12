"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  icon: string
  color: string
  tags: string[]
  link: string
  github: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border border-primary/10 bg-background/50 backdrop-blur-sm h-full flex flex-col relative group">
        {/* Animated border */}
        <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

        <div
          className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}
        >
          <motion.div
            className="text-6xl"
            animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {project.icon}
          </motion.div>

          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-white/10"></div>
            <div className="absolute bottom-5 right-5 w-16 h-16 rounded-full bg-white/10"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-white/10"></div>
          </motion.div>
        </div>

        <CardHeader className="pb-2 relative z-10">
          <motion.h3
            className="text-xl font-bold"
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
        </CardHeader>

        <CardContent className="flex-grow relative z-10">
          <motion.p
            className="text-foreground/70 mb-4"
            animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between relative z-10">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-primary/30 hover:border-primary/80 hover:bg-primary/5 transition-colors"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>

          <Button size="sm" asChild className="relative overflow-hidden group/btn">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover/btn:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
