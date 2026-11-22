import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onSelectProject?: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0E1726] p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA] tracking-wide text-lg sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            onClick={() => onSelectProject && onSelectProject(project)}
            label="Live Project"
          />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% width -> 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.title} Preview 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.title} Preview 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width -> 7 cols) */}
          <div className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] min-h-[280px] sm:min-h-[350px]">
            <img
              src={project.col2Img}
              alt={`${project.title} Highlight`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
