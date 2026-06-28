"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Cpu,
  Database,
  Cloud,
  Wrench,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Brain,
  Cpu,
  Database,
  Cloud,
  Wrench,
  Users,
};

/** Skills displayed as holographic panels with animated progress bars */
export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader subtitle="// Capability Matrix" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: catIndex * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full group hover:shadow-glow hover:border-cyan-glow/40 transition-all duration-300 perspective-1000">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="p-2 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 group-hover:shadow-glow transition-shadow">
                      <Icon className="w-4 h-4 text-cyan-glow" />
                    </div>
                    <CardTitle className="text-base">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-muted-foreground font-mono">{skill.name}</span>
                          <span className="text-cyan-glow font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-electric via-cyan-glow to-neon-purple"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.08 + i * 0.1, duration: 1, ease: "easeOut" }}
                            style={{
                              boxShadow: "0 0 10px rgba(0, 240, 255, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
