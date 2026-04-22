'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 40) setPhase(1);
    if (progress > 80) setPhase(2);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-screen grid-bg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Blobs */}
        <div className="blob w-96 h-96 bg-accent" style={{ top: '20%', left: '10%' }} />
        <div className="blob w-64 h-64 bg-accent-2" style={{ bottom: '20%', right: '10%' }} />

        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-2xl border border-accent/30 flex items-center justify-center bg-accent/5 relative overflow-hidden">
              <div
                className="absolute inset-0 border-2 border-accent rounded-2xl"
                style={{ animation: 'spin-border 3s linear infinite' }}
              />
              <span
                className="font-display font-black text-3xl gradient-text relative z-10"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                AC
              </span>
            </div>
          </motion.div>

          {/* Name reveal */}
          <motion.div className="text-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <motion.h1
              className="font-display text-2xl font-bold tracking-[0.3em] uppercase text-text/60"
              style={{ fontFamily: 'Syne, sans-serif' }}
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              Ankur Churasiya
            </motion.h1>
            <motion.p
              className="font-mono text-xs tracking-[0.4em] text-accent mt-2 uppercase"
              style={{ fontFamily: 'Space Mono, monospace' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {phase === 0 && 'Initializing...'}
              {phase === 1 && 'Loading Assets...'}
              {phase === 2 && 'Almost Ready...'}
            </motion.p>
          </motion.div>

          {/* Progress */}
          <div className="w-64 h-px bg-white/05 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-[#00B4FF]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.span
            className="font-mono text-xs text-muted"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
