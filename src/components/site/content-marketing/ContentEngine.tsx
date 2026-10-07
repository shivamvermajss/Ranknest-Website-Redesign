import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  Share2,
  Search,
  Users,
  Award,
  Sparkles,
  Zap,
  TrendingUp,
  Feather,
  Layout,
} from "lucide-react";

interface ContentNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  color: string;
  icon: typeof FileText;
  tag: string;
  desc: string;
  focus: string;
}

const CONTENT_NODES: ContentNode[] = [
  {
    id: "seo",
    name: "SEO ALIGNMENT",
    category: "Organic Reach",
    x: 170,
    y: 160,
    color: "#B7ED51",
    icon: Search,
    tag: "KEYWORD INTENT",
    desc: "Targeting high-value search queries and organic discovery pathways",
    focus: "Search Intent & Crawlability",
  },
  {
    id: "blogs",
    name: "EDITORIAL BLOGS",
    category: "Thought Leadership",
    x: 530,
    y: 160,
    color: "#52BCEE",
    icon: BookOpen,
    tag: "IN-DEPTH ARTICLES",
    desc: "Long-form educational content establishing industry leadership",
    focus: "Topical Authority & Retention",
  },
  {
    id: "website",
    name: "WEBSITE COPY",
    category: "Core Touchpoint",
    x: 130,
    y: 350,
    color: "#B7ED51",
    icon: Layout,
    tag: "LANDING PAGES",
    desc: "Compelling value propositions crafted to turn visitors into leads",
    focus: "Conversion & Message Clarity",
  },
  {
    id: "social",
    name: "SOCIAL CONTENT",
    category: "Community Engagement",
    x: 570,
    y: 350,
    color: "#C53736",
    icon: Share2,
    tag: "AUDIENCE REACH",
    desc: "Engaging multi-platform micro-content and brand storytelling",
    focus: "Viral Resonance & Dialogue",
  },
  {
    id: "audience",
    name: "AUDIENCE TARGETING",
    category: "Persona Modeling",
    x: 180,
    y: 535,
    color: "#52BCEE",
    icon: Users,
    tag: "RELEVANCE",
    desc: "Connecting with exact customer pain points and commercial needs",
    focus: "Behavioral Intent & Trust",
  },
  {
    id: "authority",
    name: "BRAND AUTHORITY",
    category: "Market Trust",
    x: 520,
    y: 535,
    color: "#B7ED51",
    icon: Award,
    tag: "TOPICAL TRUST",
    desc: "Building lasting industry reputation and search engine confidence",
    focus: "Credibility & Long-Term Equity",
  },
];

export function ContentEngine() {
  const [selectedNode, setSelectedNode] = useState<string>("seo");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const activeNode = CONTENT_NODES.find((n) => n.id === selectedNode) || CONTENT_NODES[0];

  return (
    <div
      className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Content Intelligence and Content Engine System"
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#B7ED51]/8 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#52BCEE]/8 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-[#C53736]/6 blur-[70px]" />
      </div>

      {/* SVG Canvas for Orbit & Flow Circuits */}
      <svg
        viewBox="0 0 700 700"
        className="w-full h-full relative z-10 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="contentCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#52BCEE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#030505" stopOpacity="0" />
          </radialGradient>

          <filter id="glowLimeCE" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Rings */}
        <circle
          cx="350"
          cy="350"
          r="265"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        <motion.circle
          cx="350"
          cy="350"
          r="215"
          fill="none"
          stroke="rgba(82, 188, 238, 0.12)"
          strokeWidth="1"
          strokeDasharray="16 12 4 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        <motion.circle
          cx="350"
          cy="350"
          r="155"
          fill="none"
          stroke="rgba(183, 237, 81, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="24 16 8 16"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* CONNECTION LINES: Nodes to Central Content Core (350, 350) */}
        {CONTENT_NODES.map((node) => {
          const isSelected = selectedNode === node.id;
          return (
            <g key={`ce-path-${node.id}`}>
              <line
                x1={node.x}
                y1={node.y}
                x2="350"
                y2="350"
                stroke={isSelected ? node.color : "rgba(255, 255, 255, 0.08)"}
                strokeWidth={isSelected ? "2" : "1"}
                strokeDasharray={isSelected ? "none" : "6 6"}
                className="transition-all duration-300"
              />

              {/* Animated Light Pulse moving toward core */}
              <motion.circle
                r={isSelected ? "4" : "2.5"}
                fill={node.color}
                filter="url(#glowLimeCE)"
                animate={{
                  cx: [node.x, 350],
                  cy: [node.y, 350],
                  opacity: [0.2, 1, 0.8, 0],
                }}
                transition={{
                  duration: node.id === "seo" ? 2.5 : node.id === "blogs" ? 2.8 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.id === "seo" ? 0 : node.id === "blogs" ? 0.6 : 1.2,
                }}
              />
            </g>
          );
        })}

        {/* RADAR SCAN / SIGNAL BEAM */}
        <motion.line
          x1="350"
          y1="350"
          x2="350"
          y2="200"
          stroke="rgba(183, 237, 81, 0.4)"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* ========================================================= */}
        {/* CENTRAL NODE: "CONTENT CORE" */}
        {/* ========================================================= */}
        <g transform="translate(350, 350)">
          {/* Subtle Breathing Core Background */}
          <motion.circle
            cx="0"
            cy="0"
            r="56"
            fill="#060B0C"
            stroke="rgba(183, 237, 81, 0.3)"
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.05, 1],
              strokeOpacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Segment Ring */}
          <circle
            cx="0"
            cy="0"
            r="66"
            fill="none"
            stroke="rgba(82, 188, 238, 0.2)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Core Icon Platform */}
          <circle cx="0" cy="0" r="34" fill="#0C1416" stroke="#B7ED51" strokeWidth="1.5" />

          {/* Editorial Icon: Feather / Document Symbol */}
          <g transform="translate(-10, -10)">
            <foreignObject width="20" height="20">
              <Feather className="w-5 h-5 text-[#B7ED51]" />
            </foreignObject>
          </g>

          {/* Central Label */}
          <text
            x="0"
            y="-44"
            fill="#F5F7F7"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2.5"
            textAnchor="middle"
          >
            CONTENT CORE
          </text>
          <text
            x="0"
            y="50"
            fill="#B7ED51"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1.5"
            textAnchor="middle"
          >
            INTELLIGENCE
          </text>
        </g>

        {/* ========================================================= */}
        {/* SIX CONTENT MODULE NODES */}
        {/* ========================================================= */}
        {CONTENT_NODES.map((node) => {
          const isSelected = selectedNode === node.id;
          const Icon = node.icon;

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              className="cursor-pointer transition-transform duration-300"
              onClick={() => setSelectedNode(node.id)}
            >
              {/* Outer Selection Ring */}
              {isSelected && (
                <motion.circle
                  cx="0"
                  cy="0"
                  r="42"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Module Circle Container */}
              <circle
                cx="0"
                cy="0"
                r="32"
                fill={isSelected ? "#091214" : "#05090B"}
                stroke={isSelected ? node.color : "rgba(255, 255, 255, 0.15)"}
                strokeWidth={isSelected ? "2" : "1"}
                filter="url(#glowLimeCE)"
                className="transition-colors duration-300"
              />

              {/* Module Label above */}
              <text
                x="0"
                y="-40"
                fill={isSelected ? node.color : "#B4BEC1"}
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
                textAnchor="middle"
              >
                {node.name}
              </text>

              {/* Module Icon */}
              <g transform="translate(-9, -9)">
                <foreignObject width="18" height="18">
                  <Icon
                    className="w-4.5 h-4.5 transition-colors"
                    style={{ color: isSelected ? node.color : "#B4BEC1" }}
                  />
                </foreignObject>
              </g>

              {/* Sub-tag below */}
              <text
                x="0"
                y="42"
                fill="rgba(180, 190, 193, 0.6)"
                fontSize="7"
                fontFamily="monospace"
                letterSpacing="0.8"
                textAnchor="middle"
              >
                {node.tag}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Floating Category Badges */}
      <motion.div
        className="absolute top-4 left-2 sm:left-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#060A0C]/80 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            EDITORIAL STUDIO
          </span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-4 right-2 sm:right-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#060A0C]/80 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            TOPICAL AUTHORITY
          </span>
        </div>
      </motion.div>

      {/* BOTTOM TELEMETRY INSPECTOR HUD */}
      <div className="absolute -bottom-8 sm:-bottom-10 inset-x-4 sm:inset-x-8 z-30 pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/10 bg-[#060A0C]/90 p-3 sm:p-3.5 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderColor: activeNode.color,
                }}
              >
                <activeNode.icon className="h-4 w-4" style={{ color: activeNode.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#F5F7F7] tracking-wider">
                    {activeNode.name}
                  </span>
                  <span
                    className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: `${activeNode.color}40`,
                      color: activeNode.color,
                    }}
                  >
                    {activeNode.category}
                  </span>
                </div>
                <p className="text-[11px] text-[#B4BEC1] mt-0.5 line-clamp-1">
                  {activeNode.desc}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="font-mono text-[9px] text-[#52BCEE] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
                ACTIVE ENGINE
              </span>
              <span className="font-mono text-[10px] text-[#F5F7F7]">
                {activeNode.focus}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
