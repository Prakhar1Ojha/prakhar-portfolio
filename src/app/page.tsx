"use client";

import { useState } from "react";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { AdvancedModeProvider } from "@/components/providers/AdvancedModeProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { AdvancedModeToast } from "@/components/AdvancedModeToast";
import { AmbientBackground } from "@/components/background/AmbientBackground";
import { ThreeBackground } from "@/components/background/ThreeBackground";
import { StarField } from "@/components/background/StarField";
import { CursorEffect } from "@/components/background/CursorEffect";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

function PortfolioContent() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <SmoothScrollProvider>
          <StarField />
          <AmbientBackground />
          <ThreeBackground />
          <CursorEffect />
          <AdvancedModeToast />

          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <ScrollReveal>
              <GitHubStats />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Certifications />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Achievements />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Contact />
            </ScrollReveal>
          </main>
          <Footer />
          <AIAssistant />
        </SmoothScrollProvider>
      )}
    </>
  );
}

/** Main portfolio page — composes all sections */
export default function HomePage() {
  return (
    <div className={`${inter.variable} ${orbitron.variable} ${jetbrains.variable} font-sans`}>
      <SoundProvider>
        <AdvancedModeProvider>
          <PortfolioContent />
        </AdvancedModeProvider>
      </SoundProvider>
    </div>
  );
}
