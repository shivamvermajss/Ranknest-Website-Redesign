import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Search, Database, FileCode2, Share2, MapPin, Sparkles, TrendingUp } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  category: string;
  desc: string;
  icon: typeof Search;
  x: number; // percentage in SVG coordinate space (0 - 600)
  y: number; // percentage in SVG coordinate space (0 - 520)
  accent: "lime" | "cyan" | "coral";
  speed: string;
}

const NODES: NodeData[] = [
  {
    id: "keywords",
    name: "KEYWORDS",
    category: "Search Intent",
    desc: "Targeting high-intent commercial queries",
    icon: Search,
    x: 110,
    y: 110,
    accent: "lime",
    speed: "6s",
  },
  {
    id: "content",
    name: "CONTENT",
    category: "Semantic Relevance",
    desc: "Optimizing structured topical authority",
    icon: FileCode2,
    x: 480,
    y: 100,
    accent: "lime",
    speed: "7s",
  },
  {
    id: "technical",
    name: "TECHNICAL",
    category: "Architecture & Speed",
    desc: "Crawl health, structured schema & core vitals",
    icon: Database,
    x: 80,
    y: 280,
    accent: "cyan",
    speed: "5.5s",
  },
  {
    id: "authority",
    name: "AUTHORITY",
    category: "Trust & Backlinks",
    desc: "High-equity outreach & digital PR signals",
    icon: Share2,
    x: 510,
    y: 270,
    accent: "cyan",
    speed: "8s",
  },
  {
    id: "local",
    name: "LOCAL",
    category: "GMB & Proximity",
    desc: "Geo-targeted maps & near-me search reach",
    icon: MapPin,
    x: 130,
    y: 440,
    accent: "lime",
    speed: "6.5s",
  },
  {
    id: "ai-search",
    name: "AI SEARCH",
    category: "Generative Citation",
    desc: "LLM synthesis & AI assistant discovery",
    icon: Sparkles,
    x: 460,
    y: 430,
    accent: "coral",
    speed: "7.5s",
  },
];

export function SearchIntelligenceVisual() {
  const reduce = useReducedMotion();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Center core coordinates
  const cx = 295;
  const cy = 270;

  return (
    <div
      className="relative w-full max-w-[620px] mx-auto select-none"
      aria-label="Search Intelligence Engine Interactive Visualization"
    >
      {/* Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(183, 237, 81, 0.15) 0%, rgba(82, 188, 238, 0.12) 45%, rgba(197, 55, 54, 0.05) 70%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Main Glass Shield Container */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060A0C]/80 p-3 sm:p-5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Top Telemetry Header Bar */}
        <div className="flex items-center justify-between border-b border-white/8 pb-3 px-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7ED51] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7ED51]" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B7ED51]">
              SEARCH INTELLIGENCE ENGINE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-wider text-[#B4BEC1]/60">
              SYS::ACTIVE
            </span>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              <span className="font-mono text-[9px] tracking-wider text-[#F5F7F7]">
                CONTINUOUS DISCOVERY
              </span>
            </div>
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div className="relative mt-2 aspect-[600/520] w-full">
          <svg
            viewBox="0 0 600 520"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7ED51" />
                <stop offset="100%" stopColor="#52BCEE" />
              </linearGradient>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52BCEE" />
                <stop offset="100%" stopColor="#82D2F7" />
              </linearGradient>
              <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C53736" />
                <stop offset="100%" stopColor="#52BCEE" />
              </linearGradient>
              <linearGradient id="upwardGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(82, 188, 238, 0.2)" />
                <stop offset="40%" stopColor="rgba(82, 188, 238, 0.7)" />
                <stop offset="85%" stopColor="#B7ED51" />
                <stop offset="100%" stopColor="#C6F46C" />
              </linearGradient>

              {/* Radial Core Glow */}
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(183, 237, 81, 0.35)" />
                <stop offset="50%" stopColor="rgba(82, 188, 238, 0.15)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Node Glow Filters */}
              <filter id="glowLime" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowCyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Architectural Grid Lines */}
            <g opacity="0.12" stroke="#B4BEC1" strokeWidth="0.5">
              <line x1="0" y1="130" x2="600" y2="130" strokeDasharray="3 4" />
              <line x1="0" y1="260" x2="600" y2="260" strokeDasharray="3 4" />
              <line x1="0" y1="390" x2="600" y2="390" strokeDasharray="3 4" />
              <line x1="150" y1="0" x2="150" y2="520" strokeDasharray="3 4" />
              <line x1="300" y1="0" x2="300" y2="520" strokeDasharray="3 4" />
              <line x1="450" y1="0" x2="450" y2="520" strokeDasharray="3 4" />
            </g>

            {/* Outer Concentric Telemetry Orbit Rings */}
            <circle
              cx={cx}
              cy={cy}
              r="170"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
            <circle
              cx={cx}
              cy={cy}
              r="135"
              fill="none"
              stroke="rgba(82, 188, 238, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 8"
              className={reduce ? "" : "animate-[spin_45s_linear_infinite] origin-[295px_270px]"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="95"
              fill="none"
              stroke="rgba(183, 237, 81, 0.18)"
              strokeWidth="1.2"
              strokeDasharray="8 12"
              className={reduce ? "" : "animate-[spin_28s_linear_infinite_reverse] origin-[295px_270px]"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="62"
              fill="url(#coreGlow)"
              stroke="rgba(183, 237, 81, 0.35)"
              strokeWidth="1"
            />

            {/* UPWARD SEARCH TRAJECTORY TO VISIBILITY (Section 7 requirement) */}
            {/* Abstract upward trajectory: search signal -> keyword -> content -> authority -> VISIBILITY */}
            <g>
              <path
                id="upwardTrajectory"
                d="M 60 480 C 130 460, 100 290, 240 230 C 330 190, 390 120, 520 48"
                fill="none"
                stroke="url(#upwardGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 4"
                className={reduce ? "" : "animate-stream-flow"}
              />

              {/* Cyan and lime traveling pulses on upward trajectory */}
              {!reduce && (
                <>
                  <circle r="4" fill="#52BCEE" filter="url(#glowCyan)">
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path="M 60 480 C 130 460, 100 290, 240 230 C 330 190, 390 120, 520 48"
                    />
                  </circle>
                  <circle r="3" fill="#B7ED51" filter="url(#glowLime)">
                    <animateMotion
                      dur="5s"
                      begin="2.5s"
                      repeatCount="indefinite"
                      path="M 60 480 C 130 460, 100 290, 240 230 C 330 190, 390 120, 520 48"
                    />
                  </circle>
                </>
              )}

              {/* Trajectory Step Markers */}
              <text x="62" y="500" fill="#B4BEC1" fontSize="8" fontFamily="monospace" opacity="0.6">
                SIGNAL 01
              </text>
              <text x="215" y="215" fill="#52BCEE" fontSize="8" fontFamily="monospace" opacity="0.7">
                RELEVANCE ↗
              </text>

              {/* APEX GLOWING NODE: VISIBILITY (Section 7) */}
              <g transform="translate(520, 48)">
                <circle
                  r="24"
                  fill="rgba(183, 237, 81, 0.08)"
                  stroke="rgba(183, 237, 81, 0.3)"
                  strokeWidth="1"
                  className={reduce ? "" : "animate-pulse"}
                />
                <circle
                  r="14"
                  fill="#060A0C"
                  stroke="#B7ED51"
                  strokeWidth="2"
                  filter="url(#glowLime)"
                />
                <circle r="5" fill="#B7ED51" />
                <TrendingUp x="-6" y="-6" width="12" height="12" color="#030505" strokeWidth="2.5" />

                {/* Node Pill */}
                <rect
                  x="-42"
                  y="-34"
                  width="84"
                  height="18"
                  rx="9"
                  fill="#080D0E"
                  stroke="#B7ED51"
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x="0"
                  y="-22"
                  textAnchor="middle"
                  fill="#B7ED51"
                  fontSize="9"
                  fontWeight="bold"
                  letterSpacing="1"
                  fontFamily="monospace"
                >
                  VISIBILITY
                </text>
              </g>
            </g>

            {/* SPOKE CONNECTION PATHS (Central Core to 6 Nodes) */}
            {NODES.map((node) => {
              const isHighlighted = activeNode === node.id || activeNode === "core";
              const strokeColor =
                node.accent === "lime"
                  ? isHighlighted
                    ? "#B7ED51"
                    : "rgba(183, 237, 81, 0.35)"
                  : node.accent === "coral"
                    ? isHighlighted
                      ? "#C53736"
                      : "rgba(197, 55, 54, 0.35)"
                    : isHighlighted
                      ? "#52BCEE"
                      : "rgba(82, 188, 238, 0.35)";

              // Slight curve through control point
              const midX = (cx + node.x) / 2 + (node.x < cx ? -15 : 15);
              const midY = (cy + node.y) / 2 + (node.y < cy ? -15 : 15);
              const pathD = `M ${cx} ${cy} Q ${midX} ${midY} ${node.x} ${node.y}`;

              return (
                <g key={`path-${node.id}`}>
                  {/* Base Flow Path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isHighlighted ? "2" : "1.2"}
                    strokeDasharray="4 6"
                    className={reduce ? "" : "animate-stream-flow"}
                    style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                  />

                  {/* Flowing Pulse Particle */}
                  {!reduce && (
                    <circle
                      r={isHighlighted ? "3" : "2"}
                      fill={node.accent === "lime" ? "#B7ED51" : node.accent === "coral" ? "#C53736" : "#52BCEE"}
                      opacity={isHighlighted ? "1" : "0.75"}
                    >
                      <animateMotion
                        dur={node.speed}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* CENTRAL SEARCH INTELLIGENCE CORE */}
            <g
              transform={`translate(${cx}, ${cy})`}
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("core")}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Outer Pulsing Aura */}
              <circle
                r="46"
                fill="none"
                stroke="rgba(183, 237, 81, 0.25)"
                strokeWidth="1"
                className={reduce ? "" : "animate-ping opacity-30"}
                style={{ animationDuration: "3.5s" }}
              />

              {/* Core Body */}
              <circle
                r="38"
                fill="#080D0E"
                stroke={activeNode === "core" ? "#B7ED51" : "rgba(183, 237, 81, 0.7)"}
                strokeWidth="1.8"
                filter="url(#glowLime)"
                className="transition-all duration-300"
              />

              {/* Subtle Radar Sweep */}
              {!reduce && (
                <g className="origin-center animate-[spin_6s_linear_infinite]">
                  <line
                    x1="0"
                    y1="0"
                    x2="36"
                    y2="0"
                    stroke="rgba(183, 237, 81, 0.6)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 0 0 L 36 0 A 36 36 0 0 1 0 36 Z"
                    fill="rgba(183, 237, 81, 0.08)"
                  />
                </g>
              )}

              {/* Inner Center Target Dot */}
              <circle r="4" fill="#B7ED51" />

              {/* Core Text Labels */}
              <text
                x="0"
                y="-10"
                textAnchor="middle"
                fill="#B7ED51"
                fontSize="8"
                fontWeight="bold"
                letterSpacing="1.2"
                fontFamily="monospace"
              >
                RANKNEST
              </text>
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#F5F7F7"
                fontSize="9"
                fontWeight="900"
                letterSpacing="0.8"
                fontFamily="sans-serif"
              >
                SEARCH
              </text>
              <text
                x="0"
                y="15"
                textAnchor="middle"
                fill="#52BCEE"
                fontSize="7"
                letterSpacing="0.5"
                fontFamily="monospace"
              >
                CORE
              </text>
            </g>

            {/* THE 6 CONNECTED SYSTEM NODES */}
            {NODES.map((node) => {
              const Icon = node.icon;
              const isHovered = activeNode === node.id;
              const accentColor =
                node.accent === "lime"
                  ? "#B7ED51"
                  : node.accent === "coral"
                    ? "#C53736"
                    : "#52BCEE";

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Subtle Floating Node Container */}
                  <motion.g
                    animate={
                      reduce
                        ? {}
                        : {
                            y: [0, -4, 0],
                          }
                    }
                    transition={{
                      duration: parseFloat(node.speed),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Hover Glow Shield */}
                    <circle
                      r={isHovered ? "32" : "26"}
                      fill="#080D0E"
                      stroke={isHovered ? accentColor : "rgba(255, 255, 255, 0.15)"}
                      strokeWidth={isHovered ? "2" : "1"}
                      filter={isHovered ? (node.accent === "lime" ? "url(#glowLime)" : "url(#glowCyan)") : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Inner Accent Ring */}
                    <circle
                      r="20"
                      fill="none"
                      stroke={accentColor}
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      opacity={isHovered ? "1" : "0.5"}
                    />

                    {/* Micro-Icon */}
                    <foreignObject x="-10" y="-10" width="20" height="20">
                      <div className="flex h-full w-full items-center justify-center">
                        <Icon
                          className="h-3.5 w-3.5"
                          style={{ color: accentColor }}
                          strokeWidth={2.2}
                        />
                      </div>
                    </foreignObject>

                    {/* Node Text Label Badge */}
                    <g transform="translate(0, 36)">
                      <rect
                        x="-46"
                        y="-8"
                        width="92"
                        height="18"
                        rx="9"
                        fill="#050809"
                        stroke={isHovered ? accentColor : "rgba(255, 255, 255, 0.1)"}
                        strokeWidth="1"
                        className="transition-colors duration-200"
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fill={isHovered ? "#F5F7F7" : "#B4BEC1"}
                        fontSize="8.5"
                        fontWeight="700"
                        letterSpacing="0.8"
                        fontFamily="sans-serif"
                      >
                        {node.name}
                      </text>
                    </g>
                  </motion.g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Telemetry Status Readout Panel */}
        <div className="mt-2 rounded-2xl border border-white/8 bg-black/40 p-3 backdrop-blur-md">
          {activeNode && activeNode !== "core" ? (
            (() => {
              const cur = NODES.find((n) => n.id === activeNode);
              if (!cur) return null;
              return (
                <div className="flex items-center justify-between text-xs transition-opacity duration-200">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor:
                          cur.accent === "lime"
                            ? "#B7ED51"
                            : cur.accent === "coral"
                              ? "#C53736"
                              : "#52BCEE",
                      }}
                    />
                    <span className="font-semibold text-white tracking-wide">{cur.name}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-[#B4BEC1]">{cur.category}</span>
                  </div>
                  <span className="hidden sm:inline font-mono text-[10px] text-muted-foreground">
                    {cur.desc}
                  </span>
                </div>
              );
            })()
          ) : (
            <div className="flex items-center justify-between text-xs text-[#B4BEC1]/80">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                <span className="font-mono text-[11px] tracking-wide text-white">
                  SEARCH → DISCOVERY → RELEVANCE → AUTHORITY → VISIBILITY
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[10px] text-[#52BCEE]">
                HOVER NODES TO INSPECT
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
