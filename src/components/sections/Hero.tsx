"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Send, ChevronDown } from "lucide-react";
import { SITE, HERO_TITLES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { scrollToHash } from "@/components/providers/SmoothScrollProvider";
import { useSoundContext } from "@/components/providers/SoundProvider";
import { useMagnetic } from "@/hooks/useMagnetic";

/** Hero section with rotating titles and holographic profile frame */
export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { playHover, playClick } = useSoundContext();
  const magnetic = useMagnetic<HTMLDivElement>({ strength: 0.15 });

  const currentTitle = HERO_TITLES[titleIndex];

  // Typing effect for rotating titles
  useEffect(() => {
    const fullText = currentTitle;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % HERO_TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="font-mono text-sm text-cyan-glow/70 tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Hello,
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            <span className="text-white">I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-electric to-neon-purple text-glow">
              {SITE.fullName}
            </span>
          </h1>

          <div className="h-10 mb-8">
            <p className="font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-cyan-glow">{displayText}</span>
              <motion.span
                className="inline-block w-0.5 h-5 bg-cyan-glow ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Building intelligent systems and immersive digital experiences at the
            intersection of AI, design, and engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="glow"
              size="lg"
              onClick={() => {
                playClick();
                scrollToHash("#contact");
              }}
              onMouseEnter={playHover}
              className="group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              onMouseEnter={playHover}
            >
              <a href={SITE.resumeUrl} download onClick={playClick}>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Holographic profile frame */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div
            ref={magnetic.ref}
            onMouseMove={magnetic.handleMouseMove}
            onMouseLeave={magnetic.handleMouseLeave}
            className="relative transition-transform duration-200 ease-out"
          >
            {/* Outer glow rings */}
            <motion.div
              className="absolute -inset-4 rounded-2xl border border-cyan-glow/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-3xl border border-neon-purple/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl holo-border overflow-hidden animate-float">
              <div className="scan-line" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-neon-purple/20"
                aria-hidden="true"
              />
              {/* Placeholder avatar — replace with your photo */}
              <div className="absolute inset-4 rounded-xl bg-navy/80 flex items-center justify-center border border-cyan-glow/20">
                <span className="font-display text-6xl text-cyan-glow/30">P</span>
              </div>

              {/* Corner accents */}
              {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
                <div
                  key={corner}
                  className={`absolute w-4 h-4 border-cyan-glow ${
                    corner.includes("top") ? "top-2 border-t-2" : "bottom-2 border-b-2"
                  } ${corner.includes("left") ? "left-2 border-l-2" : "right-2 border-r-2"}`}
                />
              ))}
            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Systems Online
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToHash("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-cyan-glow transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
