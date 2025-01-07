import { Footer } from '../../components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="cyberpunk-bg min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center glitch-text" data-text="Contact">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-dark-blue p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <Input type="text" id="name" name="name" className="w-full bg-gray-800 text-neon-pink border border-gray-600 rounded-md focus:ring focus:ring-neon-pink focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input type="email" id="email" name="email" className="w-full bg-gray-800 text-neon-pink border border-gray-600 rounded-md focus:ring focus:ring-neon-pink focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <Textarea id="message" name="message" rows={4} className="w-full bg-gray-800 text-neon-pink border border-gray-600 rounded-md focus:ring focus:ring-neon-pink focus:outline-none" required />
              </div>
              <Button type="submit" className="bg-neon-pink hover:bg-neon-purple text-black font-bold py-2 px-4 rounded transition-all duration-300 shadow-md hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-dark-blue p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-neon-blue">Connect with Me</h2>
            <div className="space-y-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-neon-pink transition-colors duration-300">
                <Github className="mr-2" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-neon-pink transition-colors duration-300">
                <Linkedin className="mr-2" /> LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="flex items-center text-gray-300 hover:text-neon-pink transition-colors duration-300">
                <Mail className="mr-2" /> your.email@example.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
