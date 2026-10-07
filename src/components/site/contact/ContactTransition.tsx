import { motion } from "motion/react";
import { Search, MessageSquare, Compass, TrendingUp, ArrowRight } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

const steps = [
  {
    num: "01",
    label: "DISCOVER",
    icon: Search,
    color: "#B7ED51",
    desc: "We analyze your existing search footprint, technical infrastructure, and market position to identify growth opportunities.",
  },
  {
    num: "02",
    label: "DISCUSS",
    icon: MessageSquare,
    color: "#52BCEE",
    desc: "A direct collaborative session with our growth strategists to align on your business targets and technical scope.",
  },
  {
    num: "03",
    label: "PLAN",
    icon: Compass,
    color: "#B7ED51",
    desc: "We architect a phased, measurable growth blueprint with clear deliverables, tech stacks, and milestones.",
  },
  {
    num: "04",
    label: "GROW",
    icon: TrendingUp,
    color: "#52BCEE",
    desc: "Agile execution, continuous performance optimization, and compounding visibility that drives qualified revenue.",
  },
];

export function ContactTransition() {
  return (
    <section className="relative py-20 md:py-28 bg-[#030505] border-t border-white/[0.04]">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] max-w-full rounded-full bg-[#52BCEE]/4 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#52BCEE]">
                STRATEGIC PARTNERSHIP
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F7F7]">
              Tell Us What You're Building.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              Whether you need Search Engine Optimization, Web Development, full-funnel Digital Marketing,
              or AI-ready solutions, our team evaluates your requirements and recommends the right approach.
              Tell us about your goals and our team will get back to you with the right strategy.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Methodology Pipeline: DISCOVER → DISCUSS → PLAN → GROW */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={0.1 + idx * 0.08}>
                <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1">
                  {/* Top connector arrow on desktop */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white/20 pointer-events-none"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}

                  {/* Header with step number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground">
                      {step.num}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/20"
                      style={{ color: step.color }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold tracking-wide text-[#F5F7F7] flex items-center gap-2">
                    {step.label}
                    <span
                      className="h-1.5 w-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: step.color }}
                    />
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#B4BEC1]">
                    {step.desc}
                  </p>

                  {/* Subtle bottom active accent line */}
                  <div
                    className="mt-4 h-0.5 w-8 rounded-full opacity-40 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
