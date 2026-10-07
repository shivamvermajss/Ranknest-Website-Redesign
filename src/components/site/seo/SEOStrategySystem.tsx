import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Cpu,
  Layers,
  FileSearch,
  Network,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface Capability {
  id: string;
  num: string;
  title: string;
  tagline: string;
  accent: "lime" | "cyan";
  description: string;
  keyAspects: string[];
  visualType: "technical" | "onpage" | "offpage" | "local";
}

const CAPABILITIES: Capability[] = [
  {
    id: "tech",
    num: "01",
    title: "Technical SEO",
    tagline: "Architecture, Crawlability & Core Web Vitals",
    accent: "cyan",
    description:
      "A strong SEO foundation starts with a technically sound website. Our technical SEO services identify and fix the issues stopping search engines from crawling and indexing your site properly — site speed, mobile usability, broken links, duplicate content, and structured data. We ensure your website meets the technical standards search engines reward with higher visibility.",
    keyAspects: ["Site Speed & Core Vitals", "Crawl Budget & Indexing", "Structured Data & Schema", "Mobile Architecture"],
    visualType: "technical",
  },
  {
    id: "onpage",
    num: "02",
    title: "On-Page & Content Optimization",
    tagline: "Search Intent, Semantic Content & Entity Modeling",
    accent: "lime",
    description:
      "Ranking for the right keywords requires more than good writing — it requires strategic optimization. Our team researches the keywords your customers actually search for, then optimizes your titles, headings, meta descriptions, and page content around them. We also create new, high-quality content designed to capture untapped keyword opportunities and answer the questions your audience is asking",
    keyAspects: ["High-Intent Keyword Mapping", "Title & Metadata Engineering", "Topical Authority Clusters", "Content Gap Execution"],
    visualType: "onpage",
  },
  {
    id: "offpage",
    num: "03",
    title: "Off-Page SEO & Link Building",
    tagline: "Authority Signals, Digital PR & High-Trust Networks",
    accent: "cyan",
    description:
      "Backlinks from relevant, authoritative websites remain one of the strongest ranking signals in search algorithms. We earn high-quality links through outreach, guest posting, and digital PR — building your site's authority the right way, without risking penalties from manipulative link schemes.",
    keyAspects: ["Editorial Outreach", "Digital PR Placements", "Brand Mention Authority", "Toxic Link Defense"],
    visualType: "offpage",
  },
  {
    id: "local",
    num: "04",
    title: "Local SEO & GMB Profile Optimization",
    tagline: "Google Map Pack, Geo-Targeting & Local Citations",
    accent: "lime",
    description:
      "For businesses serving specific locations, local SEO ensures you show up when nearby customers search for your products or services. We optimize your Google Business Profile, local citations, and location-specific content to improve visibility in local search results and maps, helping you attract foot traffic and local leads.",
    keyAspects: ["Google Business Profile (GMB)", "NAP Consistency & Citations", "Geo-Intent Local Pages", "Local Review Signals"],
    visualType: "local",
  },
];

export function SEOStrategySystem() {
  const reduce = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string>("tech");

  const activeCapability = CAPABILITIES.find((c) => c.id === hoveredId) || CAPABILITIES[0];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#050809]">
      {/* Background Radiance & Technical Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[180px] opacity-15"
          style={{
            background:
              hoveredId === "onpage" || hoveredId === "local"
                ? "radial-gradient(circle, #B7ED51 0%, transparent 70%)"
                : "radial-gradient(circle, #52BCEE 0%, transparent 70%)",
            transition: "background 0.6s ease",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              SEO STRATEGY SYSTEM
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Customized SEO Strategy <br className="hidden sm:inline" />
            <span className="text-lime-gradient">for Every Business</span>
          </h2>

          {/* Exact supporting paragraphs preserved! */}
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
            <p>
              No two businesses have the same goals, which is why we develop personalized SEO
              strategies instead of using generic, one-size-fits-all packages. Our process begins
              with understanding your industry, competitors, customer search behavior, and business
              objectives. Based on this research, we build strategies that target high-intent
              keywords and relevant search queries, helping your business connect with customers
              who are actively looking for what you offer.
            </p>
            <p>
              From technical audits to content execution, every aspect of your SEO is managed by
              experienced professionals who understand how search engines evaluate and rank
              websites. We regularly monitor performance data, identify opportunities for
              improvement, and make adjustments that enhance overall rankings over time.
            </p>
          </div>
        </div>

        {/* INTERACTIVE CENTRAL SEO STRATEGY SYSTEM (Desktop & Mobile) */}
        <div className="mt-16">
          {/* Central System Controller HUD */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-[#080D0E]/90 p-4 sm:p-5 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 shadow-inner">
                  <span className="font-mono text-xs font-bold text-[#B7ED51]">CORE</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-white font-semibold tracking-wider">
                      RANKNEST SEO ARCHITECTURE
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
                  </div>
                  <p className="text-xs text-[#B4BEC1]/80">
                    Interactive capability mesh: hover or tap capabilities to activate telemetry
                  </p>
                </div>
              </div>

              {/* Capability Fast Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {CAPABILITIES.map((cap) => {
                  const isCur = hoveredId === cap.id;
                  const isLime = cap.accent === "lime";
                  return (
                    <button
                      key={cap.id}
                      onClick={() => setHoveredId(cap.id)}
                      onMouseEnter={() => setHoveredId(cap.id)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono transition-all duration-200 ${
                        isCur
                          ? isLime
                            ? "bg-[#B7ED51] text-[#030505] font-bold shadow-[0_0_15px_rgba(183,237,81,0.5)]"
                            : "bg-[#52BCEE] text-[#030505] font-bold shadow-[0_0_15px_rgba(82,188,238,0.5)]"
                          : "bg-white/[0.04] text-[#B4BEC1] border border-white/8 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{cap.num}</span>
                      <span className="hidden sm:inline">{cap.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SVG Connection Paths Visualizer for Desktop */}
          <div className="hidden lg:block relative mb-8 h-12 w-full overflow-hidden" aria-hidden="true">
            <svg viewBox="0 0 1200 48" className="h-full w-full">
              <defs>
                <linearGradient id="connLime" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#B7ED51" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="connCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#52BCEE" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>

              {/* Horizontal Bus */}
              <line x1="50" y1="24" x2="1150" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              
              {/* Active Connection Pulse */}
              <line
                x1="50"
                y1="24"
                x2="1150"
                y2="24"
                stroke={activeCapability.accent === "lime" ? "url(#connLime)" : "url(#connCyan)"}
                strokeWidth="2"
                strokeDasharray="16 24"
                className={reduce ? "" : "animate-stream-flow"}
              />

              {/* 4 Drops into the 4 columns */}
              {[150, 450, 750, 1050].map((x, i) => {
                const cap = CAPABILITIES[i];
                const isActive = hoveredId === cap.id;
                return (
                  <g key={`drop-${i}`}>
                    <circle
                      cx={x}
                      cy="24"
                      r={isActive ? "5" : "3"}
                      fill={isActive ? (cap.accent === "lime" ? "#B7ED51" : "#52BCEE") : "rgba(255,255,255,0.2)"}
                      className="transition-all duration-300"
                    />
                    <line
                      x1={x}
                      y1="24"
                      x2={x}
                      y2="48"
                      stroke={isActive ? (cap.accent === "lime" ? "#B7ED51" : "#52BCEE") : "rgba(255,255,255,0.08)"}
                      strokeWidth={isActive ? "2" : "1"}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 4 SEO CAPABILITY PANELS GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((cap) => {
              const isHovered = hoveredId === cap.id;
              const isLime = cap.accent === "lime";
              const accentColor = isLime ? "#B7ED51" : "#52BCEE";

              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => setHoveredId(cap.id)}
                  onClick={() => setHoveredId(cap.id)}
                  className={`group relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? isLime
                        ? "border-[#B7ED51]/60 bg-[#0A1012] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(183,237,81,0.2)] scale-[1.02] z-10"
                        : "border-[#52BCEE]/60 bg-[#0A1012] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(82,188,238,0.2)] scale-[1.02] z-10"
                      : "border-white/8 bg-[#070B0D]/70 hover:border-white/20 opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Top Header of Card */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/8 pb-4">
                      {/* Number Pill */}
                      <span
                        className="font-mono text-2xl font-extrabold tracking-tight transition-colors duration-300"
                        style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                      >
                        {cap.num}
                      </span>

                      {/* Icon */}
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300"
                        style={{
                          backgroundColor: isHovered
                            ? isLime
                              ? "rgba(183, 237, 81, 0.15)"
                              : "rgba(82, 188, 238, 0.15)"
                            : "rgba(255, 255, 255, 0.03)",
                          borderColor: isHovered ? accentColor : "rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {cap.visualType === "technical" && (
                          <Layers
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                          />
                        )}
                        {cap.visualType === "onpage" && (
                          <FileSearch
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                          />
                        )}
                        {cap.visualType === "offpage" && (
                          <Network
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                          />
                        )}
                        {cap.visualType === "local" && (
                          <MapPin
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mt-5">
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {cap.title}
                      </h3>
                      <p
                        className="mt-1 font-mono text-[11px] font-medium tracking-wide transition-colors"
                        style={{ color: isHovered ? accentColor : "#B4BEC1" }}
                      >
                        {cap.tagline}
                      </p>
                    </div>

                    {/* Full Original Description Preserved! */}
                    <p className="mt-4 text-sm leading-relaxed text-[#B4BEC1]">
                      {cap.description}
                    </p>

                    {/* Key Aspects Checklist */}
                    <div className="mt-6 space-y-2 border-t border-white/8 pt-4">
                      {cap.keyAspects.map((aspect) => (
                        <div key={aspect} className="flex items-center gap-2 text-xs text-white/90">
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: accentColor }}
                          />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Visual Art at bottom of each card (Requirements 11-12) */}
                  <div className="mt-6 pt-4 border-t border-white/8">
                    <CapabilityMicroVisual type={cap.visualType} isHovered={isHovered} accent={cap.accent} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Micro Visual Art components customized for each capability (Requirement 12)
function CapabilityMicroVisual({
  type,
  isHovered,
  accent,
}: {
  type: "technical" | "onpage" | "offpage" | "local";
  isHovered: boolean;
  accent: "lime" | "cyan";
}) {
  const reduce = useReducedMotion();
  const accentHex = accent === "lime" ? "#B7ED51" : "#52BCEE";

  if (type === "technical") {
    // Website architecture / grid visual (Cyan)
    return (
      <div className="relative h-20 w-full overflow-hidden rounded-xl bg-black/40 border border-white/6 p-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-1">
          <span className="text-[#52BCEE]">CRAWL_GRAPH</span>
          <span>HTTP 200 OK</span>
        </div>
        <svg viewBox="0 0 240 50" className="h-full w-full">
          {/* Architecture Tree */}
          <rect x="10" y="18" width="40" height="16" rx="4" fill="#080D0E" stroke="#52BCEE" strokeWidth="1" />
          <text x="30" y="29" fill="#52BCEE" fontSize="7" textAnchor="middle" fontFamily="monospace">ROOT</text>

          <line x1="50" y1="26" x2="80" y2="12" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" />
          <line x1="50" y1="26" x2="80" y2="40" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" />

          <rect x="80" y="4" width="45" height="15" rx="3" fill="#080D0E" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <text x="102" y="14" fill="#F5F7F7" fontSize="6.5" textAnchor="middle" fontFamily="monospace">SCHEMA</text>

          <rect x="80" y="32" width="45" height="15" rx="3" fill="#080D0E" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <text x="102" y="42" fill="#F5F7F7" fontSize="6.5" textAnchor="middle" fontFamily="monospace">VITALS</text>

          <line x1="125" y1="12" x2="160" y2="26" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" />
          <line x1="125" y1="40" x2="160" y2="26" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" />

          <rect x="160" y="18" width="65" height="16" rx="4" fill="#080D0E" stroke="#52BCEE" strokeWidth="1.2" />
          <text x="192" y="29" fill="#52BCEE" fontSize="7" textAnchor="middle" fontWeight="bold" fontFamily="monospace">INDEXED ✓</text>

          {isHovered && !reduce && (
            <circle r="2.5" fill="#52BCEE">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 26 L 80 12 L 125 12 L 160 26" />
            </circle>
          )}
        </svg>
      </div>
    );
  }

  if (type === "onpage") {
    // Content / search relationship visual (Lime)
    return (
      <div className="relative h-20 w-full overflow-hidden rounded-xl bg-black/40 border border-white/6 p-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-1">
          <span className="text-[#B7ED51]">SEMANTIC_RELATION</span>
          <span>INTENT MATCH</span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/80">Search Query</span>
            <span className="text-[10px] font-mono text-[#B7ED51]">High Intent</span>
          </div>
          {/* Wave Resonance Indicator */}
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#B7ED51] to-[#52BCEE]"
              animate={isHovered ? { width: ["55%", "92%", "78%"] } : { width: "70%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex items-center justify-between text-[9px] text-muted-foreground">
            <span>Title / H1 / Meta</span>
            <span className="text-white">Structured Alignment</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "offpage") {
    // Authority / network connections visual (Cyan)
    return (
      <div className="relative h-20 w-full overflow-hidden rounded-xl bg-black/40 border border-white/6 p-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-1">
          <span className="text-[#52BCEE]">AUTHORITY_NETWORK</span>
          <span>TRUST RANK</span>
        </div>
        <svg viewBox="0 0 240 50" className="h-full w-full">
          {/* External Authority Nodes */}
          <circle cx="25" cy="14" r="7" fill="#080D0E" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="25" cy="38" r="7" fill="#080D0E" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="95" cy="26" r="9" fill="#080D0E" stroke="#52BCEE" strokeWidth="1.2" />
          <circle cx="170" cy="16" r="6" fill="#080D0E" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="215" cy="28" r="14" fill="#080D0E" stroke="#52BCEE" strokeWidth="1.8" />

          {/* Connection Lines */}
          <line x1="32" y1="14" x2="86" y2="26" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="32" y1="38" x2="86" y2="26" stroke="rgba(82, 188, 238, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="104" y1="26" x2="164" y2="16" stroke="rgba(82, 188, 238, 0.5)" strokeWidth="1" />
          <line x1="104" y1="26" x2="201" y2="28" stroke="#52BCEE" strokeWidth="1.5" />

          <text x="215" y="32" fill="#52BCEE" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">DA</text>
        </svg>
      </div>
    );
  }

  // Local SEO (Lime)
  return (
    <div className="relative h-20 w-full overflow-hidden rounded-xl bg-black/40 border border-white/6 p-2">
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-1">
        <span className="text-[#B7ED51]">MAP_SEARCH_RADAR</span>
        <span>NEARBY REACH</span>
      </div>
      <svg viewBox="0 0 240 50" className="h-full w-full">
        {/* Radar Rings */}
        <circle cx="120" cy="25" r="22" fill="none" stroke="rgba(183, 237, 81, 0.2)" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="120" cy="25" r="12" fill="none" stroke="rgba(183, 237, 81, 0.4)" strokeWidth="1" />
        <circle cx="120" cy="25" r="4" fill="#B7ED51" />

        {/* Local Pins */}
        <circle cx="50" cy="18" r="3" fill="#B7ED51" />
        <circle cx="70" cy="36" r="3" fill="#52BCEE" />
        <circle cx="180" cy="15" r="3" fill="#B7ED51" />
        <circle cx="195" cy="38" r="3" fill="#52BCEE" />

        <text x="120" y="44" fill="#B7ED51" fontSize="7" textAnchor="middle" fontFamily="monospace">
          GMB 3-PACK VISIBILITY
        </text>
      </svg>
    </div>
  );
}
