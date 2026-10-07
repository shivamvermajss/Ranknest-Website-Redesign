import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon } from "lucide-react";

export function ContentMediaFrame() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
              CAMPAIGN VISUAL IDENTITY
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F7F7]">
            Visual Content &amp; Media Presentation
          </h3>

          <p className="mt-2 text-sm text-[#AEB8BA]">
            Pairing impactful written copy with engaging branded visuals to create cohesive,
            memorable digital experiences across all channels.
          </p>
        </div>

        {/* Sophisticated Glass Media Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/12 bg-[#060A0C]/90 p-3 sm:p-5 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-white/25 hover:scale-[1.01]">
            {/* Header Telemetry Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/8 mb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AEB8BA]">
                  EDITORIAL VISUAL ASSET
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#52BCEE] uppercase">
                RANKNEST CREATIVE ARCHIVE
              </span>
            </div>

            {/* Media Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#030505]">
              <img
                src="/content-marketing/content-marketing-promo.webp"
                alt="Ranknest IT Content Marketing Strategy and Service Presentation"
                loading="lazy"
                className="w-full h-auto max-h-[460px] object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
