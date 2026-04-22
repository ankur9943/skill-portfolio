'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlights = [
  { icon: '⚛️', label: 'React Expert', desc: 'Building complex SPAs & component libraries' },
  { icon: '🎨', label: 'WordPress Pro', desc: 'Custom themes, Elementor & WooCommerce' },
  { icon: '📱', label: 'Responsive Design', desc: 'Mobile-first, pixel-perfect on all devices' },
  { icon: '⚡', label: 'Performance', desc: 'Optimized code, fast loading, 60fps animations' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-pad relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="blob w-80 h-80 bg-accent" style={{ top: '20%', right: '-5%', opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 80 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                className="font-display font-black leading-tight"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Crafting digital{' '}
                <span className="gradient-text">experiences</span>{' '}
                that matter.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted text-base leading-relaxed mb-6"
            >
              I'm a Frontend Developer based in Gwalior, Madhya Pradesh with{' '}
              <span className="text-text font-medium">3+ years of experience</span> turning
              design visions into high-performance web applications. I thrive at the
              intersection of clean code and beautiful UI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-muted text-base leading-relaxed mb-10"
            >
              My expertise spans{' '}
              <span className="text-accent">React, Tailwind CSS, JavaScript</span>,
              and{' '}
              <span className="text-accent">WordPress / Elementor</span>. Whether it's
              a complex SPA or a blazing-fast WordPress site — I deliver pixel-perfect
              results with performance at the core.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'WordPress', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/08 text-xs font-mono text-muted hover:border-accent/40 hover:text-accent transition-all duration-300"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -6, borderColor: 'rgba(0,229,160,0.3)' }}
                className="glass-card p-6 transition-all duration-400 group"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div
                  className="font-display font-bold text-sm text-text mb-1 group-hover:text-accent transition-colors"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {h.label}
                </div>
                <div className="text-xs text-muted leading-relaxed">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
