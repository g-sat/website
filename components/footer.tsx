import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="cyberpunk-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect with me</h3>
          <div className="social-links">
            <a href="https://github.com/yourusername" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/yourusername" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:your.email@example.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="footer-section">
          <p className="neon-text">&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

