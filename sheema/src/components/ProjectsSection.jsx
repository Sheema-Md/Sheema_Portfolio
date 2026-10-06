import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, CheckCircle2, Cpu, Database, AlertCircle } from "lucide-react";

export function ProjectsSection() {
  const [expandedProjectId, setExpandedProjectId] = useState("sprintmind-ai");

  const toggleProject = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: "sprintmind-ai",
      title: "SprintMind AI",
      tagline: "AI-Assisted Sprint Planning & Deterministic Pacing Engine",
      badge: "Flagship AI Architecture",
      toplineMetrics: [
        "Dual-stage prompting",
        "Deterministic pacing calculation (0–100%)"
      ],
      summary: "AI-assisted sprint planning application combining LLM logic with deterministic scheduling metrics.",
      technologies: ["React.js", "Python", "Flask", "REST APIs", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Sheema-Md/SprintAI",
      liveUrl: "",
      isPrimary: true,
      details: {
        problem: "Manual sprint planning struggles to reconcile open-ended language goals with strict time-hour developer constraints.",
        solution: "A unified system that parses project inputs via structured prompting and tracks real-time execution via an interactive Kanban layout.",
        architecture: "Powered by Google GenAI SDK (Gemini 2.5 Flash) bound to Pydantic parameter validation layers and a Python/Flask microserver routing to localStorage state.",
        features: [
          "Multi-week timeline projection with dynamic capacity analysis",
          "Capacity-hour analyzer mapping task weights against dev velocity",
          "Drag-and-shift Kanban board with optimistic client state updates",
          "Multi-theme selector (Cyberpunk / Ocean / Emerald / Sunset Rose)"
        ]
      }
    },
    {
      id: "sentiment-analysis",
      title: "Multi-Source Sentiment Analysis System",
      tagline: "Comparative NLP Pipeline & Real-Time Aggregator",
      badge: "Ensemble ML Pipeline",
      toplineMetrics: [
        "+15% classification reliability via ensemble classification"
      ],
      summary: "Full-stack sentiment analysis engine integrating comparative natural language processing pipelines.",
      technologies: ["React.js", "Python", "Flask", "REST APIs", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Sheema-Md/Multi-Source-Sentimental-Analyzer.git",
      liveUrl: "https://multi-source-sentimental-analyzer.onrender.com/",
      isPrimary: false,
      details: {
        problem: "Single-model sentiment evaluators frequently misinterpret nuanced domain vocabulary and live streaming news data.",
        solution: "A multi-model consensus system that ingests unstructured textual streams and scores polarity across six statistical and machine learning algorithms.",
        architecture: "React frontend orchestrating payload deliveries to a multi-model Python Flask backend with asynchronous request dispatching.",
        features: [
          "Real-time ingestion via text arrays and news APIs evaluated simultaneously",
          "Ensemble voting layer across VADER, TextBlob, Logistic Regression, and Random Forest models",
          "Visual consensus dashboard comparing algorithm confidence distributions",
          "Structured JSON response contracts ensuring low-latency data rendering"
        ]
      }
    },
    {
      id: "sakhi-bazaar",
      title: "Sakhi Bazaar MERN",
      tagline: "Specialized Web Marketplace Engine for Micro-Entrepreneurs",
      badge: "MERN Stack Architecture",
      toplineMetrics: [
        "Full-Stack MERN Architecture",
        "Dynamic Product Schemas & REST APIs"
      ],
      summary: "A full-stack web marketplace built with MongoDB, Express, React, and Node.js custom-engineered to empower micro-entrepreneurs with digital storefronts.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Tailwind CSS", "Git"],
      githubUrl: "https://github.com/Sheema-Md/SakhiBazaar-MERN",
      liveUrl: "",
      isPrimary: false,
      roleSpecs: "Full-Stack Developer & Database Architect",
      details: {
        problem: "Micro-entrepreneurs often lack lightweight, modern digital storefronts that handle localized catalogs, product filtering, and inventory safely.",
        solution: "Engineered a responsive full-stack MERN platform tailored for regional sellers with self-serve catalog administration, cart state, and order tracking.",
        architecture: "React frontend orchestrating stateful checkout pipelines to an Express.js and Node.js API layer with flexible MongoDB document models.",
        features: [
          "Full-stack MERN implementation (MongoDB, Express, React, Node.js)",
          "Dynamic document schemas with validation layers for products and vendor catalogs",
          "Decoupled RESTful API endpoints for product CRUD operations and shopping cart sessions",
          "Responsive, accessible UI with category filtering and instant price calculations"
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-purple-600 dark:text-purple-400 mb-4 shadow-sm">
            <Layers className="h-3.5 w-3.5" />
            <span>Systems & Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production-grade systems highlighting generative AI pipelines, deterministic execution engines, and full-stack data integrity.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`border transition-all duration-300 overflow-hidden shadow-sm ${
                    project.isPrimary 
                      ? "bg-white/95 dark:bg-neutral-900/80 border-purple-500/50 shadow-md shadow-purple-500/10" 
                      : "bg-white/90 dark:bg-neutral-900/50 border-slate-200 dark:border-neutral-800/80 hover:border-slate-400 dark:hover:border-neutral-700"
                  }`}
                >
                  {/* Scannable Card Header & Topline */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-mono text-xs text-slate-500 dark:text-neutral-500 font-medium">
                            0{index + 1}
                          </span>
                          <span className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                            project.isPrimary
                              ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30"
                              : "bg-slate-100 dark:bg-neutral-800/60 text-slate-700 dark:text-neutral-300 border-slate-200 dark:border-neutral-700/60"
                          }`}>
                            {project.badge}
                          </span>
                          {project.roleSpecs && (
                            <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                              • {project.roleSpecs}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-mono text-purple-600 dark:text-purple-400/90">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Topline Metric Badges */}
                      <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2">
                        {project.toplineMetrics.map((metric) => (
                          <div
                            key={metric}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-neutral-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-slate-700 dark:text-neutral-300 text-base leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tech Badges & Interactive Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-neutral-800/60">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-neutral-950/70 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        {/* Drawer Toggle */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleProject(project.id)}
                          className="h-9 px-3.5 text-xs font-medium border-slate-300 dark:border-neutral-800 bg-white/90 dark:bg-white/[0.02] text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800/80 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{isExpanded ? "Collapse Details" : "View Details"}</span>
                          {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                        </Button>

                        {/* GitHub Code */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                          className="h-9 px-3 text-xs font-medium border-slate-300 dark:border-neutral-800 bg-white/90 dark:bg-white/[0.02] text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800/80 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </Button>

                        {/* Live Demo if present */}
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                            className="btn-hero h-9 px-3.5 text-xs font-semibold rounded flex items-center gap-1.5 cursor-pointer shadow-sm"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Demo</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Detail Drawer (Smooth Expansion) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="border-t border-slate-200 dark:border-neutral-800/80 bg-slate-50/80 dark:bg-neutral-950/70 p-6 sm:p-8"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          
                          {/* Left Column: Problem & Solution */}
                          <div className="space-y-5">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                                <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
                                <span>The Engineering Problem</span>
                              </div>
                              <p className="text-sm text-slate-700 dark:text-neutral-300 leading-relaxed pl-5.5 border-l border-slate-300 dark:border-neutral-800">
                                {project.details.problem}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                                <CheckCircle2 className="h-3.5 w-3.5 text-purple-500" />
                                <span>The Architectural Solution</span>
                              </div>
                              <p className="text-sm text-slate-700 dark:text-neutral-300 leading-relaxed pl-5.5 border-l border-slate-300 dark:border-neutral-800">
                                {project.details.solution}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider">
                                <Cpu className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                                <span>AI & Technical Architecture</span>
                              </div>
                              <p className="text-sm text-slate-700 dark:text-neutral-300 leading-relaxed pl-5.5 border-l border-slate-300 dark:border-neutral-800">
                                {project.details.architecture}
                              </p>
                            </div>
                          </div>

                          {/* Right Column: Key Features & Engineering Blueprint */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                              <Database className="h-3.5 w-3.5 text-purple-500" />
                              <span>Key Technical Features</span>
                            </div>
                            <ul className="space-y-2.5">
                              {project.details.features.map((feature, fIndex) => (
                                <li 
                                  key={fIndex}
                                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-neutral-300 leading-relaxed bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] p-2.5 rounded-md shadow-xs"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}