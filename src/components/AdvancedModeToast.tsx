"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useAdvancedModeContext } from "@/components/providers/AdvancedModeProvider";

/** Toast notification when Advanced Interface Mode is activated */
export function AdvancedModeToast() {
  const { message, isActive } = useAdvancedModeContext();

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-3 rounded-xl glass-strong border border-cyan-glow/40 shadow-glow-lg"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
        >
          <Zap className="w-5 h-5 text-cyan-glow animate-pulse" />
          <div>
            <p className="font-display text-sm tracking-wider text-cyan-glow">{message}</p>
            {isActive && (
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                Advanced Interface Mode Enabled
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
