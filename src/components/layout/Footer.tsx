"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUp,
  Heart,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { useSoundContext } from "@/components/providers/SoundProvider";

const socialLinks = [
  { icon: Github, href: SITE.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
  { icon: Instagram, href: SITE.instagram, label: "Instagram" },
];

/** Animated futuristic footer */
export function Footer() {
  const { playHover, playClick } = useSoundContext();

  const scrollTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent opacity-50" />
      <div className="scan-line" />

      <div className="relative max-w-7xl mx-auto section-padding pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg tracking-widest text-cyan-glow">
              {SITE.fullName.toUpperCase()}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider">
              SYSTEMS ONLINE // {new Date().getFullYear()}
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-3 rounded-lg glass hover:border-cyan-glow/40 hover:shadow-glow transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-cyan-glow transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            onMouseEnter={playHover}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:border-cyan-glow/40 transition-all font-mono text-xs tracking-wider uppercase"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="w-4 h-4 text-cyan-glow" />
            Back to Top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-accent-red" /> and futuristic tech
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">Ctrl+Shift+A</kbd> for Advanced Mode
          </p>
        </div>
      </div>
    </footer>
  );
}
