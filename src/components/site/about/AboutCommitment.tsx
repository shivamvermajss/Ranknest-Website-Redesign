import { Container } from "../ui";
import { Reveal } from "../motion";

export function AboutCommitment() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44 bg-[#080D0E] border-t border-white/5">
      {/* Ambient background bloom */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-2 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Our Commitment
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="font-display text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#F5F7F7]">
              &ldquo;We&apos;re committed to <span className="text-[#B7ED51]">transparent</span>,{" "}
              <span className="text-[#F5F7F7]">ethical</span> and{" "}
              <span className="text-[#52BCEE]">data-driven</span> marketing that helps your business
              grow for the long term.&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.15} className="pt-4">
            <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto">
              No vanity metrics. No empty guarantees. Just continuous optimization, technical
              precision, and accountable digital growth.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
