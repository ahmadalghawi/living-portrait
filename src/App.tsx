import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ArrowUp, Github, Linkedin, Mail, FileText, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
    (window as any).triggerSunglasses?.(true, 60000);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    (window as any).triggerSunglasses?.(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen w-full bg-[#0E1726] text-[#D7E2EA] font-['IBM_Plex_Sans',sans-serif] selection:bg-emerald-950 selection:text-emerald-300"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HeroSection with centered interactive Living Portrait */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. AboutSection with detailed bio, skills matrix, metrics */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 3. ServicesSection: Core Full-Stack & AI Engineering capabilities */}
      <ServicesSection />

      {/* 4. ProjectsSection: 5 real production platforms (e-teori, Nashama, Cognes, StramEnergi, Skillur) */}
      <ProjectsSection />

      {/* 5. ExperienceSection: 5+ years track record & education */}
      <ExperienceSection />

      {/* Footer */}
      <footer id="contact" className="w-full bg-[#0A111C] border-t border-[#D7E2EA]/10 px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#D7E2EA]/10">
            <div className="flex flex-col">
              <span className="hero-heading font-black text-3xl sm:text-4xl uppercase tracking-tight">
                Ahmad Alghawi
              </span>
              <span className="text-xs sm:text-sm font-light text-[#D7E2EA]/60 uppercase tracking-widest mt-1">
                Senior Full Stack &amp; AI Engineer · Malmö, Sweden
              </span>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#D7E2EA]/50 font-mono">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  Ahmadalghawi.86@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +46 73-742 14 90
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Malmö, SE 21372
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Ahmad-Alghawi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181818] hover:bg-[#252525] border border-[#D7E2EA]/20 text-xs font-semibold uppercase tracking-wider text-white transition-all shadow-md hover:border-emerald-500/40"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>
              <button
                type="button"
                onClick={handleOpenContact}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-400 text-xs font-semibold uppercase tracking-widest text-white transition-all shadow-[0_4px_16px_rgba(16,185,129,0.35)] border border-emerald-400/30 hover:scale-[1.02] cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#D7E2EA]/70">
              <a href="#about" className="hover:text-white uppercase tracking-wider transition-colors text-xs">
                About
              </a>
              <a href="#services" className="hover:text-white uppercase tracking-wider transition-colors text-xs">
                Expertise
              </a>
              <a href="#projects" className="hover:text-white uppercase tracking-wider transition-colors text-xs">
                Projects
              </a>
              <a href="#experience" className="hover:text-white uppercase tracking-wider transition-colors text-xs">
                Experience
              </a>
              <button
                type="button"
                onClick={handleOpenContact}
                className="hover:text-white uppercase tracking-wider transition-colors text-xs cursor-pointer"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA]/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA]/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA]/50 transition-colors ml-2 cursor-pointer"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-light text-[#D7E2EA]/40 pt-4 border-t border-[#D7E2EA]/5">
            <p>&copy; {new Date().getFullYear()} Ahmad Alghawi. Built with React, Vite &amp; WebGL.</p>
            <p className="mt-1 sm:mt-0">Architecting high-performance web, mobile &amp; AI-driven solutions.</p>
          </div>
        </div>
      </footer>

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Floating Scroll to Top with Living Portrait Avatar & Progress Ring */}
      <ScrollToTop />
    </div>
  );
}
