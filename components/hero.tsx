"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowDown, Download, MousePointerClick } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { cn } from "@/lib/utils"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      }
      const x = e.clientX - left
      const y = e.clientY - top
      mouseX.set(x / width - 0.5)
      mouseY.set(y / height - 0.5)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 })

  const floatingShapes = [
    { x: "10%", y: "20%", size: "w-16 h-16", delay: 0, rotate: 0, shape: "circle" },
    { x: "85%", y: "15%", size: "w-20 h-20", delay: 0.1, rotate: 45, shape: "square" },
    { x: "80%", y: "60%", size: "w-12 h-12", delay: 0.2, rotate: 0, shape: "circle" },
    { x: "15%", y: "70%", size: "w-24 h-24", delay: 0.3, rotate: 30, shape: "square" },
    { x: "50%", y: "30%", size: "w-10 h-10", delay: 0.4, rotate: 15, shape: "circle" },
    { x: "30%", y: "80%", size: "w-14 h-14", delay: 0.5, rotate: 60, shape: "square" },
  ]

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-background to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>

      {/* Animated floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute hidden md:block",
            shape.size,
            shape.shape === "circle" ? "rounded-full" : "rounded-xl",
            "border border-primary/20 backdrop-blur-sm",
          )}
          style={{
            left: shape.x,
            top: shape.y,
            rotate: `${shape.rotate}deg`,
            background: "rgba(138, 43, 226, 0.03)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0.3],
            y: [0, -15, 0],
            rotate: [`${shape.rotate}deg`, `${shape.rotate + 10}deg`, `${shape.rotate}deg`],
          }}
          transition={{
            duration: 5,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Particle effect */}
      <div className="absolute inset-0 -z-5">
        <div id="particles-js" className="absolute inset-0"></div>
      </div>

      <motion.div style={{ y, opacity }} className="container px-4 mx-auto z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="inline-block px-6 py-2 border border-primary/20 rounded-full bg-primary/5 text-primary mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Full Stack Web Developer</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
              style={{ perspective: 1000 }}
            >
              <motion.span
                className="block mb-2 text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-size-200 animate-gradient"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Antriksh Dubey
              </motion.span>
            </motion.h1>

            <motion.div
              className="h-1 w-40 mx-auto bg-gradient-to-r from-primary to-purple-600 rounded-full mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "10rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              <TypeAnimation
                sequence={[
                  "Crafting elegant, user-centric web experiences",
                  1000,
                  "Building modern web applications with React & Next.js",
                  1000,
                  "Turning ideas into reality through clean code",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg group relative overflow-hidden">
                <Link href="#contact">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg group relative overflow-hidden border-primary/30 hover:border-primary/80"
              >
                <a href="/Antrikshdubey-resume-.pdf" download>
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Download Resume
                  </span>
                  <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </Button>
            </motion.div>

            {/* Tech stack pills with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-3"
            >
              {["React", "Next.js", "Node.js", "MongoDB", "TypeScript"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full text-foreground/70 text-sm relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{tech}</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <Link
                href="#about"
                className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mouse move indicator for 3D effect */}
      <motion.div
        className="fixed bottom-4 right-4 text-foreground/40 hidden lg:flex items-center gap-2 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <MousePointerClick size={14} />
        <span>Move mouse to interact</span>
      </motion.div>
    </section>
  )
}
