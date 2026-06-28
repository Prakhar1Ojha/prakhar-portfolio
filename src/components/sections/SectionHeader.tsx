"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  id?: string;
}

/** Reusable animated section header */
export function SectionHeader({ subtitle, title, id }: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      className="mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title text-glow mt-2">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-glow to-transparent" />
    </motion.div>
  );
}
