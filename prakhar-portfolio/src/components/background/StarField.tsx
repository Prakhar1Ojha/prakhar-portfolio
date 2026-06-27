"use client";

import { useEffect } from "react";

/** Inject star field styles — lightweight alternative to canvas stars */
export function StarField() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .stars-layer {
        background-image:
          radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.6), transparent),
          radial-gradient(1px 1px at 50% 10%, rgba(0,240,255,0.8), transparent),
          radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.5), transparent),
          radial-gradient(1px 1px at 90% 80%, rgba(168,85,247,0.6), transparent),
          radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.4), transparent),
          radial-gradient(1px 1px at 85% 15%, rgba(0,240,255,0.5), transparent),
          radial-gradient(2px 2px at 45% 55%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 60% 75%, rgba(255,255,255,0.3), transparent),
          radial-gradient(1px 1px at 25% 35%, rgba(0,102,255,0.6), transparent);
        animation: twinkle 4s ease-in-out infinite alternate;
      }
      @keyframes twinkle {
        0% { opacity: 0.5; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
