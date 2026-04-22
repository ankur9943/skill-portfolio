'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillGroups = [
  {
    title: 'Frontend',
    color: '#00E5A0',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 88 },
      { name: 'jQuery', level: 82 },
    ],
  },
  {
    title: 'CMS & Tools',
    color: '#FF5C35',
    skills: [
      { name: 'WordPress', level: 93 },
      { name: 'Elementor Pro', level: 90 },
      { name: 'Figma', level: 80 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'PSD to HTML', level: 88 },
    ],
  },
];

const techBadges = [
  { icon: '⚛', label: 'React' },
  { icon: '▲', label: 'Next.js' },
  { icon: '🎨', label: 'Tailwind' },
  { icon: '📝', label: 'WordPress' },
  { icon: '🔷', label: 'TypeScript' },
  { icon: '🔧', label: 'Git' },
  { icon: '🎯', label: 'Figma' },
  { icon: '⚡', label: 'GSAP' },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-bg-2" ref={ref}>
      <div className="blob w-96 h-96 bg-accent-2" style={{ bottom: '-5%', left: '-5%', opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>
            Skills & Expertise
          </span>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 80 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-black leading-tight"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Tools I master
            <span className="gradient-text"> every day.</span>
          </motion.h2>
        </div>

        {/* Tech badges orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {techBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-3 glass-card rounded-full cursor-default"
            >
              <span className="text-base">{badge.icon}</span>
              <span className="font-display font-semibold text-sm text-text/80" style={{ fontFamily: 'Syne, sans-serif' }}>
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: gi === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + gi * 0.2 }}
            >
              <h3
                className="font-display font-bold text-lg mb-8"
                style={{ fontFamily: 'Syne, sans-serif', color: group.color }}
              >
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-text/80">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ fontFamily: 'Space Mono, monospace', color: group.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-fill"
                        style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}99)` }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 + gi * 0.2 + si * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
