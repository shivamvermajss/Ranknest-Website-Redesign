import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-[#080D0E] border-t border-white/5">
      <Container>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center md:px-16 md:py-28 border border-[#B7ED51]/30 shadow-glow">
            {/* Atmospheric Lime & Cyan Ambient Glow */}
            <div
              className="absolute left-1/2 top-0 h-96 w-[70%] -translate-x-1/2 rounded-full bg-[#B7ED51]/15 blur-[130px] animate-drift pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#52BCEE]/10 blur-[100px] pointer-events-none"
              aria-hidden
            />
            <div
              className="grid-lines absolute inset-0 opacity-25 pointer-events-none"
              aria-hidden
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Let's Talk Digital Growth
              </span>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Ready to grow your{" "}
                <span className="text-lime-gradient block sm:inline">digital visibility?</span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
                Partner with Ranknest IT to generate qualified leads, build digital authority and
                achieve sustainable, compounding business growth.
              </p>

              <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
                <CTAButton to="/contact" className="px-8 py-4 text-base font-semibold">
                  Get Free Audit
                </CTAButton>
                <CTAButton to="/services" variant="ghost" className="px-7 py-4 text-base">
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
