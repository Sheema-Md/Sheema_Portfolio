import { motion } from "framer-motion";
import { Card } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="card-elegant p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Hello! I'm a passionate developer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing my Computer Science degree while actively contributing to open-source projects. 
                  I love creating innovative web solutions and solving complex problems through code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring new places, participating in hackathons, 
                  or sharing knowledge through speaking engagements. I believe technology should make life better for everyone.
                </p>
                <p className="text-lg text-primary font-medium">
                  🌍 "The world is a book, and those who do not travel read only one page."
                </p>
              </div>
              
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}