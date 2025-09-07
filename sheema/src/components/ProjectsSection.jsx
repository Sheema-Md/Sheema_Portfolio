import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Sheema-Md/Sheema_Portfolio",
      liveUrl: "https://sheema-md.github.io/Sheema_Portfolio/",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Voice Translator",
      description: "An AI-powered voice translation application that converts speech to text and translates it to multiple languages in real-time using modern web APIs.",
      technologies: ["Python","SpeechRegonition","googletrans","pyaudio"],
      githubUrl: "https://github.com/Sheema-Md/voice_translator",
      liveUrl: "",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "PHP Management System",
      description: "A comprehensive web-based management system with user authentication, CRUD operations, and dashboard analytics built with PHP and MySQL.",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      githubUrl: "https://github.com/Sheema-Md/SakhiBazaar",
      liveUrl: "",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="card-elegant h-full overflow-hidden">
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-1 group-hover:border-primary/50 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex-1 btn-hero"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}