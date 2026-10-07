import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, ChevronUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function ContactCTA() {
  const reduce = useReducedMotion();

  const handleScrollToForm = () => {
    const el = document.getElementById("contact-workspace");
    if (el) {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      const nameInput = document.getElementById("name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 500);
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#080D0E] overflow-hidden border-t border-white/[0.04]">
      {/* Visual Concept: Upward flowing digital growth path */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Ambient radial glows */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] max-w-full rounded-full bg-[#B7ED51]/6 blur-[160px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[500px] rounded-full bg-[#52BCEE]/6 blur-[160px]" />
        
        {/* Flowing Upward Vector Lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          fill="none"
        >
          {/* Primary Electric Lime upward growth vector */}
          <path
            d="M -100 550 C 300 520, 500 350, 750 180 C 950 40, 1150 20, 1300 0"
            stroke="url(#cta-lime-grad)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />
          {/* Secondary Electric Cyan support trajectory */}
          <path
            d="M -100 590 C 250 560, 480 400, 720 220 C 900 70, 1100 50, 1300 20"
            stroke="url(#cta-cyan-grad)"
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Third subtle tertiary coral trajectory */}
          <path
            d="M -100 620 C 220 600, 450 450, 700 260 C 880 110, 1080 80, 1300 40"
            stroke="#C53736"
            strokeWidth="1"
            opacity="0.3"
          />

          <defs>
            <linearGradient id="cta-lime-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#B7ED51" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#52BCEE" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="cta-cyan-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#52BCEE" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Upward floating particle elements */}
        {!reduce && (
          <div className="absolute inset-0">
            {[
              { x: "20%", y: "70%", delay: 0 },
              { x: "45%", y: "55%", delay: 1.2 },
              { x: "65%", y: "40%", delay: 0.7 },
              { x: "80%", y: "25%", delay: 2.1 },
              { x: "35%", y: "30%", delay: 1.8 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#B7ED51] shadow-[0_0_10px_#B7ED51]"
                style={{ left: p.x, top: p.y }}
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + i,
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
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] px-8 py-16 sm:px-12 sm:py-20 text-center shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Ambient accent top highlight */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#B7ED51]/60 to-transparent" />
            <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  COLLABORATIVE IMPACT
                </span>
              </div>

              {/* Exact client headline with "Grow Your Business" in Lime */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F7F7] leading-[1.08]">
                Ready to{" "}
                <span className="text-[#B7ED51]">Grow Your Business</span>{" "}
                Online?
              </h2>

              <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
                Partner with Ranknest IT to architect high-performance search strategies, technical web infrastructure,
                and compounding digital marketing engineered for measurable organic scale.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleScrollToForm}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B7ED51] px-8 py-4 text-sm font-semibold text-[#030505] transition-all duration-300 hover:bg-[#c6f46c] hover:shadow-glow hover:-translate-y-0.5 cursor-pointer shadow-lg"
                >
                  <span className="relative z-10">Request Technical Consultation</span>
                  <ChevronUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </button>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-[#F5F7F7] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-0.5"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" />
                </Link>
              </div>

              {/* Footnote reassurance */}
              <div className="pt-2 text-xs text-muted-foreground/70">
                Operating hubs in Indirapuram (India) & Abu Dhabi (UAE) · Mon – Sat | 9:00 AM – 6:00 PM
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
