import { ArrowRight, Sparkles } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#030505] border-t border-white/5">
      {/* Dynamic Ambient Background Illumination */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/6 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/6 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#080D0E]/85 border border-white/10 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] text-center">
            {/* Background vector growth wave */}
            <svg
              viewBox="0 0 800 200"
              className="absolute inset-x-0 bottom-0 w-full h-36 pointer-events-none opacity-20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 0 160 Q 200 40 400 120 T 800 40"
                stroke="url(#ctaGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="ctaGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B7ED51" />
                  <stop offset="100%" stopColor="#52BCEE" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-3.5 py-1 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  Start Your Journey
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F7F7]">
                Let&apos;s Grow <span className="text-[#B7ED51]">Together.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#B4BEC1] leading-relaxed">
                Partner with Ranknest IT to build real search visibility, attract qualified
                commercial leads, and engineer a digital presence that delivers compounding returns.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <CTAButton to="/contact" className="px-7 py-3 text-sm">
                  Get Free Audit
                </CTAButton>
                <CTAButton to="/services" variant="ghost" className="px-7 py-3 text-sm">
                  Explore Services
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
