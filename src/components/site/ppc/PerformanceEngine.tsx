import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Search,
  Eye,
  ShoppingBag,
  Users,
  TrendingUp,
  Zap,
  MousePointerClick,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface ChannelNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  color: string;
  glow: string;
  icon: typeof Search;
  tag: string;
  focus: string;
  signalDesc: string;
}

const CHANNELS: ChannelNode[] = [
  {
    id: "search",
    name: "SEARCH ADS",
    category: "Google Ads",
    x: 180,
    y: 190,
    color: "#B7ED51",
    glow: "rgba(183, 237, 81, 0.4)",
    icon: Search,
    tag: "HIGH-INTENT",
    focus: "Query Intent & Keywords",
    signalDesc: "Commercial search intent matching real-time queries",
  },
  {
    id: "display",
    name: "DISPLAY ADS",
    category: "Publisher Network",
    x: 520,
    y: 190,
    color: "#52BCEE",
    glow: "rgba(82, 188, 238, 0.4)",
    icon: Eye,
    tag: "BRAND AWARENESS",
    focus: "Contextual Placement",
    signalDesc: "High-impact visual reach across premium websites",
  },
  {
    id: "shopping",
    name: "SHOPPING ADS",
    category: "eCommerce Search",
    x: 170,
    y: 500,
    color: "#B7ED51",
    glow: "rgba(183, 237, 81, 0.4)",
    icon: ShoppingBag,
    tag: "PRODUCT DISCOVERY",
    focus: "Optimized SKU Feeds",
    signalDesc: "Direct catalog visibility for active product shoppers",
  },
  {
    id: "social",
    name: "SOCIAL PPC",
    category: "Multi-Platform",
    x: 530,
    y: 500,
    color: "#C53736",
    glow: "rgba(197, 55, 54, 0.4)",
    icon: Users,
    tag: "AUDIENCE TARGETING",
    focus: "Demographic & Behavioral",
    signalDesc: "Precision interest filters across Meta, LinkedIn & social channels",
  },
];

export function PerformanceEngine() {
  const [selectedChannel, setSelectedChannel] = useState<string>("search");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const activeChannel = CHANNELS.find((c) => c.id === selectedChannel) || CHANNELS[0];

  return (
    <div
      className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Interactive Audience and Performance Engine Visual"
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#B7ED51]/8 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#52BCEE]/8 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-[#C53736]/6 blur-[70px]" />
      </div>

      {/* SVG Network Canvas */}
      <svg
        viewBox="0 0 700 700"
        className="w-full h-full relative z-10 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Radial Gradients for nodes */}
          <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#52BCEE" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#030505" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="growthGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="searchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="displayGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="shopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="socialGrad" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C53736" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.3" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glowLime" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Orbit Ring */}
        <circle
          cx="350"
          cy="350"
          r="270"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Medium Rotating Telemetry Ring */}
        <motion.circle
          cx="350"
          cy="350"
          r="210"
          fill="none"
          stroke="rgba(82, 188, 238, 0.12)"
          strokeWidth="1"
          strokeDasharray="16 12 4 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* Inner Counter-Rotating Telemetry Ring */}
        <motion.circle
          cx="350"
          cy="350"
          r="140"
          fill="none"
          stroke="rgba(183, 237, 81, 0.16)"
          strokeWidth="1.5"
          strokeDasharray="30 20 10 20"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* Sub-Ring with Small Tick Markers */}
        <circle
          cx="350"
          cy="350"
          r="95"
          fill="url(#centerCoreGlow)"
          stroke="rgba(183, 237, 81, 0.25)"
          strokeWidth="1.2"
        />

        {/* UPWARD TRAJECTORY LINE TO "GROWTH" */}
        <path
          d="M 350 255 L 350 90"
          fill="none"
          stroke="url(#growthGrad)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {/* Animated Light Pulse traveling UP toward Growth */}
        <motion.circle
          cx="350"
          cy="255"
          r="3"
          fill="#B7ED51"
          filter="url(#glowLime)"
          animate={{ cy: [255, 95] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* TOP NODE: "GROWTH" */}
        <g transform="translate(350, 75)">
          <circle cx="0" cy="0" r="18" fill="#05090A" stroke="#B7ED51" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="24" fill="none" stroke="rgba(183, 237, 81, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M -4 2 L 0 -3 L 4 2" fill="none" stroke="#B7ED51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <text
            x="0"
            y="-32"
            fill="#B7ED51"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2"
            textAnchor="middle"
          >
            GROWTH
          </text>
        </g>

        {/* CONNECTION PATHS: Channels to Central Conversion Node (350, 350) */}
        {CHANNELS.map((ch) => {
          const isSelected = selectedChannel === ch.id;
          return (
            <g key={`path-${ch.id}`}>
              {/* Background Guide Line */}
              <line
                x1={ch.x}
                y1={ch.y}
                x2="350"
                y2="350"
                stroke={isSelected ? ch.color : "rgba(255, 255, 255, 0.08)"}
                strokeWidth={isSelected ? "2" : "1"}
                strokeDasharray={isSelected ? "none" : "6 6"}
                className="transition-all duration-300"
              />

              {/* Animated Light Particle traveling toward center */}
              <motion.circle
                r={isSelected ? "4" : "2.5"}
                fill={ch.color}
                filter="url(#glowLime)"
                animate={{
                  cx: [ch.x, 350],
                  cy: [ch.y, 350],
                  opacity: [0.2, 1, 0.8, 0],
                }}
                transition={{
                  duration: ch.id === "search" ? 2.4 : ch.id === "display" ? 2.8 : ch.id === "shopping" ? 2.2 : 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: ch.id === "search" ? 0 : ch.id === "display" ? 0.6 : ch.id === "shopping" ? 1.2 : 1.8,
                }}
              />
            </g>
          );
        })}

        {/* FUNNEL STEP LABELS ALONG PATHWAYS */}
        {/* Step 1: TARGETING */}
        <text
          x="250"
          y="260"
          fill="rgba(180, 190, 193, 0.5)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          INTENT
        </text>

        {/* Step 2: AD CLICK */}
        <text
          x="450"
          y="260"
          fill="rgba(180, 190, 193, 0.5)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          CLICK
        </text>

        {/* Step 3: LANDING PAGE */}
        <text
          x="245"
          y="435"
          fill="rgba(180, 190, 193, 0.5)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          LANDING
        </text>

        {/* Step 4: AUDIENCE REACH */}
        <text
          x="455"
          y="435"
          fill="rgba(180, 190, 193, 0.5)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          ENGAGE
        </text>

        {/* RADAR SWEEP LINE in center */}
        <motion.line
          x1="350"
          y1="350"
          x2="350"
          y2="255"
          stroke="rgba(183, 237, 81, 0.4)"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* ========================================================= */}
        {/* CENTRAL NODE: "CONVERSION" */}
        {/* ========================================================= */}
        <g transform="translate(350, 350)">
          {/* Subtle Breathing Core Background */}
          <motion.circle
            cx="0"
            cy="0"
            r="54"
            fill="#060B0C"
            stroke="rgba(183, 237, 81, 0.3)"
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.05, 1],
              strokeOpacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer Segment Ring */}
          <circle
            cx="0"
            cy="0"
            r="64"
            fill="none"
            stroke="rgba(82, 188, 238, 0.2)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Central Conversion Icon */}
          <circle cx="0" cy="0" r="32" fill="#0C1416" stroke="#B7ED51" strokeWidth="1.5" />
          
          {/* Target / Bullseye SVG Art */}
          <circle cx="0" cy="0" r="16" fill="none" stroke="#52BCEE" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="6" fill="#B7ED51" />

          {/* Central Label */}
          <text
            x="0"
            y="-42"
            fill="#F5F7F7"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2.5"
            textAnchor="middle"
          >
            CONVERSION
          </text>
          <text
            x="0"
            y="48"
            fill="#B7ED51"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1.5"
            textAnchor="middle"
          >
            ACTIVE ENGINE
          </text>
        </g>

        {/* ========================================================= */}
        {/* FOUR CHANNEL NODES (Floating Glass Nodes) */}
        {/* ========================================================= */}
        {CHANNELS.map((ch, idx) => {
          const isSelected = selectedChannel === ch.id;
          const Icon = ch.icon;

          return (
            <g
              key={ch.id}
              transform={`translate(${ch.x}, ${ch.y})`}
              className="cursor-pointer transition-transform duration-300"
              onClick={() => setSelectedChannel(ch.id)}
            >
              {/* Outer Halo on select */}
              {isSelected && (
                <motion.circle
                  cx="0"
                  cy="0"
                  r="48"
                  fill="none"
                  stroke={ch.color}
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Node Background */}
              <circle
                cx="0"
                cy="0"
                r="36"
                fill={isSelected ? "#091214" : "#060A0C"}
                stroke={isSelected ? ch.color : "rgba(255, 255, 255, 0.15)"}
                strokeWidth={isSelected ? "2" : "1"}
                filter="url(#glowLime)"
                className="transition-colors duration-300"
              />

              {/* Small Channel Category Tag */}
              <text
                x="0"
                y="-45"
                fill={isSelected ? ch.color : "#B4BEC1"}
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
                textAnchor="middle"
              >
                {ch.name}
              </text>

              {/* Node Icon Graphic */}
              <g transform="translate(-10, -10)">
                <foreignObject width="20" height="20">
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isSelected ? "text-white" : "text-[#B4BEC1]"
                    }`}
                    style={{ color: isSelected ? ch.color : "#B4BEC1" }}
                  />
                </foreignObject>
              </g>

              {/* Tag below node */}
              <text
                x="0"
                y="48"
                fill="rgba(180, 190, 193, 0.6)"
                fontSize="7.5"
                fontFamily="monospace"
                letterSpacing="1"
                textAnchor="middle"
              >
                {ch.tag}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ========================================================= */}
      {/* FLOATING GLASS AD CARDS OVERLAY */}
      {/* ========================================================= */}
      {/* Search Ad Pill */}
      <motion.div
        className="absolute top-6 left-2 sm:left-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => setSelectedChannel("search")}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-xl text-left transition-all ${
            selectedChannel === "search"
              ? "bg-[#0A1214]/90 border-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)]"
              : "bg-[#060A0C]/70 border-white/10 hover:border-white/20"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-[#B7ED51] animate-ping" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            SEARCH AD
          </span>
          <span className="text-[10px] text-[#B4BEC1] hidden sm:inline">| High-Intent</span>
        </button>
      </motion.div>

      {/* Display Card Pill */}
      <motion.div
        className="absolute top-6 right-2 sm:right-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => setSelectedChannel("display")}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-xl text-left transition-all ${
            selectedChannel === "display"
              ? "bg-[#0A1214]/90 border-[#52BCEE] shadow-[0_0_20px_rgba(82,188,238,0.25)]"
              : "bg-[#060A0C]/70 border-white/10 hover:border-white/20"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-[#52BCEE]" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            DISPLAY
          </span>
          <span className="text-[10px] text-[#B4BEC1] hidden sm:inline">| Contextual</span>
        </button>
      </motion.div>

      {/* Shopping Card Pill */}
      <motion.div
        className="absolute bottom-6 left-2 sm:left-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => setSelectedChannel("shopping")}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-xl text-left transition-all ${
            selectedChannel === "shopping"
              ? "bg-[#0A1214]/90 border-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)]"
              : "bg-[#060A0C]/70 border-white/10 hover:border-white/20"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-[#B7ED51]" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            SHOPPING
          </span>
          <span className="text-[10px] text-[#B4BEC1] hidden sm:inline">| SKU Feeds</span>
        </button>
      </motion.div>

      {/* Social Card Pill */}
      <motion.div
        className="absolute bottom-6 right-2 sm:right-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => setSelectedChannel("social")}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full border backdrop-blur-xl text-left transition-all ${
            selectedChannel === "social"
              ? "bg-[#0A1214]/90 border-[#C53736] shadow-[0_0_20px_rgba(197,55,54,0.25)]"
              : "bg-[#060A0C]/70 border-white/10 hover:border-white/20"
          }`}
        >
          <span className="flex h-2 w-2 rounded-full bg-[#C53736]" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            SOCIAL
          </span>
          <span className="text-[10px] text-[#B4BEC1] hidden sm:inline">| Demographic</span>
        </button>
      </motion.div>

      {/* ========================================================= */}
      {/* TELEMETRY INSPECTOR HUD (Bottom Center Overlay) */}
      {/* ========================================================= */}
      <div className="absolute -bottom-8 sm:-bottom-10 inset-x-4 sm:inset-x-8 z-30 pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChannel.id}
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
                  borderColor: activeChannel.color,
                }}
              >
                <activeChannel.icon className="h-4 w-4" style={{ color: activeChannel.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#F5F7F7] tracking-wider">
                    {activeChannel.name}
                  </span>
                  <span
                    className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: `${activeChannel.color}40`,
                      color: activeChannel.color,
                    }}
                  >
                    {activeChannel.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#B4BEC1] mt-0.5 line-clamp-1">
                  {activeChannel.signalDesc}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="font-mono text-[9px] text-[#52BCEE] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
                OPTIMIZING
              </span>
              <span className="font-mono text-[10px] text-[#F5F7F7]">
                {activeChannel.focus}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
