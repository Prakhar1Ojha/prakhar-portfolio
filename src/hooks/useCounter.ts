"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Animate a number from 0 to target when element enters viewport */
export function useCounter(
  target: number,
  duration = 2000
): { ref: React.RefObject<HTMLSpanElement | null>; count: number } {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return { ref, count };
}
