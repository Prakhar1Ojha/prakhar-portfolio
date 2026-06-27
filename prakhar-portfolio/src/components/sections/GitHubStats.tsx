"use client";

import { motion } from "framer-motion";
import { Github, GitBranch, Users, Star } from "lucide-react";
import { githubStats } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** GitHub stats with contribution graph visualization */
export function GitHubStats() {
  const { username, followers, repositories, languages, contributions } = githubStats;

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader subtitle="// Dev Activity" title="GitHub Stats" />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: Github, label: "Username", value: `@${username}` },
              { icon: GitBranch, label: "Repositories", value: repositories.toString() },
              { icon: Users, label: "Followers", value: followers.toString() },
              { icon: Star, label: "Top Language", value: languages[0]?.name || "N/A" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:shadow-glow transition-shadow">
                  <CardContent className="flex items-center gap-4 p-4">
                    <stat.icon className="w-5 h-5 text-cyan-glow" />
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-medium text-white">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-glow transition-shadow">
              <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
                <p className="font-mono text-xs text-muted-foreground">
                  Last 52 weeks of commits
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-[3px] min-w-max">
                    {contributions.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-[3px]">
                        {week.map((level, di) => (
                          <motion.div
                            key={`${wi}-${di}`}
                            className="w-[10px] h-[10px] rounded-sm"
                            style={{
                              backgroundColor:
                                level === 0
                                  ? "rgba(255,255,255,0.05)"
                                  : `rgba(0, 240, 255, ${0.2 + level * 0.15})`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: wi * 0.005 + di * 0.01 }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Language breakdown */}
                <div className="mt-6 space-y-3">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Languages
                  </p>
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-mono text-muted-foreground">{lang.name}</span>
                        <span className="font-mono text-cyan-glow">{lang.percentage}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
