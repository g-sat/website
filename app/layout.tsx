import type { Metadata } from 'next'
import { Orbitron, Chakra_Petch } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const orbitron = Orbitron({ subsets: ['latin'] })
const chakraPetch = Chakra_Petch({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cyberpunk Portfolio',
  description: 'A futuristic portfolio showcasing my work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/cyberpunk-city.jpg" as="image" />
      </head>
      <body className={`${orbitron.className} ${chakraPetch.className}`}>
        <div id="cyberpunk-bg"></div>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

