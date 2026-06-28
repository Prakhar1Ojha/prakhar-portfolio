"use client";

import { motion } from "framer-motion";
import { Award, School, GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const typeIcons = {
  School: School,
  College: GraduationCap,
};

/** Interactive education cards */
export function Education() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="// Academic Records" title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, i) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons] || GraduationCap;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group hover:shadow-glow transition-all duration-300 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-cyan-glow via-electric to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 group-hover:shadow-glow transition-shadow">
                      <Icon className="w-5 h-5 text-cyan-glow" />
                    </div>
                    <div>
                      <CardTitle>{item.institution}</CardTitle>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {item.period}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white font-medium">{item.degree}</p>
                    <div className="mt-4 space-y-2">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Award className="w-3.5 h-3.5 text-neon-purple shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
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
