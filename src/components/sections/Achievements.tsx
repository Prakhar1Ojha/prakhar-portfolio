"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { useCounter } from "@/hooks/useCounter";
import { SectionHeader } from "./SectionHeader";

function CounterItem({
  label,
  value,
  suffix,
  index,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
}) {
  const { ref, count } = useCounter(value, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center group"
    >
      <div className="glass holo-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1">
        <p className="font-display text-3xl md:text-4xl text-cyan-glow text-glow">
          <span ref={ref}>{count}</span>
          {suffix}
        </p>
        <p className="font-mono text-xs text-muted-foreground mt-2 tracking-wider uppercase">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

/** Animated achievement counters */
export function Achievements() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-r from-electric/5 via-transparent to-neon-purple/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader subtitle="// Performance Metrics" title="Achievements" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {achievements.map((item, i) => (
            <CounterItem
              key={item.label}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
