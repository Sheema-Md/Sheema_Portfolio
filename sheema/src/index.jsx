// src/index.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import "./index.css";
// Components
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { ContactSection } from "./components/ContactSection";
import { EnteringPage } from "./components/EnteringPage";
import App from "./App.jsx";

// Main Index Component
const Index = () => {
  const [showEntrance, setShowEntrance] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 transition-colors duration-300">
      <AnimatePresence>
        {showEntrance && (
          <EnteringPage onEnter={() => setShowEntrance(false)} />
        )}
      </AnimatePresence>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
};

// Render React App
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
export default Index;