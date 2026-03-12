"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    title: "Smart Med-Cabinet",
    description: "An AI-powered medicine interaction checker and management system.",
    highlight: "Image detection for medicine identification, safety validation using RNNORM numbering, and virtual cabinet management.",
    liveLink: "https://hcaress.streamlit.app/",
    githubLink: "#",
  },
  {
    title: "Internshala Intelligence",
    description: "A robust data pipeline for career predictive modeling.",
    highlight: "Automated scraping of Internshala job entries, extensive data cleaning, and architectural foundation for predictive career modeling.",
    liveLink: "#",
    githubLink: "https://github.com/Phantom1270/WebScarapper_MLmodel",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Selected Work</h2>
        <p className="text-muted text-lg max-w-xl">
          A showcase of my recent projects focusing on artificial intelligence, data engineering, and full-stack development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: projects.length * 0.1 }}
          className="md:col-span-2 lg:col-span-1"
        >
          <ProjectCard
            title="Currently Building..."
            isPlaceholder={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
