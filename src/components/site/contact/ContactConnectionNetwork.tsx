import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Search, Code2, Cpu, Megaphone, TrendingUp, Briefcase, Sparkles, Radio } from "lucide-react";

/**
 * RANKNEST IT — CONTACT CONNECTION & COLLABORATION NETWORK
 *
 * Distinct visual identity for the Contact page:
 * - Central luminous nexus: "LET'S CONNECT"
 * - 6 peripheral strategic nodes: BUSINESS, SEO, WEB, AI, MARKETING, GROWTH
 * - Flowing neural connection conduits & high-speed photon streams
 * - Interactive node illumination & 3D mouse parallax tilt
 * - Respects prefers-reduced-motion
 */

interface Photon {
  nodeIdx: number;
  progress: number; // 0 (center) to 1 (outer node)
  speed: number;
  reverse: boolean;
  size: number;
  color: string;
}

interface NodeItem {
  id: string;
  label: string;
  tag: string;
  icon: typeof Briefcase;
  x: number;
  y: number;
  color: string;
  isLime: boolean;
  hasRedAccent?: boolean;
}

const NODES: NodeItem[] = [
  {
    id: "business",
    label: "BUSINESS",
    tag: "Strategic Goals",
    icon: Briefcase,
    x: 18,
    y: 18,
    color: "#B7ED51",
    isLime: true,
  },
  {
    id: "seo",
    label: "SEO",
    tag: "Search Intelligence",
    icon: Search,
    x: 82,
    y: 16,
    color: "#B7ED51",
    isLime: true,
  },
  {
    id: "web",
    label: "WEB",
    tag: "Custom Stack",
    icon: Code2,
    x: 12,
    y: 52,
    color: "#52BCEE",
    isLime: false,
  },
  {
    id: "ai",
    label: "AI",
    tag: "LLM Readiness",
    icon: Cpu,
    x: 88,
    y: 52,
    color: "#52BCEE",
    isLime: false,
  },
  {
    id: "marketing",
    label: "MARKETING",
    tag: "PPC & Campaigns",
    icon: Megaphone,
    x: 20,
    y: 84,
    color: "#52BCEE",
    isLime: false,
    hasRedAccent: true,
  },
  {
    id: "growth",
    label: "GROWTH",
    tag: "Measurable ROI",
    icon: TrendingUp,
    x: 80,
    y: 84,
    color: "#B7ED51",
    isLime: true,
  },
];

export function ContactConnectionNetwork() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Parallax spring controls
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 24 });
  const sy = useSpring(my, { stiffness: 45, damping: 24 });

  const rotateX = useTransform(sy, [-30, 30], [5, -5]);
  const rotateY = useTransform(sx, [-30, 30], [-6, 6]);
  const l1x = useTransform(sx, (v) => v * 0.2);
  const l1y = useTransform(sy, (v) => v * 0.2);
  const l2x = useTransform(sx, (v) => v * 0.5);
  const l2y = useTransform(sy, (v) => v * 0.5);

  useEffect(() => {
    const check = () => {
      setIsDesktop(window.innerWidth >= 1024 && window.matchMedia("(hover: hover)").matches);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width - 0.5;
    const ry = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(rx * 28);
    my.set(ry * 28);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHoveredNode(null);
  };

  // Real-time canvas photons running along the conduits
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Create photons traveling between center (50%, 50%) and the 6 nodes
    const photons: Photon[] = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      const nIdx = i % NODES.length;
      const node = NODES[nIdx]!;
      photons.push({
        nodeIdx: nIdx,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
        reverse: Math.random() > 0.5,
        size: 1.5 + Math.random() * 2,
        color: node.color,
      });
    }

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w * 0.5;
      const cy = h * 0.5;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < photons.length; i++) {
        const p = photons[i];
        if (!p) continue;
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.reverse = !p.reverse;
        }

        const node = NODES[p.nodeIdx]!;
        const nx = (node.x / 100) * w;
        const ny = (node.y / 100) * h;

        const effectiveT = p.reverse ? 1 - p.progress : p.progress;
        // Linear conduit point with slight harmonic curve
        const px = cx + (nx - cx) * effectiveT;
        const py = cy + (ny - cy) * effectiveT;

        const fade = Math.sin(effectiveT * Math.PI);

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.2, fade * 0.9);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.fill();

        // White core spark
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.95;
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [reduce]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none lg:w-[110%] lg:-ml-[5%] aspect-square sm:aspect-[600/560] flex items-center justify-center select-none overflow-visible [perspective:1200px]"
      aria-label="Ranknest IT Collaborative Connection Network"
    >
      <motion.div
        style={!reduce && isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" as const } : {}}
        className="relative w-full h-full flex items-center justify-center overflow-visible"
      >
        {/* Layer 1: Ambient Atmospheric Glows */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : {}}
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#B7ED51]/[0.15] blur-[110px] animate-pulse-glow" />
          <div className="absolute left-[15%] top-[20%] h-56 w-56 rounded-full bg-[#52BCEE]/[0.12] blur-[90px]" />
          <div className="absolute right-[15%] bottom-[20%] h-60 w-60 rounded-full bg-[#B7ED51]/[0.10] blur-[100px]" />
          <div className="absolute left-[20%] bottom-[15%] h-44 w-44 rounded-full bg-[#C53736]/[0.05] blur-[80px]" />
        </motion.div>

        {/* Layer 2: SVG Neural Connection Conduits */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : {}}
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 1000" className="h-full w-full overflow-visible" fill="none">
            <defs>
              <filter id="netGlowLime" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="netGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradient Conduits */}
              <linearGradient id="lineGradLime" x1="500" y1="500" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradCyan" x1="500" y1="500" x2="880" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Faint Outer Constellation Polygon Grid */}
            <polygon
              points="180,180 820,160 880,520 800,840 200,840 120,520"
              stroke="rgba(82, 188, 238, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {/* Central Orbital Radar Waveguides */}
            <circle cx="500" cy="500" r="160" stroke="rgba(183, 237, 81, 0.12)" strokeWidth="1.2" strokeDasharray="3 6" />
            <circle cx="500" cy="500" r="280" stroke="rgba(82, 188, 238, 0.08)" strokeWidth="1" strokeDasharray="6 12" />

            {/* 6 Primary Radiating Conduits from Center (500,500) to Each Node */}
            {NODES.map((node) => {
              const nx = node.x * 10;
              const ny = node.y * 10;
              const isHovered = hoveredNode === node.id;
              const strokeColor = node.isLime ? "#B7ED51" : "#52BCEE";

              return (
                <g key={node.id}>
                  {/* Base conduit trace */}
                  <line
                    x1="500"
                    y1="500"
                    x2={nx}
                    y2={ny}
                    stroke={strokeColor}
                    strokeWidth={isHovered ? 2.8 : 1.4}
                    strokeOpacity={isHovered ? 0.9 : 0.35}
                    filter={isHovered ? `url(#${node.isLime ? "netGlowLime" : "netGlowCyan"})` : undefined}
                    className="transition-all duration-300"
                  />
                  {/* Animated laser pulse stream */}
                  {!reduce && (
                    <line
                      x1="500"
                      y1="500"
                      x2={nx}
                      y2={ny}
                      stroke={strokeColor}
                      strokeWidth={isHovered ? 3.2 : 2.0}
                      strokeDasharray="35 160"
                      strokeLinecap="round"
                      filter={`url(#${node.isLime ? "netGlowLime" : "netGlowCyan"})`}
                      className="animate-stream-flow-fast"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Layer 3: HTML5 Canvas Particle Jet */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 z-15 h-full w-full overflow-visible"
        />

        {/* Layer 4: CENTRAL LUMINOUS NEXUS ("LET'S CONNECT") */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : {}}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center cursor-default"
        >
          {/* Pulsing Holographic Radar Waves */}
          {!reduce && (
            <>
              <motion.div
                animate={{ scale: [0.85, 1.4], opacity: [0.65, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
                className="pointer-events-none absolute h-36 w-36 rounded-full border border-[#B7ED51]/60 shadow-[0_0_25px_rgba(183,237,81,0.5)]"
              />
              <motion.div
                animate={{ scale: [0.85, 1.4], opacity: [0.65, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
                className="pointer-events-none absolute h-36 w-36 rounded-full border border-[#52BCEE]/60 shadow-[0_0_25px_rgba(82,188,238,0.5)]"
              />
            </>
          )}

          {/* Central Glass Disc */}
          <div className="relative group flex flex-col items-center justify-center h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-[#050a0b]/90 border border-[#B7ED51]/50 backdrop-blur-2xl shadow-[0_0_35px_rgba(183,237,81,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-[#B7ED51] hover:shadow-[0_0_50px_rgba(183,237,81,0.55)]">
            {/* Luminous Inner Core Aura */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#B7ED51]/20 via-[#52BCEE]/15 to-transparent blur-sm animate-pulse" />

            {/* Center Icon & Pulsing Beacon */}
            <div className="relative flex items-center justify-center mb-1">
              <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-ping absolute" />
              <Radio className="h-5 w-5 text-[#B7ED51] relative z-10" />
            </div>

            {/* Core Label */}
            <span className="relative z-10 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#F5F7F7] uppercase text-center leading-tight">
              LET'S
              <br />
              <span className="text-[#B7ED51]">CONNECT</span>
            </span>

            {/* Sub-indicator */}
            <span className="relative z-10 mt-1 inline-flex items-center gap-1 text-[8px] font-mono text-[#52BCEE] tracking-wider">
              <span className="h-1 w-1 rounded-full bg-[#52BCEE] animate-pulse" />
              <span>LIVE HUB</span>
            </span>
          </div>
        </motion.div>

        {/* Layer 5: THE 6 PERIPHERAL COLLABORATION NODES */}
        <motion.div
          style={!reduce && isDesktop ? { x: l2x, y: l2y } : {}}
          className="pointer-events-none absolute inset-0 z-35"
        >
          {NODES.map((node, idx) => {
            const Icon = node.icon;
            const isHovered = hoveredNode === node.id;
            const floatDelay = idx * 0.4;
            const floatDuration = 5 + idx * 0.6;

            return (
              <motion.div
                key={node.id}
                animate={reduce ? {} : { y: [0, -6, 0] }}
                transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="pointer-events-auto absolute"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`group cursor-pointer flex items-center gap-2.5 rounded-2xl bg-[#050a0b]/85 border px-3 py-2 sm:px-3.5 sm:py-2.5 backdrop-blur-xl transition-all duration-300 ${
                    isHovered
                      ? node.isLime
                        ? "border-[#B7ED51] shadow-[0_0_30px_rgba(183,237,81,0.55)] scale-105"
                        : "border-[#52BCEE] shadow-[0_0_30px_rgba(82,188,238,0.55)] scale-105"
                      : node.isLime
                        ? "border-[#B7ED51]/30 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#B7ED51]"
                        : "border-[#52BCEE]/30 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#52BCEE]"
                  }`}
                >
                  {/* Node Icon with Glowing Backing */}
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl border transition-colors ${
                      node.isLime
                        ? "bg-[#B7ED51]/15 text-[#B7ED51] border-[#B7ED51]/40 group-hover:bg-[#B7ED51] group-hover:text-[#030505]"
                        : "bg-[#52BCEE]/15 text-[#52BCEE] border-[#52BCEE]/40 group-hover:bg-[#52BCEE] group-hover:text-[#030505]"
                    }`}
                  >
                    <Icon className="h-4 w-4 stroke-[2.2]" />
                  </div>

                  {/* Node Label & Value Tag */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-xs font-bold tracking-wider text-[#F5F7F7]">
                        {node.label}
                      </span>
                      {node.hasRedAccent ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C53736] shadow-[0_0_6px_rgba(197,55,54,0.9)]" />
                      ) : (
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            node.isLime ? "bg-[#B7ED51] animate-pulse" : "bg-[#52BCEE]"
                          }`}
                        />
                      )}
                    </div>
                    <p className="text-[10px] text-muted-foreground font-medium hidden sm:block">
                      {node.tag}
                    </p>
                  </div>

                  {/* Micro Ping Beacon on Active Hover */}
                  {isHovered && (
                    <span className="ml-1 text-[9px] font-mono text-[#B7ED51] bg-[#B7ED51]/10 px-1.5 py-0.5 rounded border border-[#B7ED51]/30">
                      Active
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
