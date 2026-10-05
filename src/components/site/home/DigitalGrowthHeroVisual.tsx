import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { Search, Code2, FileText, Megaphone, TrendingUp, Sparkles, Activity } from "lucide-react";

/**
 * RANKNEST IT - DIGITAL GROWTH HERO ENGINE (LIVING 3D VISUAL)
 *
 * Faithfully matches the user's reference visual with multi-layered modern website animations:
 * 1. Rich 3D Isometric Cybernetic Processor Platform with the glowing "RN" core
 * 2. Real-time HTML5 Canvas particle jet (ascending photons & cyber embers rushing to the apex)
 * 3. Flowing laser data stream highways with continuous high-speed neon light packets
 * 4. Pulsing core holographic shockwaves & expanding radar rings
 * 5. Living 3D holographic data equalizer HUD with oscillating frequency bars & trendline
 * 6. 5 interactive floating glassmorphic service panels (SEO, Web Dev, Content, Google Ads, Performance)
 * 7. Luminous top-right growth arrow with dynamic beacon flares
 * 8. Smooth 3D mouse parallax tilt & interactive glass cursor spotlight
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
  const sx = useSpring(mx, { stiffness: 50, damping: 22 });
  const sy = useSpring(my, { stiffness: 50, damping: 22 });

  // 3D isometric tilt transforms
  const rotateX = useTransform(sy, [-30, 30], [5, -5]);
  const rotateY = useTransform(sx, [-30, 30], [-6, 6]);

  // Depth layers
  const l1x = useTransform(sx, (v) => v * 0.15);
  const l1y = useTransform(sy, (v) => v * 0.15);
  const l2x = useTransform(sx, (v) => v * 0.4);
  const l2y = useTransform(sy, (v) => v * 0.4);
  const l3x = useTransform(sx, (v) => v * 0.75);
  const l3y = useTransform(sy, (v) => v * 0.75);

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
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setMouseLight((prev) => ({ ...prev, opacity: 0 }));
    setActivePanel(null);
  };

  // =========================================================================
  // HTML5 CANVAS PARTICLE JET & CYBER EMBERS (Ascending along growth trajectory)
  // =========================================================================
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;

    // Responsive Canvas Resizing
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Intersection Observer to stop animation when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Bezier curve points for trajectory (normalized 0 to 1)
    // Starting at the RN Core -> sweeps up to the Growth Arrow
    const p0 = { x: 0.54, y: 0.63 }; // Core center
    const p1 = { x: 0.46, y: 0.44 }; // Curve anchor 1
    const p2 = { x: 0.62, y: 0.24 }; // Curve anchor 2
    const p3 = { x: 0.75, y: 0.09 }; // Top-right Arrow apex

    // Cubic Bezier interpolation
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

    // Photons traveling along the growth trajectory
    const photons: Particle[] = [];
    const maxPhotons = 24;
    const photonColors = ["#B7ED51", "#52BCEE", "#ffffff", "#c6f46c"];

    for (let i = 0; i < maxPhotons; i++) {
      photons.push({
        t: Math.random(),
        speed: 0.0035 + Math.random() * 0.005,
        size: 1.5 + Math.random() * 2.5,
        color: photonColors[Math.floor(Math.random() * photonColors.length)],
        alpha: 0.5 + Math.random() * 0.5,
      });
    }

    // Ambient floating cyber embers
    const embers: Ember[] = [];
    const maxEmbers = 20;
    const emberColors = ["#B7ED51", "#52BCEE", "#ffffff"];

    const createEmber = (): Ember => ({
      x: 0.25 + Math.random() * 0.6,
      y: 0.5 + Math.random() * 0.45,
      vx: (Math.random() - 0.4) * 0.0008,
      vy: -(0.0006 + Math.random() * 0.0012),
      size: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.6,
      life: 0,
      maxLife: 150 + Math.random() * 120,
      color: emberColors[Math.floor(Math.random() * emberColors.length)],
    });

    for (let i = 0; i < maxEmbers; i++) {
      embers.push(createEmber());
    }

    // Animation Loop
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw & Update Trajectory Photons
      for (const p of photons) {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.speed = 0.0035 + Math.random() * 0.005;
        }

        const pt = getBezierPoint(p.t);
        const px = pt.x * w;
        const py = pt.y * h;

        // Dynamic fade: soft fade in near core, peak glow mid-flight, bright flash at arrow
        let currentAlpha = p.alpha;
        if (p.t < 0.15) currentAlpha *= p.t / 0.15;
        if (p.t > 0.85) currentAlpha *= 1 + (p.t - 0.85) * 1.5;

        // Draw glowing photon core & aura
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(currentAlpha, 1);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3.5;
        ctx.fill();

        // White core highlight for intense laser look
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.9;
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw & Update Cyber Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.x += e.vx;
        e.y += e.vy;
        e.life++;

        if (e.life >= e.maxLife || e.y < 0.05) {
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
      className="relative mx-auto h-[460px] w-full max-w-[620px] sm:h-[520px] md:h-[580px] lg:h-[620px] lg:max-w-none lg:w-[114%] lg:-ml-[7%] xl:w-[118%] xl:-ml-[9%] select-none overflow-visible flex items-center justify-center [perspective:1400px]"
      aria-label="Ranknest Interactive 3D Digital Growth Engine"
    >
      {/* 3D Tilted Parent Container */}
      <motion.div
        style={!reduce && isDesktop ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
      >
        {/* ========================================================================= */}
        {/* LAYER 1: AMBIENT ATMOSPHERE & BACKGROUND NEON GLOWS                       */}
        {/* ========================================================================= */}
        <motion.div
          style={!reduce && isDesktop ? { x: l1x, y: l1y } : undefined}
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
        >
          {/* Volumetric Lime & Cyan Ambient Radiance */}
          <div className="absolute right-[12%] top-[8%] h-80 w-80 rounded-full bg-[#B7ED51]/[0.16] blur-[120px] animate-pulse-glow" />
          <div className="absolute left-[14%] bottom-[14%] h-72 w-72 rounded-full bg-[#52BCEE]/[0.12] blur-[110px]" />
          <div className="absolute left-[45%] top-[45%] h-56 w-56 rounded-full bg-[#B7ED51]/[0.14] blur-[90px]" />

          {/* Interactive Mouse Cursor Spotlight */}
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: mouseLight.opacity,
              background: `radial-gradient(450px circle at ${mouseLight.x}% ${mouseLight.y}%, rgba(183, 237, 81, 0.12), rgba(82, 188, 238, 0.06) 40%, transparent 75%)`,
            }}
          />
        </motion.div>

        {/* ========================================================================= */}
        {/* LAYER 2: THE 3D CYBERNETIC GROWTH ENGINE MASTER VISUAL                    */}
        {/* ========================================================================= */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Master 3D Image Base with Edge Softening Blend */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]">
            <img
              src="/hero-growth-engine.jpg"
              alt="Ranknest IT - 3D Digital Growth Engine"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              loading="eager"
            />

            {/* Seamless Vignette Edge Gradient (blends cleanly into #030505) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030505] via-transparent to-transparent opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030505]/40 via-transparent to-[#030505]/30" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 3: REAL-TIME CANVAS ASCENDING PHOTONS & CYBER EMBERS                */}
          {/* ========================================================================= */}
          <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
          />

          {/* ========================================================================= */}
          {/* LAYER 4: SVG DYNAMIC LASER DATA PULSES (Flowing Neon Data Highways)       */}
          {/* ========================================================================= */}
          <motion.div
            style={!reduce && isDesktop ? { x: l2x, y: l2y } : undefined}
            className="pointer-events-none absolute inset-0 z-25 h-full w-full"
          >
            <svg
              viewBox="0 0 1000 600"
              className="h-full w-full overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="svgGlowLime" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="svgGlowCyan" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="svgGlowCore" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur1" />
                  <feGaussianBlur stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Neon Cyan Sweeping Highway Loop (Around Front of Core) */}
              {/* Path coordinates calibrated to the 1000x600 viewBox */}
              <path
                d="M 330 395 C 380 430, 460 460, 545 450 C 625 440, 680 395, 710 340"
                stroke="#52BCEE"
                strokeWidth="10"
                strokeOpacity="0.18"
                strokeLinecap="round"
                filter="url(#svgGlowCyan)"
              />
              {!reduce && (
                <path
                  d="M 330 395 C 380 430, 460 460, 545 450 C 625 440, 680 395, 710 340"
                  stroke="#52BCEE"
                  strokeWidth="3.2"
                  strokeDasharray="40 180"
                  strokeLinecap="round"
                  filter="url(#svgGlowCyan)"
                  className="animate-stream-flow-fast"
                />
              )}

              {/* 2. Neon Lime High-Speed Parallel Track */}
              <path
                d="M 345 385 C 390 418, 470 445, 550 438 C 625 428, 675 385, 700 330"
                stroke="#B7ED51"
                strokeWidth="7"
                strokeOpacity="0.22"
                strokeLinecap="round"
                filter="url(#svgGlowLime)"
              />
              {!reduce && (
                <path
                  d="M 345 385 C 390 418, 470 445, 550 438 C 625 428, 675 385, 700 330"
                  stroke="#B7ED51"
                  strokeWidth="2.5"
                  strokeDasharray="50 160"
                  strokeLinecap="round"
                  filter="url(#svgGlowLime)"
                  className="animate-stream-flow"
                />
              )}

              {/* 3. Upward Soaring Laser Streak (Core to Arrow Apex) */}
              {!reduce && (
                <path
                  d="M 540 375 C 500 300, 580 180, 755 58"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeDasharray="45 220"
                  strokeLinecap="round"
                  filter="url(#svgGlowLime)"
                  className="animate-stream-flow-fast"
                />
              )}
            </svg>
          </motion.div>

          {/* ========================================================================= */}
          {/* LAYER 5: PULSING CENTRAL "RN" PROCESSOR CORE ENERGY WAVES                 */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute left-[54%] top-[62%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            style={{ width: "160px", height: "160px" }}
          >
            {/* Concentric Expanding Holographic Radar Rings */}
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

            {/* Central Core Breathing Aura */}
            <div className="h-16 w-16 rounded-full bg-[#B7ED51]/25 blur-xl animate-pulse" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 6: LIVING 3D HOLOGRAPHIC DATA EQUALIZER & LIVE ROI HUD              */}
          {/* Positioned on the glass dashboard at bottom-right                         */}
          {/* ========================================================================= */}
          <motion.div
            style={!reduce && isDesktop ? { x: l3x, y: l3y } : undefined}
            className="absolute right-[8%] bottom-[13%] sm:right-[10%] sm:bottom-[15%] z-30"
          >
            <div className="relative group cursor-pointer rounded-xl bg-[#050a0b]/85 border border-[#52BCEE]/40 px-3 py-2 backdrop-blur-xl shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(82,188,238,0.25)] hover:border-[#B7ED51] hover:shadow-[0_0_30px_rgba(183,237,81,0.35)] transition-all duration-300 [transform:perspective(600px)_rotateY(-12deg)_rotateX(8deg)]">
              {/* Top HUD Header */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-1 mb-1.5 text-[9px] font-mono tracking-wider">
                <div className="flex items-center gap-1.5 text-[#52BCEE]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-ping" />
                  <span className="font-semibold">DATA MATRIX</span>
                </div>
                <div className="flex items-center gap-1 text-[#B7ED51] font-bold">
                  <Activity className="h-3 w-3" />
                  <span>+48.6% ROI</span>
                </div>
              </div>

              {/* Real-time Oscillating Equalizer Bars */}
              <div className="flex items-end justify-between gap-1 h-8 w-36 sm:w-44 pt-1">
                {[
                  { h: 40, c: "bg-[#C53736]", anim: "animate-[barOscillate1_2.4s_ease-in-out_infinite]" }, // Red accent node
                  { h: 60, c: "bg-[#B7ED51]", anim: "animate-[barOscillate2_2.8s_ease-in-out_infinite]" },
                  { h: 50, c: "bg-[#B7ED51]", anim: "animate-[barOscillate3_2.2s_ease-in-out_infinite]" },
                  { h: 75, c: "bg-[#52BCEE]", anim: "animate-[barOscillate1_3.1s_ease-in-out_infinite]" },
                  { h: 55, c: "bg-[#52BCEE]", anim: "animate-[barOscillate2_2.5s_ease-in-out_infinite]" },
                  { h: 88, c: "bg-[#B7ED51]", anim: "animate-[barOscillate3_2.9s_ease-in-out_infinite]" },
                  { h: 70, c: "bg-[#B7ED51]", anim: "animate-[barOscillate1_2.3s_ease-in-out_infinite]" },
                  { h: 96, c: "bg-[#B7ED51]", anim: "animate-[barOscillate2_2.7s_ease-in-out_infinite]" },
                ].map((bar, idx) => (
                  <div key={idx} className="flex-1 flex flex-col justify-end h-full">
                    <div
                      style={{ height: `${bar.h}%` }}
                      className={`w-full rounded-t-xs ${bar.c} ${!reduce ? bar.anim : ""} shadow-[0_0_6px_currentColor]`}
                    />
                  </div>
                ))}
              </div>

              {/* Micro Status Label */}
              <div className="mt-1 flex items-center justify-between text-[8px] font-mono text-muted-foreground/80 border-t border-white/5 pt-0.5">
                <span>CONVERSION OPTIMIZED</span>
                <span className="text-[#B7ED51] font-semibold">LIVE HUD</span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* LAYER 7: THE 5 INTERACTIVE FLOATING GLASS SERVICE PANELS                  */}
          {/* Overlayed with precision over the visual's 5 nodes                        */}
          {/* ========================================================================= */}
          <motion.div
            style={!reduce && isDesktop ? { x: l3x, y: l3y } : undefined}
            className="pointer-events-none absolute inset-0 z-35"
          >
            {/* 1. SEO PANEL (Top-Left of Core) */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              onMouseEnter={() => setActivePanel("seo")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute top-[16%] left-[38%] sm:left-[40%] md:left-[41%] z-30"
            >
              <div
                className={`group cursor-pointer flex items-center gap-2.5 rounded-xl bg-[#050a0b]/80 border px-3 py-2 backdrop-blur-xl transition-all duration-300 ${
                  activePanel === "seo"
                    ? "border-[#B7ED51] shadow-[0_0_25px_rgba(183,237,81,0.5)] scale-105"
                    : "border-[#B7ED51]/35 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#B7ED51] hover:shadow-[0_0_20px_rgba(183,237,81,0.35)]"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B7ED51]/15 text-[#B7ED51] border border-[#B7ED51]/40">
                  <Search className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-xs font-bold text-[#F5F7F7]">SEO</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">Higher Rankings</p>
                </div>
                {/* Micro Hover Badge */}
                {activePanel === "seo" && (
                  <span className="ml-1 text-[9px] font-mono text-[#B7ED51] bg-[#B7ED51]/10 px-1.5 py-0.5 rounded border border-[#B7ED51]/30">
                    #1 Rank
                  </span>
                )}
              </div>
            </motion.div>

            {/* 2. WEB DEVELOPMENT PANEL (Mid-Left) */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              onMouseEnter={() => setActivePanel("webdev")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute top-[35%] left-[28%] sm:left-[32%] md:left-[33%] z-30"
            >
              <div
                className={`group cursor-pointer flex items-center gap-2.5 rounded-xl bg-[#050a0b]/80 border px-3 py-2 backdrop-blur-xl transition-all duration-300 ${
                  activePanel === "webdev"
                    ? "border-[#52BCEE] shadow-[0_0_25px_rgba(82,188,238,0.5)] scale-105"
                    : "border-[#52BCEE]/35 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#52BCEE] hover:shadow-[0_0_20px_rgba(82,188,238,0.35)]"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#52BCEE]/15 text-[#52BCEE] border border-[#52BCEE]/40">
                  <Code2 className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-xs font-bold text-[#52BCEE]">WEB DEVELOPMENT</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">Scalable Solutions</p>
                </div>
                {activePanel === "webdev" && (
                  <span className="ml-1 text-[9px] font-mono text-[#52BCEE] bg-[#52BCEE]/10 px-1.5 py-0.5 rounded border border-[#52BCEE]/30">
                    99.9% Uptime
                  </span>
                )}
              </div>
            </motion.div>

            {/* 3. CONTENT PANEL (Center Mid) */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              onMouseEnter={() => setActivePanel("content")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute top-[30%] left-[49%] sm:left-[51%] md:left-[52%] z-30 hidden sm:block"
            >
              <div
                className={`group cursor-pointer flex items-center gap-2 rounded-xl bg-[#050a0b]/80 border px-3 py-2 backdrop-blur-xl transition-all duration-300 ${
                  activePanel === "content"
                    ? "border-[#B7ED51] shadow-[0_0_25px_rgba(183,237,81,0.5)] scale-105"
                    : "border-[#B7ED51]/30 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#B7ED51]"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#B7ED51]/15 text-[#B7ED51] border border-[#B7ED51]/40">
                  <FileText className="h-3.5 w-3.5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="font-display text-xs font-bold text-[#F5F7F7]">CONTENT</span>
                  <p className="text-[9px] text-muted-foreground font-medium">Engaging Content</p>
                </div>
              </div>
            </motion.div>

            {/* 4. GOOGLE ADS PANEL (Mid-Right) */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              onMouseEnter={() => setActivePanel("ads")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute top-[28%] right-[14%] sm:right-[18%] md:right-[20%] z-30 hidden sm:block"
            >
              <div
                className={`group cursor-pointer flex items-center gap-2.5 rounded-xl bg-[#050a0b]/80 border px-3 py-2 backdrop-blur-xl transition-all duration-300 ${
                  activePanel === "ads"
                    ? "border-[#52BCEE] shadow-[0_0_25px_rgba(82,188,238,0.5)] scale-105"
                    : "border-[#52BCEE]/30 shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:border-[#52BCEE]"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#52BCEE]/15 text-[#52BCEE] border border-[#52BCEE]/40">
                  <Megaphone className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div>
                  <span className="font-display text-xs font-bold text-[#52BCEE]">GOOGLE ADS</span>
                  <p className="text-[10px] text-muted-foreground font-medium">Stronger Brand</p>
                </div>
                {activePanel === "ads" && (
                  <span className="ml-1 text-[9px] font-mono text-[#52BCEE] bg-[#52BCEE]/10 px-1.5 py-0.5 rounded border border-[#52BCEE]/30">
                    3.8x ROAS
                  </span>
                )}
              </div>
            </motion.div>

            {/* 5. PERFORMANCE PANEL (Top-Right near Arrow Apex) */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              onMouseEnter={() => setActivePanel("perf")}
              onMouseLeave={() => setActivePanel(null)}
              className="pointer-events-auto absolute top-[12%] right-[18%] sm:right-[22%] md:right-[24%] z-30"
            >
              <div
                className={`group cursor-pointer flex items-center gap-2.5 rounded-xl bg-[#050a0b]/85 border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300 ${
                  activePanel === "perf"
                    ? "border-[#B7ED51] shadow-[0_0_30px_rgba(183,237,81,0.65)] scale-105"
                    : "border-[#B7ED51]/45 shadow-[0_14px_30px_rgba(183,237,81,0.2)] hover:border-[#B7ED51] hover:shadow-[0_0_25px_rgba(183,237,81,0.45)]"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B7ED51] text-[#030505] shadow-[0_0_15px_rgba(183,237,81,0.6)]">
                  <TrendingUp className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-xs font-bold text-[#B7ED51]">PERFORMANCE</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
                  </div>
                  <p className="text-[10px] text-muted-foreground font-medium">Real Growth</p>
                </div>
                {activePanel === "perf" && (
                  <span className="ml-1 text-[9px] font-mono font-bold text-[#030505] bg-[#B7ED51] px-1.5 py-0.5 rounded shadow">
                    +240%
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================================= */}
          {/* LAYER 8: TOP-RIGHT GROWTH ARROW APEX ENERGY FLARE                         */}
          {/* ========================================================================= */}
          <div
            className="pointer-events-none absolute right-[22%] top-[6%] z-30 flex items-center justify-center"
            style={{ width: "60px", height: "60px" }}
          >
            {/* Luminous beacon flare pulsing at the arrow tip */}
            <div className="absolute h-10 w-10 rounded-full bg-[#B7ED51]/30 blur-lg animate-pulse" />
            <div className="absolute h-4 w-4 rounded-full bg-[#ffffff] blur-sm animate-ping opacity-75" />
            <Sparkles className="h-5 w-5 text-[#B7ED51] animate-spin-slow opacity-80" />
          </div>

          {/* ========================================================================= */}
          {/* LAYER 9: FLOOR CYBER NODES (Blinking Red, Cyan, Lime Data Nodes)          */}
          {/* ========================================================================= */}
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            {/* Red Accent Status Node (Foreground Left) */}
            <span className="absolute bottom-[24%] left-[29%] h-2 w-2 rounded-full bg-[#C53736] shadow-[0_0_12px_rgba(197,55,54,0.95)] animate-pulse" />
            {/* Cyan Node (Bottom Right) */}
            <span className="absolute bottom-[18%] right-[32%] h-1.5 w-1.5 rounded-full bg-[#52BCEE] shadow-[0_0_10px_rgba(82,188,238,0.9)] animate-ping" />
            {/* Lime Node (Far Bottom Center) */}
            <span className="absolute bottom-[8%] left-[48%] h-1.5 w-1.5 rounded-full bg-[#B7ED51] shadow-[0_0_8px_rgba(183,237,81,0.85)] animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
