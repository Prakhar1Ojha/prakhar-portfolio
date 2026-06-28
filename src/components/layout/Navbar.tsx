"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX, Zap } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { scrollToHash } from "@/components/providers/SmoothScrollProvider";
import { useSoundContext } from "@/components/providers/SoundProvider";
import { useAdvancedModeContext } from "@/components/providers/AdvancedModeProvider";
import { cn } from "@/lib/utils";

/** Glassmorphism navigation with glow effects */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { enabled: soundOn, toggleSound, playHover, playClick } = useSoundContext();
  const { isActive: advancedMode } = useAdvancedModeContext();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (href: string) => {
    playClick();
    scrollToHash(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong py-3 shadow-glow" : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            onMouseEnter={playHover}
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 rounded-lg border border-cyan-glow/50 flex items-center justify-center group-hover:shadow-glow transition-shadow">
              <span className="font-display text-sm text-cyan-glow">P</span>
            </div>
            <span className="font-display text-sm tracking-widest text-white hidden sm:block">
              {SITE.name.toUpperCase()}
              {advancedMode && (
                <Zap className="inline w-3 h-3 ml-1 text-cyan-glow animate-pulse" />
              )}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                onMouseEnter={playHover}
                className={cn(
                  "relative px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors",
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-glow"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-cyan-glow shadow-glow"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                toggleSound();
                playClick();
              }}
              onMouseEnter={playHover}
              className="p-2 rounded-lg glass hover:border-cyan-glow/30 transition-colors"
              aria-label={soundOn ? "Disable sound" : "Enable sound"}
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-cyan-glow" />
              ) : (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-void/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-strong rounded-xl p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block w-full text-left py-3 font-mono text-sm tracking-wider uppercase border-b border-white/5 last:border-0 hover:text-cyan-glow transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
