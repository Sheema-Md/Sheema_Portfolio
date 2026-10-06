import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Code2,
  Database,
  Terminal,
  FileCode,
  Braces,
  Cpu,
  Layers,
  Wrench
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Core Languages",
      icon: Terminal,
      skills: [
        { name: "Python", level: "Primary AI & Backend" },
        { name: "Java", level: "Object-Oriented Design" },
        { name: "C", level: "Low-Level Fundamentals" },
        { name: "JavaScript", level: "ES6+ / Async Logic" }
      ]
    },
    {
      category: "Frontend Engineering",
      icon: Braces,
      skills: [
        { name: "React.js", level: "State & Component Trees" },
        { name: "HTML5", level: "Semantic Markup" },
        { name: "CSS3", level: "Responsive Architecture" }
      ]
    },
    {
      category: "Backend & Systems",
      icon: Layers,
      skills: [
        { name: "Flask", level: "Microservices & Python Routing" },
        { name: "Node.js & Express", level: "REST API Architecture" },
        { name: "REST APIs", level: "Endpoint Contracts & Payloads" }
      ]
    },
    {
      category: "Data & Developer Tools",
      icon: Database,
      skills: [
        { name: "MongoDB & MySQL", level: "Document & Relational Schemas" },
        { name: "Postman", level: "API Testing & Verification" },
        { name: "Git & GitHub", level: "Version Control & Review Workflows" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-purple-600 dark:text-purple-400 mb-4 shadow-sm">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Engineering stack focused on deterministic algorithms, full-stack state coordination, and data pipelines.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const IconComp = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50 hover:border-purple-500/50 dark:hover:border-neutral-700 p-6 backdrop-blur-md h-full transition-all duration-300 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-neutral-800/80">
                      <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                        {group.category}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.04] hover:border-purple-500/40 dark:hover:border-neutral-700/80 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          </div>
                          <p className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 mt-0.5">
                            {skill.level}
                          </p>
                        </div>
                      ))}
                    </div>
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