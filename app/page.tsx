'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

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

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        ref={heroRef}
        className="hero glitch-container text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="glitch-text text-6xl mb-4" data-text="Sathwik Garikapati">Sathwik Garikapati</h1>
        <p className="neon-text text-xl mb-8">Exploring the intersection of technology and creativity</p>
        <Link href="/projects" className="neon-button text-lg">
          Explore Projects
        </Link>
      </motion.div>

      <motion.section
        className="about-me mt-16 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="glitch-text text-4xl mb-4" data-text="About Me">About Me</h2>
        <p className="text-lg">
          I'm a futuristic developer specializing in cutting-edge web technologies. 
          With a passion for cyberpunk aesthetics and innovative solutions, 
          I create digital experiences that push the boundaries of what's possible.
        </p>
      </motion.section>

      <motion.section
        className="featured-projects mt-16 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="glitch-text text-4xl mb-8 text-center" data-text="Featured Projects">Featured Projects</h2>
        <div className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-content">
                <h3 className="text-2xl mb-2">Project {i}</h3>
                <p className="mb-4">A brief description of the project and its key features.</p>
                <Link href={`/projects/${i}`} className="neon-button">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

