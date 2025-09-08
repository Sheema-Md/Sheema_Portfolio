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
}, [navItems]); // Safe because navItems is memoized

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gradient">Portfolio</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            <div ref={navRef} className="relative flex items-center space-x-8">
              <span
                ref={indicatorRef}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full pointer-events-none"
                style={{ transform: "translateX(0px)", width: 0, opacity: 0 }}
              />
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-id={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="ml-4">
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
              className="rounded-full"
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
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg shadow-lg mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
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
