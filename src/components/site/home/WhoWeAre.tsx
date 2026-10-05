import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Search,
  Bot,
  Globe2,
  Activity,
  TrendingUp,
  ShieldCheck,
  Target,
  Sparkles,
} from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

type NodeType = "SEARCH" | "AI" | "WEB" | "DATA" | "GROWTH";

export function WhoWeAre() {
  const reduce = useReducedMotion();
  const [activeNode, setActiveNode] = useState<NodeType>("GROWTH");

  const nodes = [
    {
      id: "SEARCH" as NodeType,
      label: "SEARCH",
      sub: "SEO & Discovery",
      icon: Search,
      color: "#B7ED51",
      hoverColor: "hover:border-[#B7ED51] hover:shadow-[0_0_20px_rgba(183,237,81,0.25)]",
      role: "High-intent organic search dominance & local visibility across major search engines.",
    },
    {
      id: "AI" as NodeType,
      label: "AI",
      sub: "GEO & SGE Visibility",
      icon: Bot,
      color: "#52BCEE",
      hoverColor: "hover:border-[#52BCEE] hover:shadow-[0_0_20px_rgba(82,188,238,0.25)]",
      role: "Generative Engine Optimization securing your brand in LLM answers and AI queries.",
    },
    {
      id: "WEB" as NodeType,
      label: "WEB",
      sub: "Engineered Architecture",
      icon: Globe2,
      color: "#52BCEE",
      hoverColor: "hover:border-[#52BCEE] hover:shadow-[0_0_20px_rgba(82,188,238,0.25)]",
      role: "Custom high-speed website development tuned for conversion and user engagement.",
    },
    {
      id: "DATA" as NodeType,
      label: "DATA",
      sub: "Signals & Attribution",
      icon: Activity,
      color: "#52BCEE",
      indicatorColor: "#C53736",
      hoverColor: "hover:border-[#52BCEE] hover:shadow-[0_0_20px_rgba(82,188,238,0.25)]",
      role: "Continuous performance calibration, conversion tracking, and transparent reporting.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44 bg-[#030505]">
      {/* Atmosphere & Subtle Gradient Transition from Hero */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#080D0E]/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Asymmetric 2-Column Editorial Composition */}
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN: Eyebrow + Large Editorial Headline + Conceptual Pillars */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-10">
            {/* Eyebrow */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#B7ED51]/25 bg-[#B7ED51]/5 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#B7ED51] uppercase">
                  Who We Are
                </span>
              </div>
            </Reveal>

            {/* Primary Editorial Headline: 64–88px on desktop */}
            <Reveal delay={0.1}>
              <h2 className="font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] text-[#F5F7F7]">
                A digital marketing, SEO &amp; web development partner{" "}
                <span className="block mt-2 text-[#B7ED51]">built around your growth.</span>
              </h2>
            </Reveal>

            {/* Conceptual Progression Pillars: Visibility → Qualified Leads → Sustainable Growth */}
            <Reveal delay={0.2} className="pt-4">
              <div className="grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-8">
                <div className="group space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]">
                      Visibility
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#B4BEC1]">
                    Search Engine Optimization &amp; AI answer presence that captures commercial
                    intent.
                  </p>
                </div>

                <div className="group space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]">
                      Qualified Leads
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#B4BEC1]">
                    Targeted PPC campaigns &amp; conversion architecture turning traffic into
                    buyers.
                  </p>
                </div>

                <div className="group space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]">
                      Sustainable Growth
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#B4BEC1]">
                    Scalable technology &amp; data-backed strategies delivering lasting business
                    equity.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Factual Company Positioning + Digital Growth Engine Visual Panel */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8">
            {/* Supporting Copy from Original Client Website */}
            <Reveal delay={0.15}>
              <div className="space-y-4 text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#B4BEC1] font-normal">
                <p>
                  Ranknest IT is a results-driven digital marketing and web development agency
                  committed to helping businesses improve online visibility, attract qualified
                  leads, achieve measurable success, and build long-term digital value.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                  We combine Search Engine Optimization (SEO), Local SEO, Google Ads, Website Design
                  &amp; Development, Social Media Marketing, Content Marketing, and AI-powered
                  digital solutions to engineer predictable, compound business growth.
                </p>
              </div>
            </Reveal>

            {/* Digital Growth Engine: Abstract Digital Ecosystem Visual */}
            <Reveal delay={0.25}>
              <div className="relative rounded-3xl bg-[#080D0E]/85 border border-white/10 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_24px_50px_-15px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7ED51] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7ED51]" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F7F7]">
                      Digital Growth Engine
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
                    Ecosystem · Live
                  </span>
                </div>

                {/* 4 Input Nodes Feeding into Central Hub */}
                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 mb-5">
                  {nodes.map((node) => {
                    const Icon = node.icon;
                    const isSelected = activeNode === node.id;
                    return (
                      <div
                        key={node.id}
                        onMouseEnter={() => setActiveNode(node.id)}
                        className={`group cursor-pointer rounded-2xl border p-3.5 transition-all duration-300 ${
                          isSelected
                            ? "bg-white/[0.06] border-white/20 shadow-[0_0_16px_rgba(183,237,81,0.12)]"
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/15"
                        } ${node.hoverColor}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 border border-white/10"
                            style={{ color: node.color }}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          {node.indicatorColor && (
                            <span
                              className="h-1.5 w-1.5 rounded-full shadow-[0_0_6px_rgba(197,55,54,0.8)]"
                              style={{ backgroundColor: node.indicatorColor }}
                              title="Active Calibration Signal"
                            />
                          )}
                        </div>
                        <div className="text-xs font-bold tracking-wider text-[#F5F7F7]">
                          {node.label}
                        </div>
                        <div className="text-[10px] text-muted-foreground/80 mt-0.5 truncate">
                          {node.sub}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Connecting SVG Circuit Lines */}
                <div className="relative py-1">
                  <svg
                    viewBox="0 0 340 36"
                    className="w-full h-8 overflow-visible"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Circuit Traces converging into GROWTH destination */}
                    <path
                      d="M 45 4 L 45 18 L 170 28"
                      stroke="#52BCEE"
                      strokeWidth="1.2"
                      strokeOpacity="0.4"
                      strokeDasharray={reduce ? undefined : "3 3"}
                    />
                    <path
                      d="M 125 4 L 125 18 L 170 28"
                      stroke="#52BCEE"
                      strokeWidth="1.2"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M 215 4 L 215 18 L 170 28"
                      stroke="#B7ED51"
                      strokeWidth="1.2"
                      strokeOpacity="0.5"
                    />
                    <path
                      d="M 295 4 L 295 18 L 170 28"
                      stroke="#52BCEE"
                      strokeWidth="1.2"
                      strokeOpacity="0.4"
                      strokeDasharray={reduce ? undefined : "3 3"}
                    />

                    {/* Convergence Node Indicator */}
                    <circle cx="170" cy="28" r="3" fill="#B7ED51" />
                    <circle
                      cx="170"
                      cy="28"
                      r="6"
                      stroke="#B7ED51"
                      strokeOpacity="0.4"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Central Destination Core: GROWTH */}
                <div
                  onMouseEnter={() => setActiveNode("GROWTH")}
                  className={`cursor-pointer mt-1 rounded-2xl border p-4 transition-all duration-300 flex items-center justify-between ${
                    activeNode === "GROWTH"
                      ? "bg-gradient-to-r from-[#B7ED51]/15 via-[#080D0E] to-[#52BCEE]/15 border-[#B7ED51]/40 shadow-[0_0_25px_rgba(183,237,81,0.2)]"
                      : "bg-[#050809] border-white/10 hover:border-[#B7ED51]/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B7ED51]/15 border border-[#B7ED51]/30 text-[#B7ED51]">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold tracking-wider text-[#B7ED51]">
                          GROWTH
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          · Destination Nexus
                        </span>
                      </div>
                      <p className="text-[11px] text-[#B4BEC1]">
                        Sustainable Compounding ROI &amp; Market Leadership
                      </p>
                    </div>
                  </div>
                  <Sparkles className="h-4 w-4 text-[#B7ED51] opacity-70 shrink-0" />
                </div>

                {/* Dynamic Role Explanation Footer */}
                <div className="mt-4 pt-3.5 border-t border-white/5 flex items-start gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#B7ED51] shrink-0 mt-0.5" />
                  <span>
                    {activeNode === "GROWTH"
                      ? "Unifying Search, AI visibility, Web architecture, and Data calibration into measurable commercial growth."
                      : nodes.find((n) => n.id === activeNode)?.role}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
