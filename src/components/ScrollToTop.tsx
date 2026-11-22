import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling down 320px
      if (scrollTop > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Circular progress calculations for SVG (radius = 26, circumference = 2 * π * 26 ≈ 163.36)
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Tooltip on hover */}
        <div
          className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-[#161a18] text-emerald-400 text-[11px] font-mono font-medium border border-emerald-500/30 shadow-lg pointer-events-none transition-all duration-200 ${
            isHovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'
          }`}
        >
          Top · {Math.round(scrollProgress)}%
        </div>

        {/* Main interactive button */}
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0d1210] p-1 flex items-center justify-center cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          aria-label="Scroll back to top"
        >
          {/* SVG Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 60 60"
          >
            {/* Background track circle */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              className="stroke-[#1f2923]"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Animated progress circle */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              className="stroke-emerald-400 transition-all duration-150 ease-out"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* User Face Avatar Container */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-black flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
            {/* Looking-Up Face (default) / Sunglasses Face (on hover) */}
            <img
              src={isHovered ? 'user-face-sunglasses.png' : 'user-face-up.png'}
              alt="Ahmad Alghawi"
              className="w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-300 select-none"
            />

            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>

          {/* Upward Chevron Floating Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-md shadow-emerald-900/50 group-hover:bg-emerald-400 group-hover:-translate-y-0.5 transition-all duration-200">
            <ArrowUp className="w-3 h-3 stroke-[3]" />
          </div>
        </button>
      </div>
    </div>
  );
};

