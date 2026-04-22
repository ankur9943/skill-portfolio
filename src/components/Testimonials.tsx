'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const testimonials = [
  { name: 'Rahul Sharma', role: 'CEO, TechStartup India', text: 'Ankur delivered our React application ahead of schedule with impeccable code quality. His attention to detail and pixel-perfect implementation exceeded all our expectations. Highly recommended!', rating: 5, avatar: 'RS' },
  { name: 'Priya Mehta', role: 'Product Manager, DigitalCo', text: 'Working with Ankur was a fantastic experience. He transformed our Figma designs into a blazing-fast website. His WordPress expertise saved us weeks of development time.', rating: 5, avatar: 'PM' },
  { name: 'Vikram Singh', role: 'Founder, EcomBrand', text: 'Ankur built our WooCommerce store from scratch. The performance optimization alone boosted our conversion rate by 35%. Outstanding frontend skills and communication throughout.', rating: 5, avatar: 'VS' },
  { name: 'Neha Joshi', role: 'Marketing Director, GrowthAgency', text: 'Our website redesign with Ankur was seamless. He brought creative ideas we never considered and the final product looks absolutely premium. Will definitely work again!', rating: 5, avatar: 'NJ' },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden" ref={ref}>
      <div className="blob w-96 h-96 bg-accent" style={{ top: '30%', left: '50%', opacity: 0.04 }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>Client Love</span>
        </div>
        <div className="overflow-hidden mb-16">
          <motion.h2 initial={{ y: 80 }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} className="font-display font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
            What clients<span className="gradient-text"> say.</span>
          </motion.h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-10"
              >
                <div className="text-accent text-4xl mb-6 font-serif leading-none">&ldquo;</div>
                <p className="text-text/80 text-lg md:text-xl leading-relaxed mb-8 font-body">{testimonials[active].text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-sm text-accent" style={{ fontFamily: 'Syne, sans-serif' }}>{testimonials[active].avatar}</div>
                  <div>
                    <div className="font-display font-bold text-text" style={{ fontFamily: 'Syne, sans-serif' }}>{testimonials[active].name}</div>
                    <div className="text-xs text-muted">{testimonials[active].role}</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <span key={i} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`transition-all duration-300 rounded-full ${i === active ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
