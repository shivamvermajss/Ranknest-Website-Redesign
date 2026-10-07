import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Search, Sliders, Code2, Users, Megaphone, TrendingUp } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
  isKeyNode?: boolean;
}

export function AboutHeroDigitalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  // Mouse parallax offset (desktop only)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // 1. Generate 3D Spherical Point Cloud with realistic continental clustering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;
    const radius = 135; // Globe radius
    const tilt = 0.32; // ~18.3 degrees axial tilt

    // Fibonacci sphere distribution + cluster nodes
    const numPoints = 420;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Color palette: Mostly Electric Cyan & Electric Lime highlights
      const isLime = i % 7 === 0 || i % 13 === 0;
      const isKey = i % 24 === 0;
      const color = isLime ? "#B7ED51" : "#52BCEE";

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        color,
        size: isKey ? 2.6 : isLime ? 1.8 : 1.4,
        isKeyNode: isKey,
      });
    }

    // Latitude rings for wireframe depth
    const latRings = [-0.65, -0.35, 0, 0.35, 0.65];

    // Resize handling for crisp Retina rendering
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    updateSize();

    // Render Loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2 - 10;

      ctx.clearRect(0, 0, rect.width, rect.height);

      if (!reduce) {
        angle += 0.0035; // Continuous slow rotation (~45s per revolution)
      }

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      // Project 3D points
      interface ProjectedPoint {
        sx: number;
        sy: number;
        z: number;
        color: string;
        size: number;
        isKeyNode?: boolean;
      }

      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!p) continue;

        // 1. Rotation around polar Y axis
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;
        const y1 = p.y;

        // 2. Axial tilt around X axis
        const y2 = y1 * cosT - z1 * sinT;
        const z2 = y1 * sinT + z1 * cosT;
        const x2 = x1;

        // Screen projection
        const scale = 1.0;
        const sx = cx + x2 * scale;
        const sy = cy + y2 * scale;

        projected.push({
          sx,
          sy,
          z: z2,
          color: p.color,
          size: p.size,
          isKeyNode: p.isKeyNode ?? false,
        });
      }

      // Draw faint back-facing latitude guide rings for high-tech wireframe look
      ctx.lineWidth = 0.8;
      latRings.forEach((latFrac) => {
        const ringY = latFrac * radius;
        const ringR = Math.sqrt(Math.max(0, radius * radius - ringY * ringY));
        const projectedY = cy + ringY * cosT;
        const squish = Math.abs(cosT * 0.4);

        ctx.beginPath();
        ctx.ellipse(cx, projectedY, ringR, ringR * squish, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(82, 188, 238, 0.07)";
        ctx.stroke();
      });

      // Draw connecting constellation lines between nearby front-facing nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i += 3) {
        const p1 = projected[i];
        if (!p1 || p1.z < 20) continue; // Only front hemisphere

        for (let j = i + 1; j < projected.length; j += 4) {
          const p2 = projected[j];
          if (!p2 || p2.z < 20) continue;

          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const distSq = dx * dx + dy * dy;

          if (distSq < 1100) {
            // ~33px max connection distance
            const alpha = Math.max(0, (1 - distSq / 1100) * 0.28 * (p1.z / radius));
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.strokeStyle = `rgba(82, 188, 238, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw points sorted by Z (back to front)
      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        if (!p) continue;
        const isFront = p.z > 0;
        const normZ = (p.z + radius) / (radius * 2); // 0 to 1

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size * (0.8 + normZ * 0.4), 0, Math.PI * 2);

        if (isFront) {
          // Front glowing particles
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.4 + normZ * 0.6;
          ctx.fill();

          // Subtle glow halo for key milestone nodes
          if (p.isKeyNode && p.z > 40) {
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, p.size * 2.8, 0, Math.PI * 2);
            ctx.fillStyle =
              p.color === "#B7ED51" ? "rgba(183, 237, 81, 0.25)" : "rgba(82, 188, 238, 0.25)";
            ctx.fill();
          }
        } else {
          // Translucent back particles
          ctx.fillStyle = "rgba(82, 188, 238, 0.18)";
          ctx.globalAlpha = 0.25;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduce]);

  // Subtle Mouse interaction parallax handler (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMouseOffset({ x: mx, y: my });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto h-[500px] w-full max-w-[620px] sm:h-[540px] lg:h-[580px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* 1. Diffuse Ambient Glow Blooms (Lime + Cyan + hint of Coral) */}
      <div
        className="pointer-events-none absolute inset-x-12 inset-y-16 rounded-full bg-[#B7ED51]/8 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 top-16 h-72 w-72 rounded-full bg-[#52BCEE]/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-12 bottom-12 h-64 w-64 rounded-full bg-[#C53736]/4 blur-[90px]"
        aria-hidden="true"
      />

      {/* 2. Receding 3D Perspective Digital Cyber Grid (Floor) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 origin-bottom [transform:perspective(450px)_rotateX(68deg)]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(82, 188, 238, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(183, 237, 81, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        {/* Tiny Glowing Red and Lime Data Nodes along floor intersections */}
        <span className="absolute bottom-8 left-1/4 h-1.5 w-1.5 rounded-full bg-[#C53736] shadow-[0_0_8px_rgba(197,55,54,0.9)] animate-pulse" />
        <span className="absolute bottom-14 right-1/3 h-1 w-1 rounded-full bg-[#B7ED51] shadow-[0_0_6px_rgba(183,237,81,0.8)]" />
        <span className="absolute bottom-6 right-1/4 h-1.5 w-1.5 rounded-full bg-[#52BCEE] shadow-[0_0_8px_rgba(82,188,238,0.8)]" />
      </div>

      {/* 3. Central Canvas: 3D Wireframe / Particle Globe */}
      <motion.div
        animate={{
          x: mouseOffset.x * 0.7,
          y: mouseOffset.y * 0.7,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 20 }}
        className="relative z-10 h-[360px] w-[360px] sm:h-[400px] sm:w-[400px] flex items-center justify-center pointer-events-none"
      >
        <canvas ref={canvasRef} className="h-full w-full object-contain pointer-events-none" />
      </motion.div>

      {/* 4. Large Sweeping Orbital Data Paths (SVG Stream Overlays) */}
      <motion.div
        animate={{
          x: mouseOffset.x * 1.2,
          y: mouseOffset.y * 1.2,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 22 }}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      >
        <svg
          viewBox="0 0 580 580"
          className="h-full w-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            {/* Electric Lime Glow Filter */}
            <filter id="glowLime" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Electric Cyan Glow Filter */}
            <filter id="glowCyan" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Orbit Stream Gradients */}
            <linearGradient id="orbitLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B7ED51" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#52BCEE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B7ED51" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="orbitCyanGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#52BCEE" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#B7ED51" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#52BCEE" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Orbit Path 1: Primary Electric Lime Flowing Stream (Tilted -28deg) */}
          <g transform="translate(290, 275) rotate(-26)">
            {/* Glowing outer stream trail */}
            <ellipse
              cx="0"
              cy="0"
              rx="235"
              ry="74"
              stroke="url(#orbitLimeGrad)"
              strokeWidth="2.2"
              filter="url(#glowLime)"
            />
            {/* Animated Stream Dash Pulses */}
            {!reduce && (
              <ellipse
                cx="0"
                cy="0"
                rx="235"
                ry="74"
                stroke="#B7ED51"
                strokeWidth="2.6"
                strokeDasharray="40 180"
                strokeLinecap="round"
                className="animate-[dash_12s_linear_infinite]"
              />
            )}
            {/* Traveling Data Particle Node */}
            <circle cx="210" cy="-32" r="3.5" fill="#B7ED51" filter="url(#glowLime)" />
          </g>

          {/* Orbit Path 2: Electric Cyan High-Altitude Stream (Tilted 34deg) */}
          <g transform="translate(290, 275) rotate(34)">
            <ellipse
              cx="0"
              cy="0"
              rx="245"
              ry="78"
              stroke="url(#orbitCyanGrad)"
              strokeWidth="1.8"
              filter="url(#glowCyan)"
            />
            {!reduce && (
              <ellipse
                cx="0"
                cy="0"
                rx="245"
                ry="78"
                stroke="#52BCEE"
                strokeWidth="2.2"
                strokeDasharray="60 220"
                strokeLinecap="round"
                className="animate-[dash_16s_linear_infinite_reverse]"
              />
            )}
            {/* Traveling Data Particle Node */}
            <circle cx="-225" cy="30" r="3" fill="#52BCEE" filter="url(#glowCyan)" />
            {/* Rare Coral Red Status Waypoint */}
            <circle cx="160" cy="58" r="2.2" fill="#C53736" />
          </g>

          {/* Orbit Path 3: Inner Orbital Ring (Tilted -65deg) */}
          <g transform="translate(290, 275) rotate(-62)">
            <ellipse
              cx="0"
              cy="0"
              rx="205"
              ry="60"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="1.2"
              strokeDasharray="6 12"
            />
            {!reduce && (
              <ellipse
                cx="0"
                cy="0"
                rx="205"
                ry="60"
                stroke="#B7ED51"
                strokeWidth="1.8"
                strokeDasharray="25 140"
                strokeLinecap="round"
                className="animate-[dash_9s_linear_infinite]"
              />
            )}
            <circle cx="0" cy="60" r="2.5" fill="#B7ED51" />
          </g>

          {/* Connecting Bezier Circuit Traces from Cards into Orbit Network */}
          {/* Top-Left to Globe */}
          <path
            d="M 125 105 Q 190 140 240 220"
            stroke="#52BCEE"
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          {/* Mid-Left to Globe */}
          <path
            d="M 145 270 Q 185 270 230 270"
            stroke="#B7ED51"
            strokeOpacity="0.4"
            strokeWidth="1.2"
          />
          {/* Bottom-Left to Globe */}
          <path
            d="M 155 430 Q 200 390 250 340"
            stroke="#52BCEE"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          {/* Top-Right to Globe */}
          <path
            d="M 455 125 Q 395 150 340 210"
            stroke="#B7ED51"
            strokeOpacity="0.4"
            strokeWidth="1.2"
          />
          {/* Mid-Right to Globe */}
          <path
            d="M 440 280 Q 395 280 345 280"
            stroke="#52BCEE"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {/* Bottom-Right to Globe */}
          <path
            d="M 430 435 Q 380 400 330 350"
            stroke="#B7ED51"
            strokeOpacity="0.4"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>
      </motion.div>

      {/* 5. Floating Glassmorphism Data Cards (Perimeter Badges) */}
      <div className="absolute inset-0 z-30 pointer-events-auto">
        {/* 01. TOP-LEFT: SEARCH (Cyan) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -5, 0], x: [0, -2, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[2%] sm:left-[4%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/80 border border-white/10 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#52BCEE]/50 transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
            <Search className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#F5F7F7]">
                SEARCH
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Better Visibility</p>
          </div>
        </motion.div>

        {/* 02. MID-LEFT: STRATEGY (Lime) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -4, 0], x: [0, 3, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[42%] left-[0%] sm:left-[2%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/80 border border-[#B7ED51]/30 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#B7ED51]/60 transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
            <Sliders className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#B7ED51]">
                STRATEGY
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Data-Driven</p>
          </div>
        </motion.div>

        {/* 03. BOTTOM-LEFT: DEVELOPMENT / WEB (Cyan) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -5, 0], x: [0, -3, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute bottom-[10%] left-[2%] sm:left-[5%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/80 border border-white/10 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#52BCEE]/50 transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
            <Code2 className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#F5F7F7]">
                DEVELOPMENT
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Scalable Websites</p>
          </div>
        </motion.div>

        {/* 04. TOP-RIGHT: AUDIENCE (Lime) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -4, 0], x: [0, 2, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-[8%] right-[2%] sm:right-[4%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/80 border border-[#B7ED51]/25 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#B7ED51]/50 transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#F5F7F7]">
                AUDIENCE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Qualified Leads</p>
          </div>
        </motion.div>

        {/* 05. MID-RIGHT: MARKETING (Cyan + Coral Red Status Node) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -5, 0], x: [0, -2, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          className="absolute top-[44%] right-[0%] sm:right-[2%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/80 border border-[#52BCEE]/30 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#52BCEE]/60 transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE]">
            <Megaphone className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#52BCEE]">
                MARKETING
              </span>
              {/* Authentic rare red accent node */}
              <span className="h-1.5 w-1.5 rounded-full bg-[#C53736] shadow-[0_0_6px_rgba(197,55,54,0.8)]" />
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Stronger Presence</p>
          </div>
        </motion.div>

        {/* 06. BOTTOM-RIGHT: GROWTH (Lime — Destination Nexus) */}
        <motion.div
          animate={reduce ? {} : { y: [0, -4, 0], x: [0, 3, 0] }}
          transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="absolute bottom-[10%] right-[2%] sm:right-[5%] z-30 flex items-center gap-3 rounded-2xl bg-[#050a0b]/85 border border-[#B7ED51]/40 p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_14px_35px_rgba(183,237,81,0.15),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-[#B7ED51] transition-colors"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#B7ED51] text-[#030505] shadow-[0_0_15px_rgba(183,237,81,0.4)]">
            <TrendingUp className="h-4 w-4 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#B7ED51]">
                GROWTH
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
            </div>
            <p className="text-[10px] text-muted-foreground/90 font-medium">Lasting Impact</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
