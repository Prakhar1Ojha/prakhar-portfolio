# Prakhar Portfolio — Futuristic AI Engineer Workstation

A premium, MCU-inspired personal portfolio website built with Next.js, featuring holographic UI, Three.js particle backgrounds, Framer Motion animations, and an interactive AI assistant.

## Features

- **Epic Loading Screen** — AI boot sequence with neural network animation
- **Three.js Background** — Mouse-reactive particle field with holographic grid
- **Glassmorphism UI** — Futuristic HUD-inspired navigation and cards
- **Rotating Hero Titles** — Typing effect with holographic profile frame
- **AI Assistant** — Floating JARVIS-lite with contextual messages
- **Skills Matrix** — Animated progress bars with glow effects
- **3D Project Cards** — Tilt and magnetic hover interactions
- **Experience Timeline** — Scroll-triggered animations
- **GitHub Stats** — Contribution graph and language breakdown
- **Contact Form** — Validation with animated success/error states
- **Sound Effects** — Optional subtle UI sounds (toggle in navbar)
- **Easter Egg** — Press `Ctrl+Shift+A` for Advanced Interface Mode
- **Fully Responsive** — Optimized for desktop, tablet, and mobile

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Component animations |
| Three.js | 3D particle background |
| Lenis | Smooth scrolling |
| Lucide React | Icon library |
| Shadcn UI | Accessible UI components |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
cd prakhar-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
prakhar-portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── app/              # Layout, page, global styles
│   ├── components/       # UI, sections, background, layout
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Data, constants, utilities
├── tailwind.config.ts
└── package.json
```

## Customization

- **Site config**: `src/lib/constants.ts`
- **Portfolio content**: `src/lib/data.ts`
- **Theme colors**: `tailwind.config.ts` and `src/app/globals.css`
- **Profile photo**: Replace placeholders in `Hero.tsx` and `About.tsx`
- **Resume**: Add your PDF to `public/resume.pdf`

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+Shift+A` | Toggle Advanced Interface Mode |

## Deployment

Deploy on [Vercel](https://vercel.com):

```bash
npx vercel
```

## License

MIT — feel free to use this template for your own portfolio.
