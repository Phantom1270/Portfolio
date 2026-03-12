"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shuklaujjwal.work@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 relative z-10 w-full max-w-4xl mx-auto border-t border-white/5 text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 flex flex-col items-center justify-center">
          Let's Build Something.
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col items-center gap-4">
          <MagneticButton
            onClick={handleCopyEmail}
            className="flex items-center gap-3 bg-white text-black hover:bg-neutral-200 hover:text-black py-4 px-8"
          >
            {copied ? <Check size={18} /> : <Mail size={18} />}
            <span className="font-semibold">{copied ? "Email Copied!" : "Email Me"}</span>
          </MagneticButton>
          
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/Phantom1270"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/5 text-muted hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjwal-s1757"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/5 text-muted hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-16 text-sm text-muted/60">
        <p>© {new Date().getFullYear()} Ujjwal Shukla. All rights reserved.</p>
        <p className="mt-1">Designed & Built with Next.js, Framer Motion, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};
