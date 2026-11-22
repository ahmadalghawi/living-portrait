import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { HeroBackground } from './hero-bg/HeroBackground';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

/**
 * The hero: the full name is set across the screen and the living portrait sits
 * in the space between "Ahmad" and "Alghawı". The square dot over the ı is the
 * brand dot. On phones the two words stack above and below the face.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="hero relative h-screen w-full flex flex-col justify-between overflow-x-clip select-none">
      {/* animated background that shows the skills */}
      <HeroBackground />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative w-full flex items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8 z-20"
        aria-label="Primary"
      >
        <a href="#top" className="hero-mark" aria-label="Ahmad Alghawi, back to top">
          <svg viewBox="15 7.5 34 49" width="17" height="24" aria-hidden="true">
            <circle cx="32" cy="39.5" r="12" fill="none" stroke="currentColor" strokeWidth="8" />
            <rect x="40" y="23.5" width="8" height="32" fill="currentColor" />
            <rect x="27" y="8.5" width="10" height="10" rx="2" fill="#3EE0A0" />
          </svg>
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          {NAV.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="hero-nav-link hidden sm:inline">
              {item.label}
            </button>
          ))}
          <a href="Ahmad-Alghawi-CV.pdf" target="_blank" rel="noopener noreferrer" className="hero-nav-link">
            Résumé
          </a>
          <button
            type="button"
            onClick={() => (onOpenContact ? onOpenContact() : scrollTo('contact'))}
            className="hero-nav-link"
          >
            Contact
          </button>
        </div>
      </motion.nav>

      {/* The name, with the face in the gap between the two words */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className="hero-name"
        aria-label="Ahmad Alghawi"
      >
        <span className="hero-name-first" aria-hidden="true">Ahmad</span>
        <span className="hero-name-gap" aria-hidden="true" />
        <span className="hero-name-last" aria-hidden="true">
          Alghaw<span className="hero-name-i">ı</span>
        </span>
      </motion.h1>

      {/* The living portrait, centred both ways */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        className="hero-portrait-wrap"
        id="magnetWrap"
        style={{ x: '-50%', y: '-50%' }}
      >
        <div
          className="hero-portrait-inner fade-in"
          id="magnetInner"
          style={{ '--fade-y': '30px' } as React.CSSProperties}
          data-delay="600"
        >
          <img id="faceFallback" src="user-face.png" alt="Ahmad Alghawi" />
          <canvas id="faceGl" aria-hidden="true"></canvas>
          <div id="faceProps" aria-hidden="true">
            <svg id="faceFly" viewBox="0 0 32 32">
              <path className="wing" d="M15 15C12 9.500 4.500 8.500 2 13c2.500 4.500 10 4.500 13 2z" />
              <path className="wing r" d="M17 15c3-5.500 10.500-6.500 13-2-2.500 4.500-10 4.500-13 2z" />
              <ellipse cx="16" cy="19.500" rx="4" ry="6.500" />
              <circle cx="16" cy="11.500" r="3.300" />
            </svg>
            <svg id="faceHand" viewBox="0 0 32 32">
              <path className="open" d="M10.500 16.500V8.200a1.800 1.800 0 0 1 3.600 0V14v-8a1.800 1.800 0 0 1 3.600 0V14 7a1.800 1.800 0 0 1 3.600 0v8-5a1.800 1.800 0 0 1 3.600 0v10.500c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-3.500-5.600c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.600 1z" />
              <path className="grab" d="M10.500 17v-3.300a1.800 1.800 0 0 1 3.600 0V14v-1.800a1.800 1.800 0 0 1 3.600 0V14v-1.300a1.800 1.800 0 0 1 3.600 0V14v-.3a1.800 1.800 0 0 1 3.600 0v6.800c0 5-3.400 8.500-8.400 8.500-3.600 0-5.700-1.600-7.600-4.600l-2.300-3.700c-.6-1 .1-2.200 1.200-2.400 1-.2 1.900.2 2.700 1z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="relative w-full flex flex-wrap justify-between items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="flex flex-col gap-2 max-w-[24rem]"
        >
          <span className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to senior and lead roles in Malmö and Copenhagen
          </span>
          <p className="hero-role">
            Senior full stack and AI engineer. I build fast web and mobile products, and the AI tools around them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};
