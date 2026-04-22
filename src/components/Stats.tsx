'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { num: 3, suffix: '+', label: 'Years Experience', desc: 'In frontend development', color: '#00E5A0' },
  { num: 50, suffix: '+', label: 'Projects Delivered', desc: 'From startups to enterprises', color: '#FF5C35' },
  { num: 100, suffix: '%', label: 'Responsive', desc: 'Every pixel, every screen', color: '#00B4FF' },
  { num: 30, suffix: '+', label: 'Happy Clients', desc: 'Long-term partnerships', color: '#9D4EDD' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 relative overflow-hidden bg-bg-2 border-y border-white/04" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-center"
            >
              <div className="font-display font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: stat.color, letterSpacing: '-0.04em' }}>
                {inView ? <CountUp end={stat.num} duration={2.5} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="font-display font-semibold text-text text-sm md:text-base mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.label}</div>
              <div className="text-muted text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
