"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Placeholder for the user's image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group w-full max-w-sm mx-auto lg:mx-0 flex justify-center"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
          <div className="relative aspect-square w-full sm:w-80 lg:w-96 rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl">
            {/* The user can replace /images/avatar.png with their actual photo */}
            <Image
              src="/images/avatar.png"
              alt="Ujjwal Shukla"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Description / About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            About Me.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            I am a B.Tech Computer Science student at VIT Chennai with a passion for software engineering, artificial intelligence, and building scalable data pipelines.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            My experience ranges from developing full-stack web applications to deploying complex computer vision models like DermAlert and data-intensive solutions like the Internshala Web Scraper. I love transforming complex paradigms into crisp, aesthetic interfaces.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <div className="glass px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Curious Thinker</span>
            </div>
            <div className="glass px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Rapid Learner</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
