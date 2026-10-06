import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Briefcase, GitPullRequest, Code2, Terminal, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "GDG On Campus NECN",
      role: "Competitive Programming Lead",
      period: "2025 – Present",
      type: "Technical Leadership",
      icon: Terminal,
      description: "Coordinating competitive algorithm exercises and managing programming initiatives for the local developer cohort.",
      technologies: ["C", "Python", "Java", "Algorithms", "Git"],
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      company: "GirlScript Summer of Code",
      role: "Open Source Contributor",
      period: "2025",
      type: "Open Source Program",
      icon: GitPullRequest,
      description: "Operated within Git/GitHub-based distributed version control workflows: performed regression hunting, triaged and resolved codebase issues, and landed functional patch updates.",
      technologies: ["Git", "GitHub", "JavaScript", "HTML5", "CSS3"],
      badgeColor: "text-teal-400 border-teal-500/30 bg-teal-500/10"
    },
    {
      company: "TechnoHacks",
      role: "Web Development Intern",
      period: "2025",
      type: "Internship",
      icon: Code2,
      description: "Developed responsive web pages and frontend components using HTML5, CSS3, and JavaScript; implemented interactive features and collaborated via Git/GitHub version control workflows.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
      badgeColor: "text-sky-400 border-sky-500/30 bg-sky-500/10"
    },
    {
      company: "UptoSkills",
      role: "Web Development Intern",
      period: "2024 – 2025",
      type: "Internship",
      icon: Briefcase,
      description: "Engineered modular UI components and handled RESTful endpoint communications; ensured cross-browser performance and robust frontend state management.",
      technologies: ["React.js", "JavaScript", "REST APIs", "Git"],
      badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Work & Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Chronological engineering roles, open-source patch delivery, and technical cohort coordination.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-300 dark:border-neutral-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;

            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center group-hover:border-emerald-500 transition-colors shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50 hover:border-emerald-500/50 dark:hover:border-neutral-700 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                          {exp.company}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-500 dark:text-neutral-400 mt-1">
                        {exp.type}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-neutral-400 px-3 py-1 rounded bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] shrink-0 self-start sm:self-auto">
                      <Calendar className="h-3 w-3 text-emerald-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200 dark:border-neutral-800/50">
                    <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-950/80 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
