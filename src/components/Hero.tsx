'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.7 ? '#00E5A0' : '#ffffff',
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00E5A0';
            ctx.globalAlpha = (1 - dist / 120) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    };
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden grid-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Particles */}
      {/* <canvas ref={canvasRef} id="particles-canvas" /> */}

      {/* Gradient blobs */}
      <motion.div
        className="blob w-full max-w-[600px] h-[600px] bg-accent"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-10%', left: '-10%' }}
      />
      <motion.div
        className="blob w-full max-w-[400px] h-[400px] bg-accent-2"
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ bottom: '0%', right: '-5%' }}
      />
      <motion.div
        className="blob w-full max-w-[300px] h-[300px]"
        style={{ background: '#00B4FF', top: '50%', left: '60%' }}
        animate={{ x: [0, 15, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 ">
        <div className="flex flex-col items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>
              Available for work
            </span>
            <div className="h-px w-16 bg-accent/40" />
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
              className="font-display text-lg md:text-xl font-medium tracking-wider text-text/50 uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Hi, I'm
            </motion.p>
          </div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
              className="font-display font-black leading-none text-text"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                letterSpacing: '-0.03em',
              }}
            >
              Ankur
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.7 }}
              className="font-display font-black leading-none"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2.5rem, 7vw, 9rem)',
                letterSpacing: '-0.03em',
                WebkitTextStroke: '1px rgba(240,237,232,0.3)',
                color: 'transparent',
              }}
            >
              Churasiya
            </motion.h1>
          </div>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-accent" />
            <span className="font-mono text-sm md:text-base text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Developer',
                  2000,
                  'WordPress Specialist',
                  2000,
                  'UI Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-body text-base md:text-lg text-muted max-w-xl leading-relaxed mb-12"
          >
            Crafting pixel-perfect digital experiences from{' '}
            <span className="text-text">Gwalior, India</span>. 3+ years building
            premium UIs with React, WordPress & modern web technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => scrollTo('#projects')} className="btn-primary group">
              View Projects
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="text-lg"
              >
                →
              </motion.span>
            </button>
            <a href="/resume.pdf" download className="btn-outline">
              Download CV ↗
            </a>
            <button onClick={() => scrollTo('#contact')} className="btn-outline">
              Let's Talk
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex gap-10 mt-16 pt-8 border-t border-white/05"
          >
            {[
              { num: '3+', label: 'Years Exp.' },
              { num: '50+', label: 'Projects' },
              { num: '100%', label: 'Responsive' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display font-black text-2xl md:text-3xl gradient-text"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {stat.num}
                </div>
                <div className="font-body text-xs text-muted mt-1 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-widest text-muted uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>

      {/* Floating tech icons */}
      {['⚛', '⚡', '🎨', '</>', '🚀'].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none hidden lg:block"
          style={{
            right: `${10 + i * 6}%`,
            top: `${20 + i * 13}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </section>
  );
}
