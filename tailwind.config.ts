import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        void: "#050505",
        navy: {
          DEFAULT: "#0a1628",
          deep: "#061018",
          light: "#122a4a",
        },
        cyan: {
          glow: "#00f0ff",
          dim: "#00a8b3",
        },
        electric: {
          DEFAULT: "#0066ff",
          bright: "#3399ff",
        },
        neon: {
          purple: "#a855f7",
          pink: "#ec4899",
        },
        accent: {
          red: "#ff3366",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "monospace"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 240, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 240, 255, 0.4)",
        "glow-purple": "0 0 30px rgba(168, 85, 247, 0.4)",
        "glow-blue": "0 0 30px rgba(0, 102, 255, 0.4)",
      },
      animation: {
        pulse-glow: "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(0, 240, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
