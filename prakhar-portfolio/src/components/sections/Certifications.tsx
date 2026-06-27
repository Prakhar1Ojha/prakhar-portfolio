"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

/** Animated certificate cards with hover preview */
export function Certifications() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="// Credentials" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative"
            >
              <motion.div
                className="glass holo-border rounded-xl overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                  <AnimatePresence>
                    {hoveredId === cert.id && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-cyan-glow/10 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Award className="w-8 h-8 text-cyan-glow" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm tracking-wide text-white group-hover:text-cyan-glow transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs font-mono text-cyan-glow/60">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-glow-lg rounded-xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
