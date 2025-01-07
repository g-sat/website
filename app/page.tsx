'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const dragonRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      hero.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const courses = [
    "Web Development",
    "Cybersecurity",
    "AI and Machine Learning",
    "Blockchain Technology",
    "Virtual Reality",
    "Quantum Computing"
  ]

  return (
    <main className="min-h-screen">
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div
          ref={heroRef}
          className="hero glitch-container text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="glitch-text text-6xl mb-4" data-text="Cyberpunk Portfolio">Cyberpunk Portfolio</h1>
          <p className="neon-text text-xl mb-8">Exploring the intersection of technology and creativity</p>
          <Link href="#about" className="neon-button text-lg">
            Dive In
          </Link>
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-neon-blue" />
        </motion.div>
      </section>

      <section id="about" className="py-20 bg-black bg-opacity-70">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="glitch-text text-4xl mb-8 text-center" 
            data-text="About Me"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm a futuristic developer specializing in cutting-edge web technologies. 
            With a passion for cyberpunk aesthetics and innovative solutions, 
            I create digital experiences that push the boundaries of what's possible.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-dark-blue p-6 rounded-lg shadow-neon">
              <h3 className="text-2xl mb-4 text-neon-pink">Skills</h3>
              <ul className="list-disc list-inside text-neon-blue">
                <li>Full-stack Web Development</li>
                <li>AI and Machine Learning</li>
                <li>Blockchain Technology</li>
                <li>Cybersecurity</li>
                <li>Virtual and Augmented Reality</li>
              </ul>
            </div>
            <div className="bg-dark-blue p-6 rounded-lg shadow-neon">
              <h3 className="text-2xl mb-4 text-neon-pink">Achievements</h3>
              <ul className="list-disc list-inside text-neon-blue">
                <li>Developed AI-powered cybersecurity system</li>
                <li>Created blockchain-based voting platform</li>
                <li>Built VR training simulations for Fortune 500 companies</li>
                <li>Published research on quantum computing applications</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="glitch-text text-4xl mb-12 text-center" data-text="My Courses">My Courses</h2>
          <div ref={dragonRef} className="relative h-[600px]">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                className="absolute w-40 h-40 bg-dark-blue rounded-lg shadow-neon flex items-center justify-center text-center p-4"
                style={{
                  left: `${(index % 3) * 33}%`,
                  top: `${Math.floor(index / 3) * 200}px`,
                  rotate: y,
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <span className="text-neon-pink">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-black bg-opacity-70">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="glitch-text text-4xl mb-8 text-center" 
            data-text="Featured Projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card-content">
                  <h3 className="text-2xl mb-2 text-neon-blue">Project {i}</h3>
                  <p className="mb-4 text-gray-300">A brief description of the project and its key features.</p>
                  <Link href={`/projects/${i}`} className="neon-button">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="glitch-text text-4xl mb-8" 
            data-text="Let's Connect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ready to embark on a cyberpunk journey through the digital realm? Let's create something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/contact" className="neon-button text-lg">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

