"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, GitBranch, Cloud } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express.js", "PHP", "REST API", "GraphQL"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "NeonDB"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 4,
    title: "Programming",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "C++"],
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: 5,
    title: "Version Control",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "GitLab", "CI/CD"],
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    id: 6,
    title: "Cloud Services",
    icon: <Cloud className="h-8 w-8 text-primary" />,
    skills: ["Vercel", "Netlify", "AWS", "Cloudinary", "Firebase"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export default function Skills() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="skills" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/5 to-transparent"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-600/5 to-transparent"
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
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-foreground/80">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card
                className={`h-full border border-primary/10 bg-gradient-to-br ${category.color} backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Animated border */}
                <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="pt-6">
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center mb-3 relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                      >
                        {category.icon}
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5"></div>
                    </motion.div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-background/60 text-foreground/80 text-sm relative overflow-hidden group/skill"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * skillIndex }}
                      >
                        <span className="relative z-10">{skill}</span>
                        <motion.div
                          className="absolute inset-0 bg-primary/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 backdrop-blur-sm border border-primary/10 relative overflow-hidden group">
            <p className="text-foreground/80 text-lg relative z-10">
              Always learning and exploring new technologies to stay at the cutting edge.
            </p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
