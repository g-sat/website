'use client'

import { useEffect, useRef, useState } from 'react'

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const handleMouseMove = (e: MouseEvent) => {
      const images = gallery.querySelectorAll('.gallery-image')
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 10
      const y = (clientY / window.innerHeight - 0.5) * 10

      images.forEach((img: Element) => {
        const imgElement = img as HTMLElement
        const speed = parseFloat(imgElement.getAttribute('data-speed') || '1')
        imgElement.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
      setCursorPosition({ x: clientX, y: clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <h1 className="glitch-text text-4xl mb-8 text-center py-8" data-text="Gallery">Gallery</h1>
      <div ref={galleryRef} className="gallery-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="gallery-image" data-speed={Math.random() * 0.5 + 0.5}>
            <img src={`/placeholder.svg?height=300&width=400&text=Cyberpunk+Image+${i}`} alt={`Cyberpunk Image ${i}`} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
    </main>
  )
}

