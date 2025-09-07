import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Sheema-Md",
      description: "Check out my code and contributions",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/sheemamd",
      description: "Connect with me professionally",
      color: "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sheemasadiya688@gmail.com",
      description: "Send me a message",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-elegant p-8 sm:p-12 text-center mb-12">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Let's build something amazing together!</h3>
                <p className="text-muted-foreground text-lg">
                  Whether you have a project in mind, need a collaborator, or just want to say hello, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <Button
                size="lg"
                onClick={() => window.open("mailto:your.email@example.com", "_blank")}
                className="btn-hero px-8 py-3 text-lg font-semibold rounded-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </Button>
            </Card>
          </motion.div>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="card-elegant p-6 text-center h-full hover:shadow-glow transition-all duration-300 cursor-pointer"
                        onClick={() => window.open(link.url, "_blank")}>
                    <div className="flex flex-col items-center">
                      <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className={`h-8 w-8 text-primary ${link.color} transition-colors duration-300`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {link.description}
                      </p>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2025 Sheema with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}