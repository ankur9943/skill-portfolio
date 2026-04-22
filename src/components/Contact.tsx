'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const contactLinks = [
  { icon: '✉️', label: 'Email', value: 'ankurchurasiya@gmail.com', href: 'mailto:ankurchurasiya@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: '💼', label: 'LinkedIn', value: '/in/ankur-churasiya', href: 'https://linkedin.com/in/ankur-churasiya' },
  { icon: '🐙', label: 'GitHub', value: '/ankur-churasiya', href: 'https://github.com/ankur-churasiya' },
  { icon: '💬', label: 'WhatsApp', value: 'Message Me', href: 'https://wa.me/91XXXXXXXXXX' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="contact" className="section-pad relative overflow-hidden bg-bg-2" ref={ref}>
      <div className="blob w-96 h-96 bg-accent" style={{ bottom: '0%', right: '-5%', opacity: 0.07 }} />
      <div className="blob w-64 h-64 bg-accent-2" style={{ top: '10%', left: '-5%', opacity: 0.06 }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Space Mono, monospace' }}>Contact</span>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h2 initial={{ y: 80 }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }} className="font-display font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
            Let's build something<span className="gradient-text"> great.</span>
          </motion.h2>
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="text-muted text-base mb-16 max-w-lg">
          Have a project in mind? Open to freelance work, full-time roles, and exciting collaborations.
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.form initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-muted mb-2 font-mono" style={{ fontFamily: 'Space Mono, monospace' }}>Your Name</label>
                <input className="form-input" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs text-muted mb-2 font-mono" style={{ fontFamily: 'Space Mono, monospace' }}>Email Address</label>
                <input className="form-input" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div>
              <label className="block text-xs text-muted mb-2 font-mono" style={{ fontFamily: 'Space Mono, monospace' }}>Subject</label>
              <input className="form-input" placeholder="Project Inquiry / Collaboration" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
            </div>
            <div>
              <label className="block text-xs text-muted mb-2 font-mono" style={{ fontFamily: 'Space Mono, monospace' }}>Message</label>
              <textarea className="form-input resize-none" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn-primary w-full justify-center" disabled={sending}>
              {sent ? '✅ Message Sent!' : sending ? 'Sending...' : 'Send Message →'}
            </button>
          </motion.form>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-4">
            <p className="text-muted text-sm mb-6 leading-relaxed">Prefer direct contact? Reach me through any channel below. I typically respond within 24 hours.</p>
            {contactLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }} whileHover={{ x: 6 }} className="flex items-center gap-4 glass-card p-4 group transition-all duration-300 hover:border-accent/30">
                <span className="text-2xl">{link.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted font-mono mb-0.5" style={{ fontFamily: 'Space Mono, monospace' }}>{link.label}</div>
                  <div className="font-body text-sm text-text group-hover:text-accent transition-colors truncate">{link.value}</div>
                </div>
                <span className="text-muted group-hover:text-accent transition-colors text-sm">→</span>
              </motion.a>
            ))}
            <div className="mt-8 glass-card p-5 border-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <div>
                  <div className="font-display font-semibold text-sm text-accent" style={{ fontFamily: 'Syne, sans-serif' }}>Available for new projects</div>
                  <div className="text-xs text-muted mt-0.5">Currently accepting freelance and full-time opportunities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
