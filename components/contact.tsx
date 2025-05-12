"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react"

export default function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (name: string) => {
    setFocused(name)
  }

  const handleBlur = () => {
    setFocused(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary relative z-10" />,
      title: "Email",
      value: "antrikshdubey15@gmail.com",
      link: "antrikshdubey15@gmail.com",
      delay: 0.2,
    },
    {
      icon: <Github className="h-6 w-6 text-primary relative z-10" />,
      title: "GitHub",
      value: "github.com/ANTRIKSH97",
      link: "https://github.com/ANTRIKSH97",
      delay: 0.3,
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary relative z-10" />,
      title: "LinkedIn",
      value: "linkedin.com/adidev/",
      link: "https://www.linkedin.com/in/adidev/",
      delay: 0.4,
    },
  ]

  return (
    <section id="contact" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />
      </div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-10 md:left-20 w-16 h-16 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 md:right-20 w-12 h-12 border border-primary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary/20 rounded-lg rotate-12"></div>

      <div className="container px-4 mx-auto">
        <motion.div style={{ opacity }} className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-foreground/80">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-primary/10 bg-background/70 backdrop-blur-sm h-full overflow-hidden relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-3 bg-gradient-to-r from-primary to-purple-600"></div>
              <CardContent className="pt-6">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MessageSquare className="h-8 w-8 text-primary relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10"></div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
                <p className="text-foreground/80 mb-8 text-center">
                  I&apos;m currently available for freelance work, full-time positions, and collaborative projects.
                  Let&apos;s create something amazing together!
                </p>

                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? 'noopener noreferrer  ? "_blank' : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors relative overflow-hidden group/contact"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 relative overflow-hidden">
                        {item.icon}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5"></div>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-foreground/70">{item.value}</p>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border border-primary/10 bg-background/70 backdrop-blur-sm overflow-hidden relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-3 bg-gradient-to-r from-primary to-purple-600"></div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6"
                  >
                    Thank you for your message! I&apos;ll get back to you as soon as possible.
                  </motion.div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === "name" ? "text-primary" : ""
                      }`}
                    >
                      Name
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        required
                        className="w-full bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ${
                          focused === "name" ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === "email" ? "text-primary" : ""
                      }`}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        placeholder="Your email"
                        required
                        className="w-full bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ${
                          focused === "email" ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === "message" ? "text-primary" : ""
                      }`}
                    >
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        placeholder="Your message"
                        required
                        className="w-full min-h-[150px] bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 ${
                          focused === "message" ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </span>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 group-hover:opacity-0 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
