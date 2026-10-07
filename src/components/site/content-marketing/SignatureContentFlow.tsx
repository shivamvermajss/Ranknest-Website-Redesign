import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Feather, Users, MessageSquareQuote, Award, TrendingUp } from "lucide-react";

interface FlowStep {
  id: string;
  name: string;
  label: string;
  icon: typeof Lightbulb;
  color: string;
}

const FLOW_STEPS: FlowStep[] = [
  { id: "idea", name: "IDEA", label: "Market Research", icon: Lightbulb, color: "#B7ED51" },
  { id: "content", name: "CONTENT", label: "SEO Storytelling", icon: Feather, color: "#52BCEE" },
  { id: "audience", name: "AUDIENCE", label: "Intent Targeting", icon: Users, color: "#B7ED51" },
  { id: "engagement", name: "ENGAGEMENT", label: "Active Resonance", icon: MessageSquareQuote, color: "#52BCEE" },
  { id: "authority", name: "AUTHORITY", label: "Topical Trust", icon: Award, color: "#B7ED51" },
  { id: "growth", name: "GROWTH", label: "Sustainable Impact", icon: TrendingUp, color: "#52BCEE" },
];

export function SignatureContentFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/8 bg-[#060A0C]/80 p-5 sm:p-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F5F7F7] font-bold">
            CONTENT INTELLIGENCE JOURNEY
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#52BCEE] uppercase">
          CONTINUOUS CYCLE · STAGE 0{activeStep + 1}
        </span>
      </div>

      <div className="mt-5 relative">
        {/* Horizontal connector line on desktop */}
        <div className="absolute top-1/2 left-8 right-8 h-0.5 -translate-y-1/2 bg-white/10 hidden md:block" />
        <div
          className="absolute top-1/2 left-8 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] transition-all duration-700 hidden md:block"
          style={{ width: `${(activeStep / (FLOW_STEPS.length - 1)) * 88}%` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
          {FLOW_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const isPast = activeStep > idx;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#0A1215] border-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)] scale-[1.03]"
                    : isPast
                      ? "bg-[#05090A] border-[#52BCEE]/30 text-[#F5F7F7]"
                      : "bg-[#030607]/80 border-white/5 text-[#AEB8BA]"
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center border mb-2 transition-colors ${
                    isCurrent
                      ? "bg-[#B7ED51]/20 border-[#B7ED51] text-[#B7ED51]"
                      : isPast
                        ? "bg-[#52BCEE]/15 border-[#52BCEE]/40 text-[#52BCEE]"
                        : "bg-white/[0.02] border-white/10 text-[#AEB8BA]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={`font-mono text-xs font-bold tracking-wider ${
                    isCurrent ? "text-[#F5F7F7]" : "text-[#AEB8BA]"
                  }`}
                >
                  {step.name}
                </span>
                <span className="text-[10px] text-[#AEB8BA] mt-0.5 line-clamp-1">
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
