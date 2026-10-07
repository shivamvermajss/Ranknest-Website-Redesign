import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Globe,
  Database,
  Cpu,
  Smartphone,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ArchitectureModule {
  id: string;
  name: string;
  layer: string;
  x: number;
  y: number;
  color: string;
  icon: typeof Layout;
  tag: string;
  desc: string;
  spec: string;
}

const MODULES: ArchitectureModule[] = [
  {
    id: "nav",
    name: "NAVIGATION",
    layer: "UI Hierarchy",
    x: 170,
    y: 150,
    color: "#B7ED51",
    icon: Layout,
    tag: "HEADER SYSTEM",
    desc: "Seamless site hierarchy and accessible navigation architecture",
    spec: "Semantic Header & Accessible Routing",
  },
  {
    id: "hero",
    name: "HERO ENGINE",
    layer: "First Viewport",
    x: 530,
    y: 150,
    color: "#52BCEE",
    icon: Sparkles,
    tag: "CONVERSION CORE",
    desc: "High-impact visual entry engineered for instant brand engagement",
    spec: "Above-The-Fold Asset Optimization",
  },
  {
    id: "content",
    name: "CONTENT UI",
    layer: "Layout Grid",
    x: 130,
    y: 350,
    color: "#B7ED51",
    icon: Code2,
    tag: "SEMANTIC STRUCTURE",
    desc: "Typography, editorial hierarchy, and structured layout containers",
    spec: "Modular Component Architecture",
  },
  {
    id: "api",
    name: "API INTEGRATION",
    layer: "Data Exchange",
    x: 570,
    y: 350,
    color: "#52BCEE",
    icon: Cpu,
    tag: "GATEWAY",
    desc: "Seamless communication between client interface and backend services",
    spec: "Secure REST / Service Endpoints",
  },
  {
    id: "mobile",
    name: "RESPONSIVE CORE",
    layer: "Viewport Adapter",
    x: 180,
    y: 540,
    color: "#B7ED51",
    icon: Smartphone,
    tag: "FLUID REFLOW",
    desc: "Dynamic layout scaling across mobile, tablet, and ultra-wide screens",
    spec: "Cross-Device Media Queries",
  },
  {
    id: "seo",
    name: "SEO ENGINE",
    layer: "Search Discovery",
    x: 520,
    y: 540,
    color: "#C53736",
    icon: Search,
    tag: "CRAWLABLE DATA",
    desc: "Structured schema metadata, semantic tags, and search indexability",
    spec: "JSON-LD Schema & Clean DOM",
  },
];

export function DigitalArchitectureVisual() {
  const [selectedModule, setSelectedModule] = useState<string>("nav");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const activeModule = MODULES.find((m) => m.id === selectedModule) || MODULES[0];

  return (
    <div
      className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Digital Architecture and Website Engineering Ecosystem"
    >
      {/* Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#B7ED51]/8 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[#52BCEE]/8 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-[#C53736]/6 blur-[70px]" />
      </div>

      {/* SVG Canvas for Circuit & Telemetry Connections */}
      <svg
        viewBox="0 0 700 700"
        className="w-full h-full relative z-10 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="browserGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#52BCEE" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#030505" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="lineGradLime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="lineGradCyan" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glowLimeWeb" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Telemetry Rings */}
        <circle
          cx="350"
          cy="350"
          r="260"
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
          r="160"
          fill="none"
          stroke="rgba(183, 237, 81, 0.15)"
          strokeWidth="1.5"
          strokeDasharray="24 16 8 16"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "350px", originY: "350px" }}
        />

        {/* CONNECTION LINES: Modules to Central Digital Browser Core (350, 350) */}
        {MODULES.map((mod) => {
          const isSelected = selectedModule === mod.id;
          return (
            <g key={`web-path-${mod.id}`}>
              <line
                x1={mod.x}
                y1={mod.y}
                x2="350"
                y2="350"
                stroke={isSelected ? mod.color : "rgba(255, 255, 255, 0.08)"}
                strokeWidth={isSelected ? "2" : "1"}
                strokeDasharray={isSelected ? "none" : "6 6"}
                className="transition-all duration-300"
              />

              {/* Animated Light Pulse moving toward core */}
              <motion.circle
                r={isSelected ? "4" : "2.5"}
                fill={mod.color}
                filter="url(#glowLimeWeb)"
                animate={{
                  cx: [mod.x, 350],
                  cy: [mod.y, 350],
                  opacity: [0.2, 1, 0.8, 0],
                }}
                transition={{
                  duration: mod.id === "nav" ? 2.5 : mod.id === "hero" ? 2.8 : 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: mod.id === "nav" ? 0 : mod.id === "hero" ? 0.6 : 1.2,
                }}
              />
            </g>
          );
        })}

        {/* ========================================================= */}
        {/* CENTRAL NODE: "DIGITAL CORE" (Browser Frame System) */}
        {/* ========================================================= */}
        <g transform="translate(350, 350)">
          {/* Subtle Outer Pulse Glow */}
          <motion.rect
            x="-85"
            y="-65"
            width="170"
            height="130"
            rx="16"
            fill="none"
            stroke="rgba(183, 237, 81, 0.3)"
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.03, 1],
              strokeOpacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Browser Window Body */}
          <rect
            x="-80"
            y="-60"
            width="160"
            height="120"
            rx="12"
            fill="#060A0C"
            stroke="rgba(82, 188, 238, 0.3)"
            strokeWidth="1.2"
          />

          {/* Browser Header Bar */}
          <rect x="-80" y="-60" width="160" height="24" rx="12" fill="#0A1215" />
          <line x1="-80" y1="-36" x2="80" y2="-36" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Window Buttons */}
          <circle cx="-68" cy="-48" r="3" fill="#C53736" />
          <circle cx="-58" cy="-48" r="3" fill="#EAB308" />
          <circle cx="-48" cy="-48" r="3" fill="#B7ED51" />

          {/* Mini Address Bar */}
          <rect x="-35" y="-53" width="105" height="10" rx="3" fill="#030505" stroke="rgba(255,255,255,0.06)" />
          <text x="17" y="-45" fill="#52BCEE" fontSize="6.5" fontFamily="monospace" textAnchor="middle">
            https://ranknestit.com
          </text>

          {/* Viewport UI Mock Inside Browser */}
          {/* Navbar wireframe */}
          <rect x="-70" y="-28" width="140" height="8" rx="2" fill="#0D1A1E" />
          <rect x="-65" y="-26" width="20" height="4" rx="1" fill="#B7ED51" />
          <rect x="35" y="-26" width="30" height="4" rx="1" fill="#52BCEE" />

          {/* Hero Wireframe Box */}
          <rect x="-70" y="-14" width="140" height="30" rx="4" fill="url(#browserGlow)" stroke="rgba(183, 237, 81, 0.2)" strokeWidth="0.8" />
          <line x1="-60" y1="-4" x2="-10" y2="-4" stroke="#F5F7F7" strokeWidth="2" strokeLinecap="round" />
          <line x1="-60" y1="4" x2="-25" y2="4" stroke="#B4BEC1" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="25" y="-8" width="35" height="18" rx="3" fill="#081014" stroke="#52BCEE" strokeWidth="0.8" />

          {/* Grid Cards Wireframe */}
          <rect x="-70" y="22" width="42" height="28" rx="3" fill="#080F12" stroke="rgba(255,255,255,0.05)" />
          <rect x="-21" y="22" width="42" height="28" rx="3" fill="#080F12" stroke="rgba(255,255,255,0.05)" />
          <rect x="28" y="22" width="42" height="28" rx="3" fill="#080F12" stroke="rgba(255,255,255,0.05)" />

          {/* Scanning Radar Line through Browser */}
          <motion.line
            x1="-70"
            y1="-30"
            x2="70"
            y2="-30"
            stroke="rgba(183, 237, 81, 0.6)"
            strokeWidth="1.2"
            animate={{ y1: [-30, 50, -30], y2: [-30, 50, -30] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center Label below browser */}
          <text
            x="0"
            y="76"
            fill="#B7ED51"
            fontSize="8.5"
            fontFamily="monospace"
            fontWeight="bold"
            letterSpacing="2"
            textAnchor="middle"
          >
            DIGITAL CORE
          </text>
        </g>

        {/* ========================================================= */}
        {/* SIX FLOATING ARCHITECTURE MODULES */}
        {/* ========================================================= */}
        {MODULES.map((mod) => {
          const isSelected = selectedModule === mod.id;
          const Icon = mod.icon;

          return (
            <g
              key={mod.id}
              transform={`translate(${mod.x}, ${mod.y})`}
              className="cursor-pointer transition-transform duration-300"
              onClick={() => setSelectedModule(mod.id)}
            >
              {/* Outer Selection Ring */}
              {isSelected && (
                <motion.circle
                  cx="0"
                  cy="0"
                  r="42"
                  fill="none"
                  stroke={mod.color}
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
                stroke={isSelected ? mod.color : "rgba(255, 255, 255, 0.15)"}
                strokeWidth={isSelected ? "2" : "1"}
                filter="url(#glowLimeWeb)"
                className="transition-colors duration-300"
              />

              {/* Module Label above */}
              <text
                x="0"
                y="-40"
                fill={isSelected ? mod.color : "#B4BEC1"}
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
                textAnchor="middle"
              >
                {mod.name}
              </text>

              {/* Module Icon */}
              <g transform="translate(-9, -9)">
                <foreignObject width="18" height="18">
                  <Icon
                    className="w-4.5 h-4.5 transition-colors"
                    style={{ color: isSelected ? mod.color : "#B4BEC1" }}
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
                {mod.tag}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ========================================================= */}
      {/* FLOATING CORNER CAPSULES */}
      {/* ========================================================= */}
      <motion.div
        className="absolute top-4 left-2 sm:left-4 z-20 pointer-events-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#060A0C]/80 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider text-[#F5F7F7] font-semibold">
            RESPONSIVE GRID
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
            SEO ARCHITECTURE
          </span>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* BOTTOM TELEMETRY INSPECTOR HUD */}
      {/* ========================================================= */}
      <div className="absolute -bottom-8 sm:-bottom-10 inset-x-4 sm:inset-x-8 z-30 pointer-events-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.id}
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
                  borderColor: activeModule.color,
                }}
              >
                <activeModule.icon className="h-4 w-4" style={{ color: activeModule.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#F5F7F7] tracking-wider">
                    {activeModule.name}
                  </span>
                  <span
                    className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: `${activeModule.color}40`,
                      color: activeModule.color,
                    }}
                  >
                    {activeModule.layer}
                  </span>
                </div>
                <p className="text-[11px] text-[#B4BEC1] mt-0.5 line-clamp-1">
                  {activeModule.desc}
                </p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end shrink-0">
              <span className="font-mono text-[9px] text-[#52BCEE] flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
                ACTIVE STANDARD
              </span>
              <span className="font-mono text-[10px] text-[#F5F7F7]">
                {activeModule.spec}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
