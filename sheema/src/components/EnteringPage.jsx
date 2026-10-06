import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, Sparkles, Cpu, Layers } from "lucide-react";
import { Button } from "./ui/button";

export function EnteringPage({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const statuses = [
    "Establishing secure connection...",
    "Mounting React & AI pipelines...",
    "Configuring deterministic state engines...",
    "Systems Online • Ready to Explore"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + 4;
        if (next > 75) setStatusIndex(3);
        else if (next > 45) setStatusIndex(2);
        else if (next > 20) setStatusIndex(1);
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 text-neutral-100 overflow-hidden tech-grid"
    >
      {/* Ambient background lilac radial glow */}
      <div
        aria-hidden="true"
        className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-md w-full mx-4 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl shadow-2xl relative z-10 text-center">

        {/* Animated Brand Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500/25 via-violet-500/15 to-transparent border border-purple-500/35 shadow-lg shadow-purple-500/20"
        >
          <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
            S
          </span>
          <div className="absolute inset-0 rounded-2xl border border-purple-400/30 animate-ping opacity-25" />
        </motion.div>

        {/* Title & Tagline */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-white mb-2"
        >
          SHEEMA
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-6"
        >
          AI Full Stack Developer • Portfolio
        </motion.p>

        {/* Progress Bar Container */}
        <div className="space-y-2.5 mb-8">
          <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-violet-400 rounded-full shadow-sm shadow-purple-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              {statuses[statusIndex]}
            </span>
            <span className="text-purple-400 font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Enter Button or Direct Action */}
        <div className="flex flex-col gap-2.5">
          <Button
            onClick={onEnter}
            disabled={!isReady}
            className={`w-full py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isReady
                ? "btn-hero cursor-pointer shadow-lg shadow-purple-500/30 hover:scale-[1.02]"
                : "bg-neutral-800 text-neutral-500 cursor-not-allowed border border-neutral-700/50"
              }`}
          >
            <span>{isReady ? "Enter Portfolio" : "Initializing Architecture..."}</span>
            {isReady && <ChevronRight className="h-4 w-4 animate-pulse" />}
          </Button>

        </div>

      </div>
    </motion.div>
  );
}
