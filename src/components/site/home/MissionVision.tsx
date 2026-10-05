import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  Eye,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Layers,
  Shield,
  Lightbulb,
  Handshake,
  Award,
} from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function MissionVision() {
  const reduce = useReducedMotion();
  const [missionHovered, setMissionHovered] = useState(false);
  const [visionHovered, setVisionHovered] = useState(false);

  // Mission Execution Path steps: GOAL → STRATEGY → EXECUTION → GROWTH
  const missionSteps = [
    { label: "GOAL", sub: "Client Vision", icon: Compass },
    { label: "STRATEGY", sub: "Data Architecture", icon: Layers },
    { label: "EXECUTION", sub: "Precision Delivery", icon: TrendingUp },
    { label: "GROWTH", sub: "Compound ROI", icon: Sparkles, isTarget: true },
  ];

  // Vision Core Principles from original client website:
  // Integrity, Innovation, Collaboration, Excellence
  const visionPillars = [
    { name: "Integrity", desc: "Transparent metrics & authentic partnership", icon: Shield },
    { name: "Innovation", desc: "Pioneering AI & next-gen search solutions", icon: Lightbulb },
    { name: "Collaboration", desc: "Deep alignment with client leadership", icon: Handshake },
    { name: "Excellence", desc: "Uncompromising engineering standards", icon: Award },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#030505] border-t border-white/5">
      {/* Dynamic Ambient Background Illumination */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full transition-opacity duration-700 blur-[150px]"
        style={{
          backgroundColor: "rgba(183, 237, 81, 0.08)",
          opacity: missionHovered ? 1.6 : 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/3 h-[500px] w-[500px] rounded-full transition-opacity duration-700 blur-[150px]"
        style={{
          backgroundColor: "rgba(82, 188, 238, 0.08)",
          opacity: visionHovered ? 1.6 : 0.8,
        }}
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header: Purpose & Direction */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 mb-5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Purpose &amp; Direction
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[#F5F7F7]">
              Our <span className="text-[#B7ED51]">Mission</span>{" "}
              <span className="text-muted-foreground/60 font-light">&amp;</span>{" "}
              <span className="text-[#52BCEE]">Vision</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              How we execute tangible impact today, and the long-term technological horizon we are
              pioneering for our clients.
            </p>
          </Reveal>
        </div>

        {/* Editorial Two-Pillar System with Strategic Connecting Conduit */}
        <div className="relative">
          {/* DESKTOP CONNECTING CONDUIT: Overlaid between Left (Mission) and Right (Vision) */}
          <div
            className="hidden lg:flex absolute top-12 left-1/2 -translate-x-1/2 z-20 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D0E]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                EXECUTION → HORIZON
              </span>
              <ArrowRight className="h-3 w-3 text-[#52BCEE]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            </div>
          </div>

          {/* TWO ASYMMETRIC STRATEGIC PILLARS */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
            {/* ============================================================ */}
            {/* PILLAR 01: MISSION (Electric Lime — Action, Execution, Growth) */}
            {/* ============================================================ */}
            <Reveal delay={0.2} className="h-full">
              <motion.div
                onMouseEnter={() => setMissionHovered(true)}
                onMouseLeave={() => setMissionHovered(false)}
                whileHover={{ y: reduce ? 0 : -3 }}
                transition={{ duration: 0.3 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 sm:p-9 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/40 transition-colors duration-500"
              >
                {/* Ambient Card Bloom */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#B7ED51]/10 blur-[70px] transition-transform duration-700 group-hover:scale-125" />

                <div>
                  {/* Top Bar: Identifier */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B7ED51]">
                          Core Purpose · Execution
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F7F7]">
                          Our Mission
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground/60 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      01 / ACTION
                    </span>
                  </div>

                  {/* Primary Mission Statement (Original Client Source Copy) */}
                  <div className="space-y-4">
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#F5F7F7]">
                      &ldquo;To empower businesses with smart, scalable, and future-ready solutions
                      that drive growth, efficiency, and lasting impact.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                      We exist to deliver innovative, data-driven digital marketing and custom web
                      development solutions that solve real business problems and translate directly
                      into measurable visibility, qualified leads, and compound digital equity.
                    </p>
                  </div>
                </div>

                {/* Mission Visual: Execution Vector (GOAL → STRATEGY → EXECUTION → GROWTH) */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Execution Progression Matrix
                    </span>
                    <span className="text-[10px] text-[#B7ED51] font-semibold">Active Vector</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {missionSteps.map((step, idx) => {
                      const Icon = step.icon;
                      return (
                        <div
                          key={step.label}
                          className={`relative rounded-xl border p-2.5 sm:p-3 text-center transition-all duration-300 ${
                            step.isTarget
                              ? "bg-[#B7ED51]/10 border-[#B7ED51]/40 shadow-[0_0_15px_rgba(183,237,81,0.15)]"
                              : "bg-white/[0.02] border-white/5 hover:border-white/15"
                          }`}
                        >
                          <div
                            className={`mx-auto mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg ${
                              step.isTarget
                                ? "bg-[#B7ED51] text-[#030505]"
                                : "bg-white/5 text-[#B7ED51]"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div className="text-[11px] font-bold tracking-tight text-[#F5F7F7]">
                            {step.label}
                          </div>
                          <div className="text-[9px] text-muted-foreground truncate mt-0.5">
                            {step.sub}
                          </div>

                          {/* Connector Arrow (except last) */}
                          {idx < missionSteps.length - 1 && (
                            <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-white/30 text-xs">
                              ›
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* MOBILE ONLY CONNECTING ARROW */}
            <div className="lg:hidden flex items-center justify-center py-2" aria-hidden="true">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080D0E] border border-white/15 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  Execution Leads To
                </span>
                <ArrowDown className="h-3 w-3 text-[#52BCEE]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              </div>
            </div>

            {/* ============================================================ */}
            {/* PILLAR 02: VISION (Electric Cyan — Future, Innovation, Trust) */}
            {/* ============================================================ */}
            <Reveal delay={0.3} className="h-full">
              <motion.div
                onMouseEnter={() => setVisionHovered(true)}
                onMouseLeave={() => setVisionHovered(false)}
                whileHover={{ y: reduce ? 0 : -3 }}
                transition={{ duration: 0.3 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 sm:p-9 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#52BCEE]/40 transition-colors duration-500"
              >
                {/* Ambient Card Bloom */}
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#52BCEE]/10 blur-[70px] transition-transform duration-700 group-hover:scale-125" />

                <div>
                  {/* Top Bar: Identifier */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
                        <Eye className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#52BCEE]">
                          Long-Term Horizon · Future
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F7F7]">
                          Our Vision
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground/60 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      02 / HORIZON
                    </span>
                  </div>

                  {/* Primary Vision Statement (Original Client Source Copy) */}
                  <div className="space-y-4">
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#F5F7F7]">
                      &ldquo;To be a globally trusted partner and leader in technology and digital
                      transformation, driving future-ready solutions for lasting impact.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                      Our vision is to continuously pioneer emerging digital marketing and AI search
                      advancements, maintaining radical client transparency, deep collaboration, and
                      unwavering engineering excellence to build enduring, multi-year partnerships.
                    </p>
                  </div>
                </div>

                {/* Vision Visual: Core Principles Matrix (Integrity, Innovation, Collaboration, Excellence) */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      Core Philosophical Foundations
                    </span>
                    <span className="text-[10px] text-[#52BCEE] font-semibold">
                      Enduring Standards
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {visionPillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.name}
                          className="group/item rounded-xl border border-white/5 bg-white/[0.02] p-2.5 sm:p-3 transition-all duration-300 hover:border-[#52BCEE]/30 hover:bg-white/[0.04]"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3.5 w-3.5 text-[#52BCEE]" />
                            <span className="text-xs font-bold tracking-tight text-[#F5F7F7]">
                              {pillar.name}
                            </span>
                          </div>
                          <p className="text-[10px] leading-tight text-muted-foreground line-clamp-1">
                            {pillar.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
