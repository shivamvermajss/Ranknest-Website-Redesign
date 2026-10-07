import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Sparkles, Bot, Search, Compass, Shield, Phone } from "lucide-react";

export function AIVisibilityCTA() {
  const reduce = useReducedMotion();

  const pipeline = [
    { label: "AI SEARCH", icon: Bot, color: "#52BCEE" },
    { label: "QUERY", icon: Search, color: "#B4BEC1" },
    { label: "DISCOVERY", icon: Compass, color: "#52BCEE" },
    { label: "RANKNEST", icon: Shield, color: "#B7ED51" },
    { label: "VISIBILITY", icon: Sparkles, color: "#B7ED51" },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#030505]">
      {/* Background Glow & Technical Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full blur-[160px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(183, 237, 81, 0.25) 0%, rgba(82, 188, 238, 0.2) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-[#080E10] to-[#040708] p-8 sm:p-12 md:p-16 backdrop-blur-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-[#B7ED51]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-[#52BCEE]/10 to-transparent pointer-events-none" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                NEXT-GENERATION SEARCH READINESS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Is Your Brand Visible <br />
              <span className="text-lime-gradient">Where AI Searches?</span>
            </h2>

            {/* Explanatory Context */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              Search engines and AI discovery systems increasingly rely on semantic entity mapping,
              structured data, and genuine authoritative citations. Discover how your business
              stands in traditional search algorithms and generative AI answer engines.
            </p>

            {/* AI VISIBILITY PIPELINE VISUAL (Requirement 21) */}
            {/* AI SEARCH → QUERY → DISCOVERY → RANKNEST → VISIBILITY */}
            <div className="mt-12 rounded-2xl border border-white/8 bg-black/50 p-4 sm:p-6 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {pipeline.map((item, idx) => {
                  const Icon = item.icon;
                  const isLast = idx === pipeline.length - 1;

                  return (
                    <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#080D0E] px-3 py-2 shadow-inner">
                        <Icon className="h-4 w-4" style={{ color: item.color }} />
                        <span
                          className="font-mono text-[10px] sm:text-xs font-bold tracking-wider"
                          style={{ color: item.color }}
                        >
                          {item.label}
                        </span>
                      </div>

                      {!isLast && (
                        <div className="flex items-center text-white/30 text-xs font-mono font-bold">
                          <span className="hidden sm:inline">────</span>
                          <span className="text-[#52BCEE]">→</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-[#B4BEC1]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                <span>INTEGRATED SEMANTIC & ORGANIC CITATION GRAPH</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {/* Primary: Audit Your AI Visibility */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B7ED51] px-8 py-4 text-base font-bold text-[#030505] shadow-[0_0_35px_rgba(183,237,81,0.45)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c6f46c] hover:shadow-[0_0_45px_rgba(183,237,81,0.65)] active:scale-[0.98]"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span>Audit Your AI Visibility</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary: Call Now */}
              <a
                href="tel:+91770197196"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-[#F5F7F7] backdrop-blur-md transition-all duration-300 hover:border-[#52BCEE]/50 hover:bg-white/[0.08] hover:shadow-[0_0_25px_rgba(82,188,238,0.2)] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[#52BCEE]" />
                <span>Call Our SEO Team</span>
              </a>
            </div>

            {/* Confidentiality & Non-Obligation Notice */}
            <p className="mt-6 text-xs text-[#B4BEC1]/60 font-mono">
              COMPREHENSIVE TECHNICAL AUDIT • NO FABRICATED METRICS • 100% CONFIDENTIAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
