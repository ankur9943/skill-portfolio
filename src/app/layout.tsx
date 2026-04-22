import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ankur Churasiya — Frontend Developer & React Specialist',
  description:
    'Portfolio of Ankur Churasiya — Frontend Developer with 3+ years crafting pixel-perfect UIs using React, WordPress, Tailwind CSS and modern web technologies.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'WordPress Developer',
    'UI Developer',
    'Ankur Churasiya',
    'Gwalior',
    'Web Developer India',
  ],
  openGraph: {
    title: 'Ankur Churasiya — Frontend Developer',
    description: 'Building premium digital experiences with React, WordPress & modern web tech.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  );
}
