import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, ListFilter, MapPin, Building2, PhoneCall, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineStage {
  id: string;
  name: string;
  sub: string;
  icon: typeof Search;
  accent: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "search",
    name: "CUSTOMER SEARCH",
    sub: "Geo-Intent Query",
    icon: Search,
    accent: "#52BCEE",
  },
  {
    id: "results",
    name: "LOCAL RESULTS",
    sub: "AI & Algorithmic Index",
    icon: ListFilter,
    accent: "#52BCEE",
  },
  {
    id: "map",
    name: "MAP DISCOVERY",
    sub: "Google 3-Pack & Maps",
    icon: MapPin,
    accent: "#B7ED51",
  },
  {
    id: "business",
    name: "BUSINESS PROFILE",
    sub: "Verified GBP & Authority",
    icon: Building2,
    accent: "#B7ED51",
  },
  {
    id: "contact",
    name: "CONTACT / VISIT",
    sub: "Direct Inquiries & Sales",
    icon: PhoneCall,
    accent: "#B7ED51",
  },
];

export function LocalSearchSignalFlow() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="relative py-14 sm:py-18 bg-[#050809] border-y border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#B7ED51]/4 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Subtitle / Eyebrow */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#AEB8BA] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
            <span>Local Discovery Signal Pathway</span>
          </div>
        </div>

        {/* Interactive Responsive Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = idx === activeStage;
            const isPast = idx < activeStage;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "relative cursor-pointer rounded-2xl border p-4 sm:p-5 transition-all duration-300 backdrop-blur-md group",
                  isActive
                    ? "border-[#B7ED51]/60 bg-[#B7ED51]/10 shadow-[0_0_30px_rgba(183,237,81,0.2)] -translate-y-1"
                    : isPast
                      ? "border-white/12 bg-white/[0.03] text-white"
                      : "border-white/6 bg-white/[0.015] text-[#AEB8BA] hover:border-white/15 hover:bg-white/[0.03]"
                )}
              >
                {/* Arrow Connector Indicator for Desktop */}
                {idx < STAGES.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isPast || isActive ? "text-[#B7ED51]" : "text-white/20"
                      )}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors",
                      isActive
                        ? "border-[#B7ED51] bg-[#B7ED51]/20 text-[#B7ED51]"
                        : "border-white/10 bg-white/[0.03] text-[#AEB8BA] group-hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#AEB8BA]/60 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {stage.name}
                </div>
                <div className="font-mono text-[11px] text-[#AEB8BA] mt-0.5 truncate">
                  {stage.sub}
                </div>

                {/* Active Indicator Pulse Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeLocalIndicator"
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-[#B7ED51] rounded-full shadow-[0_0_8px_#B7ED51]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
