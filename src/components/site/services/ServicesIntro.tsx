import { ArrowRight, Search, FileText, Compass, Users, Target, TrendingUp } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

const pipelineStages = [
  { label: "SEARCH", sub: "Organic Authority", icon: Search, color: "#B7ED51" },
  { label: "CONTENT", sub: "Relevance & Signals", icon: FileText, color: "#52BCEE" },
  { label: "DISCOVERY", sub: "Multi-Touchpoint Reach", icon: Compass, color: "#B7ED51" },
  { label: "TRAFFIC", sub: "High-Intent Visits", icon: Users, color: "#52BCEE" },
  { label: "LEADS", sub: "Qualified Conversion", icon: Target, color: "#B7ED51" },
  { label: "GROWTH", sub: "Compounding Impact", icon: TrendingUp, color: "#52BCEE" },
];

export function ServicesIntro() {
  return (
    <section className="relative py-20 md:py-28 bg-[#050808] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
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
                OUR DIGITAL MARKETING SERVICES
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F7F7]">
              Everything your digital growth needs.{" "}
              <span className="text-[#52BCEE] block sm:inline">Built to work together.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              A website alone is not a growth strategy. To build sustainable market leadership, businesses
              must be systematically discoverable across search engines, social platforms, local map packs,
              and precision paid advertising — synchronized into one continuous digital growth ecosystem.
            </p>
          </Reveal>
        </div>

        {/* Section 18: Conceptual Visual Service Map (SEARCH -> CONTENT -> DISCOVERY -> TRAFFIC -> LEADS -> GROWTH) */}
        <div className="mt-16">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.label} delay={0.1 + idx * 0.06}>
                  <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1">
                    {/* Top connector arrow on desktop */}
                    {idx < pipelineStages.length - 1 && (
                      <div
                        className="hidden lg:flex items-center absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-white/20 pointer-events-none"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-muted-foreground">
                        0{idx + 1}
                      </span>
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors"
                        style={{ color: stage.color }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="mt-3 font-display text-sm font-semibold tracking-wide text-[#F5F7F7]">
                      {stage.label}
                    </h3>

                    <p className="mt-1 text-[11px] text-[#B4BEC1]">
                      {stage.sub}
                    </p>

                    <div
                      className="mt-3 h-0.5 w-6 rounded-full opacity-40 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: stage.color }}
                    />
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
