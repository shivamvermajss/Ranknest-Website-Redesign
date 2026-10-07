import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Eye, Radio, Sparkles } from "lucide-react";

export function LocalMediaFrame() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#B7ED51]/20 via-[#52BCEE]/15 to-transparent blur-xl opacity-75" />

      {/* Main Glass Media Container */}
      <div className="relative rounded-[28px] border border-white/12 bg-[#050809]/80 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] overflow-hidden">
        {/* Top Control Bar HUD */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/8 mb-3 font-mono text-[10px] text-[#AEB8BA]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-pulse" />
            <span className="text-white font-semibold">LOCAL SEARCH ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#52BCEE]">
            <Radio className="h-3 w-3" />
            <span>GEO-NODE TELEMETRY</span>
          </div>
        </div>

        {/* Feature Image Frame */}
        <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-2xl overflow-hidden border border-white/8 bg-[#030505]">
          <img
            src="/local-seo/local-seo-feature.png"
            alt="Ranknest IT Local Search Intelligence dashboard displaying structured data nodes and local business schema"
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />

          {/* Subtle Ambient Vignette & Glare Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030505] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#B7ED51]/10 via-transparent to-[#52BCEE]/10 pointer-events-none" />

          {/* Floating Live Verification Badge (Bottom Right) */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-xl border border-white/15 bg-[#050809]/90 backdrop-blur-md px-3 py-2 shadow-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#B7ED51]" />
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  Ethical &amp; Sustainable
                </div>
                <div className="font-mono text-[9px] text-[#B7ED51]">
                  WHITE-HAT LOCAL SEO
                </div>
              </div>
            </div>
          </div>

          {/* Floating Proximity Signal Pill (Top Left) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full border border-white/15 bg-[#050809]/90 backdrop-blur-md px-3 py-1 shadow-xl flex items-center gap-1.5 font-mono text-[10px] text-white">
            <MapPin className="h-3 w-3 text-[#52BCEE]" />
            <span>LOCAL AUTHORITY MATRIX</span>
          </div>
        </div>

        {/* Bottom Technical Verification Strip */}
        <div className="mt-3 flex items-center justify-between px-2 font-mono text-[10px] text-[#AEB8BA]">
          <span>STRUCTURED LOCAL CITATIONS</span>
          <span className="text-[#B7ED51]">● DATA-DRIVEN FRAMEWORK</span>
        </div>
      </div>
    </div>
  );
}
