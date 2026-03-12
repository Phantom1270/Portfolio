"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12 pt-20">
      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Ujjwal Shukla
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12 max-w-2xl text-lg text-muted md:text-xl leading-relaxed"
        >
          B.Tech CSE at VIT Chennai. Building intelligent systems through <span className="text-white">AI/ML</span> and <span className="text-white">Data Engineering</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="bg-white text-black hover:bg-neutral-200 hover:text-black hover:scale-105"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
