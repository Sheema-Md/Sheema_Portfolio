import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  BadgeCheck, 
  GraduationCap
} from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Reliance Foundation Undergraduate Scholar",
      subtitle: "Academic Excellence Scholarship",
      description: "Selected as an Undergraduate Scholar by the Reliance Foundation in recognition of academic merit and leadership potential in technology.",
      icon: Award,
      badge: "Scholarship"
    },
    {
      title: "First Prize Winner — Code Relay Competition",
      subtitle: "Aarohan National Fest, NECN",
      description: "Secured 1st Place in the fast-paced algorithmic Code Relay competition, solving sequential competitive programming challenges under strict time bounds.",
      icon: Trophy,
      badge: "1st Place"
    },
    {
      title: "Finalist — GDG On-Campus DevXplore Hackathon",
      subtitle: "Developer Student Hackathon",
      description: "Selected as a Hackathon Finalist for developing a functional software prototype tackling real-world problem statements.",
      icon: Trophy,
      badge: "Finalist"
    },
    {
      title: "Technical Event Support Logistics",
      subtitle: "National-Level Hackathons",
      description: "Coordinated technical operations, platform reliability, and problem statement execution support for collegiate and national hackathons.",
      icon: CheckCircle2,
      badge: "Operations"
    }
  ];

  const certifications = [
    {
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      category: "Programming & Data Structures",
      date: "Verified"
    },
    {
      title: "Generative AI Study Jams",
      issuer: "Google",
      category: "Generative AI & LLM Foundations",
      date: "Verified"
    },
    {
      title: "API Fundamentals Student Expert",
      issuer: "Postman",
      category: "REST APIs & Endpoint Testing",
      date: "Certified"
    },
    {
      title: "GenAI Powered Data Analytics Simulation",
      issuer: "Tata",
      category: "Data Engineering & Analytics",
      date: "Simulation"
    },
    {
      title: "MERN Stack Development",
      issuer: "EduBridge (Infosys)",
      category: "Full-Stack Web Architecture",
      date: "Certified"
    },
    {
      title: "React.js Development Course",
      issuer: "Simplilearn",
      category: "Frontend State & Component Lifecycle",
      date: "Course"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      category: "Applied Machine Learning & Neural Networks",
      date: "Certified"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 relative tech-grid transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-slate-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Achievements & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Academic honors, competitive programming titles, and industry technical certifications.
          </p>
        </div>

        {/* Two-Column Split Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Column A: Academic & Competitive Achievements */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-neutral-800">
              <Trophy className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Academic & Competitive Wins
              </h3>
            </div>

            <div className="space-y-4 pt-2">
              {achievements.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/50 hover:border-emerald-500/50 dark:hover:border-neutral-700 p-5 backdrop-blur-md transition-all duration-300 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h4 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                              {item.title}
                            </h4>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400/90">
                            {item.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 leading-relaxed pt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Column B: Professional Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-neutral-800">
              <BadgeCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Verified Certifications
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-900/40 hover:border-emerald-500/50 dark:hover:border-neutral-700 p-4 backdrop-blur-md transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                            {cert.issuer}
                          </span>
                          <span className="text-slate-400 dark:text-neutral-600">•</span>
                          <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                            {cert.category}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                          {cert.title}
                        </h4>
                      </div>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                        {cert.date}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}