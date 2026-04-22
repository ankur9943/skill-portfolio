'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/ankur-churasiya', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ankur-churasiya', icon: '💼' },
  { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', icon: '💬' },
  { label: 'Email', href: 'mailto:ankurchurasiya@gmail.com', icon: '✉️' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-bg border-t border-white/04 pt-20 pb-10">
      <div className="blob w-96 h-96 bg-accent" style={{ bottom: '-30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.04 }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="font-display font-black text-base gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>AC</span>
              </div>
              <span className="font-display font-black text-xl text-text" style={{ fontFamily: 'Syne, sans-serif' }}>Ankur Churasiya</span>
            </div>
            <p className="text-muted text-sm max-w-xs leading-relaxed">Frontend Developer crafting premium digital experiences from Gwalior, India.</p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-lg hover:border-accent/40 transition-all duration-300" title={s.label}>
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Marquee text */}
        <div className="overflow-hidden border-y border-white/04 py-5 mb-10">
          <div className="marquee-track whitespace-nowrap">
            {['Frontend Developer', '·', 'React Specialist', '·', 'WordPress Expert', '·', 'UI Developer', '·', 'Available for Hire', '·', 'Gwalior, India', '·', 'Frontend Developer', '·', 'React Specialist', '·', 'WordPress Expert', '·', 'UI Developer', '·', 'Available for Hire', '·', 'Gwalior, India', '·'].map((item, i) => (
              <span key={i} className={`inline-block mr-6 font-display text-sm font-semibold tracking-widest uppercase ${item === '·' ? 'text-accent' : 'text-muted/40'}`} style={{ fontFamily: 'Syne, sans-serif' }}>{item}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted" style={{ fontFamily: 'Space Mono, monospace' }}>
            © {new Date().getFullYear()} Ankur Churasiya. Built with Next.js & ❤️
          </span>
          <button onClick={scrollToTop} className="font-mono text-xs text-muted hover:text-accent transition-colors flex items-center gap-2" style={{ fontFamily: 'Space Mono, monospace' }}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
