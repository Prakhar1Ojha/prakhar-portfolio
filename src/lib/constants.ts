/** Site-wide constants and configuration */

export const SITE = {
  name: "Prakhar",
  fullName: "Prakhar",
  title: "Future Software Engineer",
  email: "prakhar@example.com",
  github: "https://github.com/prakhar",
  linkedin: "https://linkedin.com/in/prakhar",
  instagram: "https://instagram.com/prakhar",
  resumeUrl: "/resume.pdf",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_TITLES = [
  "Future Software Engineer",
  "AI Developer",
  "Full Stack Developer",
  "Tech Enthusiast",
] as const;

export const LOADING_MESSAGES = [
  "Initializing System...",
  "Loading Neural Engine...",
  "Scanning Portfolio...",
  "Calibrating Holographic Interface...",
  "Access Granted...",
] as const;

export const AI_MESSAGES = [
  "Welcome back.",
  "Need to see my projects?",
  "Explore my AI work.",
  "Scroll to discover more.",
  "Systems Online.",
  "Energy Shield Enabled.",
] as const;

export const EASTER_EGG_MESSAGES = [
  "AI Mode Activated",
  "Suit Diagnostics",
  "Power Core Charging",
  "Systems Online",
  "Energy Shield Enabled",
] as const;

/** Keyboard shortcut: Ctrl+Shift+A for Advanced Interface Mode */
export const ADVANCED_MODE_SHORTCUT = { key: "A", ctrl: true, shift: true };
