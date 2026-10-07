import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Target, MousePointerClick, Zap, Eye } from "lucide-react";

export function PPCCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#030505] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B7ED51]/8 blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#52BCEE]/6 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-8 sm:p-14 lg:p-16 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle Grid Accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #B7ED51 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                READY TO SCALE YOUR CAMPAIGNS?
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Turn Paid Traffic Into{" "}
              <span className="bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] bg-clip-text text-transparent">
                Meaningful Growth.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#B4BEC1] leading-relaxed max-w-2xl mx-auto">
              Request a custom PPC strategy and see how targeted paid advertising can drive
              qualified leads, increase visibility, and maximize ROI for your business.
            </p>

            {/* MINIATURE PERFORMANCE ENGINE VISUAL (Audience -> Ad -> Click -> Conversion -> Growth) */}
            <div className="py-6 my-2" aria-hidden="true">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#B4BEC1]">
                  <Eye className="h-3.5 w-3.5 text-[#B4BEC1]" />
                  <span>AUDIENCE</span>
                </div>
                <span className="text-white/25">→</span>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#52BCEE]">
                  <Target className="h-3.5 w-3.5 text-[#52BCEE]" />
                  <span>AD</span>
                </div>
                <span className="text-white/25">→</span>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[#B7ED51]">
                  <MousePointerClick className="h-3.5 w-3.5 text-[#B7ED51]" />
                  <span>CLICK</span>
                </div>
                <span className="text-white/25">→</span>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-[#F5F7F7] shadow-sm">
                  <Zap className="h-3.5 w-3.5 text-[#52BCEE]" />
                  <span>CONVERSION</span>
                </div>
                <span className="text-white/25">→</span>

                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#B7ED51]/40 bg-[#B7ED51]/10 text-[#B7ED51] font-bold shadow-[0_0_16px_rgba(183,237,81,0.25)]">
                  <TrendingUp className="h-3.5 w-3.5 text-[#B7ED51]" />
                  <span>GROWTH</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#B7ED51] px-8 py-4 text-sm font-bold text-[#030505] shadow-[0_0_24px_rgba(183,237,81,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(183,237,81,0.6)]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-[#F5F7F7] backdrop-blur-xl transition-all duration-200 hover:bg-white/[0.08] hover:border-white/30"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
