<div align="center">

# ⚡ Prakhar — Portfolio

**A futuristic, AI-engineer-themed personal portfolio built with Next.js, Three.js, and Framer Motion.**

[![CI](https://github.com/Prakhar1Ojha/prakhar-portfolio/actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[Live Demo](#) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📖 About

This is my personal portfolio site — a holographic, sci-fi-inspired single-page experience that showcases my projects, skills, and experience as a Computer Science student and self-taught developer. It's built with the App Router on Next.js 15, animated with Framer Motion and GSAP, and rendered with a mouse-reactive Three.js particle background.

> 🔗 **Live demo link is currently a placeholder.** Once deployed (e.g. via Vercel), update the badge above and the link in this section.

## ✨ Features

- **Animated boot sequence** — neural-network-style loading screen on first load
- **Three.js particle background** — mouse-reactive, holographic grid effect
- **Glassmorphism UI** — HUD-inspired navigation and cards
- **Typing hero titles** — rotating role titles with a holographic profile frame
- **Floating AI assistant** — contextual, JARVIS-style message bubble
- **Animated skills matrix** — progress bars with glow effects
- **3D tilt project cards** — magnetic hover interactions
- **Scroll-triggered experience timeline**
- **GitHub stats section** — contribution graph / language breakdown
- **Validated contact form** with animated success/error states
- **Optional UI sound effects** (toggle in the navbar)
- **Easter egg** — `Ctrl+Shift+A` unlocks an "Advanced Interface Mode"
- **Fully responsive** across desktop, tablet, and mobile

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/) |
| 3D / Graphics | [Three.js](https://threejs.org/) |
| Scrolling | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Lucide React](https://lucide.dev/) |
| UI Primitives | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |

## 📁 Project Structure

```
prakhar-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── app/                  # Root layout, page, global styles
│   ├── components/
│   │   ├── sections/         # Hero, About, Skills, Projects, Experience, etc.
│   │   ├── layout/            # Navbar, Footer, LoadingScreen
│   │   ├── background/        # Three.js / starfield / cursor effects
│   │   ├── providers/          # Smooth scroll, sound, advanced-mode context
│   │   ├── ui/                  # shadcn/ui primitives (button, card, input...)
│   │   └── animations/         # Reusable scroll/reveal animation wrappers
│   ├── hooks/                  # useSound, useCounter, useMagnetic, useAdvancedMode
│   └── lib/                    # Site constants, content data, utils
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/Prakhar1Ojha/prakhar-portfolio.git
cd prakhar-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Customization

| What | Where |
|---|---|
| Name, title, social links | `src/lib/constants.ts` |
| Projects, skills, experience content | `src/lib/data.ts` |
| Theme colors | `tailwind.config.ts`, `src/app/globals.css` |
| Profile photo | `Hero.tsx` / `About.tsx` |
| Resume | `public/resume.pdf` |

> ⚠️ **Note:** `src/lib/constants.ts` currently ships with placeholder contact info (`prakhar@example.com`, generic social URLs). Update these with real links before deploying publicly.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + Shift + A` | Toggle Advanced Interface Mode |

## 🗺️ Future Improvements

- [ ] Deploy and link a live demo
- [ ] Replace placeholder contact/social info with real values
- [ ] Add automated linting/build checks via GitHub Actions
- [ ] Add screenshots/GIFs of the site to this README
- [ ] Add unit tests for interactive hooks (`useSound`, `useMagnetic`, `useAdvancedMode`)

## 🤝 Contributing

This is a personal portfolio, but suggestions and bug reports are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📄 License

Licensed under the [MIT License](./LICENSE).

## 📬 Contact

**Prakhar Ojha**
GitHub: [@Prakhar1Ojha](https://github.com/Prakhar1Ojha)

