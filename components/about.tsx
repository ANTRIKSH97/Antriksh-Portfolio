"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Code, User, Zap, Heart } from "lucide-react"

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
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
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30"></div>
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-bl-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-purple-600/10 to-transparent rounded-tr-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,40,200,0.03),transparent_40%)]"></div>
      </div>

      <div className="container px-4 mx-auto">
        <motion.div style={{ opacity }} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-lg relative overflow-hidden group"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <User className="h-8 w-8 text-primary relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20"></div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Hello! I&apos;m Antriksh Dubey, a passionate Full Stack Web Developer with a keen eye for creating
                  elegant, user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and
                  intuitive solutions.
                </p>
                <motion.div
                  className="flex items-center gap-2 text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Heart className="h-5 w-5" />
                  <span>Passionate about creating exceptional user experiences</span>
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <GraduationCap className="h-8 w-8 text-primary relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20"></div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <ul className="space-y-6">
                  <motion.li
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-purple-600"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-semibold text-lg">Master of Computer Applications (MCA)</h4>
                    <p className="text-foreground/70">JSS Academy of Technical Education</p>
                    <p className="text-foreground/70">Noida</p>
                    <p className="text-sm text-foreground/60">2023-2025</p>
                  </motion.li>
                  <motion.li
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-purple-600"></div>
                    <h4 className="font-semibold text-lg">Bachelor of Science (BSc)</h4>
                    <p className="text-foreground/70">Nehru Gram Bharti University</p>
                    <p className="text-foreground/70">Prayagraj</p>
                    <p className="text-sm text-foreground/60">Completed</p>
                  </motion.li>
                  <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                  <ul className="space-y-6"></ul>
                  <motion.li
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-purple-600"></div>
                    <h4 className="font-semibold text-lg">Transportix company</h4>
                    <p className="text-foreground/70">Frontend Developer Intern</p>
                    <p className="text-foreground/70">Remote</p>
                    <p className="text-sm text-foreground/60">Nov 2024 - Jan 2025</p>
                  </motion.li>
                   <motion.li
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:to-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-purple-600"></div>
                    <h4 className="font-semibold text-lg">Algebra Softech</h4>
                    <p className="text-foreground/70">Web Developer</p>
                    <p className="text-foreground/70">Remote</p>
                    <p className="text-sm text-foreground/60">Feb 2025 - Present</p>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary relative z-10" />,
                title: "My Approach",
                description:
                  "I believe in writing clean, maintainable code and creating intuitive user experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                delay: 0.5,
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary relative z-10" />,
                title: "My Journey",
                description:
                  "My journey in web development has equipped me with a diverse skill set spanning both frontend and backend technologies. I'm constantly learning and exploring new technologies to stay at the forefront of web development trends.",
                gradient: "from-purple-500/20 to-indigo-500/20",
                delay: 0.6,
              },
              {
                icon: <Zap className="h-6 w-6 text-primary relative z-10" />,
                title: "My Passion",
                description:
                  "I'm passionate about creating digital experiences that are not only functional but also beautiful and enjoyable to use. I love the challenge of balancing technical requirements with aesthetic design.",
                gradient: "from-amber-500/20 to-orange-500/20",
                delay: 0.7,
              },
              {
                icon: <User className="h-6 w-6 text-primary relative z-10" />,
                title: "My Goal",
                description:
                  "My goal is to continue growing as a developer while creating meaningful applications that solve real problems. I'm always looking for new challenges and opportunities to expand my skills.",
                gradient: "from-green-500/20 to-emerald-500/20",
                delay: 0.8,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card
                  className={`border border-primary/10 bg-gradient-to-br ${card.gradient} backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full`}
                >
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background/50 mb-4 relative overflow-hidden">
                      {card.icon}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
