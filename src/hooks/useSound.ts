"use client";

import { useRef, useCallback, useState } from "react";

/** Subtle futuristic UI sounds with mute toggle */
export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  const getContext = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return ctxRef.current;
  }, []);

  /** Synthesize a short tone — no external audio files needed */
  const playTone = useCallback(
    (frequency: number, duration: number, volume = 0.05) => {
      if (!enabled) return;
      try {
        const ctx = getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = frequency;
        osc.type = "sine";
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
      } catch {
        /* Audio not supported */
      }
    },
    [enabled, getContext]
  );

  const playHover = useCallback(() => playTone(880, 0.05, 0.03), [playTone]);
  const playClick = useCallback(() => playTone(660, 0.08, 0.05), [playTone]);
  const playSuccess = useCallback(() => {
    playTone(523, 0.1, 0.04);
    setTimeout(() => playTone(659, 0.1, 0.04), 100);
    setTimeout(() => playTone(784, 0.15, 0.04), 200);
  }, [playTone]);
  const playBoot = useCallback(() => playTone(440, 0.2, 0.04), [playTone]);

  const toggleSound = useCallback(() => setEnabled((p) => !p), []);

  return { enabled, toggleSound, playHover, playClick, playSuccess, playBoot };
}
