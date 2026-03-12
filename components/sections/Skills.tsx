"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    skills: ["Python", "PyTorch", "Data Science", "Machine Learning", "NLP"],
  },
  {
    title: "Engineering",
    skills: ["Web Scraping", "SQL", "Operating Systems", "Computer Networks", "Next.js", "System Architecture"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Core Competencies</h2>
        <p className="text-muted text-lg max-w-xl md:mx-auto">
          Technologies and concepts I specialize in to build robust and intelligent systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="h-px bg-white/10 w-8 inline-block"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-muted hover:text-white cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
