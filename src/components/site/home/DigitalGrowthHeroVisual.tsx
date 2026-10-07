import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Search, Code2, FileText, Megaphone, TrendingUp, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

/**
 * RANKNEST IT - DIGITAL GROWTH HERO ENGINE (LIVING 3D VISUAL)
 *
 * Seamlessly integrates into the dark hero background (#030505) with NO rectangular
 * card box, NO borders, and NO clipping — matching the organic aesthetic of the About page:
 * 1. Seamless feathered 3D isometric platform blending into hero background grid & glows
 * 2. Perspective cyber floor grid connecting the platform with the section floor
 * 3. Real-time HTML5 Canvas particle jet rushing along the trajectory to the growth arrow
 * 4. Calibrated SVG flowing laser highways with high-speed neon data pulses
 * 5. Pulsing holographic shockwaves & radar rings at the RN processor core
 * 6. Luminous apex flare beacon at the top-right growth arrow tip
 * 7. Interactive glass hotspots over the 5 panels (SEO, Web Dev, Content, Google Ads, Performance)
 *    with glowing hover auras and live stat badges (NO duplicate ghost cards!)
 * 8. Holographic live Data Matrix ROI HUD enhancing the 3D chart
 * 9. Buttery-smooth 3D mouse parallax tilt & interactive cursor spotlight
 */

interface Particle {
  t: number; // progress along bezier curve (0 to 1)
  speed: number;
  size: number;
  color: string;
  alpha: number;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export function DigitalGrowthHeroVisual() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [mouseLight, setMouseLight] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  // 3D Parallax Motion Values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smooth springs for buttery-smooth mouse response
  const sx = useSpring(mx, { stiffness: 45, damping: 24 });
  const sy = useSpring(my, { stiffness: 45, damping: 24 });

  // 3D isometric tilt transforms
  const rotateX = useTransform(sy, [-30, 30], [4, -4]);
  const rotateY = useTransform(sx, [-30, 30], [-5, 5]);

  // Depth layers
  const l1x = useTransform(sx, (v) => v * 0.15);
  const l1y = useTransform(sy, (v) => v * 0.15);
  const l2x = useTransform(sx, (v) => v * 0.35);
  const l2y = useTransform(sy, (v) => v * 0.35);
  const l3x = useTransform(sx, (v) => v * 0.6);
  const l3y = useTransform(sy, (v) => v * 0.6);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && window.matchMedia("(hover: hover)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Mouse move handler for 3D tilt & cursor spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    const xVal = (relX - 0.5) * 28;
    const yVal = (relY - 0.5) * 28;

    mx.set(xVal);
    my.set(yVal);

    setMouseLight({
      x: relX * 100,
      y: relY * 100,
      opacity: 0.22,
    });
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setMouseLight((prev) => ({ ...prev, opacity: 0 }));
    setActivePanel(null);
  };

  // =========================================================================
  // HTML5 CANVAS PARTICLE JET (Ascending photons along the growth trajectory)
  // Calibrated to the exact 1376x768 coordinates
  // =========================================================================
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          isVisible = entry.isIntersecting;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Trajectory Bezier: RN Core (50%, 75.5%) -> Arrow Apex (75.4%, 8.1%)
    const p0 = { x: 0.5, y: 0.755 };
    const p1 = { x: 0.44, y: 0.53 };
    const p2 = { x: 0.61, y: 0.26 };
    const p3 = { x: 0.754, y: 0.081 };

    const getBezierPoint = (t: number) => {
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;

      const x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
      const y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;
      return { x, y };
    };

    const photons: Particle[] = [];
    const maxPhotons = 28;
    const photonColors = ["#B7ED51", "#52BCEE", "#ffffff", "#d6ff79"];

    for (let i = 0; i < maxPhotons; i++) {
      photons.push({
        t: Math.random(),
        speed: 0.0035 + Math.random() * 0.005,
        size: 1.5 + Math.random() * 2.5,
        color: photonColors[Math.floor(Math.random() * photonColors.length)] ?? "#B7ED51",
        alpha: 0.6 + Math.random() * 0.4,
      });
    }

    const embers: Ember[] = [];
    const maxEmbers = 18;
    const emberColors = ["#B7ED51", "#52BCEE", "#ffffff"];

    const createEmber = (): Ember => ({
      x: 0.35 + Math.random() * 0.45,
      y: 0.45 + Math.random() * 0.4,
      vx: (Math.random() - 0.45) * 0.0006,
      vy: -(0.0007 + Math.random() * 0.0012),
      size: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5,
      life: 0,
      maxLife: 140 + Math.random() * 100,
      color: emberColors[Math.floor(Math.random() * emberColors.length)] ?? "#B7ED51",
    });

    for (let i = 0; i < maxEmbers; i++) {
      embers.push(createEmber());
    }

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Draw trajectory photons
      for (const p of photons) {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.speed = 0.0035 + Math.random() * 0.005;
        }

        const pt = getBezierPoint(p.t);
        const px = pt.x * w;
        const py = pt.y * h;

        let currentAlpha = p.alpha;
        if (p.t < 0.15) currentAlpha *= p.t / 0.15;
        if (p.t > 0.85) currentAlpha *= 1 + (p.t - 0.85) * 1.5;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(currentAlpha, 1);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3.5;
        ctx.fill();

        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.9;
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw cyber embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        if (!e) continue;
        e.x += e.vx;
        e.y += e.vy;
        e.life++;

        if (e.life >= e.maxLife || e.y < 0.06) {
          embers[i] = createEmber();
          continue;
        }

        const ex = e.x * w;
        const ey = e.y * h;
        const fade = Math.sin((e.life / e.maxLife) * Math.PI);

        ctx.save();
        ctx.beginPath();
        ctx.arc(ex, ey, e.size, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = e.alpha * fade;
        ctx.shadowColor = e.color;
        ctx.shadowBlur = e.size * 2;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, [reduce]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[660px] sm:max-w-[700px] lg:max-w-none lg:w-[114%] lg:-ml-[7%] xl:w-[118%] xl:-ml-[9%] select-none overflow-visible flex items-center justify-center [perspective:1400px]"
      aria-label="Ranknest Interactive 3D Digital Growth Engine"
    >
      {/* 3D Tilted Parent Container */}
      <motion.div
        style={!reduce && isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" as const } : {}}
        className="relative w-full aspect-[1376/840] flex items-center justify-center transition-transform duration-300 ease-out overflow-visible"
      >
        {/* ========================================================================= */}
        {/* LAYER 1: AMBIENT ATMOSPHERE & BACKGROUND NEON GLOWS (Matching About Page) */}
        {/* ========================================================================= */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : {}}
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
        >
          {/* Volumetric Lime & Cyan Ambient Radiance */}
          <div className="absolute right-[12%] top-[4%] h-80 w-80 rounded-full bg-[#B7ED51]/[0.18] blur-[120px] animate-pulse-glow" />
          <div className="absolute left-[8%] bottom-[8%] h-72 w-72 rounded-full bg-[#52BCEE]/[0.14] blur-[110px]" />
          <div className="absolute left-[40%] top-[40%] h-64 w-64 rounded-full bg-[#B7ED51]/[0.12] blur-[100px]" />

          {/* Interactive Mouse Cursor Spotlight */}
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: mouseLight.opacity,
              background: `radial-gradient(480px circle at ${mouseLight.x}% ${mouseLight.y}%, rgba(183, 237, 81, 0.14), rgba(82, 188, 238, 0.08) 45%, transparent 75%)`,
            }}
          />
        </motion.div>

        {/* ========================================================================= */}
        {/* LAYER 2: RECEDING 3D PERSPECTIVE FLOOR GRID (Matching About Page Style)    */}
        {/* ========================================================================= */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[-4%] h-48 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)] z-5"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 origin-bottom [transform:perspective(500px)_rotateX(68deg)]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(82, 188, 238, 0.14) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(183, 237, 81, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
          {/* Glowing Red, Lime & Cyan Data Nodes on floor intersections */}
          <span className="absolute bottom-10 left-[28%] h-2 w-2 rounded-full bg-[#C53736] shadow-[0_0_12px_rgba(197,55,54,0.95)] animate-pulse" />
          <span className="absolute bottom-6 right-[30%] h-1.5 w-1.5 rounded-full bg-[#52BCEE] shadow-[0_0_10px_rgba(82,188,238,0.9)] animate-ping" />
          <span className="absolute bottom-4 left-[48%] h-1.5 w-1.5 rounded-full bg-[#B7ED51] shadow-[0_0_8px_rgba(183,237,81,0.85)]" />
        </div>

        {/* ========================================================================= */}
        {/* LAYER 3: THE 3D CYBERNETIC GROWTH ENGINE MASTER VISUAL                    */}
        {/* Seamlessly blended with NO box, NO border, and NO hard rectangle edges    */}
        {/* ========================================================================= */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible z-10">
          <div
            className="relative w-full h-full select-none pointer-events-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 70% at 50% 50%, black 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 95%)",
              maskImage:
                "radial-gradient(ellipse 78% 70% at 50% 50%, black 45%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 78%, transparent 95%)",
            }}
          >
            <img
              src="/hero-growth-engine-seamless.png"
              alt="Ranknest IT - 3D Digital Growth Engine"
              className="w-full h-full object-contain object-center select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 4: REAL-TIME CANVAS ASCENDING PHOTONS & CYBER EMBERS                */}
          {/* ========================================================================= */}
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
          />

          {/* ========================================================================= */}
          {/* LAYER 5: SVG DYNAMIC LASER DATA HIGHWAYS (Neon Cyan & Lime Light Packets) */}
          {/* ========================================================================= */}
          <motion.div
            style={!reduce && isDesktop ? { x: l2x, y: l2y } : {}}
            className="pointer-events-none absolute inset-0 z-25 h-full w-full overflow-visible"
          >
            <svg
              viewBox="0 0 1376 768"
              className="h-full w-full overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="svgGlowLimeHome" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="svgGlowCyanHome" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Neon Cyan Sweeping Highway Loop */}
              <path
                d="M 450 500 C 520 550, 630 585, 750 575 C 860 560, 930 505, 970 435"
                stroke="#52BCEE"
                strokeWidth="8"
                strokeOpacity="0.16"
                strokeLinecap="round"
                filter="url(#svgGlowCyanHome)"
              />
              {!reduce && (
                <path
                  d="M 450 500 C 520 550, 630 585, 750 575 C 860 560, 930 505, 970 435"
                  stroke="#52BCEE"
                  strokeWidth="3"
                  strokeDasharray="45 220"
                  strokeLinecap="round"
                  filter="url(#svgGlowCyanHome)"
                  className="animate-stream-flow-fast"
                />
              )}

              {/* Neon Lime High-Speed Parallel Track */}
              <path
                d="M 470 488 C 535 532, 640 568, 755 558 C 860 545, 925 490, 960 422"
                stroke="#B7ED51"
                strokeWidth="6"
                strokeOpacity="0.2"
                strokeLinecap="round"
                filter="url(#svgGlowLimeHome)"
              />
              {!reduce && (
                <path
                  d="M 470 488 C 535 532, 640 568, 755 558 C 860 545, 925 490, 960 422"
                  stroke="#B7ED51"
                  strokeWidth="2.4"
                  strokeDasharray="55 190"
                  strokeLinecap="round"
                  filter="url(#svgGlowLimeHome)"
                  className="animate-stream-flow"
                />
              )}

              {/* Upward Soaring Laser Streak (Core to Arrow Apex) */}
              {!reduce && (
                <path
                  d="M 688 480 C 640 380, 750 230, 1037 62"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeDasharray="50 280"
                  strokeLinecap="round"
                  filter="url(#svgGlowLimeHome)"
                  className="animate-stream-flow-fast"
                />
              )}
            </svg>
          </motion.div>

          {/* ========================================================================= */}
          {/* LAYER 6: PULSING CENTRAL "RN" PROCESSOR CORE ENERGY WAVES                 */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute left-[50%] top-[75.5%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            style={{ width: "170px", height: "170px" }}
          >
            {!reduce && (
              <>
                <motion.div
                  animate={{ scale: [0.8, 1.45], opacity: [0.65, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                  className="absolute h-28 w-28 rounded-full border border-[#B7ED51]/60 shadow-[0_0_20px_rgba(183,237,81,0.5)] [transform:rotateX(62deg)]"
                />
                <motion.div
                  animate={{ scale: [0.8, 1.45], opacity: [0.65, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 1.4 }}
                  className="absolute h-28 w-28 rounded-full border border-[#52BCEE]/60 shadow-[0_0_20px_rgba(82,188,238,0.5)] [transform:rotateX(62deg)]"
                />
              </>
            )}
            <div className="h-16 w-16 rounded-full bg-[#B7ED51]/25 blur-xl animate-pulse" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 7: TOP-RIGHT GROWTH ARROW APEX ENERGY FLARE BEACON                  */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute left-[75.4%] top-[8.1%] -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
            style={{ width: "70px", height: "70px" }}
          >
            <div className="absolute h-12 w-12 rounded-full bg-[#B7ED51]/35 blur-lg animate-pulse" />
            <div className="absolute h-4 w-4 rounded-full bg-[#ffffff] blur-sm animate-ping opacity-80" />
            <Sparkles className="h-6 w-6 text-[#B7ED51] animate-spin-slow opacity-90 drop-shadow-[0_0_8px_rgba(183,237,81,0.9)]" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 8: INTERACTIVE HOTSPOTS OVER THE 5 PANELS & DATA MATRIX             */}
          {/* Seamless interactive triggers mapped directly onto the 3D visual's panels */}
          {/* No duplicate ghost cards — crisp interactive micro-tooltips & glowing rings */}
          {/* ========================================================================= */}
          <motion.div
            style={!reduce && isDesktop ? { x: l3x, y: l3y } : {}}
            className="pointer-events-none absolute inset-0 z-35"
          >
            {/* 1. SEO HOTSPOT (Top-Left of Core) */}
            <div
              onMouseEnter={() => setActivePanel("seo")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[33.4%] top-[17.5%] w-[16.5%] h-[15.5%] cursor-pointer group rounded-xl"
            >
              {/* Interactive Hover Glow Halo */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "seo"
                    ? "bg-[#B7ED51]/10 ring-2 ring-[#B7ED51] shadow-[0_0_25px_rgba(183,237,81,0.5)] scale-105"
                    : "group-hover:bg-[#B7ED51]/5 group-hover:ring-1 group-hover:ring-[#B7ED51]/50"
                }`}
              />
              {/* Pulsing Node Beacon */}
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7ED51] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7ED51]" />
              </span>

              {/* Floating Stat Tooltip on Hover */}
              {activePanel === "seo" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap rounded-lg bg-[#050a0b]/95 border border-[#B7ED51] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#B7ED51] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(183,237,81,0.4)] backdrop-blur-md pointer-events-none"
                >
                  <span className="flex items-center gap-1.5">
                    <Search className="h-3 w-3" />
                    <span>#1 Rank | +185% Organic Traffic</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* 2. PERFORMANCE HOTSPOT (Top-Right near Arrow) */}
            <div
              onMouseEnter={() => setActivePanel("perf")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[56.5%] top-[8.5%] w-[18%] h-[15.5%] cursor-pointer group rounded-xl"
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "perf"
                    ? "bg-[#B7ED51]/12 ring-2 ring-[#B7ED51] shadow-[0_0_30px_rgba(183,237,81,0.6)] scale-105"
                    : "group-hover:bg-[#B7ED51]/5 group-hover:ring-1 group-hover:ring-[#B7ED51]/50"
                }`}
              />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7ED51] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7ED51]" />
              </span>

              {activePanel === "perf" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap rounded-lg bg-[#050a0b]/95 border border-[#B7ED51] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#B7ED51] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(183,237,81,0.4)] backdrop-blur-md pointer-events-none"
                >
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="h-3 w-3" />
                    <span>+240% Growth | Measurable ROI</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* 3. WEB DEVELOPMENT HOTSPOT (Mid-Left) */}
            <div
              onMouseEnter={() => setActivePanel("webdev")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[30.5%] top-[36.5%] w-[19%] h-[17%] cursor-pointer group rounded-xl"
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "webdev"
                    ? "bg-[#52BCEE]/10 ring-2 ring-[#52BCEE] shadow-[0_0_25px_rgba(82,188,238,0.5)] scale-105"
                    : "group-hover:bg-[#52BCEE]/5 group-hover:ring-1 group-hover:ring-[#52BCEE]/50"
                }`}
              />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52BCEE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52BCEE]" />
              </span>

              {activePanel === "webdev" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap rounded-lg bg-[#050a0b]/95 border border-[#52BCEE] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#52BCEE] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(82,188,238,0.4)] backdrop-blur-md pointer-events-none"
                >
                  <span className="flex items-center gap-1.5">
                    <Code2 className="h-3 w-3" />
                    <span>99.9% Uptime | Scalable Architecture</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* 4. CONTENT HOTSPOT (Mid-Center) */}
            <div
              onMouseEnter={() => setActivePanel("content")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[49.4%] top-[35.2%] w-[15%] h-[15.5%] cursor-pointer group rounded-xl"
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "content"
                    ? "bg-[#B7ED51]/10 ring-2 ring-[#B7ED51] shadow-[0_0_25px_rgba(183,237,81,0.5)] scale-105"
                    : "group-hover:bg-[#B7ED51]/5 group-hover:ring-1 group-hover:ring-[#B7ED51]/50"
                }`}
              />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7ED51]" />
              </span>

              {activePanel === "content" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap rounded-lg bg-[#050a0b]/95 border border-[#B7ED51] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#B7ED51] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(183,237,81,0.4)] backdrop-blur-md pointer-events-none"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3 w-3" />
                    <span>High Retention | Authority Content</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* 5. GOOGLE ADS HOTSPOT (Mid-Right) */}
            <div
              onMouseEnter={() => setActivePanel("ads")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[61.8%] top-[31.3%] w-[16.5%] h-[15.5%] cursor-pointer group rounded-xl"
            >
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "ads"
                    ? "bg-[#52BCEE]/10 ring-2 ring-[#52BCEE] shadow-[0_0_25px_rgba(82,188,238,0.5)] scale-105"
                    : "group-hover:bg-[#52BCEE]/5 group-hover:ring-1 group-hover:ring-[#52BCEE]/50"
                }`}
              />
              <span className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52BCEE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52BCEE]" />
              </span>

              {activePanel === "ads" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 whitespace-nowrap rounded-lg bg-[#050a0b]/95 border border-[#52BCEE] px-2.5 py-1 text-[10px] font-mono font-semibold text-[#52BCEE] shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(82,188,238,0.4)] backdrop-blur-md pointer-events-none"
                >
                  <span className="flex items-center gap-1.5">
                    <Megaphone className="h-3 w-3" />
                    <span>3.8x Target ROAS | Stronger Brand</span>
                  </span>
                </motion.div>
              )}
            </div>

            {/* 6. HOLOGRAPHIC DATA EQUALIZER & LIVE ROI HUD TAG (Over Bottom-Right Chart) */}
            <div
              onMouseEnter={() => setActivePanel("chart")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute left-[56.5%] top-[65%] w-[19%] h-[23%] cursor-pointer group rounded-xl"
            >
              {/* Subtle Ambient Pulse on Chart */}
              <div
                className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                  activePanel === "chart"
                    ? "bg-[#B7ED51]/8 ring-1 ring-[#B7ED51]/60 shadow-[0_0_25px_rgba(183,237,81,0.3)]"
                    : "group-hover:bg-[#B7ED51]/5"
                }`}
              />

              {/* Minimal floating live badge placed directly above the chart */}
              <div className="absolute -top-5 right-2 flex items-center gap-1.5 rounded-full bg-[#050a0b]/90 border border-[#52BCEE]/40 px-2.5 py-0.5 text-[9px] font-mono backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.7)] group-hover:border-[#B7ED51] transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-ping" />
                <span className="text-[#52BCEE] font-medium">LIVE HUD</span>
                <span className="text-white/20">|</span>
                <Activity className="h-2.5 w-2.5 text-[#B7ED51]" />
                <span className="text-[#B7ED51] font-bold">+48.6% ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

