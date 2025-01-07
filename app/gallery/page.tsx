'use client'

import { useEffect, useRef } from 'react'
import { Footer } from '../../components/footer'

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

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
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <main>
        <h1 className="glitch-text" data-text="Gallery">Gallery</h1>
        <div ref={galleryRef} className="gallery-container">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="gallery-image" data-speed={Math.random() * 0.5 + 0.5}>
              <img src={`/placeholder.svg?height=300&width=400&text=Cyberpunk+Image+${i}`} alt={`Cyberpunk Image ${i}`} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

