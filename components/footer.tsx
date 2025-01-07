import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="cyberpunk-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect with me</h3>
          <div className="social-links">
            <a href="https://github.com/g-sat" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/sathwik-garikapati-9937b1337/" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:g.satl0107@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="footer-section">
          <p className="neon-text">&copy; 2023 Garikapati Sathwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

