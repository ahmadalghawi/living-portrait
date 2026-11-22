import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { 
  ExternalLink, 
  Smartphone, 
  Globe, 
  Activity, 
  Zap, 
  GraduationCap, 
  ShieldCheck, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  linkText?: string;
  themeColor: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  previewType: 'exam' | 'delivery' | 'health' | 'energy' | 'learning';
}

const PROJECTS: Project[] = [
  {
    id: 'e-teori',
    title: 'e-teori.dk',
    subtitle: 'Danish Driver Theory Exam Platform (Web & Mobile)',
    category: 'EdTech & Licensing Platform',
    period: 'Jan 2026 – Aug 2026',
    description:
      'Engineered an interactive multi-platform preparation system helping students pass Danish driver theory tests on their first attempt, featuring both traditional and digital test simulations.',
    highlights: [
      'Architected full-stack Next.js web application paired with cross-platform React Native Expo mobile app',
      'Engineered secure Stripe payment workflows for subscription and one-time test bundle purchases',
      'Designed high-performance MySQL data layer for tracking student test scores, progress analytics, and timed exam sessions',
      'Deployed on Render with continuous integration pipelines for zero-downtime updates'
    ],
    stack: ['Next.js', 'React Native', 'Expo', 'MySQL', 'Stripe', 'Render', 'TypeScript'],
    link: 'https://e-teori.dk',
    linkText: 'Visit e-teori.dk',
    themeColor: 'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/30',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40',
    icon: GraduationCap,
    previewType: 'exam'
  },
  {
    id: 'nashama',
    title: 'Nashama Delivery',
    subtitle: 'On-Demand Logistics & Real-Time Dispatch System',
    category: 'Logistics & Courier App',
    period: 'May 2025 – Present',
    description:
      'Cross-platform mobile application connecting merchant storefronts and dispatch drivers with instantaneous real-time order claiming, interactive routing, and audio note workflows.',
    highlights: [
      'Developed native-feeling React Native mobile app with Expo delivering fluid 60fps performance on iOS & Android',
      'Built real-time order claiming engine and instant push notification dispatch via Firebase Firestore and Cloud Functions',
      'Implemented voice notes recording & playback allowing couriers to communicate delivery details hands-free',
      'Integrated WhatsApp API for automated receipts and implemented comprehensive Arabic/English i18n localization'
    ],
    stack: ['React Native', 'Expo', 'Firebase', 'Firestore', 'i18n', 'WhatsApp API', 'Audio API'],
    themeColor: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
    icon: Smartphone,
    previewType: 'delivery'
  },
  {
    id: 'cognes',
    title: 'Cognes Dementia Healthcare Platform',
    subtitle: 'AI HealthTech App for Early Cognitive Detection',
    category: 'HealthTech & AI Diagnostics',
    period: 'Jan 2025 – May 2025 (Stockholm, SE)',
    description:
      'Spearheaded the development of a cross-platform mobile app for early dementia detection and clinical appointment scheduling, paired with a secure administrative dashboard for medical practitioners.',
    highlights: [
      'Built accessible, intuitive React Native (Expo) app prioritizing usability and high contrast for elderly demographics',
      'Integrated secure video test recording functionality stored directly into encrypted Firebase storage buckets',
      'Constructed responsive clinician administrative portal in Next.js with role-based Firebase Authentication',
      'Leveraged AI-assisted development tools (Cursor, Windsurf) to expedite complex clinical milestone deliveries'
    ],
    stack: ['Next.js', 'React Native', 'Expo', 'Firebase Auth', 'Healthcare Video API', 'Figma'],
    themeColor: 'from-teal-500/20 via-emerald-500/10 to-transparent border-teal-500/30',
    badgeColor: 'text-teal-400 border-teal-500/30 bg-teal-950/40',
    icon: Activity,
    previewType: 'health'
  },
  {
    id: 'stramenergi',
    title: 'StramEnergi.dk',
    subtitle: 'Clean Energy & Smart Grid Consumer Portal',
    category: 'CleanTech & Energy Analytics',
    period: 'Jun 2024 – Jan 2025 (Malmö, SE)',
    description:
      'Developed and launched a high-traffic Scandinavian clean-energy platform heavily optimized for Core Web Vitals, organic search ranking, and instant energy consumption estimation.',
    highlights: [
      'Architected Next.js and TypeScript frontend delivering 98+ Google Lighthouse scores across desktop & mobile',
      'Created interactive energy calculator estimating consumer cost savings across solar, heat pumps, and green tariffs',
      'Structured technical SEO architecture and dynamic OpenGraph tagging driving significant organic inbound leads',
      'Designed responsive UI/UX with modern Scandinavian aesthetic using Tailwind CSS and accessible typography'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO', 'Core Web Vitals', 'Analytics'],
    link: 'https://stramenergi.dk',
    linkText: 'Visit StramEnergi.dk',
    themeColor: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
    icon: Zap,
    previewType: 'energy'
  },
  {
    id: 'skillur',
    title: 'Skillur.com',
    subtitle: 'Job-Matching & E-Learning SaaS Platform',
    category: 'EdTech & Talent Matching',
    period: 'Aug 2022 – May 2024 (Helsingborg, SE)',
    description:
      'Engineered and scaled core microservices, matching algorithms, and student dashboards for a Swedish career acceleration and e-learning SaaS platform.',
    highlights: [
      'Built scalable React.js and TypeScript interfaces supporting thousands of active concurrent learners',
      'Designed optimized MySQL relational database schemas for complex skill-to-job matching queries',
      'Developed modular Express.js REST APIs for seamless frontend-backend data exchange and analytics logging',
      'Collaborated in Agile development sprints with Jira and Confluence to resolve complex technical blockers'
    ],
    stack: ['React.js', 'Node.js', 'TypeScript', 'MySQL', 'Express.js', 'REST APIs'],
    themeColor: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40',
    icon: Globe,
    previewType: 'learning'
  }
];

export const ProjectsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('e-teori');

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#0E1726] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden border-t border-[#D7E2EA]/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* High-End Flanking Wave Ribbon - Thin White on Dark */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1200 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle Luminous Ribbon Gradient Fill */}
          <linearGradient id="projectsRibbonFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="35%" stopColor="#34d399" stopOpacity="0.06" />
            <stop offset="75%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
          </linearGradient>

          {/* Thin Luminous Pure White to Mint Leading Edge Line */}
          <linearGradient id="projectsLeadingLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#a7f3d0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
          </linearGradient>

          <filter id="projectsGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Slim Luminous Ribbon Body (30px width) */}
        <path
          d="M 1020,0 C 1030,30 1090,140 1025,310 C 945,480 675,560 535,700 C 415,820 395,920 435,1000 L 465,1000 C 425,920 445,820 565,700 C 705,560 975,480 1055,310 C 1120,140 1060,30 1050,0 Z"
          fill="url(#projectsRibbonFill)"
        />

        {/* 2. Primary Thin Crisp White Line */}
        <path
          d="M 1020,0 C 1030,30 1090,140 1025,310 C 945,480 675,560 535,700 C 415,820 395,920 435,1000"
          fill="none"
          stroke="url(#projectsLeadingLine)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#projectsGlow)"
        />

        {/* 3. Secondary Outer Edge Guide (Thin Dashed White Track) */}
        <path
          d="M 1050,0 C 1060,30 1120,140 1055,310 C 975,480 705,560 565,700 C 445,820 425,920 465,1000"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Pill */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#141414] text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-6">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Selected Production Systems</span>
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Featured Projects
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-base sm:text-lg text-[#D7E2EA]/70 max-w-2xl text-center mb-16 font-light">
            Production web platforms, cross-platform mobile apps, and scalable SaaS systems architected from design to cloud deployment.
          </p>
        </FadeIn>

        {/* Projects Cards Grid */}
        <div className="w-full flex flex-col gap-10">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.id} delay={0.15 + i * 0.08} y={30}>
                <div
                  className={`w-full rounded-3xl bg-[#121212] border border-[#D7E2EA]/10 p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start justify-between hover:border-[#D7E2EA]/30 transition-all duration-300 relative overflow-hidden group shadow-xl`}
                >
                  {/* Subtle card glow */}
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.themeColor} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`} />

                  {/* Left Column: Project details */}
                  <div className="flex flex-col gap-4 flex-1 z-10">
                    {/* Header tags */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${project.badgeColor}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {project.category}
                      </span>
                      <span className="text-xs text-[#D7E2EA]/50 font-mono tracking-wider">
                        {project.period}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D7E2EA]/60 hover:text-white transition-colors p-1"
                            aria-label={`Open ${project.title}`}
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#D7E2EA]/70 leading-relaxed font-light mt-1">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D7E2EA]/50">
                        Key Architecture &amp; Delivery:
                      </span>
                      <ul className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
                        {project.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-[#191919] border border-[#D7E2EA]/10 text-xs font-mono text-[#D7E2EA]/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link button if available */}
                    {project.link && (
                      <div className="pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{project.linkText || 'Visit Live Platform'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Sleek Simulated Interactive UI Window */}
                  <div className="w-full lg:w-[380px] shrink-0 z-10 rounded-2xl bg-[#0A111C]/90 border border-[#D7E2EA]/15 p-5 shadow-2xl flex flex-col gap-4 self-stretch justify-between font-mono text-xs">
                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest">
                        {project.id}.production.sys
                      </span>
                    </div>

                    {/* Content Preview by Project Type */}
                    {project.previewType === 'exam' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-[#D7E2EA]/60">
                          <span>Exam Session: Category B</span>
                          <span className="text-emerald-400 font-bold">25/25 Pass</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#121212] border border-cyan-500/20 text-[#D7E2EA]/90 flex flex-col gap-2">
                          <span className="text-cyan-400 font-semibold text-[11px]">Q14: Right of Way at Roundabout</span>
                          <span className="text-[10px] text-[#D7E2EA]/60">Interactive multi-choice driving test module with instant feedback.</span>
                        </div>
                        <div className="w-full bg-[#181818] h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[94%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-[#D7E2EA]/40">
                          <span>Stripe Checkout: Active</span>
                          <span>MySQL Synced</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'delivery' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-emerald-400 font-semibold">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Live Driver Dispatch
                          </span>
                          <span>Order #4892</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#121212] border border-emerald-500/20 flex flex-col gap-2">
                          <div className="flex justify-between text-[11px] text-[#D7E2EA]">
                            <span>Courier Claimed</span>
                            <span className="text-emerald-400 font-bold">ETA 8 min</span>
                          </div>
                          <span className="text-[10px] text-[#D7E2EA]/60">Voice Note attached: &quot;Deliver to 2nd floor rear door&quot;</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-[#D7E2EA]/50">
                          <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">Firebase Firestore</span>
                          <span>Arabic/English i18n</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'health' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-indigo-400 font-semibold">
                          <span>Cognitive Video Diagnostics</span>
                          <span className="text-emerald-400">Encrypted</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#121212] border border-indigo-500/20 flex flex-col gap-2">
                          <span className="text-[11px] text-[#D7E2EA]">Patient Assessment Session #02</span>
                          <div className="h-6 flex items-center gap-1">
                            <div className="w-1 h-3 bg-teal-500 rounded animate-pulse" />
                            <div className="w-1 h-5 bg-emerald-500 rounded animate-pulse" />
                            <div className="w-1 h-2 bg-teal-400 rounded" />
                            <div className="w-1 h-6 bg-cyan-400 rounded animate-pulse" />
                            <div className="w-1 h-4 bg-emerald-500 rounded" />
                            <div className="w-1 h-5 bg-teal-400 rounded animate-pulse" />
                            <div className="w-1 h-3 bg-emerald-600 rounded" />
                          </div>
                          <span className="text-[10px] text-[#D7E2EA]/60">Next.js Clinician Portal: Ready</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'energy' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-amber-400 font-semibold">
                          <span>Clean Energy Grid</span>
                          <span className="text-emerald-400 font-bold">98 Lighthouse</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#121212] border border-amber-500/20 flex flex-col gap-1.5">
                          <div className="flex justify-between text-[11px] text-[#D7E2EA]">
                            <span>Solar Tariff Calculation</span>
                            <span className="text-amber-300">-42% kWh</span>
                          </div>
                          <span className="text-[10px] text-[#D7E2EA]/60">SEO Architecture: #1 Google Ranking</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-[#D7E2EA]/40">
                          <span>Next.js SSR</span>
                          <span>Tailwind CSS</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === 'learning' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-emerald-400 font-semibold">
                          <span>Talent &amp; EdTech SaaS</span>
                          <span className="text-cyan-400 font-bold">MySQL Relational</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#121212] border border-emerald-500/20 flex flex-col gap-1.5">
                          <span className="text-[11px] text-[#D7E2EA]">Automated Job Match Radar</span>
                          <span className="text-[10px] text-[#D7E2EA]/60">Express API: &lt;45ms response time</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-[#D7E2EA]/40">
                          <span>React + TypeScript</span>
                          <span>Node.js Backend</span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Status */}
                    <div className="pt-2 border-t border-[#D7E2EA]/10 flex items-center justify-between text-[10px] text-[#D7E2EA]/40">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Status: Active Production
                      </span>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
