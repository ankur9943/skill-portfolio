'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Chirpn IT Solutions',
    role: 'Frontend Developer',
    period: 'Aug 2022 — Present',
    duration: '2+ Years',
    type: 'Full Time',
    color: '#00E5A0',
    description:
      'Leading frontend development for client projects — building responsive React applications, custom WordPress themes, and pixel-perfect UI from Figma/PSD designs.',
    achievements: [
      'Delivered 30+ client websites with 100% on-time delivery',
      'Built reusable React component libraries reducing dev time by 40%',
      'Optimized Core Web Vitals scores to 90+ across all projects',
      'Implemented CI/CD pipelines for seamless deployments',
    ],
    tech: ['React', 'WordPress', 'Tailwind CSS', 'JavaScript', 'Elementor', 'Git'],
  },
  {
    company: 'Webhut Technology',
    role: 'Web Designer Intern',
    period: 'Jan 2022 — Jul 2022',
    duration: '7 Months',
    type: 'Internship',
    color: '#FF5C35',
    description:
      'Kickstarted my professional journey designing and developing responsive websites, translating Figma mockups into clean HTML/CSS.',
    achievements: [
      'Designed 10+ website mockups using Figma',
      'Developed responsive landing pages from scratch',
      'Learned WordPress + Elementor in a production environment',
      'Collaborated with cross-functional teams on client deliverables',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Figma', 'Bootstrap'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="blob w-96 h-96 bg-accent" style={{ top: '10%', right: '-8%', opacity: 0.05 }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>Experience</span>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: 80 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-black leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
          >
            My professional<span className="gradient-text"> journey.</span>
          </motion.h2>
        </div>
        <div className="relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00E5A0, rgba(0,229,160,0.1))' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          />
          <div className="space-y-16 pl-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-[41px] top-0 w-3 h-3 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: exp.color, background: '#050505' }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                </motion.div>
                <div className="glass-card p-8 hover:border-white/10 transition-all duration-500 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono px-3 py-1 rounded-full border" style={{ fontFamily: 'Space Mono, monospace', color: exp.color, borderColor: exp.color + '30', background: exp.color + '08' }}>{exp.type}</span>
                        <span className="text-xs text-muted font-mono" style={{ fontFamily: 'Space Mono, monospace' }}>{exp.duration}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-text group-hover:text-accent transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{exp.role}</h3>
                      <p className="font-body text-sm mt-1" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted whitespace-nowrap" style={{ fontFamily: 'Space Mono, monospace' }}>{exp.period}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6">{exp.description}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-3 text-sm text-text/70">
                        <span style={{ color: exp.color }} className="mt-0.5 shrink-0">▸</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/03 border border-white/06 text-muted" style={{ fontFamily: 'Space Mono, monospace' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
