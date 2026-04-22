# 🚀 Ankur Churasiya — Portfolio Website

A world-class, Awwwards-level frontend developer portfolio built with **Next.js 14 + TypeScript + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- ⚡ **Next.js 14** with TypeScript — Static export ready
- 🎨 **Framer Motion** — Cinematic page transitions & scroll animations
- 🌊 **Custom cursor** with glow trail
- 🎯 **Typing animation** (react-type-animation) for dynamic roles
- 🌌 **Particle network** canvas in Hero
- 📊 **Animated skill bars** & **CountUp stats**
- 🗂️ **Interactive project cards** with case study modals
- 📱 **Fully responsive** — Mobile first design
- 🔄 **Auto-rotating testimonials** slider
- 🚀 **Scroll-to-top** animated rocket button
- 📈 **Scroll progress** indicator bar
- 🎬 **Cinematic loader** with progress animation
- 🌐 **Static export** — Works on Netlify with zero config

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | Framework + SSG |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| react-type-animation | Typing effect |
| react-countup | Number counters |
| react-intersection-observer | Scroll triggers |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Clone / unzip the project
cd ankur-portfolio

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

---

## 📦 Build for Production

```bash
npm run build
```

This creates an `out/` folder with the static export.

---

## 🌐 Deploy to Netlify

### Method 1: Drag & Drop (Fastest)

1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com) → Log in
3. Drag the `out/` folder onto the Netlify dashboard
4. ✅ **Live in 30 seconds!**

### Method 2: GitHub + Auto-Deploy (Recommended)

1. Push this project to a **GitHub repository**
2. Log in to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub repo
5. Set these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click **"Deploy site"**
7. ✅ **Auto-deploys on every push!**

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=out
```

---

## 🎨 Customization

### Update Personal Info

**`src/components/Hero.tsx`**
- Change name, location, description

**`src/components/About.tsx`**
- Update bio, tags

**`src/components/Experience.tsx`**
- Update companies, dates, achievements

**`src/components/Projects.tsx`**
- Add/update project cards with real URLs

**`src/components/Contact.tsx`**
- Replace email, phone, LinkedIn, GitHub with real details

**`src/components/Footer.tsx`**
- Update social links

### Colors & Theme

Edit **`src/app/globals.css`**:
```css
:root {
  --accent: #00E5A0;     /* Primary green */
  --accent-2: #FF5C35;   /* Secondary orange */
  --bg: #050505;         /* Background */
}
```

### Add Resume PDF

Place your resume at: **`public/resume.pdf`**

The "Download CV" button will automatically link to it.

---

## 📁 Project Structure

```
ankur-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + SEO meta
│   │   ├── page.tsx         # Main page (assembles all sections)
│   │   └── globals.css      # Global styles + animations
│   └── components/
│       ├── Loader.tsx        # Cinematic intro loader
│       ├── CustomCursor.tsx  # Animated cursor
│       ├── ScrollProgress.tsx# Top progress bar
│       ├── Navbar.tsx        # Sticky navigation
│       ├── Hero.tsx          # Full-screen hero + particles
│       ├── MarqueeStrip.tsx  # Scrolling text strip
│       ├── About.tsx         # About me section
│       ├── Skills.tsx        # Skill bars + badges
│       ├── Experience.tsx    # Timeline
│       ├── Projects.tsx      # Project cards + modals
│       ├── Services.tsx      # Services grid
│       ├── Stats.tsx         # Animated counters
│       ├── Testimonials.tsx  # Auto-slider reviews
│       ├── Contact.tsx       # Contact form
│       ├── Footer.tsx        # Footer
│       └── ScrollToTop.tsx   # Rocket scroll button
├── public/
│   └── resume.pdf            # Add your resume here
├── next.config.js            # Static export config
├── netlify.toml              # Netlify deployment config
├── tailwind.config.js        # Tailwind theme
└── tsconfig.json
```

---

## 🔧 Environment Setup (Optional)

For contact form emails, add a `.env.local` file:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

Sign up at [formspree.io](https://formspree.io) for free form submissions.

---

## 📄 License

Built for **Ankur Churasiya** — Personal Portfolio 2024.

---

Made with ❤️ using Next.js + Framer Motion + Tailwind CSS
