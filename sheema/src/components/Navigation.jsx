import React, { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button"; // keep your path/alias

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const navItems = React.useMemo(() => [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ], []);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const updateIndicator = (activeId) => {
    const navEl = navRef.current;
    const indicatorEl = indicatorRef.current;
    if (!navEl || !indicatorEl) return;

    const btn = navEl.querySelector(`[data-id="${activeId}"]`);
    if (!btn) {
      indicatorEl.style.opacity = "0";
      return;
    }

    const btnRect = btn.getBoundingClientRect();
    const navRect = navEl.getBoundingClientRect();

    const left = btnRect.left - navRect.left;
    const width = btnRect.width;

    indicatorEl.style.transition =
      "transform 250ms cubic-bezier(.2,.8,.2,1), width 250ms cubic-bezier(.2,.8,.2,1), opacity 150ms";
    indicatorEl.style.transform = `translateX(${left}px)`;
    indicatorEl.style.width = `${width}px`;
    indicatorEl.style.opacity = "1";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    updateIndicator(activeSection);

    const onResize = () => updateIndicator(activeSection);
    window.addEventListener("resize", onResize);

    if (navRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserverRef.current = new ResizeObserver(() =>
        updateIndicator(activeSection)
      );
      resizeObserverRef.current.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeObserverRef.current)
        resizeObserverRef.current.disconnect();
    };
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 shadow-sm shadow-purple-500/50" />
            <span className="text-base font-bold font-mono tracking-tight text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Sheema<span className="text-slate-400 dark:text-neutral-500 font-normal">.dev</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            <div ref={navRef} className="relative flex items-center space-x-1 lg:space-x-4">
              <span
                ref={indicatorRef}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500 dark:bg-purple-400 rounded-full pointer-events-none shadow-sm shadow-purple-400/50"
                style={{ transform: "translateX(0px)", width: 0, opacity: 0 }}
              />
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-id={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="ml-4 pl-4 border-l border-slate-200 dark:border-neutral-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile nav toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-neutral-800"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile nav menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up pb-4">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-lg shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-purple-400 bg-purple-500/10"
                      : "text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
