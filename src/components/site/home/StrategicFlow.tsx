import { motion } from "motion/react";
import { ArrowRight, Compass, SearchCheck, Layers, TrendingUp } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

const steps = [
  {
    num: "01",
    name: "Your Goals",
    phase: "Discovery & Alignment",
    icon: Compass,
    accent: "text-[#52BCEE]",
    badgeBg: "bg-[#52BCEE]/10 border-[#52BCEE]/25",
    desc: "We analyze your business objectives, target audience demographics, competitive positioning, and define tangible revenue and lead KPIs.",
    deliverables: ["Revenue Target Mapping", "Target Audience Matrix", "Core Growth KPIs"],
  },
  {
    num: "02",
    name: "Research",
    phase: "Intelligence & Audit",
    icon: SearchCheck,
    accent: "text-[#52BCEE]",
    badgeBg: "bg-[#52BCEE]/10 border-[#52BCEE]/25",
    desc: "Exhaustive competitor benchmarking, technical SEO health crawls, generative AI engine visibility scans, and commercial search intent modeling.",
    deliverables: ["Technical Gap Audit", "Semantic Keyword Map", "Competitor Share of Voice"],
  },
  {
    num: "03",
    name: "Strategy",
    phase: "Architecture & Blueprint",
    icon: Layers,
    accent: "text-[#B7ED51]",
    badgeBg: "bg-[#B7ED51]/10 border-[#B7ED51]/25",
    desc: "Engineering a customized growth ecosystem unifying technical SEO, GEO structured schema, conversion-tuned web design, and targeted performance ads.",
    deliverables: ["Omnichannel Roadmap", "Structured Schema Blueprint", "Conversion Architecture"],
  },
  {
    num: "04",
    name: "Grow",
    phase: "Scale & Dominate",
    icon: TrendingUp,
    accent: "text-[#B7ED51]",
    badgeBg: "bg-[#B7ED51]/10 border-[#B7ED51]/25",
    hasPulse: true,
    desc: "Executing precision campaigns, optimizing conversion funnels, generating qualified high-intent leads, and scaling sustainable digital authority.",
    deliverables: [
      "Qualified Lead Velocity",
      "Search & AI Dominance",
      "Transparent ROI Attribution",
    ],
  },
];

export function StrategicFlow() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#080D0E] border-y border-white/5">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 bg-[#B7ED51]/5 blur-[120px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-25 pointer-events-none" />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="eyebrow mb-4">Strategic Progression</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl text-foreground">
              Your Goals <span className="text-[#52BCEE] font-normal">→</span> Research{" "}
              <span className="text-[#52BCEE] font-normal">→</span> Strategy{" "}
              <span className="text-[#52BCEE] font-normal">→</span>{" "}
              <span className="text-lime-gradient">Grow</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A battle-tested 4-stage methodology engineered to transform raw ambition into sustained
            market leadership and compounding qualified leads.
          </p>
        </div>

        {/* Desktop & Tablet Progression Track */}
        <div className="relative">
          {/* Connecting glowing line for desktop: Cyan to Lime */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#52BCEE]/20 via-[#52BCEE]/40 to-[#B7ED51] z-0">
            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.name} delay={i * 0.12} className="h-full">
                  <div className="glass group relative flex h-full flex-col rounded-3xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                    {/* Header node */}
                    <div className="flex items-center justify-between pb-6">
                      <div
                        className={`grid h-13 w-13 place-items-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/40 transition-colors`}
                      >
                        <Icon
                          className={`h-6 w-6 ${step.accent} transition-transform duration-500 group-hover:scale-110`}
                        />
                      </div>
                      <div className="flex items-center gap-1.5">
                        {step.hasPulse && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C53736] animate-pulse" />
                        )}
                        <span className="font-display text-2xl font-bold text-foreground/20 group-hover:text-primary/60 transition-colors">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider ${step.accent}`}
                      >
                        {step.phase}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {step.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="mt-6 pt-5 border-t border-white/5 space-y-1.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80">
                        Key Milestones
                      </p>
                      {step.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow indicator between steps for mobile/tablet */}
                    {i < steps.length - 1 && (
                      <div className="lg:hidden mt-4 flex justify-center text-primary/40">
                        <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
