'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code, Cpu, Globe, Zap, Terminal, Database, Cloud, Shield } from 'lucide-react'

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const skills = [
    { name: 'Web Development', icon: Globe },
    { name: 'AI & Machine Learning', icon: Cpu },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'IoT Solutions', icon: Zap },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'Database Management', icon: Database },
    { name: 'DevOps', icon: Terminal },
    { name: 'Blockchain', icon: Code },
  ]

  const projects = [
    { title: 'NeoCity Planner', description: 'Futuristic urban planning AI' },
    { title: 'CyberShield', description: 'Next-gen cybersecurity platform' },
    { title: 'HoloLink', description: 'Holographic communication app' },
    { title: 'SynthBrain', description: 'Neural network for IoT devices' },
    { title: 'CloudNexus', description: 'Distributed cloud computing solution' },
    { title: 'QuantumLedger', description: 'Quantum-resistant blockchain system' },
  ]

  const testimonials = [
    { name: 'Sarah Chen', role: 'CTO, TechFusion Inc.', content: 'Working with this developer was a game-changer for our AI projects. Their expertise and innovative approach exceeded our expectations.' },
    { name: 'Alex Rodriguez', role: 'Founder, CyberGuard', content: 'The cybersecurity solutions provided were top-notch. Our systems have never been more secure and efficient.' },
    { name: 'Lena Kim', role: 'Lead Engineer, FutureCity', content: 'The IoT integration for our smart city project was flawless. This developer\'s skills in both hardware and software are truly impressive.' },
  ]

  return (
    <main className="min-h-screen">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      <motion.div
        ref={heroRef}
        className="hero glitch-container text-center py-20"
        style={{ opacity, scale }}
      >
        <motion.h1
          className="glitch-text text-6xl mb-4"
          data-text="Cyberpunk Portfolio"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cyberpunk Portfolio
        </motion.h1>
        <motion.p
          className="neon-text text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Exploring the intersection of technology and creativity
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/projects" className="neon-button text-lg group">
            Explore Projects
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.section
        className="about-me mt-16 max-w-4xl mx-auto text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="glitch-text text-4xl mb-6" data-text="About Me">About Me</h2>
        <p className="text-lg mb-8">
          I'm a futuristic developer specializing in cutting-edge web technologies. 
          With a passion for cyberpunk aesthetics and innovative solutions, 
          I create digital experiences that push the boundaries of what's possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card bg-black bg-opacity-50 p-6 rounded-lg border border-neon-blue"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <skill.icon className="text-neon-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="featured-projects mt-20 w-full max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="glitch-text text-4xl mb-8 text-center" data-text="Featured Projects">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="card-content">
                <h3 className="text-2xl mb-2 text-neon-pink">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link href={`/projects/${index + 1}`} className="neon-button">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="testimonials mt-20 w-full max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="glitch-text text-4xl mb-8 text-center" data-text="Client Testimonials">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card bg-black bg-opacity-50 p-6 rounded-lg border border-neon-purple"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <p className="text-neon-blue font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="tech-stack mt-20 w-full max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h2 className="glitch-text text-4xl mb-8 text-center" data-text="Tech Stack">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['React', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'PostgreSQL', 'Redis'].map((tech, index) => (
            <motion.div
              key={tech}
              className="tech-card bg-black bg-opacity-50 p-4 rounded-lg border border-neon-green text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <p className="text-neon-green font-semibold">{tech}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="cta-section mt-20 mb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h2 className="glitch-text text-4xl mb-6" data-text="Ready to Collaborate?">Ready to Collaborate?</h2>
        <p className="text-lg mb-8">Let's create something extraordinary together.</p>
        <Link href="/contact" className="neon-button text-lg">
          Get in Touch
        </Link>
      </motion.section>
    </main>
  )
}

