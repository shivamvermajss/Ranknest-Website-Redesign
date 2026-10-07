import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, MapPin, Building2, Globe, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EcosystemTouchpoint {
  id: string;
  name: string;
  sub: string;
  role: string;
  icon: typeof Search;
  color: string;
}

const TOUCHPOINTS: EcosystemTouchpoint[] = [
  {
    id: "search",
    name: "LOCAL SEARCH",
    sub: "Nearby Query Processing",
    role: "Captures high commercial intent when prospects query near them",
    icon: Search,
    color: "#52BCEE",
  },
  {
    id: "maps",
    name: "GOOGLE MAPS",
    sub: "Geographic Proximity Engine",
    role: "Positions business in Google 3-Pack with precise radius matching",
    icon: MapPin,
    color: "#B7ED51",
  },
  {
    id: "profile",
    name: "BUSINESS PROFILE",
    sub: "Verified Authority & Trust",
    role: "Provides verified attributes, hours, categories, and direct action triggers",
    icon: Building2,
    color: "#B7ED51",
  },
  {
    id: "website",
    name: "OPTIMIZED WEBSITE",
    sub: "Dedicated Location Pages",
    role: "Validates technical schema, localized content, and service depth",
    icon: Globe,
    color: "#52BCEE",
  },
  {
    id: "customer",
    name: "QUALIFIED CUSTOMER",
    sub: "Inquiry, Call or Visit",
    role: "Converts local discovery directly into appointments and sales",
    icon: Users,
    color: "#B7ED51",
  },
];

export function LocalSearchEcosystem() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TOUCHPOINTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden border-t border-white/6">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#B7ED51] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span>CONNECTED ARCHITECTURE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            The Local Search <br />
            <span className="text-[#B7ED51]">Discovery Ecosystem</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            Local SEO is not an isolated tactic. It operates as an interconnected ecosystem
            channeling nearby searchers through maps, verified profiles, and localized web pages
            directly to your business.
          </p>
        </div>

        {/* Major Visual: Connected Conduit Stepper */}
        <div className="relative rounded-3xl border border-white/10 bg-[#050809]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Horizontal Stepper Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {TOUCHPOINTS.map((tp, idx) => {
              const Icon = tp.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <div
                  key={tp.id}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "cursor-pointer rounded-2xl border p-5 transition-all duration-300 backdrop-blur-md relative group",
                    isActive
                      ? "border-[#B7ED51] bg-[#B7ED51]/12 shadow-[0_0_30px_rgba(183,237,81,0.22)] -translate-y-1"
                      : isPast
                        ? "border-white/15 bg-white/[0.04] text-white"
                        : "border-white/6 bg-white/[0.015] text-[#AEB8BA] hover:border-white/20 hover:bg-white/[0.03]"
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border transition-colors",
                        isActive
                          ? "border-[#B7ED51] bg-[#B7ED51]/25 text-[#B7ED51]"
                          : "border-white/10 bg-white/[0.03] text-[#AEB8BA] group-hover:text-white"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#AEB8BA]/60">0{idx + 1}</span>
                  </div>

                  <div className="font-display text-sm font-bold text-white tracking-wide">
                    {tp.name}
                  </div>
                  <div className="font-mono text-[11px] text-[#AEB8BA] mt-0.5">{tp.sub}</div>

                  <p className="mt-3 text-xs text-[#AEB8BA]/80 leading-relaxed border-t border-white/6 pt-2.5">
                    {tp.role}
                  </p>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="ecosystemActive"
                      className="absolute bottom-0 inset-x-4 h-0.5 bg-[#B7ED51] rounded-full shadow-[0_0_8px_#B7ED51]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Conceptual Radius Radar Visual at the Bottom */}
          <div className="mt-10 rounded-2xl border border-white/6 bg-[#030505]/80 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#B7ED51]/30 bg-[#B7ED51]/10 text-[#B7ED51]">
                <MapPin className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-xs text-[#B7ED51] font-bold">
                  PROXIMITY RADAR CONVERSION
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  Synchronized Map Pack, Local Schema &amp; GBP Signals
                </div>
                <div className="text-xs text-[#AEB8BA] mt-0.5">
                  Eliminating friction so nearby searchers immediately identify and contact your
                  brand.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-white">
                ZERO DATA LOSS
              </span>
              <span className="px-3 py-1.5 rounded-lg border border-[#B7ED51]/30 bg-[#B7ED51]/10 text-[#B7ED51]">
                CONTINUOUS GEO-SYNC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
