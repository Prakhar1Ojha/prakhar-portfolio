"use client";

import { motion } from "framer-motion";
import { Target, GraduationCap, Sparkles, Clock } from "lucide-react";
import { bio, timeline } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/** About section with profile, bio, goals, and timeline */
export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="// Identity Module" title="About Me" />

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Profile card */}
          <motion.div variants={itemVariants} className="lg:row-span-2">
            <Card className="h-full overflow-hidden group hover:shadow-glow transition-shadow duration-500">
              <div className="relative h-48 bg-gradient-to-br from-electric/30 to-neon-purple/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-cyan-glow/50 flex items-center justify-center bg-navy/50">
                  <span className="font-display text-3xl text-cyan-glow">P</span>
                </div>
                <div className="scan-line" />
              </div>
              <CardHeader>
                <CardTitle>Prakhar</CardTitle>
                <p className="font-mono text-xs text-muted-foreground tracking-wider">
                  SOFTWARE ENGINEER // AI ENTHUSIAST
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bio.summary}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Career goals */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-glow-purple transition-shadow duration-500">
              <CardHeader className="flex flex-row items-center gap-3">
                <Target className="w-5 h-5 text-cyan-glow" />
                <CardTitle>Career Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {bio.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-cyan-glow mt-1">▸</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-glow transition-shadow duration-500">
              <CardHeader className="flex flex-row items-center gap-3">
                <Sparkles className="w-5 h-5 text-neon-purple" />
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {bio.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/[0.03] hover:border-cyan-glow/30 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="hover:shadow-glow transition-shadow duration-500">
              <CardHeader className="flex flex-row items-center gap-3">
                <Clock className="w-5 h-5 text-electric" />
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-glow/50 via-electric/30 to-transparent" />
                  <div className="space-y-6">
                    {timeline.map((item, i) => (
                      <motion.div
                        key={item.year}
                        className="relative pl-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-cyan-glow bg-void" />
                        <p className="font-display text-sm text-cyan-glow">{item.year}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{item.event}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education snippet */}
          <motion.div variants={itemVariants}>
            <Card className="h-full hover:shadow-glow transition-shadow duration-500">
              <CardHeader className="flex flex-row items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-glow" />
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-white">B.Tech Computer Science</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Indian Institute of Technology
                </p>
                <p className="text-xs text-cyan-glow/60 mt-2 font-mono">2019 — 2023</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
