"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageCircle } from "lucide-react";
import { AI_MESSAGES } from "@/lib/constants";
import { scrollToHash } from "@/components/providers/SmoothScrollProvider";
import { useSoundContext } from "@/components/providers/SoundProvider";

/** Floating AI assistant with contextual messages */
export function AIAssistant() {
  const [message, setMessage] = useState(AI_MESSAGES[0]);
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const { playHover, playClick } = useSoundContext();

  const cycleMessage = useCallback(() => {
    setMessage(AI_MESSAGES[Math.floor(Math.random() * AI_MESSAGES.length)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleMessage, 6000);
    return () => clearInterval(interval);
  }, [cycleMessage]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) cycleMessage();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cycleMessage]);

  const quickActions = [
    { label: "View Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
    { label: "My Skills", href: "#skills" },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          {/* Message bubble */}
          <AnimatePresence mode="wait">
            {(expanded || message) && (
              <motion.div
                key={message}
                className="glass-strong rounded-2xl rounded-br-sm p-4 max-w-[260px] shadow-glow"
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
              >
                <p className="font-mono text-xs text-cyan-glow/60 mb-1 tracking-wider">
                  JARVIS-LITE
                </p>
                <p className="text-sm text-white/90">{message}</p>

                {expanded && (
                  <motion.div
                    className="mt-3 flex flex-col gap-1.5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    {quickActions.map((action) => (
                      <button
                        key={action.href}
                        onClick={() => {
                          playClick();
                          scrollToHash(action.href);
                          setExpanded(false);
                        }}
                        onMouseEnter={playHover}
                        className="text-left text-xs font-mono text-cyan-glow/80 hover:text-cyan-glow transition-colors py-1"
                      >
                        → {action.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Avatar button */}
          <motion.button
            onClick={() => {
              playClick();
              setExpanded(!expanded);
            }}
            onMouseEnter={playHover}
            className="relative w-14 h-14 rounded-full glass-strong border border-cyan-glow/40 flex items-center justify-center shadow-glow group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="AI Assistant"
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-glow/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Bot className="w-6 h-6 text-cyan-glow group-hover:scale-110 transition-transform" />
            <MessageCircle className="absolute -top-1 -right-1 w-4 h-4 text-neon-purple" />
          </motion.button>

          {/* Dismiss */}
          <button
            onClick={() => setVisible(false)}
            className="text-[10px] font-mono text-muted-foreground hover:text-white transition-colors"
          >
            dismiss
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
