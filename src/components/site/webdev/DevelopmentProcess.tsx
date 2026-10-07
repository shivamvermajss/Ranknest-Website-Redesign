import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, Gauge, Rocket, CheckCircle2 } from "lucide-react";

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
    name: "DISCOVER",
    title: "Discovery & Architecture Planning",
    description:
      "We begin by understanding your business objectives, target audience expectations, and functional requirements to map out the ideal technical and visual architecture.",
    deliverables: [
      "Business Goal & Audience Analysis",
      "Sitemap & Information Architecture",
      "Functional Requirements Scoping",
    ],
    icon: Search,
    color: "#B7ED51",
  },
  {
    number: "02",
    name: "DESIGN",
    title: "UI/UX & Responsive Design",
    description:
      "Our designers craft modern, conversion-focused visual interfaces and design systems tailored to reflect your brand identity across all device screen sizes.",
    deliverables: [
      "Responsive Wireframing & Prototyping",
      "Design Systems & Component Tokens",
      "User-Centric Navigation Flows",
    ],
    icon: Palette,
    color: "#52BCEE",
  },
  {
    number: "03",
    name: "DEVELOP",
    title: "Web Engineering & System Build",
    description:
      "Experienced developers translate design specifications into clean, scalable, and high-performance code, ensuring seamless functionality and responsive rendering.",
    deliverables: [
      "Modern Front-End Engineering",
      "Secure Server & API Integration",
      "Responsive Cross-Device Layouts",
    ],
    icon: Code2,
    color: "#B7ED51",
  },
  {
    number: "04",
    name: "OPTIMIZE",
    title: "Speed, Security & SEO Tuning",
    description:
      "Rigorous quality assurance, asset optimization, semantic HTML5 structure validation, and security hardening to guarantee fast load times and search crawlability.",
    deliverables: [
      "Asset & Media Performance Tuning",
      "SEO Semantic Hierarchy Validation",
      "Cross-Browser QA & Security Checks",
    ],
    icon: Gauge,
    color: "#52BCEE",
  },
  {
    number: "05",
    name: "LAUNCH",
    title: "Deployment & Growth Support",
    description:
      "Seamless production deployment with continuous performance monitoring, ensuring your new website serves as a reliable engine for long-term business growth.",
    deliverables: [
      "Zero-Downtime Live Rollout",
      "Search Console & Analytics Handshake",
      "Post-Launch Support & Monitoring",
    ],
    icon: Rocket,
    color: "#B7ED51",
  },
];

export function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = STEPS[activeStep];

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#B7ED51]/4 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              HOW WE BUILD
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#B4BEC1]">ENGINEERING LIFECYCLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            From Blueprint to Launch. <br />
            <span className="text-[#B7ED51]">A Structured Digital Process.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B4BEC1]">
            Every website project follows an intentional 5-stage lifecycle engineered to combine
            exceptional aesthetics with robust technical performance.
          </p>
        </div>

        {/* HORIZONTAL DIGITAL PIPELINE TRACKER */}
        <div className="mt-16 relative">
          {/* Connecting Line across desktop */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 -translate-y-1/2 bg-white/10 hidden lg:block" />
          <div
            className="absolute top-1/2 left-10 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] transition-all duration-500 hidden lg:block"
            style={{ width: `${(activeStep / (STEPS.length - 1)) * 84}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
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
                      style={{ color: isSelected ? step.color : "#B4BEC1" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-white/[0.06] border-[#B7ED51] text-[#B7ED51]"
                          : "bg-white/[0.02] border-white/10 text-[#B4BEC1] group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-[10px] tracking-wider text-[#B4BEC1] block uppercase">
                      STAGE
                    </span>
                    <span
                      className={`font-semibold text-sm transition-colors ${
                        isSelected ? "text-[#F5F7F7]" : "text-[#B4BEC1] group-hover:text-white"
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
                  STAGE {current.number}
                </span>
                <span className="font-mono text-xs text-[#B4BEC1] uppercase tracking-wider">
                  {current.name} PHASE
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F7F7]">
                {current.title}
              </h3>

              <p className="text-base leading-relaxed text-[#B4BEC1]">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/8 pt-6 lg:pt-0 lg:pl-8 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4BEC1] block mb-2">
                PHASE DELIVERABLES &amp; STANDARDS
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
