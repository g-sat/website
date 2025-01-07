import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="cyberpunk-nav">
      <div className="nav-content">
        <Link href="/" className="nav-logo">
          CyberDev
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

