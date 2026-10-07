import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Palette,
  Code2,
  Layout,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";

export function CorePillars() {
  const [activeTab, setActiveTab] = useState<"design" | "dev">("design");

  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden" id="core-pillars">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
        <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Header */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                CORE DISCIPLINES
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Professional Website <br />
              <span className="text-[#B7ED51]">Design &amp; Development</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]"
          >
            <p>
              Ranknest IT creates professional, responsive, and SEO-friendly websites tailored to
              your business. We deliver fast, secure, and user-focused web solutions that enhance
              your online presence and drive long-term growth.
            </p>
            <div className="pt-2 flex items-center gap-3 font-mono text-xs text-[#52BCEE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
              <span>SYNERGISTIC DESIGN + CODE INTEGRATION</span>
            </div>
          </motion.div>
        </div>

        {/* SIGNATURE VISUAL TRANSITION: DESIGN -> COMPONENTS -> DEVELOPMENT -> LIVE WEBSITE */}
        <div className="mt-14 mb-16 rounded-2xl border border-white/8 bg-[#060A0C]/70 p-4 sm:p-5 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#B7ED51]">
              <Palette className="h-4 w-4" />
              <span className="font-bold">01 DESIGN</span>
            </div>
            <span className="text-white/20 hidden sm:inline">────→</span>

            <div className="flex items-center gap-2 text-[#F5F7F7]">
              <Layers className="h-4 w-4 text-[#52BCEE]" />
              <span className="font-bold">02 COMPONENTS</span>
            </div>
            <span className="text-white/20 hidden sm:inline">────→</span>

            <div className="flex items-center gap-2 text-[#52BCEE]">
              <Code2 className="h-4 w-4" />
              <span className="font-bold">03 DEVELOPMENT</span>
            </div>
            <span className="text-white/20 hidden sm:inline">────→</span>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
              <Globe className="h-3.5 w-3.5" />
              <span className="font-bold uppercase tracking-wider">LIVE WEBSITE</span>
            </div>
          </div>
        </div>

        {/* TWO CORE INTERACTIVE EXPERIENCES */}
        <div className="space-y-24">
          {/* ========================================================= */}
          {/* 01 WEBSITE DESIGN */}
          {/* ========================================================= */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-[#B7ED51]/40 text-[#B7ED51] bg-[#B7ED51]/10">
                  PILLAR 01
                </span>
                <span className="font-mono text-xs text-[#B4BEC1] tracking-widest uppercase">
                  EXPERIENCE ARCHITECTURE
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7F7] tracking-tight">
                Website Design
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1] font-sans">
                At Ranknest IT, we design modern, responsive, and visually engaging websites that
                reflect your brand identity and deliver an exceptional user experience. Our website
                designs are mobile-friendly, SEO-optimized, fast-loading, and conversion-focused,
                helping businesses attract more visitors, build trust, and turn potential customers
                into loyal clients with a professional online presence.
              </p>

              {/* Feature Checklist */}
              <div className="pt-2 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                {[
                  "Mobile-Friendly & Adaptive Wireframes",
                  "SEO-Optimized Layout Architecture",
                  "Fast-Loading Visual Assets & Media",
                  "Conversion-Focused UX & UI Hierarchy",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#B7ED51]" />
                    <span className="text-xs sm:text-sm text-[#F5F7F7] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#B7ED51] transition-colors"
                >
                  <span>Discuss Your Website Design</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Side: Design System Studio */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4BEC1]">
                      DESIGN SYSTEM STUDIO
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#B7ED51] uppercase">
                    MODERN UI TOKENS
                  </span>
                </div>

                {/* Abstract UI Canvas & Tokens */}
                <div className="mt-6 space-y-4">
                  {/* Floating Browser Mockup */}
                  <div className="rounded-xl border border-white/12 bg-[#091114] p-4 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#C53736]" />
                        <span className="h-2 w-2 rounded-full bg-[#EAB308]" />
                        <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                      </div>
                      <span className="font-mono text-[9px] text-[#B4BEC1] ml-auto">
                        1440px Canvas
                      </span>
                    </div>

                    {/* Wireframe Hero */}
                    <div className="p-3.5 rounded-lg bg-[#040809] border border-white/5 space-y-2">
                      <div className="h-3 w-1/3 rounded bg-[#B7ED51]/30" />
                      <div className="h-2 w-2/3 rounded bg-white/10" />
                      <div className="flex gap-2 pt-1">
                        <div className="h-5 w-16 rounded-full bg-[#B7ED51] text-[#030505] flex items-center justify-center font-mono text-[8px] font-bold">
                          CTA
                        </div>
                        <div className="h-5 w-16 rounded-full border border-white/10" />
                      </div>
                    </div>
                  </div>

                  {/* Design Tokens Grid */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">TYPOGRAPHY</span>
                      <span className="font-mono text-xs font-bold text-[#F5F7F7]">Sora / Manrope</span>
                    </div>
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">GRID SYSTEM</span>
                      <span className="font-mono text-xs font-bold text-[#B7ED51]">12-Col Responsive</span>
                    </div>
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">PALETTE</span>
                      <span className="font-mono text-xs font-bold text-[#52BCEE]">Curated Contrast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 02 WEBSITE DEVELOPMENT */}
          {/* ========================================================= */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual Side: Digital Engineering Hub */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#52BCEE]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4BEC1]">
                      DIGITAL ENGINEERING HUB
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#52BCEE] uppercase">
                    HIGH PERFORMANCE
                  </span>
                </div>

                {/* Abstract Architecture & Data Flow */}
                <div className="mt-6 space-y-4">
                  {/* Client / Server Relationship Diagram */}
                  <div className="p-4 rounded-xl border border-[#52BCEE]/25 bg-[#050B0E] space-y-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#52BCEE]">
                      <span>CLIENT VIEWPORT</span>
                      <span className="text-white/30">⇄</span>
                      <span>SECURE SERVER RUNTIME</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-[#030607] border border-white/5 space-y-1">
                        <span className="font-mono text-[9px] text-[#B7ED51] block">FRONTEND</span>
                        <span className="text-[11px] text-[#F5F7F7]">Semantic DOM &amp; CSS</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#030607] border border-white/5 space-y-1">
                        <span className="font-mono text-[9px] text-[#52BCEE] block">BACKEND</span>
                        <span className="text-[11px] text-[#F5F7F7]">APIs &amp; Content Feeds</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Standards Telemetry */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">SECURITY</span>
                      <span className="font-mono text-xs font-bold text-[#B7ED51]">HTTPS / TLS</span>
                    </div>
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">RENDER</span>
                      <span className="font-mono text-xs font-bold text-[#52BCEE]">Fast Loading</span>
                    </div>
                    <div className="p-3 rounded-xl border border-white/6 bg-white/[0.02]">
                      <span className="font-mono text-[9px] text-[#B4BEC1] block">SCALABILITY</span>
                      <span className="font-mono text-xs font-bold text-[#F5F7F7]">Enterprise Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 lg:order-2 order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-[#52BCEE]/40 text-[#52BCEE] bg-[#52BCEE]/10">
                  PILLAR 02
                </span>
                <span className="font-mono text-xs text-[#B4BEC1] tracking-widest uppercase">
                  SYSTEM ENGINEERING
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7F7] tracking-tight">
                Website Development
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1] font-sans">
                At Ranknest IT, we develop fast, secure, and scalable websites tailored to your
                business goals. Our expert developers build responsive, SEO-friendly, and
                high-performance websites using modern technologies to ensure seamless functionality
                across all devices. From corporate websites to e-commerce platforms, we create
                reliable web solutions that enhance user experience, improve performance, and
                support long-term business growth.
              </p>

              {/* Feature Checklist */}
              <div className="pt-2 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                {[
                  "Fast, Secure & Scalable Architecture",
                  "Seamless Cross-Device Functionality",
                  "Corporate & E-Commerce Platform Solutions",
                  "High-Performance Technical Optimization",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#52BCEE]" />
                    <span className="text-xs sm:text-sm text-[#F5F7F7] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#52BCEE] transition-colors"
                >
                  <span>Build Your Web Platform</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
