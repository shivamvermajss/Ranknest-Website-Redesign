import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Feather, Gauge, Share2, BarChart3, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  name: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: typeof Search;
  color: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "RESEARCH",
    title: "Audience Profiling & Gap Analysis",
    description:
      "Investigating target audience pain points, search behavioral trends, and competitor topic coverage to identify high-potential content opportunities.",
    deliverables: [
      "Audience Intent & Keyword Mapping",
      "Competitor Content Gap Audit",
      "High-Value Topic Ideation",
    ],
    icon: Search,
    color: "#B7ED51",
  },
  {
    number: "02",
    name: "STRATEGY",
    title: "Topical Authority Roadmap",
    description:
      "Architecting a comprehensive content calendar and topical hierarchy designed to systematically build search engine trust and brand leadership.",
    deliverables: [
      "Core Content Pillar Framework",
      "Multi-Channel Editorial Schedule",
      "Conversion Goal Alignment",
    ],
    icon: Compass,
    color: "#52BCEE",
  },
  {
    number: "03",
    name: "CREATE",
    title: "High-Resonance Storytelling",
    description:
      "Crafting original, compelling, and well-researched copy that captures reader attention, articulates clear insights, and strengthens brand perception.",
    deliverables: [
      "Engaging Brand Voice & Tone",
      "Thoroughly Researched Drafting",
      "Persuasive Call-to-Action Flows",
    ],
    icon: Feather,
    color: "#B7ED51",
  },
  {
    number: "04",
    name: "OPTIMIZE",
    title: "SEO & Semantic Structuring",
    description:
      "Fine-tuning keyword density, heading hierarchy, meta descriptions, and readability to ensure each asset is fully optimized for organic search crawlers.",
    deliverables: [
      "Semantic HTML5 & Header Hierarchy",
      "Search-Optimized Metadata & Tags",
      "Readability & Skimmability Tuning",
    ],
    icon: Gauge,
    color: "#52BCEE",
  },
  {
    number: "05",
    name: "DISTRIBUTE",
    title: "Multi-Platform Publication",
    description:
      "Deploying content across website pages, corporate blogs, and social media channels to ensure maximum reach and consistent brand visibility.",
    deliverables: [
      "Cross-Channel Content Syndication",
      "Social Micro-Asset Repurposing",
      "Landing Page Synchronization",
    ],
    icon: Share2,
    color: "#B7ED51",
  },
  {
    number: "06",
    name: "MEASURE",
    title: "Engagement & Iteration",
    description:
      "Evaluating visitor engagement, traffic growth, and conversion signals to refine future topics and continually maximize content marketing ROI.",
    deliverables: [
      "Search Ranking Progression Checks",
      "Lead Quality & Engagement Signals",
      "Continuous Editorial Iteration",
    ],
    icon: BarChart3,
    color: "#52BCEE",
  },
];

export function ContentProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = STEPS[activeStep];

  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              FROM IDEA TO IMPACT
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#AEB8BA]">6-STAGE LIFECYCLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            The Content Creation Lifecycle. <br />
            <span className="text-[#B7ED51]">Engineered for Impact.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            A systematic methodology that transforms conceptual ideas into authoritative digital
            assets that search engines trust and audiences love.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE STEPPER */}
        <div className="mt-16 relative">
          {/* Horizontal Line on Desktop */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-white/10 hidden lg:block" />
          <div
            className="absolute top-1/2 left-8 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] transition-all duration-500 hidden lg:block"
            style={{ width: `${(activeStep / (STEPS.length - 1)) * 86}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.name}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-[#060B0C] border-[#B7ED51] shadow-[0_0_24px_rgba(183,237,81,0.2)] scale-[1.02]"
                      : "bg-[#040708]/80 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-bold tracking-widest"
                      style={{ color: isSelected ? step.color : "#AEB8BA" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-white/[0.06] border-[#B7ED51] text-[#B7ED51]"
                          : "bg-white/[0.02] border-white/10 text-[#AEB8BA] group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-[9px] tracking-wider text-[#AEB8BA] block uppercase">
                      STAGE
                    </span>
                    <span
                      className={`font-semibold text-xs sm:text-sm transition-colors ${
                        isSelected ? "text-[#F5F7F7]" : "text-[#AEB8BA] group-hover:text-white"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* EXPANDED ACTIVE STEP DETAIL CARD */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                  style={{ borderColor: `${current.color}40`, color: current.color }}
                >
                  PHASE {current.number}
                </span>
                <span className="font-mono text-xs text-[#AEB8BA] uppercase tracking-wider">
                  {current.name} EXECUTION
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F7F7]">
                {current.title}
              </h3>

              <p className="text-base leading-relaxed text-[#AEB8BA]">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/8 pt-6 lg:pt-0 lg:pl-8 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#AEB8BA] block mb-2">
                DELIVERABLES &amp; STANDARDS
              </span>
              {current.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: current.color }}
                  />
                  <span className="text-xs sm:text-sm text-[#F5F7F7] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
