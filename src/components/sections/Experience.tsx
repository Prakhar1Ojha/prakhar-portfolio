"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

/** Animated vertical experience timeline */
export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader subtitle="// Career Log" title="Experience" />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-glow/50 via-electric/30 to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-cyan-glow shadow-glow z-10 mt-6" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <motion.div
                  className="glass holo-border rounded-xl p-6 hover:shadow-glow transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-cyan-glow" />
                    <span className="font-mono text-xs text-cyan-glow/70">{item.period}</span>
                  </div>
                  <h3 className="font-display text-lg tracking-wide text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-neon-purple font-mono mt-1">{item.company}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tech.map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
