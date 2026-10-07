import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, MapPin, Building, ArrowUpRight, Compass, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

interface QueryNode {
  id: string;
  query: string;
  category: string;
  x: number;
  y: number;
  distance: string;
  intent: "High Commercial" | "Immediate Need" | "Service Booking" | "B2B Local";
}

const LOCAL_QUERIES: QueryNode[] = [
  {
    id: "q1",
    query: '"best digital agency near me"',
    category: "Agency / B2B",
    x: 160,
    y: 80,
    distance: "1.2 km",
    intent: "High Commercial",
  },
  {
    id: "q2",
    query: '"urgent web developer open now"',
    category: "Tech Service",
    x: 480,
    y: 90,
    distance: "2.4 km",
    intent: "Immediate Need",
  },
  {
    id: "q3",
    query: '"seo consultant in my city"',
    category: "Marketing",
    x: 120,
    y: 280,
    distance: "0.9 km",
    intent: "Service Booking",
  },
  {
    id: "q4",
    query: '"top rated business services nearby"',
    category: "Professional",
    x: 510,
    y: 270,
    distance: "3.1 km",
    intent: "High Commercial",
  },
  {
    id: "q5",
    query: '"local marketing company contact"',
    category: "Enterprise",
    x: 230,
    y: 350,
    distance: "1.7 km",
    intent: "B2B Local",
  },
  {
    id: "q6",
    query: '"expert gmb optimization specialist"',
    category: "Consulting",
    x: 430,
    y: 360,
    distance: "2.1 km",
    intent: "Service Booking",
  },
];

export function LocalDiscoveryNetwork() {
  const shouldReduceMotion = useReducedMotion();
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveQueryIndex((prev) => (prev + 1) % LOCAL_QUERIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const activeQuery = LOCAL_QUERIES[activeQueryIndex];

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-[#050809]/80 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B7ED51]/6 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* Network Header HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-4 mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
            LOCAL INTENT NETWORK
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
            Connecting Real Local Searchers to Your Business
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-[#AEB8BA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
          <span>LIVE GEO-ROUTING</span>
        </div>
      </div>

      {/* Interactive Map/Network Canvas */}
      <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl border border-white/6 bg-[#030505]/90 overflow-hidden">
        <svg viewBox="0 0 640 420" className="w-full h-full select-none" aria-hidden="true">
          <defs>
            <radialGradient id="businessGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#B7ED51" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Concentric Search Propagation Waves */}
          <circle cx="320" cy="210" r="70" fill="none" stroke="rgba(183,237,81,0.2)" strokeWidth="1" />
          <circle cx="320" cy="210" r="140" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="320" cy="210" r="210" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 5" />

          {/* Connection Lines from Queries to Business */}
          {LOCAL_QUERIES.map((q) => {
            const isCurrent = q.id === activeQuery.id;
            return (
              <g key={`line-${q.id}`}>
                <line
                  x1={q.x}
                  y1={q.y}
                  x2="320"
                  y2="210"
                  stroke={isCurrent ? "#B7ED51" : "rgba(255, 255, 255, 0.08)"}
                  strokeWidth={isCurrent ? "2" : "1"}
                  strokeDasharray={isCurrent ? "6 4" : "2 4"}
                />
                {isCurrent && !shouldReduceMotion && (
                  <motion.circle
                    r="4"
                    fill="#B7ED51"
                    filter="drop-shadow(0 0 6px #B7ED51)"
                    animate={{
                      cx: [q.x, 320],
                      cy: [q.y, 210],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Query Nodes */}
          {LOCAL_QUERIES.map((q, idx) => {
            const isCurrent = q.id === activeQuery.id;
            return (
              <g
                key={q.id}
                className="cursor-pointer"
                onClick={() => setActiveQueryIndex(idx)}
              >
                {/* Ping on active */}
                {isCurrent && (
                  <circle
                    cx={q.x}
                    cy={q.y}
                    r="16"
                    fill="none"
                    stroke="#B7ED51"
                    strokeWidth="1.5"
                    className="animate-ping opacity-40"
                  />
                )}
                {/* Node Body */}
                <circle
                  cx={q.x}
                  cy={q.y}
                  r="8"
                  fill="#080D0E"
                  stroke={isCurrent ? "#B7ED51" : "rgba(255, 255, 255, 0.2)"}
                  strokeWidth={isCurrent ? "2" : "1"}
                />
                <circle
                  cx={q.x}
                  cy={q.y}
                  r="3"
                  fill={isCurrent ? "#B7ED51" : "rgba(255, 255, 255, 0.5)"}
                />

                {/* Query Badge Overlay */}
                <g transform={`translate(${q.x > 320 ? q.x - 140 : q.x + 14}, ${q.y - 12})`}>
                  <rect
                    width="135"
                    height="24"
                    rx="6"
                    fill="rgba(8,13,14,0.92)"
                    stroke={isCurrent ? "#B7ED51" : "rgba(255, 255, 255, 0.1)"}
                    strokeWidth="1"
                  />
                  <text
                    x="8"
                    y="15"
                    fill={isCurrent ? "#FFFFFF" : "#AEB8BA"}
                    fontSize="9.5"
                    fontFamily="monospace"
                    fontWeight={isCurrent ? "600" : "400"}
                  >
                    {q.query.length > 20 ? q.query.slice(0, 19) + '…"' : q.query}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Central Business Node */}
          <g transform="translate(320, 210)">
            <circle r="46" fill="url(#businessGlow)" />
            <circle
              r="28"
              fill="#080D0E"
              stroke="#B7ED51"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 16px rgba(183, 237, 81, 0.45))"
            />
            <circle r="10" fill="#B7ED51" />
            <circle r="4" fill="#030505" />

            {/* Label below */}
            <g transform="translate(-75, 36)">
              <rect
                width="150"
                height="24"
                rx="6"
                fill="#030505"
                stroke="#B7ED51"
                strokeWidth="1.5"
              />
              <text
                x="75"
                y="15"
                textAnchor="middle"
                fill="#B7ED51"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="1"
              >
                YOUR BUSINESS
              </text>
            </g>
          </g>
        </svg>

        {/* Selected Query Telemetry Card (Bottom Left) */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-xl border border-white/10 bg-[#050809]/95 backdrop-blur-md p-3 sm:p-4 max-w-[280px] shadow-2xl">
          <div className="font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider mb-1">
            Active Search Intent
          </div>
          <div className="text-xs sm:text-sm font-bold text-white">{activeQuery.query}</div>
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[#AEB8BA] border-t border-white/8 pt-2">
            <span>Range: {activeQuery.distance}</span>
            <span className="text-[#B7ED51] font-semibold">{activeQuery.intent}</span>
          </div>
        </div>

        {/* 3-Pack Indicator (Top Right) */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-xl border border-white/10 bg-[#050809]/95 backdrop-blur-md px-3 py-1.5 text-right font-mono text-[10px]">
          <span className="text-[#AEB8BA]">TARGET ZONE: </span>
          <span className="text-[#B7ED51] font-bold">GOOGLE 3-PACK</span>
        </div>
      </div>

      {/* 3 Pillars Derived Strictly from Client Positioning */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4">
          <div className="text-[#B7ED51] font-bold mb-1">01. HIGH PURCHASE INTENT</div>
          <p className="text-[#AEB8BA] font-sans text-xs leading-relaxed">
            Local consumers search with immediate intent to visit, book, or call nearby providers.
          </p>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4">
          <div className="text-[#52BCEE] font-bold mb-1">02. MAPS & 3-PACK DOMINANCE</div>
          <p className="text-[#AEB8BA] font-sans text-xs leading-relaxed">
            Capture prime screen estate where nearby prospects make instantaneous decisions.
          </p>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4">
          <div className="text-white font-bold mb-1">03. REPUTATION & TRUST</div>
          <p className="text-[#AEB8BA] font-sans text-xs leading-relaxed">
            Strengthen profile authority, verified attributes, and directory consistency.
          </p>
        </div>
      </div>
    </div>
  );
}
