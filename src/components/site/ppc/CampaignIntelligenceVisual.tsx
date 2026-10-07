import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, Target, Layers, LineChart, CheckCircle2, ArrowRight } from "lucide-react";

interface Stage {
  number: string;
  id: string;
  name: string;
  label: string;
  description: string;
  details: string[];
  icon: typeof Target;
  color: string;
}

const STAGES: Stage[] = [
  {
    number: "01",
    id: "audience",
    name: "Audience & Market Research",
    label: "AUDIENCE",
    description:
      "Deep analysis of your target market, competitors, customer behavior, and specific business objectives to identify high-potential conversion segments.",
    details: [
      "Industry & Competitor Landscape Audit",
      "Customer Buying Journey Mapping",
      "Demographic & Intent Profiling",
    ],
    icon: Users2,
    color: "#B7ED51",
  },
  {
    number: "02",
    id: "intent",
    name: "High-Intent Keyword Targeting",
    label: "INTENT",
    description:
      "Pinpointing high-intent search queries that connect your brand with ready-to-act buyers actively looking for your specific products and services.",
    details: [
      "Commercial & Transactional Query Mining",
      "Negative Keyword Funnel Protection",
      "Search Intent Classification",
    ],
    icon: Target,
    color: "#52BCEE",
  },
  {
    number: "03",
    id: "campaign",
    name: "Campaign Architecture & Creative",
    label: "CAMPAIGN",
    description:
      "Structuring multi-channel campaigns across Google Search, Display, Shopping, and Social with compelling copy, responsive assets, and landing page synergy.",
    details: [
      "Ad Group & Single-Themed Structures",
      "High-Impact Responsive Copy & Assets",
      "Landing Page Alignment & Conversion Tracking",
    ],
    icon: Layers,
    color: "#B7ED51",
  },
  {
    number: "04",
    id: "optimization",
    name: "Continuous Performance Optimization",
    label: "OPTIMIZATION",
    description:
      "Regularly auditing campaign data, refining bidding strategies, improving Quality Scores, and making calculated adjustments that reduce cost and improve ROI.",
    details: [
      "Quality Score & Ad Relevance Tuning",
      "Smart Bidding & Device Adjustments",
      "Transparent Performance Analytics",
    ],
    icon: LineChart,
    color: "#52BCEE",
  },
];

export function CampaignIntelligenceVisual() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stage = STAGES[activeStage];

  return (
    <div className="relative mt-12 rounded-3xl border border-white/10 bg-[#060A0C]/80 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Header telemetry badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#B7ED51] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-bold">
            CAMPAIGN INTELLIGENCE PIPELINE
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs text-[#B4BEC1]">4-STAGE ARCHITECTURE</span>
        </div>

        <div className="font-mono text-xs text-[#52BCEE] flex items-center gap-1.5 bg-[#52BCEE]/10 px-3 py-1 rounded-full border border-[#52BCEE]/20">
          <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
          ACTIVE SYSTEM FLOW
        </div>
      </div>

      {/* Interactive Horizontal Pipeline Tracker */}
      <div className="mt-8 relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-white/10 hidden md:block" />
        <div
          className="absolute top-1/2 left-8 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] transition-all duration-500 hidden md:block"
          style={{ width: `${(activeStage / (STAGES.length - 1)) * 82}%` }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
          {STAGES.map((s, idx) => {
            const isCurrent = activeStage === idx;
            const Icon = s.icon;

            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                className={`group relative flex flex-col p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#0A1214] border-[#B7ED51] shadow-[0_0_24px_rgba(183,237,81,0.2)] scale-[1.02]"
                    : "bg-[#030607]/80 border-white/8 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs font-bold tracking-widest"
                    style={{ color: isCurrent ? s.color : "#B4BEC1" }}
                  >
                    {s.number}
                  </span>
                  <div
                    className={`h-7 w-7 rounded-lg flex items-center justify-center border transition-colors ${
                      isCurrent
                        ? "bg-white/[0.06] border-[#B7ED51] text-[#B7ED51]"
                        : "bg-white/[0.02] border-white/10 text-[#B4BEC1] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[10px] tracking-wider text-[#B4BEC1] block uppercase">
                    STAGE {s.label}
                  </span>
                  <span
                    className={`font-semibold text-sm line-clamp-1 mt-0.5 transition-colors ${
                      isCurrent ? "text-[#F5F7F7]" : "text-[#B4BEC1] group-hover:text-[#F5F7F7]"
                    }`}
                  >
                    {s.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Stage Detail Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-8 rounded-2xl border border-white/8 bg-[#030505]/90 p-6 sm:p-7 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Left detail description */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                  style={{ borderColor: `${stage.color}40`, color: stage.color }}
                >
                  STAGE {stage.number}
                </span>
                <span className="font-mono text-xs text-[#B4BEC1] tracking-wider uppercase">
                  {stage.label} METHODOLOGY
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F7F7] mt-3">
                {stage.name}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                {stage.description}
              </p>
            </div>

            {/* Right checklist highlights */}
            <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-white/8 pt-5 md:pt-0 md:pl-6 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4BEC1] block mb-2">
                CORE EXECUTION CAPABILITIES
              </span>
              {stage.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: stage.color }}
                  />
                  <span className="text-xs sm:text-sm text-[#F5F7F7] font-medium">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
