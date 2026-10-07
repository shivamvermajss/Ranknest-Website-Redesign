import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { BookOpen, Search, Cpu, FileText, Globe, Flame, TrendingUp, Sparkles } from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  tag: string;
  icon: typeof Search;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  color: string;
  isLime: boolean;
  hasRedAccent?: boolean;
}

const NODES: NodeData[] = [
  {
    id: "seo",
    label: "SEO",
    tag: "Search Intelligence",
    icon: Search,
    x: 18,
    y: 20,
    color: "#B7ED51",
    isLime: true,
  },
  {
    id: "ai",
    label: "AI",
    tag: "LLM Visibility",
    icon: Cpu,
    x: 82,
    y: 18,
    color: "#52BCEE",
    isLime: false,
  },
  {
    id: "content",
    label: "CONTENT",
    tag: "Brand Authority",
    icon: FileText,
    x: 12,
    y: 54,
    color: "#52BCEE",
    isLime: false,
  },
  {
    id: "web",
    label: "WEB",
    tag: "Core Web Vitals",
    icon: Globe,
    x: 88,
    y: 52,
    color: "#B7ED51",
    isLime: true,
  },
  {
    id: "search",
    label: "SEARCH",
    tag: "Zero-Click Answers",
    icon: Flame,
    x: 22,
    y: 84,
    color: "#52BCEE",
    isLime: false,
    hasRedAccent: true,
  },
  {
    id: "marketing",
    label: "MARKETING",
    tag: "Audience Growth",
    icon: TrendingUp,
    x: 78,
    y: 84,
    color: "#B7ED51",
    isLime: true,
  },
];

interface Particle {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  size: number;
  color: string;
}

export function InsightNetwork() {
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

  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const l1x = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const l1y = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const l2x = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const l2y = useTransform(sy, [-0.5, 0.5], [16, -16]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHoveredNode(null);
  };

  // Canvas particle stream animation across knowledge conduits
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize 24 floating knowledge particles
    const particles: Particle[] = Array.from({ length: 24 }).map((_, i) => {
      const isLime = i % 2 === 0;
      return {
        fromIdx: i % NODES.length,
        toIdx: (i + 1 + Math.floor(i / 2)) % NODES.length,
        progress: Math.random(),
        speed: 0.0018 + Math.random() * 0.0022,
        size: 1.5 + Math.random() * 1.8,
        color: isLime ? "#B7ED51" : "#52BCEE",
      };
    });

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.5);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw active knowledge conduit lines from center (50%, 50%) to each node
      NODES.forEach((node) => {
        const nx = (node.x / 100) * width;
        const ny = (node.y / 100) * height;

        const isHighlighted = hoveredNode === node.id || hoveredNode === "center";

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = isHighlighted
          ? node.isLime
            ? "rgba(183, 237, 81, 0.45)"
            : "rgba(82, 188, 238, 0.45)"
          : "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = isHighlighted ? 1.8 : 1;
        ctx.stroke();
      });

      // Update and draw streaming data packets
      particles.forEach((p) => {
        p.progress += p.speed * dt;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromIdx = Math.floor(Math.random() * NODES.length);
          p.toIdx = -1; // -1 represents the central hub
        }

        const fromNode = NODES[p.fromIdx]!;
        const fromX = (fromNode.x / 100) * width;
        const fromY = (fromNode.y / 100) * height;

        const toX = p.toIdx === -1 ? cx : (NODES[p.toIdx]!.x / 100) * width;
        const toY = p.toIdx === -1 ? cy : (NODES[p.toIdx]!.y / 100) * height;

        const curX = fromX + (toX - fromX) * p.progress;
        const curY = fromY + (toY - fromY) * p.progress;

        // Particle core
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Glow halo
        ctx.beginPath();
        ctx.arc(curX, curY, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color === "#B7ED51" ? "rgba(183, 237, 81, 0.18)" : "rgba(82, 188, 238, 0.18)";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [reduce, hoveredNode]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={!reduce && isDesktop ? { rotateX, rotateY } : {}}
        className="relative h-full w-full transition-transform duration-200 ease-out"
      >
        {/* Layer 0: Ambient Multi-Chromatic Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-[#B7ED51]/8 via-[#52BCEE]/8 to-[#C53736]/4 blur-[90px]"
          aria-hidden="true"
        />

        {/* Layer 1: Concentric Orbital Geometry Rings */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : {}}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          {/* Outer Orbital Ring with telemetry ticks */}
          <div className="relative h-[82%] w-[82%] rounded-full border border-white/[0.08] shadow-[0_0_50px_rgba(82,188,238,0.04)]">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.04] animate-spin [animation-duration:120s]" />
          </div>

          {/* Middle Hexagonal Knowledge Ring */}
          <div className="absolute h-[58%] w-[58%] rounded-full border border-[#52BCEE]/15 shadow-[0_0_30px_rgba(82,188,238,0.06)]" />

          {/* Inner Resonant Core Ring */}
          <div className="absolute h-[34%] w-[34%] rounded-full border border-[#B7ED51]/25 animate-pulse [animation-duration:4s]" />
        </motion.div>

        {/* Layer 2: Particle Stream Canvas */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full z-15"
          aria-hidden="true"
        />

        {/* Layer 3: Central Nexus Node -> "RANKNEST INSIGHTS" */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
          onMouseEnter={() => setHoveredNode("center")}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Radial radar beacon rings */}
          <div
            className="pointer-events-none absolute -inset-6 rounded-full bg-[#B7ED51]/12 blur-xl animate-pulse [animation-duration:3s]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-3 rounded-full border border-[#B7ED51]/40 animate-ping opacity-25 [animation-duration:4s]"
            aria-hidden="true"
          />

          <motion.div
            animate={reduce ? {} : { scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`group relative flex flex-col items-center justify-center rounded-2xl border px-5 py-3.5 sm:px-6 sm:py-4 backdrop-blur-2xl transition-all duration-300 ${
              hoveredNode === "center"
                ? "border-[#B7ED51] bg-[#030505]/95 shadow-[0_0_40px_rgba(183,237,81,0.4)] scale-105"
                : "border-[#B7ED51]/40 bg-[#030505]/85 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:border-[#B7ED51]"
            }`}
          >
            {/* Top decorative active laser bar */}
            <div className="absolute -top-px left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#B7ED51] to-transparent" />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7ED51] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7ED51]" />
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#B7ED51]">
                INTELLIGENCE HUB
              </span>
            </div>

            <div className="mt-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#B7ED51]" />
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-[#F5F7F7]">
                RANKNEST INSIGHTS
              </span>
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
              <Sparkles className="h-3 w-3 text-[#52BCEE]" />
              <span>Verified Search Engineering</span>
            </div>
          </motion.div>
        </div>

        {/* Layer 4: Peripheral Knowledge Nodes (SEO, AI, CONTENT, WEB, SEARCH, MARKETING) */}
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
