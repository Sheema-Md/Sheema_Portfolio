import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const handleResumeDownload = () => {
    // This would link to your actual resume PDF
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="text-gradient animate-glow">Sheema</span>
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CS Undergrad | Web Developer | GSSoC Contributor | Competitive Programmer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleResumeDownload}
              size="lg"
              className="btn-hero px-8 py-3 text-lg font-semibold rounded-full min-w-[200px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-lg font-semibold rounded-full min-w-[200px] gradient-border"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}