"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LOADING_MESSAGES } from "@/lib/constants";
import { useSoundContext } from "@/components/providers/SoundProvider";

interface LoadingScreenProps {
  onComplete: () => void;
}

/** AI boot sequence loading animation */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [phase, setPhase] = useState<"loading" | "granted" | "done">("loading");
  const { playBoot } = useSoundContext();

  useEffect(() => {
    playBoot();
  }, [playBoot]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 8 + 2;
        if (next >= 100) {
          clearInterval(interval);
          setPhase("granted");
          setTimeout(() => {
            setPhase("done");
            setTimeout(onComplete, 800);
          }, 1200);
          return 100;
        }
        return next;
      });
    }, 150);

    const msgInterval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Circuit animation ring */}
          <div className="relative mb-12">
            <motion.div
              className="w-32 h-32 rounded-full border-2 border-cyan-glow/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-electric/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-2xl text-cyan-glow text-glow">
                {Math.floor(progress)}%
              </span>
            </div>
            <div className="scan-line rounded-full" />
          </div>

          {/* Boot messages */}
          <motion.p
            key={messageIndex}
            className="font-mono text-sm text-cyan-glow/80 tracking-widest uppercase mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {phase === "granted" ? "Access Granted..." : LOADING_MESSAGES[messageIndex]}
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-electric via-cyan-glow to-neon-purple"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Neural network dots */}
          <div className="flex gap-2 mt-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-glow"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground mt-8 tracking-wider">
            NEURAL ENGINE v3.0 // PORTFOLIO OS
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
