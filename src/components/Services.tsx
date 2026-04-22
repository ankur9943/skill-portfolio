'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  { icon: '⚛️', title: 'Frontend Development', desc: 'Building fast, scalable React & Next.js apps with clean code architecture, reusable components, and modern state management.', color: '#00E5A0', items: ['React / Next.js SPAs', 'Component Libraries', 'API Integration', 'Performance Optimization'] },
  { icon: '📝', title: 'WordPress Development', desc: 'Custom WordPress themes and Elementor builds — from corporate sites to full WooCommerce eCommerce platforms.', color: '#FF5C35', items: ['Custom Theme Development', 'Elementor Pro Builds', 'WooCommerce Stores', 'Plugin Customization'] },
  { icon: '📱', title: 'Responsive Design', desc: 'Mobile-first, pixel-perfect layouts that look stunning on every screen — phones, tablets, desktops and beyond.', color: '#00B4FF', items: ['Mobile-First Approach', 'Cross-Browser Support', 'Fluid Typography', 'Touch Interactions'] },
  { icon: '🎨', title: 'PSD / Figma to HTML', desc: 'Converting design files into clean, semantic, and optimized HTML/CSS/JS code with pixel precision.', color: '#9D4EDD', items: ['Figma to React', 'PSD to HTML/CSS', 'Design System Setup', 'Tailwind CSS Builds'] },
  { icon: '⚡', title: 'UI Fixes & Optimization', desc: 'Diagnosing and fixing UI bugs, improving load times, optimizing Core Web Vitals, and enhancing UX.', color: '#FFB800', items: ['Bug Fixing & Debugging', 'Core Web Vitals', 'Animation Polish', 'Code Refactoring'] },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="blob w-80 h-80 bg-accent" style={{ top: '30%', right: '-5%', opacity: 0.05 }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>Services</span>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2 initial={{ y: 80 }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} className="font-display font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
            What I<span className="gradient-text"> offer.</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 group transition-all duration-500 hover:border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top left, ${s.color}05, transparent 60%)` }} />
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-display font-bold text-lg text-text mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: 'Syne, sans-serif', color: s.color }}>{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-text/60">
                    <div className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
