"use client";

import { useEffect, useRef } from "react";

/** CSS-based aurora, fog, stars, and mouse-reactive glow overlay */
export function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,240,255,0.08) 0%, transparent 50%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-void to-void" />
      <div
        className="absolute inset-0 opacity-30 animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(0,102,255,0.2), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(168,85,247,0.15), transparent 50%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.04]"
        style={{ animation: "float 20s ease-in-out infinite" }}
      />

      {/* Digital fog */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20"
        style={{
          background:
            "linear-gradient(to top, rgba(0,240,255,0.05), transparent)",
          animation: "float 12s ease-in-out infinite reverse",
        }}
      />

      {/* Stars */}
      <div className="stars-layer absolute inset-0" />

      {/* Mouse-reactive glow */}
      <div ref={glowRef} className="absolute inset-0 transition-all duration-300" />

      {/* Energy wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent animate-pulse" />
    </div>
  );
}
