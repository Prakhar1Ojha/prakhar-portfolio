"use client";

import { useEffect, useState, useCallback } from "react";
import { ADVANCED_MODE_SHORTCUT, EASTER_EGG_MESSAGES } from "@/lib/constants";

interface AdvancedModeState {
  isActive: boolean;
  message: string | null;
  toggle: () => void;
}

/** Hidden keyboard shortcut (Ctrl+Shift+A) activates enhanced holographic mode */
export function useAdvancedMode(): AdvancedModeState {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const toggle = useCallback(() => {
    setIsActive((prev) => {
      const next = !prev;
      if (next) {
        const msg =
          EASTER_EGG_MESSAGES[
            Math.floor(Math.random() * EASTER_EGG_MESSAGES.length)
          ];
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key.toUpperCase() === ADVANCED_MODE_SHORTCUT.key &&
        e.ctrlKey &&
        e.shiftKey
      ) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  useEffect(() => {
    document.documentElement.classList.toggle("advanced-mode", isActive);
  }, [isActive]);

  return { isActive, message, toggle };
}
