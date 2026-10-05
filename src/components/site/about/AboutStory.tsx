import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function AboutStory() {
  const milestones = [
    {
      title: "Accessible",
      desc: "Demystifying complex search algorithms and web architectures for businesses of all scales.",
      accent: "text-[#B7ED51]",
    },
    {
      title: "Transparent",
      desc: "Replacing vanity metrics with open attribution, real lead verification, and unfiltered progress reporting.",
      accent: "text-[#52BCEE]",
    },
    {
      title: "Results-Oriented",
      desc: "Engineering every SEO keyword, ad campaign, and line of code strictly toward commercial growth.",
      accent: "text-[#B7ED51]",
    },
    {
      title: "Real Growth",
      desc: "Building scalable digital authority that compounds year over year rather than short-term spikes.",
      accent: "text-[#52BCEE]",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#030505] border-t border-white/5">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT: Eyebrow + Heading + Authentic Story Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  Our Story
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl text-[#F5F7F7]">
                Built to make digital growth{" "}
                <span className="text-[#B7ED51]">clear and measurable.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
                <p>
                  Ranknest IT was founded with a singular conviction: high-quality digital marketing
                  should be accessible, transparent, and undeniably results-oriented.
                </p>
                <p>
                  Too many businesses invest heavily in marketing without understanding their
                  returns or seeing meaningful impact on their bottom line. We set out to change
                  that by replacing opaque agency tactics with data-driven customized strategies,
                  authentic search traffic, qualified commercial leads, and measurable business
                  growth.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/90">
                  Over the years, we have partnered with businesses across diverse industries,
                  helping them improve search engine rankings, strengthen their digital presence,
                  and build competitive advantages that endure.
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Connected Strategic Storyline Progression */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Foundational Progression
                  </span>
                  <span className="text-[10px] font-mono text-[#B7ED51]">Strategic DNA</span>
                </div>

                <div className="space-y-6 relative">
                  {/* Subtle connecting vertical line behind items */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#B7ED51]/40 via-[#52BCEE]/40 to-[#B7ED51]/40 pointer-events-none" />

                  {milestones.map((item, idx) => (
                    <div key={item.title} className="relative flex items-start gap-4 group">
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#080D0E] border border-white/20 group-hover:border-[#B7ED51]/60 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-4 group-hover:bg-white/[0.04] group-hover:border-white/15 transition-all">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-display text-base font-bold ${item.accent}`}>
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-mono text-muted-foreground/60">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#B4BEC1]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
