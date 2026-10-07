import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Navigation, Compass, Radio, Search, ShieldCheck } from "lucide-react";

interface LocationNode {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  distance: string;
  activeColor: string;
}

const NODES: LocationNode[] = [
  { id: "n1", name: "Metro Commercial Hub", type: "High Intent", x: 180, y: 110, distance: "0.8 km", activeColor: "#B7ED51" },
  { id: "n2", name: "Tech District North", type: "Corporate", x: 420, y: 95, distance: "1.4 km", activeColor: "#52BCEE" },
  { id: "n3", name: "Residential Sector 14", type: "Local Search", x: 130, y: 320, distance: "1.1 km", activeColor: "#B7ED51" },
  { id: "n4", name: "Suburban Medical Park", type: "Service Query", x: 450, y: 290, distance: "2.3 km", activeColor: "#52BCEE" },
  { id: "n5", name: "South Retail Avenue", type: "Walk-In Intent", x: 260, y: 410, distance: "1.6 km", activeColor: "#C53736" },
  { id: "n6", name: "Financial Corridor", type: "B2B Query", x: 380, y: 390, distance: "1.9 km", activeColor: "#B7ED51" },
];

export function LocalSearchMap() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [radiusPhase, setRadiusPhase] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % NODES.length);
      setRadiusPhase((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const activeNode = NODES[activeNodeIndex];

  return (
    <div
      className="relative w-full max-w-[620px] aspect-[5/4] sm:aspect-square mx-auto rounded-3xl border border-white/10 bg-[#050809]/90 backdrop-blur-2xl p-4 sm:p-6 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] group"
      role="region"
      aria-label="Interactive Local Search Intelligence Map"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#B7ED51]/8 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#52BCEE]/8 blur-[80px]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      </div>

      {/* Telemetry Header HUD */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/8 pb-3 mb-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7ED51] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7ED51]" />
          </span>
          <span className="text-white font-semibold tracking-wider">LOCAL SEARCH RADAR</span>
          <span className="text-[#B7ED51]/80">● LIVE GRID</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[#AEB8BA]">
          <span>RADIUS: 5.0 KM</span>
          <span>INTENT: ACTIVE</span>
        </div>
      </div>

      {/* Main Map SVG Surface */}
      <div className="relative w-full h-[82%] sm:h-[84%] rounded-2xl border border-white/6 bg-[#030505]/95 overflow-hidden">
        <svg
          viewBox="0 0 560 480"
          className="w-full h-full select-none"
          aria-hidden="true"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="businessRadar" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#B7ED51" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="1" />
            </linearGradient>

            <pattern id="cityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Grid pattern fill */}
          <rect width="100%" height="100%" fill="url(#cityGrid)" />

          {/* Abstract Roads & Neighborhood Blocks */}
          <g stroke="rgba(255,255,255,0.07)" strokeWidth="6" strokeLinecap="round" fill="none">
            {/* Primary arterial highways */}
            <path d="M 20 240 L 540 240" />
            <path d="M 280 20 L 280 460" />
            <path d="M 60 70 L 500 410" stroke="rgba(82, 188, 238, 0.08)" strokeWidth="4" />
            <path d="M 490 80 L 70 410" stroke="rgba(82, 188, 238, 0.08)" strokeWidth="4" />
          </g>

          {/* Secondary streets */}
          <g stroke="rgba(255,255,255,0.035)" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M 80 150 L 480 150" />
            <path d="M 80 330 L 480 330" />
            <path d="M 160 50 L 160 430" />
            <path d="M 400 50 L 400 430" />
            {/* Outer perimeter curve */}
            <circle cx="280" cy="240" r="190" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 6" />
          </g>

          {/* Expanding Search Radius Waves */}
          <motion.circle
            cx="280"
            cy="240"
            r="160"
            fill="url(#businessRadar)"
            stroke="#B7ED51"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            animate={
              shouldReduceMotion
                ? { scale: 1, opacity: 0.3 }
                : {
                    scale: [0.65, 1.25, 0.65],
                    opacity: [0.4, 0.15, 0.4],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="280"
            cy="240"
            r="90"
            fill="none"
            stroke="#52BCEE"
            strokeWidth="1"
            strokeDasharray="3 5"
            animate={
              shouldReduceMotion
                ? { opacity: 0.3 }
                : {
                    scale: [0.8, 1.15, 0.8],
                    opacity: [0.5, 0.2, 0.5],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Active Route Connecting Active Node to Business Center */}
          <motion.path
            d={`M ${activeNode.x} ${activeNode.y} Q ${(activeNode.x + 280) / 2} ${
              (activeNode.y + 240) / 2 - 20
            } 280 240`}
            fill="none"
            stroke="url(#routeGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            animate={
              shouldReduceMotion
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: [-20, 0] }
            }
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Secondary connection paths to all nodes */}
          {NODES.map((node) => (
            <line
              key={`conn-${node.id}`}
              x1="280"
              y1="240"
              x2={node.x}
              y2={node.y}
              stroke={node.id === activeNode.id ? "rgba(183,237,81,0.4)" : "rgba(255,255,255,0.06)"}
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          ))}

          {/* Location Nodes */}
          {NODES.map((node, i) => {
            const isTarget = node.id === activeNode.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setActiveNodeIndex(i)}
              >
                {/* Node Ring Halo */}
                {isTarget && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="18"
                    fill="none"
                    stroke={node.activeColor}
                    strokeWidth="1.5"
                    className="animate-ping opacity-40"
                  />
                )}
                {/* Node Outer Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="#080D0E"
                  stroke={isTarget ? node.activeColor : "rgba(255,255,255,0.2)"}
                  strokeWidth={isTarget ? "2" : "1.2"}
                />
                {/* Node Inner Core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={isTarget ? node.activeColor : "rgba(255,255,255,0.5)"}
                />
                {/* Node Label Capsule */}
                <g transform={`translate(${node.x + 14}, ${node.y - 12})`}>
                  <rect
                    width="120"
                    height="24"
                    rx="6"
                    fill="rgba(5,8,9,0.85)"
                    stroke={isTarget ? node.activeColor : "rgba(255,255,255,0.1)"}
                    strokeWidth="1"
                  />
                  <text
                    x="8"
                    y="15"
                    fill={isTarget ? "#F5F7F7" : "#AEB8BA"}
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight={isTarget ? "600" : "400"}
                  >
                    {node.name.length > 18 ? node.name.slice(0, 16) + "…" : node.name}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Traveling Search Signal Particle */}
          {!shouldReduceMotion && (
            <motion.circle
              r="4"
              fill="#B7ED51"
              filter="drop-shadow(0 0 6px #B7ED51)"
              animate={{
                cx: [activeNode.x, 280],
                cy: [activeNode.y, 240],
                opacity: [0.2, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Central Business Marker (Ranknest Hub) */}
          <g transform="translate(280, 240)">
            {/* Outer Pulses */}
            <circle
              r="34"
              fill="rgba(183, 237, 81, 0.08)"
              stroke="#B7ED51"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="animate-spin-slow"
            />
            <circle
              r="24"
              fill="#080D0E"
              stroke="#B7ED51"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 16px rgba(183,237,81,0.5))"
            />
            {/* Center Core */}
            <circle r="9" fill="#B7ED51" />
            <circle r="4" fill="#030505" />

            {/* Central Pin Icon */}
            <path
              d="M -5 -18 C -5 -25 5 -25 5 -18 C 5 -12 0 -7 0 -4 L 0 -1"
              stroke="#B7ED51"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Business Badge */}
            <g transform="translate(-60, 32)">
              <rect
                width="120"
                height="22"
                rx="6"
                fill="#030505"
                stroke="#B7ED51"
                strokeWidth="1.5"
              />
              <text
                x="60"
                y="14"
                textAnchor="middle"
                fill="#B7ED51"
                fontSize="9.5"
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="1"
              >
                TARGET BUSINESS
              </text>
            </g>
          </g>
        </svg>

        {/* Floating Discovery Nodes Badge (Bottom-Right overlay) */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-xl border border-white/10 bg-[#050809]/90 backdrop-blur-md p-2.5 sm:p-3 shadow-xl max-w-[210px] sm:max-w-[240px]">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider mb-1">
            <Radio className="h-3 w-3 text-[#B7ED51] animate-pulse" />
            <span>Active Local Intent</span>
          </div>
          <div className="text-xs font-semibold text-white truncate">{activeNode.name}</div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#AEB8BA] mt-1">
            <span>Range: {activeNode.distance}</span>
            <span className="text-[#B7ED51] font-medium">{activeNode.type}</span>
          </div>
        </div>

        {/* Floating AI Search Visibility Pill (Top-Left overlay) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-xl border border-white/10 bg-[#050809]/90 backdrop-blur-md px-3 py-1.5 shadow-xl flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-[#52BCEE]" />
          <span className="font-mono text-[10px] text-white tracking-wide">
            3-PACK & AI SEARCH OPTIMIZED
          </span>
        </div>
      </div>

      {/* Map Sub-Telemetry Info Bar */}
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#AEB8BA] px-1">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
          <span>GEO-GRID: VERIFIED</span>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <span>GOOGLE MAPS</span>
          <span>•</span>
          <span>GBP SYNC</span>
          <span>•</span>
          <span>LOCAL CITATIONS</span>
        </div>
      </div>
    </div>
  );
}
