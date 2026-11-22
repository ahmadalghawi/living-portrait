import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  current?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full Stack Engineer — Consultant & Freelancer',
    company: 'Independent',
    location: 'Malmö, SE',
    period: 'May 2025 – Present',
    current: true,
    description: [
      'Architected and delivered full-stack web platforms including custom booking systems, administrative dashboards, and corporate portals.',
      'Engineered mobile applications using React Native and Expo, integrated with scalable Firebase backends.',
      'Designed and implemented robust RESTful APIs and backend microservices using Node.js and MySQL.',
      'Pioneered AI-assisted development workflows to accelerate feature implementation and reduce time-to-market.'
    ],
    skills: ['Next.js', 'React Native', 'Expo', 'Node.js', 'Firebase', 'MySQL', 'AI Workflows']
  },
  {
    role: 'Full Stack Developer',
    company: 'Cognes',
    location: 'Stockholm, SE',
    period: 'Jan 2025 – May 2025',
    description: [
      'Spearheaded the development of a cross-platform mobile app for early dementia detection using React Native (Expo) and Firebase.',
      'Built a secure, responsive administrative dashboard using Next.js and Firebase Authentication.',
      'Leveraged AI IDEs (Cursor, Windsurf) and ChatGPT to optimize code generation and expedite milestone deliveries.',
      'Crafted smooth, intuitive UI/UX layouts in Figma, prioritizing accessibility for target demographics.'
    ],
    skills: ['React Native (Expo)', 'Next.js', 'Firebase Auth', 'Healthcare Tech', 'Figma UI/UX']
  },
  {
    role: 'Web Developer — Consultant & Freelancer',
    company: 'Independent',
    location: 'Malmö, SE',
    period: 'May 2024 – Dec 2024',
    description: [
      'Delivered bespoke web and mobile solutions tailored to client needs using Next.js, React, and React Native.',
      'Maximized productivity and code quality by integrating AI tools (Cursor, Windsurf) into the daily workflow.',
      'Developed and launched StramEnergi.dk — a modern clean-energy platform heavily optimized for SEO and performance.'
    ],
    skills: ['Next.js', 'React', 'React Native', 'SEO', 'Tailwind CSS']
  },
  {
    role: 'Full Stack Developer',
    company: 'Skillur AB',
    location: 'Helsingborg, SE',
    period: 'Aug 2022 – May 2024',
    description: [
      'Built and scaled a comprehensive job-matching and e-learning platform using React.js, Node.js, TypeScript, and MySQL.',
      'Designed efficient database schemas to optimize data storage, retrieval, and overall application performance.',
      'Developed Express.js APIs for seamless frontend-backend data exchange via JSON.',
      'Collaborated in Agile environments using Jira and Confluence to manage workflows and resolve technical blockers.'
    ],
    skills: ['React.js', 'Node.js', 'TypeScript', 'MySQL', 'Express.js', 'Agile']
  },
  {
    role: 'Frontend Developer',
    company: 'Talal Abu-Ghazaleh',
    location: 'Amman, Jordan',
    period: 'Dec 2017 – Apr 2019',
    description: [
      'Developed fully responsive, cross-browser compatible UIs for client portals and internal enterprise platforms.',
      'Delivered high-quality frontend solutions with HTML, CSS, and JavaScript at a leading IT consulting firm.'
    ],
    skills: ['JavaScript', 'HTML5', 'CSS3', 'UI Engineering', 'Cross-Browser']
  }
];

const EDUCATION = [
  {
    degree: 'Diploma, .NET Full Stack',
    institution: 'Lexicon',
    period: 'Dec 2020 – May 2021',
    location: 'Sweden'
  },
  {
    degree: "Bachelor's in Computer Information Systems",
    institution: 'Al-Balqa\' Applied University',
    period: 'Sep 2006 – Aug 2009',
    location: 'Jordan'
  },
  {
    degree: 'Tawjehe — IT Focus',
    institution: 'Al-Shareef Hussein Ben Naser',
    period: 'Feb 2002 – Jul 2004',
    location: 'Jordan'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-[#0E1726] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Pill */}
        <FadeIn delay={0} y={20}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#141414] text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-6">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Track Record &amp; Timeline</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Work Experience
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-base sm:text-lg text-[#D7E2EA]/70 max-w-2xl text-center mb-16 font-light">
            5+ years of delivering scalable software across Swedish tech startups, consultancies, and international organizations.
          </p>
        </FadeIn>

        {/* Timeline list */}
        <div className="w-full relative border-l-2 border-[#D7E2EA]/15 ml-4 sm:ml-6 pl-6 sm:pl-10 flex flex-col gap-12">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={exp.role + exp.period} delay={0.1 + i * 0.08} y={25}>
              <div className="relative group">
                {/* Timeline node dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${exp.current ? 'border-emerald-400 bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'border-[#D7E2EA]/40 bg-[#0E1726] group-hover:border-emerald-400'} transition-all`} />

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all flex flex-col gap-4 shadow-lg">
                  {/* Top info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D7E2EA]/10 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#D7E2EA]/70">
                        <span className="font-semibold text-emerald-400">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                          Current
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#D7E2EA]/60 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2 text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-[#181818] border border-[#D7E2EA]/10 text-xs font-mono text-[#D7E2EA]/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education Subsection */}
        <div className="w-full mt-24">
          <FadeIn delay={0.1} y={20}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Education &amp; Credentials
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, i) => (
              <FadeIn key={edu.degree} delay={0.15 + i * 0.1} y={20}>
                <div className="p-6 rounded-2xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 block mb-2">{edu.period}</span>
                    <h4 className="text-base font-bold text-white mb-1 leading-snug">{edu.degree}</h4>
                    <p className="text-sm text-[#D7E2EA]/70">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-[#D7E2EA]/40 mt-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

