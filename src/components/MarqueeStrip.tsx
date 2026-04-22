'use client';

const items = [
  'Frontend Development',
  '✦',
  'React & Next.js',
  '✦',
  'WordPress Expert',
  '✦',
  'Responsive Design',
  '✦',
  'Tailwind CSS',
  '✦',
  'UI/UX Specialist',
  '✦',
  'Pixel Perfect',
  '✦',
  'Performance Optimization',
  '✦',
];

export default function MarqueeStrip() {
  return (
    <div className="py-5 border-y border-white/05 overflow-hidden bg-bg-2 relative">
      <div className="marquee-track whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`inline-block mr-6 font-display text-sm font-semibold tracking-widest uppercase ${
              item === '✦' ? 'text-accent' : 'text-muted'
            }`}
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
