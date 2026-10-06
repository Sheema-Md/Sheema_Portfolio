import React from "react";
import { ArrowDown, Github, Linkedin, FileText, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleResumeDownload = () => {
    // Open the PDF directly in a new tab
    const pdfUrl = `${process.env.PUBLIC_URL || ""}/resume.pdf`;
    window.open(pdfUrl, "_blank");
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 pt-24 pb-16 tech-grid transition-colors duration-300"
    >
      {/* Subtle radial ambient lilac spotlight */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Engineering Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide text-slate-700 dark:text-neutral-300">
              AI Full Stack Developer
            </span>
          </div>

          {/* Primary Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Sheema
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-600 dark:text-purple-400 font-mono tracking-tight mb-6">
            Computer Science Undergraduate | Full-Stack Development | AI
          </h2>

          {/* Authentic 2-Sentence Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Computer Science undergraduate specialized in building deterministic full-stack systems and high-throughput AI application pipelines. Experienced in React, Python/Flask backend.
          </p>

          {/* Button Row Layout */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {/* Primary CTA */}
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-hero px-6 py-2.5 text-sm sm:text-base font-semibold rounded-lg flex items-center gap-2 group cursor-pointer shadow-md shadow-purple-500/25"
            >
              <span>View Projects</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* GitHub Outbound */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/Sheema-Md", "_blank", "noopener,noreferrer")}
              className="px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg border border-slate-300 dark:border-neutral-800 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-900/80 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>

            {/* LinkedIn Outbound */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://linkedin.com/in/sheemamd", "_blank", "noopener,noreferrer")}
              className="px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg border border-slate-300 dark:border-neutral-800 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-900/80 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Linkedin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>LinkedIn</span>
            </Button>

            {/* Resume PDF */}
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="px-5 py-2.5 text-sm sm:text-base font-medium rounded-lg border border-slate-300 dark:border-neutral-800 bg-white/90 dark:bg-white/[0.03] backdrop-blur-md text-slate-800 dark:text-neutral-200 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-900/80 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Resume PDF</span>
            </Button>
          </div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-2 text-slate-400 dark:text-neutral-500 hover:text-slate-700 dark:hover:text-neutral-300 transition-colors cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs font-mono uppercase tracking-wider">Explore Architecture</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
}