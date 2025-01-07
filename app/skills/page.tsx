'use client'

import { useState, useEffect } from 'react'
import { Footer } from '../../components/footer'

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-neon-blue">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-dark-blue p-4 rounded-lg shadow-neon hover:shadow-neon-intense transition-all duration-300">
          <p className="text-center text-neon-pink">{skill}</p>
        </div>
      ))}
    </div>
  </div>
)

export default function Skills() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Rust", "C++"]
    },
    {
      title: "Front-end Technologies",
      skills: ["React", "Next.js", "Vue.js", "Svelte", "TailwindCSS"]
    },
    {
      title: "Back-end Technologies",
      skills: ["Node.js", "Express", "Django", "FastAPI", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git"]
    }
  ];

  return (
    <div className="cyberpunk-bg min-h-screen flex flex-col relative">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center glitch-text" data-text="Skills">Skills</h1>
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </main>
    </div>
  )
}

