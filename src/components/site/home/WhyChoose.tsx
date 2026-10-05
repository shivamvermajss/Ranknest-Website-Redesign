import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  Cpu,
  BarChart3,
  Sliders,
  Users,
  LineChart,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function WhyChoose() {
  const reduce = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardOpacity = (id: number) => {
    if (hoveredCard === null) return "opacity-100";
    return hoveredCard === id ? "opacity-100" : "opacity-60";
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#030505] border-t border-white/5">
      {/* Dynamic Background Atmosphere */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[550px] w-[550px] rounded-full bg-[#B7ED51]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 mb-5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Why Choose Ranknest IT
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-[#F5F7F7]">
              Strategy you can <span className="text-[#B7ED51]">trust.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              We combine deep technical expertise, data-backed insights, and forward-thinking AI
              capabilities to deliver digital strategies that build lasting competitive advantage.
            </p>
          </Reveal>
        </div>

        {/* 6 Strategic Principles → 1 Growth Architecture */}
        <div className="space-y-6">
          {/* TOP TIER: 01 (Large Featured Card) + 02 & 03 (Stacked Right) */}
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            {/* 01 — Results-Driven Strategies (Featured Principle) */}
            <div
              className={`lg:col-span-7 transition-all duration-300 ${getCardOpacity(1)}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Reveal className="h-full" delay={0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#080D0E]/90 border border-[#B7ED51]/30 p-7 sm:p-9 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(183,237,81,0.15)] hover:-translate-y-1">
                  {/* Subtle Ambient Card Bloom */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#B7ED51]/10 blur-[80px] transition-transform duration-700 group-hover:scale-125" />

                  <div>
                    {/* Header: Badge & Number */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#B7ED51]">
                        <Sparkles className="h-3.5 w-3.5" /> Core Outcome Principle
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#B7ED51]/80 px-2.5 py-1 rounded-md bg-[#B7ED51]/5 border border-[#B7ED51]/15">
                        01 / RESULTS
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5F7F7] group-hover:text-white transition-colors">
                        Results-Driven Strategies
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1] max-w-xl">
                        Marketing campaigns designed to increase traffic, attract quality leads, and
                        drive measurable business growth.
                      </p>
                    </div>
                  </div>

                  {/* Abstract Conceptual Flow: Traffic → Qualified Leads → Business Growth */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      <span>Conversion Flow Architecture</span>
                      <span className="text-[#B7ED51]">Strategic Trajectory</span>
                    </div>

                    <div className="relative rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5">
                      {/* Flowing Vector SVG */}
                      <svg
                        viewBox="0 0 460 36"
                        className="w-full h-8 overflow-visible"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M 20 18 Q 115 4 230 18 T 440 18"
                          stroke="#B7ED51"
                          strokeWidth="1.5"
                          strokeOpacity="0.6"
                          strokeDasharray={reduce ? undefined : "4 4"}
                        />
                        {/* Waypoints */}
                        <circle cx="20" cy="18" r="4" fill="#B7ED51" />
                        <circle cx="230" cy="18" r="4" fill="#52BCEE" />
                        <circle cx="440" cy="18" r="5" fill="#B7ED51" />
                        <circle
                          cx="440"
                          cy="18"
                          r="9"
                          stroke="#B7ED51"
                          strokeOpacity="0.4"
                          strokeWidth="1.2"
                        />
                      </svg>

                      {/* 3 Conceptual Milestones (No Fake Metrics) */}
                      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                        <div className="rounded-lg bg-black/40 border border-white/5 py-2 px-1">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                            Stage 01
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-[#F5F7F7] mt-0.5">
                            Traffic
                          </p>
                          <span className="text-[10px] text-muted-foreground/80">
                            Organic &amp; Paid Reach
                          </span>
                        </div>
                        <div className="rounded-lg bg-black/40 border border-white/5 py-2 px-1">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
                            Stage 02
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-[#52BCEE] mt-0.5">
                            Qualified Leads
                          </p>
                          <span className="text-[10px] text-muted-foreground/80">
                            Commercial Intent
                          </span>
                        </div>
                        <div className="rounded-lg bg-[#B7ED51]/10 border border-[#B7ED51]/30 py-2 px-1">
                          <p className="text-[10px] uppercase tracking-wider text-[#B7ED51] font-mono">
                            Stage 03
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-[#B7ED51] mt-0.5">
                            Business Growth
                          </p>
                          <span className="text-[10px] text-[#B7ED51]/80">Measurable Value</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* TWO STACKED CARDS: 02 (AI) & 03 (Transparency) */}
            <div className="lg:col-span-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {/* 02 — AI-Powered Solutions (Electric Cyan) */}
              <div
                className={`transition-all duration-300 ${getCardOpacity(2)}`}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Reveal delay={0.15}>
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-[#52BCEE]/25 p-7 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#52BCEE]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(82,188,238,0.15)] hover:-translate-y-1">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#52BCEE]/10 blur-[60px]" />

                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
                            <Cpu className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#52BCEE]">
                              Next-Gen Capability
                            </span>
                            <h3 className="font-display text-xl font-bold text-[#F5F7F7]">
                              AI-Powered Solutions
                            </h3>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                          02
                        </span>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                        AI-driven insights to stay ahead in today&apos;s digital landscape.
                      </p>
                    </div>

                    {/* Minimal AI / Neural Node System */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#52BCEE] animate-pulse" />
                        <span className="text-xs font-medium text-[#52BCEE]">
                          Generative Search &amp; Neural Indexing
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">
                        Adaptive
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* 03 — Transparent Reporting (Neutral / Cyan) */}
              <div
                className={`transition-all duration-300 ${getCardOpacity(3)}`}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Reveal delay={0.2}>
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#52BCEE]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(82,188,238,0.12)] hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.03] border border-white/10 text-[#52BCEE] group-hover:border-[#52BCEE]/40 transition-colors">
                            <BarChart3 className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                              Accountability
                            </span>
                            <h3 className="font-display text-xl font-bold text-[#F5F7F7]">
                              Transparent Reporting
                            </h3>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                          03
                        </span>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                        Monitor campaign performance with detailed analytics, regular updates and
                        clear reporting.
                      </p>
                    </div>

                    {/* Conceptual Audit Milestone Badges: Report → Analyze → Optimize */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#F5F7F7]">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        REPORT
                      </span>
                      <span className="text-white/20">→</span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
                        ANALYZE
                      </span>
                      <span className="text-white/20">→</span>
                      <span className="flex items-center gap-1.5 text-[#B7ED51]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                        OPTIMIZE
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* BOTTOM TIER: 04 (Customized Plans) + 05 (Dedicated Experts) + 06 (Sustainable Growth) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* 04 — Customized Growth Plans (Lime Accent) */}
            <div
              className={`transition-all duration-300 ${getCardOpacity(4)}`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Reveal delay={0.25} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(183,237,81,0.12)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.03] border border-white/10 text-[#B7ED51] group-hover:border-[#B7ED51]/40 transition-colors">
                        <Sliders className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                        04
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F7F7] group-hover:text-white transition-colors">
                      Customized Growth Plans
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#B4BEC1]">
                      Every strategy is tailored to the business goals, industry and target
                      audience.
                    </p>
                  </div>

                  {/* Modular Architecture Indicator: Custom → Strategy → Growth */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                    <span className="text-[#B7ED51]">Modular Fit</span>
                    <span>Industry Aligned</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 05 — Dedicated Experts (Lime/Cyan Accent) */}
            <div
              className={`transition-all duration-300 ${getCardOpacity(5)}`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Reveal delay={0.3} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(183,237,81,0.12)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.03] border border-white/10 text-[#B7ED51] group-hover:border-[#B7ED51]/40 transition-colors">
                        <Users className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                        05
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F7F7] group-hover:text-white transition-colors">
                      Dedicated Experts
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#B4BEC1]">
                      Work with experienced digital marketing professionals committed to long-term
                      success.
                    </p>
                  </div>

                  {/* Team Collaboration Architecture */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                    <span className="text-[#B7ED51]">Committed Partners</span>
                    <span>Senior Direct Oversight</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 06 — Sustainable Growth (Lime Accent) */}
            <div
              className={`sm:col-span-2 lg:col-span-1 transition-all duration-300 ${getCardOpacity(6)}`}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Reveal delay={0.35} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(183,237,81,0.12)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.03] border border-white/10 text-[#B7ED51] group-hover:border-[#B7ED51]/40 transition-colors">
                        <TrendingUp className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                        06
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F7F7] group-hover:text-white transition-colors">
                      Sustainable Growth
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#B4BEC1]">
                      Build scalable marketing strategies that deliver consistent results and
                      lasting business value.
                    </p>
                  </div>

                  {/* Long-Term Value Architecture */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                    <span className="text-[#B7ED51]">Compounding Impact</span>
                    <span>Lasting Value</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
