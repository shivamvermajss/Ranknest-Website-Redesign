import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";

export function ResponsiveExperience() {
  const [selectedDevice, setSelectedDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#52BCEE]/4 blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
              ADAPTIVE RESPONSIVENESS
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#B4BEC1]">CROSS-DEVICE PERFECTION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            Built for Every Screen. <br />
            <span className="text-[#B7ED51]">Flawless on Every Device.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B4BEC1]">
            Our website development architecture dynamically reflows typography, navigation, and
            media assets to provide an intuitive, high-converting experience whether accessed via
            ultra-wide desktop, tablet, or smartphone.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-[#060A0C]/90 backdrop-blur-xl">
            <button
              onClick={() => setSelectedDevice("desktop")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                selectedDevice === "desktop"
                  ? "bg-[#B7ED51] text-[#030505] shadow-[0_0_16px_rgba(183,237,81,0.4)]"
                  : "text-[#B4BEC1] hover:text-white"
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span>DESKTOP VIEW</span>
            </button>

            <button
              onClick={() => setSelectedDevice("tablet")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                selectedDevice === "tablet"
                  ? "bg-[#52BCEE] text-[#030505] shadow-[0_0_16px_rgba(82,188,238,0.4)]"
                  : "text-[#B4BEC1] hover:text-white"
              }`}
            >
              <Tablet className="h-3.5 w-3.5" />
              <span>TABLET VIEW</span>
            </button>

            <button
              onClick={() => setSelectedDevice("mobile")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                selectedDevice === "mobile"
                  ? "bg-[#B7ED51] text-[#030505] shadow-[0_0_16px_rgba(183,237,81,0.4)]"
                  : "text-[#B4BEC1] hover:text-white"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>MOBILE VIEW</span>
            </button>
          </div>
        </div>

        {/* 3 DEVICE COMPOSITION SHOWCASE */}
        <div className="mt-12 relative flex items-center justify-center min-h-[460px] p-4 sm:p-8 rounded-3xl border border-white/10 bg-[#060A0C]/80 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full max-w-5xl">
            {/* Left Frame Display */}
            <div className="lg:col-span-8 flex items-center justify-center">
              {selectedDevice === "desktop" && (
                /* DESKTOP FRAME */
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[620px] rounded-2xl border border-white/15 bg-[#080E10] shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#040809] border-b border-white/8">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#C53736]" />
                      <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
                      <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                    </div>
                    <span className="font-mono text-[9px] text-[#B4BEC1] ml-auto">
                      Desktop Viewport (1440 × 900)
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Simulated Nav */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div className="h-3 w-20 rounded bg-[#B7ED51]" />
                      <div className="flex gap-2">
                        <div className="h-2 w-12 rounded bg-white/20" />
                        <div className="h-2 w-12 rounded bg-white/20" />
                        <div className="h-2 w-12 rounded bg-white/20" />
                      </div>
                    </div>

                    {/* Hero Layout */}
                    <div className="grid grid-cols-12 gap-4 items-center py-4">
                      <div className="col-span-7 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-white/80" />
                        <div className="h-2.5 w-full rounded bg-[#B4BEC1]/40" />
                        <div className="h-2.5 w-2/3 rounded bg-[#B4BEC1]/40" />
                        <div className="h-6 w-24 rounded-full bg-[#B7ED51] mt-3" />
                      </div>
                      <div className="col-span-5 h-28 rounded-xl bg-gradient-to-br from-[#B7ED51]/20 via-[#52BCEE]/10 to-transparent border border-white/5" />
                    </div>

                    {/* 3-Col Content Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="h-16 rounded-lg bg-white/[0.02] border border-white/5 p-2 space-y-1">
                        <div className="h-2 w-12 rounded bg-[#52BCEE]" />
                        <div className="h-1.5 w-full rounded bg-white/10" />
                      </div>
                      <div className="h-16 rounded-lg bg-white/[0.02] border border-white/5 p-2 space-y-1">
                        <div className="h-2 w-12 rounded bg-[#B7ED51]" />
                        <div className="h-1.5 w-full rounded bg-white/10" />
                      </div>
                      <div className="h-16 rounded-lg bg-white/[0.02] border border-white/5 p-2 space-y-1">
                        <div className="h-2 w-12 rounded bg-[#C53736]" />
                        <div className="h-1.5 w-full rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedDevice === "tablet" && (
                /* TABLET FRAME */
                <motion.div
                  key="tablet"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[420px] rounded-3xl border border-white/15 bg-[#080E10] shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-2 bg-[#040809] border-b border-white/8">
                    <span className="font-mono text-[9px] text-[#52BCEE]">
                      Tablet Viewport (768 × 1024)
                    </span>
                    <span className="h-1.5 w-6 rounded-full bg-white/20" />
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <div className="h-3 w-16 rounded bg-[#B7ED51]" />
                      <div className="h-3 w-6 rounded bg-white/20" />
                    </div>

                    <div className="space-y-2 py-2">
                      <div className="h-4 w-5/6 rounded bg-white/80" />
                      <div className="h-2.5 w-full rounded bg-[#B4BEC1]/40" />
                      <div className="h-24 rounded-xl bg-gradient-to-br from-[#52BCEE]/20 to-transparent border border-white/5 my-2" />
                      <div className="h-6 w-24 rounded-full bg-[#52BCEE]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="h-14 rounded-lg bg-white/[0.02] border border-white/5 p-2 space-y-1">
                        <div className="h-2 w-10 rounded bg-[#B7ED51]" />
                        <div className="h-1.5 w-full rounded bg-white/10" />
                      </div>
                      <div className="h-14 rounded-lg bg-white/[0.02] border border-white/5 p-2 space-y-1">
                        <div className="h-2 w-10 rounded bg-[#52BCEE]" />
                        <div className="h-1.5 w-full rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedDevice === "mobile" && (
                /* MOBILE FRAME */
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="w-full max-w-[280px] rounded-[36px] border-2 border-white/20 bg-[#080E10] shadow-[0_24px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  {/* Dynamic Island / Notch Mockup */}
                  <div className="flex items-center justify-center pt-2 pb-1 bg-[#040809]">
                    <div className="h-3.5 w-20 rounded-full bg-black border border-white/10" />
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <div className="h-2.5 w-12 rounded bg-[#B7ED51]" />
                      <div className="h-2 w-4 rounded bg-white/30" />
                    </div>

                    <div className="space-y-1.5 py-1">
                      <div className="h-3 w-5/6 rounded bg-white/80" />
                      <div className="h-2 w-full rounded bg-[#B4BEC1]/40" />
                      <div className="h-20 rounded-lg bg-gradient-to-br from-[#B7ED51]/20 to-transparent border border-white/5 my-2" />
                      <div className="h-5 w-full rounded-full bg-[#B7ED51] text-center" />
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="h-10 rounded-lg bg-white/[0.02] border border-white/5 p-1.5 space-y-1">
                        <div className="h-1.5 w-8 rounded bg-[#52BCEE]" />
                        <div className="h-1 w-full rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Architecture Context */}
            <div className="lg:col-span-4 space-y-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-bold">
                ONE CODEBASE · ZERO COMPROMISE
              </span>

              <h3 className="font-display text-2xl font-bold text-[#F5F7F7]">
                Fluid Screen Scaling
              </h3>

              <p className="text-sm leading-relaxed text-[#B4BEC1]">
                Instead of fixed breakpoints, our responsive web design utilizes flexible CSS grid
                structures, modern container queries, and fluid typography formulas.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-white/8">
                {[
                  "Fluid Vector & Typography Reflow",
                  "Touch & Tap Area Accessibility",
                  "Optimized Mobile Data Delivery",
                  "Zero Horizontal Overflow Risk",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F7F7]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#B7ED51]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
