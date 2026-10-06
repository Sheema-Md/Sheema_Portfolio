import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme ? savedTheme === "dark" : true;
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-primary/10 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary transition-transform hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
}