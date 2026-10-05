import { Container } from "../ui";
import { Reveal } from "../motion";

export function AboutWhoWeAre() {
  const tags = [
    { label: "SEO", color: "text-[#B7ED51] border-[#B7ED51]/30 bg-[#B7ED51]/5" },
    { label: "WEB ARCHITECTURE", color: "text-[#52BCEE] border-[#52BCEE]/30 bg-[#52BCEE]/5" },
    { label: "AI VISIBILITY", color: "text-[#52BCEE] border-[#52BCEE]/30 bg-[#52BCEE]/5" },
    { label: "CONTENT STRATEGY", color: "text-[#B7ED51] border-[#B7ED51]/30 bg-[#B7ED51]/5" },
    { label: "PERFORMANCE MARKETING", color: "text-[#52BCEE] border-[#52BCEE]/30 bg-[#52BCEE]/5" },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#050808] border-t border-white/5">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[450px] w-[450px] rounded-full bg-[#B7ED51]/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT: Large Statement */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  Who We Are
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl text-[#F5F7F7]">
                A digital marketing, SEO &amp; web development partner{" "}
                <span className="text-[#B7ED51]">built around your growth.</span>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT: Company Description + Conceptual Tags */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.15}>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
                <p>
                  Ranknest IT is a results-driven digital marketing and technology agency dedicated
                  to helping startups, local businesses, and established enterprises navigate the
                  modern digital landscape with clarity and measurable success.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                  We bridge the gap between technical search optimization, cutting-edge web
                  engineering, and high-intent conversion marketing. Our approach combines
                  data-driven decision making with forward-thinking AI capabilities to deliver
                  customized growth roadmaps that compound in value over time.
                </p>
              </div>
            </Reveal>

            {/* Conceptual Discipline Tags */}
            <Reveal delay={0.2} className="pt-2">
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-full border px-3.5 py-1 text-xs font-mono font-semibold tracking-wider ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
