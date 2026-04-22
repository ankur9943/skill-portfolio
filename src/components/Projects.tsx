'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
  {
    title: 'Awwwex',
    url: 'https://awwwex.com',
    category: 'Web Platform',
    description: 'A feature-rich web platform built with custom WordPress theme, advanced Elementor layouts, WooCommerce integration and performance-optimized frontend code.',
    tech: ['WordPress', 'Elementor', 'JavaScript', 'CSS3', 'WooCommerce'],
    color: '#00E5A0',
    emoji: '🌐',
  },
  {
    title: 'Golokaso',
    url: 'https://golokaso.com',
    category: 'eCommerce',
    description: 'Full eCommerce solution with custom product pages, seamless checkout UX, mobile-first design and optimized loading speeds.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'JavaScript'],
    color: '#FF5C35',
    emoji: '🛒',
  },
  {
    title: 'Luthra India',
    url: 'https://luthraindia.com',
    category: 'Corporate',
    description: 'Professional corporate website with smooth animations, responsive layout, custom post types and SEO-optimized content architecture.',
    tech: ['WordPress', 'Elementor Pro', 'CSS3', 'JavaScript'],
    color: '#00B4FF',
    emoji: '🏢',
  },
  {
    title: 'STL Tech Projects',
    url: '#',
    category: 'React SPA',
    description: 'Enterprise React application with component-based architecture, Tailwind UI, API integration and state management for a leading tech company.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    color: '#9D4EDD',
    emoji: '⚛️',
  },
  {
    title: 'DPW eCommerce',
    url: '#',
    category: 'eCommerce',
    description: 'High-converting eCommerce build with custom payment flows, product filtering, wishlist functionality and a blazing-fast frontend stack.',
    tech: ['React', 'WordPress', 'WooCommerce', 'Tailwind CSS'],
    color: '#FFB800',
    emoji: '💼',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'React SPA', 'eCommerce', 'Corporate', 'Web Platform'];
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-bg-2" ref={ref}>
      <div className="blob w-80 h-80 bg-accent" style={{ top: '5%', left: '-5%', opacity: 0.05 }} />
      <div className="blob w-80 h-80 bg-accent-2" style={{ bottom: '5%', right: '-5%', opacity: 0.05 }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>Projects</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: 80 }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} className="font-display font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
              Selected<span className="gradient-text"> work.</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} className={`text-xs font-mono px-4 py-2 rounded-full border transition-all duration-300 ${activeFilter === f ? 'bg-accent text-bg border-accent font-bold' : 'border-white/08 text-muted hover:border-accent/30 hover:text-accent'}`} style={{ fontFamily: 'Space Mono, monospace' }}>{f}</button>
            ))}
          </motion.div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }} className="project-card group">
                <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(${project.color}20 1px, transparent 1px), linear-gradient(90deg, ${project.color}20 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                  <motion.div className="text-6xl relative z-10" whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>{project.emoji}</motion.div>
                  <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.url !== '#' ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2.5 px-5">Live Preview ↗</a>
                    ) : (
                      <span className="btn-outline text-xs py-2.5 px-5 opacity-60">Private Project</span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 text-xs font-mono px-3 py-1 rounded-full" style={{ fontFamily: 'Space Mono, monospace', color: project.color, background: project.color + '15', border: `1px solid ${project.color}30` }}>{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-text group-hover:text-accent transition-colors mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{project.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/03 border border-white/06 text-muted" style={{ fontFamily: 'Space Mono, monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
