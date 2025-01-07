import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Neon City Planner",
      description: "An interactive 3D city planning tool with a cyberpunk aesthetic.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Three.js", "Node.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Cyber Secure",
      description: "A cutting-edge cybersecurity platform for protecting digital assets.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "Docker"],
      link: "#"
    },
    {
      id: 3,
      title: "Holo-Chat",
      description: "Real-time holographic communication app for immersive conversations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["WebRTC", "AR.js", "Express"],
      link: "#"
    },
    {
      id: 4,
      title: "Neural Link",
      description: "Brain-computer interface for controlling smart home devices.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Rust", "TensorFlow", "IoT"],
      link: "#"
    }
  ];

  return (
    <div className="cyberpunk-bg min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center glitch-text" data-text="Projects">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="project-card bg-dark-blue p-6 rounded-lg shadow-neon hover:shadow-neon-intense transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-2xl font-bold mb-2 text-neon-pink">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="inline-block bg-neon-blue text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="bg-neon-purple hover:bg-neon-pink text-black font-bold py-2 px-4 rounded transition-all duration-300">
                  View Project <ExternalLink className="ml-2" size={16} />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

