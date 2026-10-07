import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Phone, ShieldCheck, Headphones, Award } from "lucide-react";
import { AudienceGrowthNetwork } from "./AudienceGrowthNetwork";

export function SocialMediaHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      {/* Background Ambience: Subtle technical grid & atmospheric glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0 opacity-40" />

        {/* Ambient Glows: Lime + Cyan + Subtle Coral Red */}
        <div
          className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full blur-[140px] opacity-25"
          style={{ background: "radial-gradient(circle, #B7ED51 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-20 right-10 h-[480px] w-[480px] rounded-full blur-[150px] opacity-20"
          style={{ background: "radial-gradient(circle, #52BCEE 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #C53736 0%, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Value Proposition & Original Client Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* 1. Eyebrow */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7ED51] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7ED51]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                SOCIAL GROWTH
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="font-mono text-[11px] text-muted-foreground tracking-wider">
                AUDIENCE NETWORK 2026
              </span>
            </motion.div>

            {/* 2. Main Heading (Preserving "Social Media Services" + "Real Audiences") */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold leading-[1.05] tracking-tight text-white"
            >
              Social Media Services That Build{" "}
              <span className="text-lime-gradient">Real Audiences</span>
            </motion.h1>

            {/* 3. Supporting Paragraph (Exact original client copy preserved!) */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-[#B4BEC1]"
            >
              Ranknest IT delivers affordable social media services to grow your online presence
              with followers, likes, views, engagement, content promotion, and marketing solutions
              across major platforms, backed by reliable support and quality service.
            </motion.p>

            {/* 4. Action CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary: Get Free Audit */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#B7ED51] px-7 py-3.5 text-sm font-bold text-[#030505] shadow-[0_0_28px_rgba(183,237,81,0.4)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c6f46c] hover:shadow-[0_0_36px_rgba(183,237,81,0.6)] active:scale-[0.98]"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span>Get a Free Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary: Call Now */}
              <a
                href="tel:+91770197196"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#F5F7F7] backdrop-blur-md transition-all duration-300 hover:border-[#52BCEE]/50 hover:bg-white/[0.08] hover:shadow-[0_0_25px_rgba(82,188,238,0.25)] active:scale-[0.98]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#52BCEE]/20 text-[#52BCEE]">
                  <Phone className="h-3 w-3" />
                </div>
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* 5. Qualitative Pillars Bar (Exact client trust items preserved from promotional graphics) */}
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#B7ED51] shrink-0" />
                <span className="text-[11px] sm:text-xs text-[#B4BEC1] font-medium leading-tight">
                  100% Safe & Secure
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-[#52BCEE] shrink-0" />
                <span className="text-[11px] sm:text-xs text-[#B4BEC1] font-medium leading-tight">
                  24/7 Fast Support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#B7ED51] shrink-0" />
                <span className="text-[11px] sm:text-xs text-[#B4BEC1] font-medium leading-tight">
                  Money-Back Guarantee
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Audience Growth Network Interactive Visualization */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <AudienceGrowthNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
