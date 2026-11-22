import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  FileText,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Web',
    icon: Code2,
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    skills: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3', 'Framer Motion']
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    icon: Smartphone,
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    skills: ['React Native', 'Expo', 'iOS & Android', 'Cross-Platform Architecture', 'Mobile UI/UX', 'i18n Localization']
  },
  {
    id: 'backend',
    title: 'Backend & Cloud',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    skills: ['Node.js', 'Express.js', 'Firebase (Auth, Firestore, Functions)', 'MySQL', 'PostgreSQL', 'Nest.js', 'Stripe Payments', 'JWT']
  },
  {
    id: 'ai',
    title: 'AI Engineering & Tools',
    icon: Sparkles,
    color: 'from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400',
    skills: ['Cursor', 'Windsurf', 'Claude CLI', 'Antigravity', 'ChatGPT', 'Figma to Code', 'Vercel CI/CD', 'Git / GitHub']
  }
];

const METRICS = [
  { value: '5+', label: 'Years Experience', sub: 'Production Engineering' },
  { value: '6+', label: 'Shipped Products', sub: 'Web, Mobile & SaaS' },
  { value: '3x', label: 'Faster Velocity', sub: 'AI-Assisted Workflows' },
  { value: '100%', label: 'Lifecycle Ownership', sub: 'Figma to Cloud Deploy' }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'mobile' | 'backend' | 'ai'>('all');

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center bg-[#0E1726] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden border-t border-[#D7E2EA]/10"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-950/20 via-teal-950/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Pill */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#141414] text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-6">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Profile &amp; Technical Capabilities</span>
          </div>
        </FadeIn>

        {/* Heading: "ABOUT ME" */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            About Ahmad
          </h2>
        </FadeIn>

        {/* Bio & Intro Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-4 mb-16">
          {/* Left Column: Bio paragraph & philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <FadeIn delay={0.2} y={20}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#D7E2EA] leading-snug">
                AI-driven Senior Full Stack Engineer specialized in building high-performance, scalable web and mobile platforms.
              </h3>
            </FadeIn>

            <FadeIn delay={0.25} y={20}>
              <p className="text-[#D7E2EA]/70 text-base sm:text-lg leading-relaxed font-light">
                With over <strong className="text-white font-medium">5+ years of experience</strong>, I own end-to-end product lifecycles — translating complex Figma design architectures into polished, accessible, production-grade applications using <strong className="text-white font-medium">React, Next.js (App Router), React Native (Expo), TypeScript, Node.js</strong>, and scalable cloud databases.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <p className="text-[#D7E2EA]/70 text-base sm:text-lg leading-relaxed font-light">
                I pioneer <strong className="text-white font-medium">AI-accelerated engineering workflows</strong> (leveraging Cursor, Windsurf, Claude CLI, and Antigravity) to deliver robust features with unprecedented speed, while maintaining strict code craftsmanship, type safety, and clean architecture.
              </p>
            </FadeIn>

            {/* Quick Contact & Location Badges */}
            <FadeIn delay={0.35} y={20}>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-[#D7E2EA]/60">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#D7E2EA]/10">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Malmö, Sweden (SE 21372)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#D7E2EA]/10">
                  <Mail className="w-4 h-4 text-teal-400" />
                  Ahmadalghawi.86@gmail.com
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#D7E2EA]/10">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +46 73-742 14 90
                </span>
              </div>
            </FadeIn>

            {/* Resume button & Contact button */}
            <FadeIn delay={0.4} y={20}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="Ahmad-Alghawi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] hover:bg-[#222222] text-[#D7E2EA] hover:text-white border border-[#D7E2EA]/20 font-medium text-sm tracking-wider uppercase transition-all shadow-lg hover:border-emerald-500/40 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Download CV (PDF)</span>
                </a>
                <ContactButton onClick={onOpenContact} />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            {METRICS.map((metric, i) => (
              <FadeIn key={metric.label} delay={0.2 + i * 0.1} y={20}>
                <div className="flex flex-col p-5 sm:p-6 rounded-2xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-emerald-500/30 transition-all group">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black hero-heading tracking-tight mb-1 group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </span>
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {metric.label}
                  </span>
                  <span className="text-xs text-[#D7E2EA]/50 font-light mt-0.5">
                    {metric.sub}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Skills & Technologies Matrix */}
        <div className="w-full mt-4 flex flex-col items-center">
          <FadeIn delay={0.1} y={20}>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#D7E2EA]">
                Technical Stack &amp; Tooling
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-widest mt-1">
                Modern, Scalable, Production-Tested Technologies
              </p>
            </div>
          </FadeIn>

          {/* Skill Category Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <FadeIn key={cat.id} delay={0.15 + i * 0.1} y={25}>
                  <div className={`p-6 sm:p-7 rounded-2xl bg-[#121212] border ${cat.color.split(' ')[2]} flex flex-col gap-4 hover:shadow-lg transition-all h-full`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color.split(' ')[0]} ${cat.color.split(' ')[1]} flex items-center justify-center border ${cat.color.split(' ')[2]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-wide uppercase">
                        {cat.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map(skill => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181818] border border-[#D7E2EA]/10 text-xs sm:text-sm text-[#D7E2EA]/90 hover:text-white hover:border-[#D7E2EA]/30 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
