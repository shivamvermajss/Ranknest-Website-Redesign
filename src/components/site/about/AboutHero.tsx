import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";
import { AboutHeroDigitalNetwork } from "./AboutHeroDigitalNetwork";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 bg-[#030505]">
      {/* Ambient background bloom */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/6 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/6 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Editorial Headline & Positioning (Unchanged) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  About Ranknest IT
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[4.2rem] xl:text-[4.75rem] font-semibold leading-[1.04] tracking-tight text-[#F5F7F7]">
                Helping Businesses Grow with{" "}
                <span className="text-[#B7ED51] block sm:inline">Smart Digital Marketing</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#B4BEC1]">
                We combine organic search intelligence, custom high-performance web development, and
                data-backed marketing strategies to help businesses improve visibility, attract
                qualified leads, and achieve sustainable digital growth.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton to="/contact">Get Free Audit</CTAButton>
                <CTAButton to="/services" variant="ghost">
                  Explore Services
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Live Animated Digital Growth Network (Replaced completely) */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <Reveal delay={0.25}>
              <AboutHeroDigitalNetwork />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
