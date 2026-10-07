import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Users, TrendingUp, Radio } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, TelegramIcon } from "./SocialIcons";

interface PlatformNodeData {
  id: string;
  name: string;
  sub: string;
  desc: string;
  icon: typeof InstagramIcon;
  x: number; // SVG coordinate
  y: number; // SVG coordinate
  accent: "lime" | "cyan" | "coral";
  speed: string;
}

const PLATFORM_NODES: PlatformNodeData[] = [
  {
    id: "instagram",
    name: "INSTAGRAM",
    sub: "Reach & Engagement",
    desc: "Followers, high-retention likes, views, saves, and reel discovery",
    icon: InstagramIcon,
    x: 120,
    y: 130,
    accent: "coral",
    speed: "6.5s",
  },
  {
    id: "facebook",
    name: "FACEBOOK",
    sub: "Page & Community",
    desc: "Page followers, post likes, reel views, and targeted engagement",
    icon: FacebookIcon,
    x: 480,
    y: 130,
    accent: "cyan",
    speed: "7s",
  },
  {
    id: "youtube",
    name: "YOUTUBE",
    sub: "Subscribers & Views",
    desc: "High-retention subscribers, video views, watch time, and channel growth",
    icon: YoutubeIcon,
    x: 120,
    y: 410,
    accent: "coral",
    speed: "6s",
  },
  {
    id: "telegram",
    name: "TELEGRAM",
    sub: "Channel & Groups",
    desc: "Channel members, group members, post views, reactions, and votes",
    icon: TelegramIcon,
    x: 480,
    y: 410,
    accent: "cyan",
    speed: "7.5s",
  },
];

export function AudienceGrowthNetwork() {
  const reduce = useReducedMotion();
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  // Central Audience Core coordinates
  const cx = 300;
  const cy = 270;

  return (
    <div
      className="relative w-full max-w-[620px] mx-auto select-none"
      aria-label="Audience Growth Network Interactive Ecosystem"
    >
      {/* Multi-spectrum Ambient Glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(183, 237, 81, 0.16) 0%, rgba(82, 188, 238, 0.14) 40%, rgba(197, 55, 54, 0.08) 70%, transparent 85%)",
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
              AUDIENCE GROWTH NETWORK
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5">
              <Radio className="h-2.5 w-2.5 text-[#52BCEE] animate-pulse" />
              <span className="font-mono text-[9px] tracking-wider text-[#F5F7F7]">
                MULTI-PLATFORM MESH
              </span>
            </div>
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div className="relative mt-2 aspect-[600/520] w-full">
          <svg viewBox="0 0 600 520" className="h-full w-full overflow-visible" aria-hidden="true">
            <defs>
              {/* Gradients */}
              <linearGradient id="audLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7ED51" />
                <stop offset="100%" stopColor="#52BCEE" />
              </linearGradient>
              <linearGradient id="audCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#52BCEE" />
                <stop offset="100%" stopColor="#82D2F7" />
              </linearGradient>
              <linearGradient id="audCoralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C53736" />
                <stop offset="100%" stopColor="#B7ED51" />
              </linearGradient>
              <linearGradient id="audGrowthGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(82, 188, 238, 0.4)" />
                <stop offset="50%" stopColor="#B7ED51" />
                <stop offset="100%" stopColor="#C6F46C" />
              </linearGradient>

              {/* Radial Core Glow */}
              <radialGradient id="audCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(183, 237, 81, 0.35)" />
                <stop offset="55%" stopColor="rgba(82, 188, 238, 0.18)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Glow Filters */}
              <filter id="audGlowLime" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="audGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="audGlowCoral" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Geometric Grid Overlay */}
            <g opacity="0.1" stroke="#B4BEC1" strokeWidth="0.5">
              <line x1="0" y1="130" x2="600" y2="130" strokeDasharray="3 4" />
              <line x1="0" y1="270" x2="600" y2="270" strokeDasharray="3 4" />
              <line x1="0" y1="410" x2="600" y2="410" strokeDasharray="3 4" />
              <line x1="120" y1="0" x2="120" y2="520" strokeDasharray="3 4" />
              <line x1="300" y1="0" x2="300" y2="520" strokeDasharray="3 4" />
              <line x1="480" y1="0" x2="480" y2="520" strokeDasharray="3 4" />
            </g>

            {/* Concentric Telemetry Orbit Rings */}
            <circle
              cx={cx}
              cy={cy}
              r="175"
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
              className={reduce ? "" : "animate-[spin_40s_linear_infinite] origin-[300px_270px]"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="92"
              fill="none"
              stroke="rgba(183, 237, 81, 0.2)"
              strokeWidth="1.2"
              strokeDasharray="6 10"
              className={reduce ? "" : "animate-[spin_24s_linear_infinite_reverse] origin-[300px_270px]"}
            />
            <circle
              cx={cx}
              cy={cy}
              r="62"
              fill="url(#audCoreGlow)"
              stroke="rgba(183, 237, 81, 0.35)"
              strokeWidth="1"
            />

            {/* UPWARD GROWTH TRAJECTORY (From Central Audience Core to Apex GROWTH Node) */}
            <g>
              <line
                x1={cx}
                y1={cy - 62}
                x2={cx}
                y2="54"
                stroke="url(#audGrowthGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className={reduce ? "" : "animate-stream-flow"}
              />

              {!reduce && (
                <circle r="3.5" fill="#B7ED51" filter="url(#audGlowLime)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M ${cx} ${cy - 62} L ${cx} 54`}
                  />
                </circle>
              )}

              {/* Apex Node: GROWTH */}
              <g transform={`translate(${cx}, 52)`}>
                <circle
                  r="20"
                  fill="rgba(183, 237, 81, 0.08)"
                  stroke="rgba(183, 237, 81, 0.35)"
                  strokeWidth="1"
                  className={reduce ? "" : "animate-pulse"}
                />
                <circle
                  r="12"
                  fill="#080D0E"
                  stroke="#B7ED51"
                  strokeWidth="1.8"
                  filter="url(#audGlowLime)"
                />
                <TrendingUp x="-5" y="-5" width="10" height="10" color="#B7ED51" strokeWidth="2.5" />

                <rect
                  x="-36"
                  y="-28"
                  width="72"
                  height="16"
                  rx="8"
                  fill="#060A0C"
                  stroke="#B7ED51"
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x="0"
                  y="-17"
                  textAnchor="middle"
                  fill="#B7ED51"
                  fontSize="8"
                  fontWeight="bold"
                  letterSpacing="1"
                  fontFamily="monospace"
                >
                  GROWTH
                </text>
              </g>
            </g>

            {/* 4 INWARD CONNECTION SPOKES (From Platform Nodes to Central Audience Core) */}
            {PLATFORM_NODES.map((node) => {
              const isSelected = activePlatform === node.id || activePlatform === "core";
              const strokeColor =
                node.accent === "coral"
                  ? isSelected
                    ? "#C53736"
                    : "rgba(197, 55, 54, 0.35)"
                  : isSelected
                    ? "#52BCEE"
                    : "rgba(82, 188, 238, 0.35)";

              // Slight arc to center
              const midX = (node.x + cx) / 2 + (node.x < cx ? 12 : -12);
              const midY = (node.y + cy) / 2;
              const pathD = `M ${node.x} ${node.y} Q ${midX} ${midY} ${cx} ${cy}`;

              return (
                <g key={`spoke-${node.id}`}>
                  {/* Flow Path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={isSelected ? "2" : "1.2"}
                    strokeDasharray="4 6"
                    className={reduce ? "" : "animate-stream-flow"}
                    style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                  />

                  {/* Flowing Particle: Toward Audience */}
                  {!reduce && (
                    <circle
                      r={isSelected ? "3.5" : "2.5"}
                      fill={node.accent === "coral" ? "#C53736" : "#52BCEE"}
                      opacity={isSelected ? "1" : "0.75"}
                    >
                      <animateMotion dur={node.speed} repeatCount="indefinite" path={pathD} />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* CENTRAL AUDIENCE CORE */}
            <g
              transform={`translate(${cx}, ${cy})`}
              className="cursor-pointer"
              onMouseEnter={() => setActivePlatform("core")}
              onMouseLeave={() => setActivePlatform(null)}
            >
              {/* Pulsing Breathing Ring */}
              <circle
                r="46"
                fill="none"
                stroke="rgba(183, 237, 81, 0.25)"
                strokeWidth="1"
                className={reduce ? "" : "animate-ping opacity-30"}
                style={{ animationDuration: "4s" }}
              />

              {/* Core Body */}
              <circle
                r="38"
                fill="#080D0E"
                stroke={activePlatform === "core" ? "#B7ED51" : "rgba(183, 237, 81, 0.75)"}
                strokeWidth="2"
                filter="url(#audGlowLime)"
                className="transition-all duration-300"
              />

              {/* Radar Sweep Arc */}
              {!reduce && (
                <g className="origin-center animate-[spin_7s_linear_infinite]">
                  <line x1="0" y1="0" x2="36" y2="0" stroke="rgba(183, 237, 81, 0.6)" strokeWidth="1.5" />
                  <path d="M 0 0 L 36 0 A 36 36 0 0 1 0 36 Z" fill="rgba(183, 237, 81, 0.08)" />
                </g>
              )}

              {/* Center Icon */}
              <Users x="-8" y="-18" width="16" height="16" color="#B7ED51" strokeWidth="2.2" />

              {/* Core Text Labels */}
              <text
                x="0"
                y="8"
                textAnchor="middle"
                fill="#F5F7F7"
                fontSize="8.5"
                fontWeight="800"
                letterSpacing="1"
                fontFamily="sans-serif"
              >
                AUDIENCE
              </text>
              <text
                x="0"
                y="18"
                textAnchor="middle"
                fill="#52BCEE"
                fontSize="6.5"
                fontWeight="bold"
                letterSpacing="0.8"
                fontFamily="monospace"
              >
                ECOSYSTEM
              </text>
            </g>

            {/* 4 FLOATING PLATFORM GLASS NODES */}
            {PLATFORM_NODES.map((node) => {
              const Icon = node.icon;
              const isHovered = activePlatform === node.id;
              const accentColor = node.accent === "coral" ? "#C53736" : "#52BCEE";

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePlatform(node.id)}
                  onMouseLeave={() => setActivePlatform(null)}
                >
                  <motion.g
                    animate={
                      reduce
                        ? {}
                        : {
                            y: [0, -5, 0],
                          }
                    }
                    transition={{
                      duration: parseFloat(node.speed),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Outer Shield Glow */}
                    <circle
                      r={isHovered ? "34" : "28"}
                      fill="#080D0E"
                      stroke={isHovered ? accentColor : "rgba(255, 255, 255, 0.15)"}
                      strokeWidth={isHovered ? "2" : "1"}
                      filter={
                        isHovered
                          ? node.accent === "coral"
                            ? "url(#audGlowCoral)"
                            : "url(#audGlowCyan)"
                          : undefined
                      }
                      className="transition-all duration-300"
                    />

                    {/* Concentric micro-ring */}
                    <circle
                      r="22"
                      fill="none"
                      stroke={accentColor}
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      opacity={isHovered ? "1" : "0.5"}
                    />

                    {/* Platform Icon */}
                    <foreignObject x="-11" y="-11" width="22" height="22">
                      <div className="flex h-full w-full items-center justify-center">
                        <Icon className="h-4 w-4" style={{ color: accentColor }} strokeWidth={2.2} />
                      </div>
                    </foreignObject>

                    {/* Platform Label Badge */}
                    <g transform="translate(0, 38)">
                      <rect
                        x="-48"
                        y="-9"
                        width="96"
                        height="18"
                        rx="9"
                        fill="#050809"
                        stroke={isHovered ? accentColor : "rgba(255, 255, 255, 0.1)"}
                        strokeWidth="1"
                        className="transition-colors duration-200"
                      />
                      <text
                        x="0"
                        y="3.5"
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
          {activePlatform && activePlatform !== "core" ? (
            (() => {
              const cur = PLATFORM_NODES.find((p) => p.id === activePlatform);
              if (!cur) return null;
              return (
                <div className="flex items-center justify-between text-xs transition-opacity duration-200">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: cur.accent === "coral" ? "#C53736" : "#52BCEE",
                      }}
                    />
                    <span className="font-semibold text-white tracking-wide">{cur.name}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-[#B4BEC1]">{cur.sub}</span>
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
                  CONTENT → DISTRIBUTION → ENGAGEMENT → AUDIENCE → GROWTH
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
