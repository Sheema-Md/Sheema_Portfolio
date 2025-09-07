import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Terminal,
  FileCode,
  Braces,
  Laptop
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "HTML", icon: FileCode, color: "text-orange-500" },
    { name: "CSS", icon: Code2, color: "text-blue-500" },
    { name: "JavaScript", icon: Braces, color: "text-yellow-500" },
    { name: "React", icon: Globe, color: "text-cyan-500" },
    { name: "PHP", icon: Terminal, color: "text-purple-500" },
    { name: "MySQL", icon: Database, color: "text-blue-600" },
    { name: "Python", icon: Terminal, color: "text-green-500" },
    { name: "Java", icon: Laptop, color: "text-red-500" },
    { name: "C", icon: Code2, color: "text-gray-600" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "GitHub", icon: GitBranch, color: "text-gray-800 dark:text-gray-200" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="card-elegant p-6 text-center h-full flex flex-col items-center justify-center hover:shadow-glow transition-all duration-300">
                  <div className={`${skill.color} mb-4 p-3 rounded-full bg-background shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}