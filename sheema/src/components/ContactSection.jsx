import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowUpRight, MessageSquare } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      name: "GitHub",
      handle: "Sheema-Md",
      icon: Github,
      url: "https://github.com/Sheema-Md",
      description: "Review repository commits, PR reviews, and open-source contributions",
      badge: "Code Repositories"
    },
    {
      name: "LinkedIn",
      handle: "in/sheema-md",
      icon: Linkedin,
      url: "https://linkedin.com/in/sheemamd",
      description: "Professional updates, hackathon milestones, and engineering connections",
      badge: "Professional Network"
    },
    {
      name: "Email",
      handle: "sheema.sadiya.18@gmail.com",
      icon: Mail,
      url: "mailto:sheema.sadiya.18@gmail.com",
      description: "Direct channel for internship inquiries, project reviews, and discussions",
      badge: "Direct Contact"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid border-t border-slate-200 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Available for AI Full Stack Intern opportunities, technical discussions, and collaborative engineering.
          </p>
        </div>

        {/* Contact Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/60 p-8 sm:p-10 text-center backdrop-blur-md shadow-md dark:shadow-none">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
              Ready to collaborate on production software?
            </h3>
            <p className="text-slate-600 dark:text-neutral-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Whether you are evaluating candidates for an engineering internship at Electronic Arts or exploring full-stack AI development, feel free to reach out directly.
            </p>

            <Button
              size="lg"
              onClick={() => window.open("mailto:sheema.sadiya.18@gmail.com", "_blank")}
              className="btn-hero px-7 py-3 text-sm sm:text-base font-semibold rounded-lg inline-flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-emerald-500/20"
            >
              <Mail className="h-4 w-4" />
              <span>Initiate Conversation</span>
            </Button>
          </Card>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                  className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/40 hover:border-emerald-500/40 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-900/70 p-6 backdrop-blur-md transition-all duration-300 cursor-pointer h-full flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-neutral-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <div className="space-y-1 mb-2">
                      <span className="text-[11px] font-mono text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                        {link.badge}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 break-all font-semibold">
                        {link.handle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed mt-3">
                      {link.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-neutral-900 text-center">
          <p className="text-xs font-mono text-slate-500 dark:text-neutral-500">
            © 2025 Sheema • Built with React.js, Tailwind CSS, & Framer Motion
          </p>
        </div>

      </div>
    </section>
  );
}