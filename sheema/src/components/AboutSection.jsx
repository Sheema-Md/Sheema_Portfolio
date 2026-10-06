import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { User, Cpu, ShieldCheck, Database, GitMerge, Terminal } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Cpu,
      title: "Deterministic & AI Systems",
      desc: "Architecting systems that couple generative LLM endpoints with rigid validation schemas and deterministic pacing calculations."
    },
    {
      icon: Database,
      title: "Resilient Data Pipelines",
      desc: "Designing normalized relational MySQL databases, structured REST payloads, and robust state propagation in React."
    },
    {
      icon: Terminal,
      title: "Algorithmic Precision",
      desc: "Leading competitive programming cohorts and applying core data structure paradigms to minimize client-side latency."
    },
    {
      icon: GitMerge,
      title: "Collaborative Git Workflows",
      desc: "Experienced in open-source patch review, regression isolation, and disciplined version control across multi-contributor repos."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-purple-600 dark:text-purple-400 mb-4 shadow-sm">
            <User className="h-3.5 w-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Systems-oriented Computer Science undergraduate focused on scalable full-stack engineering and intelligent application pipelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Engineering Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50 p-6 sm:p-8 backdrop-blur-md shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Software Engineering & Architectural Focus
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science undergraduate with a disciplined focus on building reliable full-stack applications. My technical work centers on connecting deterministic frontend state machines with React.js, backed by normalized relational databases and NoSQL document models.
                </p>
                <p>
                  In projects like <span className="text-purple-600 dark:text-purple-400 font-mono font-medium">SprintMind AI</span>, I explore how generative models can be constrained by deterministic algorithms—combining dual-stage prompting with strict developer capacity metrics to prevent unverified hallucinated timelines.
                </p>
                <p>
                  As Competitive Programming Lead at GDG On Campus NECN and an open-source contributor in GirlScript Summer of Code, I emphasize clean code architecture, defensive input parsing, and reliable test verification.
                </p>
              </div>

              {/* Core Attributes Row */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-neutral-800/70 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase">Degree</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">B.Tech Computer Science</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase">Primary Focus</div>
                  <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">AI & Full-Stack Systems</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Technical Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/40 hover:border-purple-500/50 dark:hover:border-neutral-700 p-5 backdrop-blur-md transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}