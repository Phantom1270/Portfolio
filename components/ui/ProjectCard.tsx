"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export const ProjectCard = ({
  title,
  description,
  highlight,
  liveLink,
  githubLink,
  isPlaceholder = false
}: {
  title: string;
  description?: string;
  highlight?: string;
  liveLink?: string;
  githubLink?: string;
  isPlaceholder?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useMotionTemplate`${mouseYSpring} * -15deg`,
        rotateY: useMotionTemplate`${mouseXSpring} * 15deg`,
        transformStyle: "preserve-3d",
      }}
      className={`glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-colors hover:bg-white/[0.05] ${isPlaceholder ? 'border-dashed border-white/20' : ''}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && <p className="text-muted text-sm mb-4 leading-relaxed">{description}</p>}
        {highlight && (
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-6">
            <p className="text-xs text-secondary/80 leading-relaxed font-medium">
              <span className="text-white/80">Highlight:</span> {highlight}
            </p>
          </div>
        )}
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 mt-auto flex items-center gap-4">
        {!isPlaceholder ? (
          <>
            <a
              href={liveLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 text-xs font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/20"
            >
              Live Demo
            </a>
            <a
              href={githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 text-xs font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/20"
            >
              GitHub
            </a>
          </>
        ) : (
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            In Active Development
          </span>
        )}
      </div>
    </motion.div>
  );
};
