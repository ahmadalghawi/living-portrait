import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('3D Modeling & Visualization');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state clear after delay
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[36px] p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-[#D7E2EA]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Get in Touch
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#D7E2EA] tracking-tight mt-1">
              Let&apos;s Build
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold uppercase text-[#D7E2EA]">
              Message Received!
            </h4>
            <p className="text-sm font-light text-[#D7E2EA]/70 max-w-sm">
              Thank you for reaching out, {name || 'friend'}. Ahmad will read your message and respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-8 py-3 rounded-full border border-[#D7E2EA]/40 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-[#1c1c1c] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@studio.com"
                  className="w-full bg-[#1c1c1c] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                Engineering Service Required
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#1c1c1c] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors cursor-pointer"
              >
                <option value="Full-Stack Web (Next.js & React)">01 - Full-Stack Web App (Next.js &amp; React)</option>
                <option value="Mobile App (React Native & Expo)">02 - Mobile App Development (React Native &amp; Expo)</option>
                <option value="AI-Accelerated Engineering">03 - AI Engineering &amp; Modern Workflows</option>
                <option value="Cloud Backend & APIs (Node/Firebase)">04 - Cloud Backend &amp; Microservices (Node / Firebase)</option>
                <option value="Senior Tech Consulting">05 - Senior Tech Consulting / Architecture</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                Project or Role Overview
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your project, platform, or role requirements..."
                className="w-full bg-[#1c1c1c] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-col text-xs text-[#D7E2EA]/60 font-light text-left w-full sm:w-auto">
                <span className="flex items-center gap-1.5 font-mono text-[#D7E2EA]/80">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  Ahmadalghawi.86@gmail.com
                </span>
                <span className="text-[11px] text-[#D7E2EA]/40">
                  Malmö, Sweden · +46 73-742 14 90
                </span>
              </div>
              <ContactButton className="!px-6 !py-2.5 text-xs w-full sm:w-auto" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
