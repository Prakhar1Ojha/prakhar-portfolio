"use client";

import { useEffect, useRef } from "react";

/** Custom cursor glow that follows mouse movement */
export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let cx = 0;
    let cy = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
    };

    const animate = () => {
      rx += (cx - rx) * 0.15;
      ry += (cy - ry) * 0.15;
      cursor.style.transform = `translate(${cx - 4}px, ${cy - 4}px)`;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-glow pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-glow/30 pointer-events-none z-[9998] hidden md:block"
        aria-hidden="true"
      />
    </>
  );
}
