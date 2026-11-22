import React from 'react';
import { FadeIn } from './FadeIn';
import { Code, Smartphone, Cpu, Cloud, Layout } from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Full-Stack Web Architecture',
    category: 'Web & Enterprise SaaS',
    description:
      'Architecting and delivering high-performance, responsive web applications with Next.js (App Router), React, and TypeScript. Building robust backend microservices in Node.js and Express with optimized database schemas.',
    stack: ['Next.js (App Router)', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS']
  },
  {
    id: '02',
    name: 'Cross-Platform Mobile Development',
    category: 'iOS & Android Apps',
    description:
      'Engineering performant mobile applications using React Native and Expo. Seamlessly integrating real-time backends, device APIs, offline caching, push notifications, and multi-language internationalization.',
    stack: ['React Native', 'Expo', 'iOS & Android', 'Firebase', 'REST APIs', 'i18n']
  },
  {
    id: '03',
    name: 'AI-Assisted Development & Workflows',
    category: 'Velocity & Modern Tooling',
    description:
      'Pioneering modern AI workflows (Cursor, Windsurf, Claude CLI, Antigravity) to compress feature development timelines by 3x while strictly enforcing clean architecture, rigorous type safety, and maintainability.',
    stack: ['Cursor', 'Windsurf', 'Claude CLI', 'Antigravity', 'LLM Integration', 'Prompt Engineering']
  },
  {
    id: '04',
    name: 'Cloud Infrastructure, DB & Payments',
    category: 'Backend & DevOps',
    description:
      'Designing scalable data layers with MySQL, PostgreSQL, and Firebase (Auth, Firestore, Cloud Functions). Implementing secure JWT authentication, Stripe payment processing, and continuous deployment on Vercel.',
    stack: ['Firebase', 'MySQL', 'PostgreSQL', 'Stripe', 'JWT', 'Vercel CI/CD']
  },
  {
    id: '05',
    name: 'Figma to Production Code & Design Systems',
    category: 'UI/UX & Accessibility',
    description:
      'Translating complex Figma prototypes into fluid, accessible, high-conversion interfaces. Prioritizing Core Web Vitals, SEO optimization, responsive layout precision, and micro-interactions.',
    stack: ['Figma', 'Design Systems', 'Core Web Vitals', 'WCAG Accessibility', 'Framer Motion']
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0E1726] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-0 overflow-hidden"
    >
      {/* High-End Flanking Wave Ribbon - Sleek Black on White */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle Monochrome Black Translucent Ribbon Fill */}
          <linearGradient id="servicesRibbonFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
          </linearGradient>

          {/* Crisp Black Leading Edge Line */}
          <linearGradient id="servicesLeadingLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* 1. Slim Translucent Ribbon Body (30px width) */}
        <path
          d="M 990,0 C 1020,160 1110,300 1070,460 C 1030,620 930,740 970,870 C 990,925 1010,970 1020,1000 L 1050,1000 C 1040,970 1020,925 1000,870 C 960,740 1060,620 1100,460 C 1140,300 1050,160 1020,0 Z"
          fill="url(#servicesRibbonFill)"
        />

        {/* 2. Primary Thin Crisp Black Line */}
        <path
          d="M 990,0 C 1020,160 1110,300 1070,460 C 1030,620 930,740 970,870 C 990,925 1010,970 1020,1000"
          fill="none"
          stroke="url(#servicesLeadingLine)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* 3. Secondary Outer Edge Guide (Thin Dashed Black Track) */}
        <path
          d="M 1020,0 C 1050,160 1140,300 1100,460 C 1060,620 960,740 1000,870 C 1020,925 1040,970 1050,1000"
          fill="none"
          stroke="#000000"
          strokeOpacity="0.15"
          strokeWidth="1"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={20}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E1726]/50 px-3.5 py-1.5 rounded-full border border-[rgba(12,12,12,0.15)] bg-black/5 mb-4 inline-block">
              Core Engineering Expertise
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <h2
              className="font-black uppercase text-center text-[#0E1726] leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            >
              Services &amp; Capabilities
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="text-base sm:text-lg text-[#0E1726]/70 max-w-2xl mt-4 font-normal">
              Specialized engineering consulting and end-to-end execution for startups, scaleups, and enterprise businesses.
            </p>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08} y={30}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 sm:py-12 border-b border-[rgba(12,12,12,0.15)] group transition-all duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number */}
                <div
                  className="font-black text-[#0E1726] leading-none select-none tracking-tighter shrink-0 w-full md:w-[24%] lg:w-[20%] mb-4 md:mb-0 transition-transform duration-300 group-hover:translate-x-2"
                  style={{ fontSize: 'clamp(3rem, 7vw, 100px)' }}
                >
                  {service.id}
                </div>

                {/* Name + Description + Stack tags */}
                <div className="flex flex-col gap-3 flex-1 md:pl-6 lg:pl-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/5 text-[#0E1726]/60">
                      {service.category}
                    </span>
                  </div>
                  <h3
                    className="font-bold uppercase text-[#0E1726] tracking-tight group-hover:text-emerald-800 transition-colors"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-normal leading-relaxed max-w-2xl text-[#0E1726]/75 text-sm sm:text-base"
                  >
                    {service.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.stack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-[#0E1726]/80 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
