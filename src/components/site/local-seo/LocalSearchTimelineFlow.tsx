import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  ListFilter,
  MapPin,
  Building2,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: typeof Search;
  color: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    number: "01",
    stage: "PROXIMITY INTENT",
    title: "Nearby Customer Needs Service",
    description:
      "A consumer in your target service radius experiences an immediate or commercial requirement.",
    icon: Users,
    color: "#52BCEE",
  },
  {
    number: "02",
    stage: "QUERY FORMULATION",
    title: "Local Search Executed",
    description:
      "User searches via mobile or desktop using localized intent terms ('near me', city name, service).",
    icon: Search,
    color: "#52BCEE",
  },
  {
    number: "03",
    stage: "ALGORITHMIC RETRIEVAL",
    title: "Local Pack & Maps Triggered",
    description:
      "Google calculates proximity, prominence, and relevance to generate the top 3-Pack results.",
    icon: ListFilter,
    color: "#B7ED51",
  },
  {
    number: "04",
    stage: "PRIME POSITIONING",
    title: "Your Business Appears Prominently",
    description:
      "Your optimized Google Business Profile and local schema rank prominently in Maps and search.",
    icon: MapPin,
    color: "#B7ED51",
  },
  {
    number: "05",
    stage: "AUTHORITY VALIDATION",
    title: "Profile & Website Engagement",
    description:
      "Searcher views your verified business attributes, hours, services, and location relevance.",
    icon: Building2,
    color: "#B7ED51",
  },
  {
    number: "06",
    stage: "BUSINESS GROWTH",
    title: "Direct Call, Visit or Inquiry",
    description:
      "High purchase intent translates into direct customer action, booking, appointment, or sale.",
    icon: PhoneCall,
    color: "#B7ED51",
  },
];

export function LocalSearchTimelineFlow() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#B7ED51]/4 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#B7ED51] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span>EDITORIAL LIFECYCLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            From Search to <br />
            <span className="text-[#B7ED51]">Local Discovery</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            The exact journey that turns an anonymous local searcher into an engaged, paying
            customer for your business.
          </p>
        </div>

        {/* 6-Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = idx === activeStep;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "cursor-pointer rounded-2xl border p-6 transition-all duration-300 backdrop-blur-md relative group",
                  isSelected
                    ? "border-[#B7ED51] bg-[#B7ED51]/10 shadow-[0_0_30px_rgba(183,237,81,0.18)] -translate-y-1"
                    : "border-white/8 bg-[#050809]/80 text-[#AEB8BA] hover:border-white/20 hover:bg-white/[0.03]"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors",
                      isSelected
                        ? "border-[#B7ED51] bg-[#B7ED51]/20 text-[#B7ED51]"
                        : "border-white/10 bg-white/[0.03] text-[#AEB8BA] group-hover:text-white"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#AEB8BA]/60">{step.number}</span>
                </div>

                <div className="font-mono text-[10px] text-[#B7ED51] uppercase tracking-wider mb-1">
                  {step.stage}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-[#AEB8BA] leading-relaxed">{step.description}</p>

                {isSelected && (
                  <motion.div
                    layoutId="timelineUnderline"
                    className="absolute bottom-0 inset-x-6 h-0.5 bg-[#B7ED51] rounded-full shadow-[0_0_8px_#B7ED51]"
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
