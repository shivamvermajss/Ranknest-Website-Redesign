import { motion, useReducedMotion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";

export function ServicesCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 bg-[#080D0E] overflow-hidden border-t border-white/[0.04]">
      {/* Background flowing growth trajectory visual (Services -> Strategy -> Growth) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Ambient radial glows */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[750px] max-w-full rounded-full bg-[#B7ED51]/5 blur-[160px]" />
        <div className="absolute right-1/4 top-1/3 h-[380px] w-[450px] rounded-full bg-[#52BCEE]/5 blur-[160px]" />

        {/* Upward Vector Conduits */}
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <path
            d="M -100 520 C 350 480, 550 320, 800 160 C 1000 30, 1150 20, 1300 0"
            stroke="url(#services-cta-lime)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M -100 560 C 300 530, 520 370, 780 200 C 950 60, 1100 40, 1300 10"
            stroke="url(#services-cta-cyan)"
            strokeWidth="1.5"
            opacity="0.75"
          />

          <defs>
            <linearGradient id="services-cta-lime" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#B7ED51" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="services-cta-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#52BCEE" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        {!reduce && (
          <div className="absolute inset-0">
            {[
              { x: "20%", y: "65%", delay: 0 },
              { x: "46%", y: "45%", delay: 1.1 },
              { x: "70%", y: "30%", delay: 0.6 },
              { x: "85%", y: "20%", delay: 1.8 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#B7ED51] shadow-[0_0_8px_#B7ED51]"
                style={{ left: p.x, top: p.y }}
                animate={{
                  y: [-12, 12, -12],
                  opacity: [0.3, 0.85, 0.3],
                }}
                transition={{
                  duration: 4.5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <Container className="relative">
        <Reveal>
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] px-8 py-14 sm:px-12 sm:py-18 text-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Top highlight bar */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#B7ED51]/50 to-transparent" />
            <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  SYSTEMS-DRIVEN AUTHORITY
                </span>
              </div>

              {/* Exact CTA Heading */}
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F7F7] leading-[1.1]">
                Ready to Build{" "}
                <span className="text-[#B7ED51]">Lasting Digital Authority?</span>
              </h2>

              <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
                Ranknest IT builds a comprehensive digital marketing foundation spanning search engine optimization,
                high-performance web infrastructure, local search presence, content marketing, and targeted paid acquisition for sustainable growth.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <CTAButton to="/contact">Request a Quote</CTAButton>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-[#F5F7F7] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-0.5"
                >
                  <span>Read Insights</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" />
                </Link>
              </div>

              <div className="pt-2 text-xs text-muted-foreground/70">
                SEO · Web Infrastructure · Local GMB · Content · Social · PPC
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
