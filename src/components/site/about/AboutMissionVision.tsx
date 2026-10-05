import {
  Compass,
  Eye,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Shield,
  Lightbulb,
  Handshake,
  Award,
} from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function AboutMissionVision() {
  const missionSteps = [
    { label: "GOAL", sub: "Strategic Alignment" },
    { label: "STRATEGY", sub: "Data Architecture" },
    { label: "EXECUTION", sub: "High Velocity" },
    { label: "IMPACT", sub: "Compound ROI", isTarget: true },
  ];

  const visionSteps = [
    { label: "INNOVATION", sub: "AI & Emerging Tech", icon: Lightbulb },
    { label: "TECHNOLOGY", sub: "Robust Engineering", icon: Shield },
    { label: "PARTNERSHIP", sub: "Radical Transparency", icon: Handshake },
    { label: "FUTURE", sub: "Global Trust", icon: Award, isTarget: true },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#030505] border-t border-white/5">
      {/* Background illumination */}
      <div
        className="pointer-events-none absolute -left-28 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-1/3 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-4 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Purpose &amp; Horizon
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
              How we execute tangible client impact today, and the long-term technological future we
              are building toward.
            </p>
          </Reveal>
        </div>

        {/* Dual Connected Environments */}
        <div className="relative">
          {/* Central Conduit Badge (Desktop) */}
          <div
            className="hidden lg:flex absolute top-10 left-1/2 -translate-x-1/2 z-20 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D0E]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                TODAY → TOMORROW
              </span>
              <ArrowRight className="h-3 w-3 text-[#52BCEE]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
            {/* MISSION: Electric Lime (Action, Execution, Impact) */}
            <Reveal delay={0.2} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#080D0E]/85 border border-[#B7ED51]/25 p-7 sm:p-9 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#B7ED51]/45 transition-all duration-500">
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#B7ED51]/10 blur-[70px]" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
                        <Compass className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B7ED51]">
                          01 / Today&apos;s Execution
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F7F7]">
                          Our Mission
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#F5F7F7]">
                      &ldquo;To empower businesses with smart, scalable, and future-ready solutions
                      that drive growth, efficiency, and lasting impact.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                      We exist to deliver innovative, data-driven digital solutions that solve real
                      business problems, generating qualified leads, elevating search dominance, and
                      creating genuine commercial equity.
                    </p>
                  </div>
                </div>

                {/* Abstract Execution Vector: Goal → Strategy → Execution → Impact */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                    Execution Progression Matrix
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {missionSteps.map((step) => (
                      <div
                        key={step.label}
                        className={`rounded-xl border p-2 text-center ${
                          step.isTarget
                            ? "bg-[#B7ED51]/10 border-[#B7ED51]/40 text-[#B7ED51]"
                            : "bg-white/[0.02] border-white/5 text-[#F5F7F7]"
                        }`}
                      >
                        <div className="text-[10px] font-bold font-mono">{step.label}</div>
                        <div className="text-[8px] text-muted-foreground truncate mt-0.5">
                          {step.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* VISION: Electric Cyan (Future, Technology, Global Trust) */}
            <Reveal delay={0.25} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#080D0E]/85 border border-[#52BCEE]/25 p-7 sm:p-9 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[#52BCEE]/45 transition-all duration-500">
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-[#52BCEE]/10 blur-[70px]" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
                        <Eye className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#52BCEE]">
                          02 / Tomorrow&apos;s Horizon
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-[#F5F7F7]">
                          Our Vision
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#F5F7F7]">
                      &ldquo;To be a globally trusted partner and leader in technology and digital
                      transformation, driving future-ready solutions for lasting impact.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                      We strive to pioneer next-generation search intelligence, advanced web
                      architectures, and client-centric digital transformation, building enduring,
                      multi-year partnerships grounded in radical transparency and engineering
                      excellence.
                    </p>
                  </div>
                </div>

                {/* Abstract Horizon Vector: Innovation → Technology → Partnership → Future */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block mb-3">
                    Strategic Horizon Matrix
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {visionSteps.map((step) => (
                      <div
                        key={step.label}
                        className={`rounded-xl border p-2 text-center ${
                          step.isTarget
                            ? "bg-[#52BCEE]/10 border-[#52BCEE]/40 text-[#52BCEE]"
                            : "bg-white/[0.02] border-white/5 text-[#F5F7F7]"
                        }`}
                      >
                        <div className="text-[10px] font-bold font-mono">{step.label}</div>
                        <div className="text-[8px] text-muted-foreground truncate mt-0.5">
                          {step.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
