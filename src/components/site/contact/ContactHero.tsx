import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Zap, Globe, ArrowDown } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";
import { ContactConnectionNetwork } from "./ContactConnectionNetwork";

export function ContactHero() {
  const reduce = useReducedMotion();

  const handleScrollToWorkspace = () => {
    const el = document.getElementById("contact-workspace");
    if (el) {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 bg-[#030505]">
      {/* Ambient background bloom matching Home and About design system */}
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
      <div className="atmos-glow absolute inset-0 animate-drift pointer-events-none" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Editorial Headline & Positioning */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  GET IN TOUCH
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[4.2rem] xl:text-[4.75rem] font-semibold leading-[1.04] tracking-tight text-[#F5F7F7]">
                Let's Build Your{" "}
                <span className="text-[#B7ED51] block sm:inline">Digital Success</span>{" "}
                Together
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#B4BEC1]">
                Tell us about your business goals, technical requirements, and search objectives.
                Our engineering and digital growth specialists will evaluate your current standing
                and architect a high-impact roadmap designed for compounding organic visibility and
                qualified leads.
              </p>
            </Reveal>

            {/* Strategic Value Badges */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground/90 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#B7ED51]" /> Direct Strategist Access
                </span>
                <span className="h-3 w-px bg-white/10 hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-[#52BCEE]" /> Technical Growth Roadmap
                </span>
                <span className="h-3 w-px bg-white/10 hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-[#B7ED51]" /> Dual Hubs (India · UAE)
                </span>
              </div>
            </Reveal>

            {/* CTA Group */}
            <Reveal delay={0.25} className="pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleScrollToWorkspace}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#B7ED51] px-7 py-3.5 text-sm font-semibold text-[#030505] transition-all duration-300 hover:bg-[#c6f46c] hover:shadow-glow hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="relative z-10">Start Consultation</span>
                  <ArrowDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </button>
                <CTAButton to="/services" variant="ghost">
                  Explore Services
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Animated Collaborative Connection Network */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <Reveal delay={0.25}>
              <ContactConnectionNetwork />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
