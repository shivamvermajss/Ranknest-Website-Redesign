import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Zap,
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Award,
} from "lucide-react";
import { SignatureContentFlow } from "./SignatureContentFlow";

export function CoreContentSystems() {
  const [hoveredPanel, setHoveredPanel] = useState<"seo" | "conversion">("seo");

  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden" id="core-content">
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
                EDITORIAL EXCELLENCE
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Powering Brands Through <br />
              <span className="text-[#B7ED51]">Quality Content.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#AEB8BA]"
          >
            <p>
              At Ranknest IT, we create high-quality, SEO-optimized content that captures attention,
              builds trust, and strengthens your brand. From website copy and blogs to social media
              and marketing content, our strategic approach helps increase organic traffic, improve
              search rankings, engage your target audience, and convert visitors into loyal
              customers for long-term business growth.
            </p>
          </motion.div>
        </div>

        {/* SIGNATURE CONTENT FLOW ANIMATION EMBED */}
        <div className="mt-14 mb-16">
          <SignatureContentFlow />
        </div>

        {/* TWO CORE INTERACTIVE PANELS */}
        <div className="space-y-20">
          {/* ========================================================= */}
          {/* PANEL 01: SEO-OPTIMIZED CONTENT */}
          {/* ========================================================= */}
          <div
            onMouseEnter={() => setHoveredPanel("seo")}
            className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-[#B7ED51]/40 text-[#B7ED51] bg-[#B7ED51]/10">
                  SYSTEM 01
                </span>
                <span className="font-mono text-xs text-[#AEB8BA] tracking-widest uppercase">
                  SEARCH &amp; VISIBILITY
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7F7] tracking-tight">
                SEO-Optimized Content
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-[#AEB8BA] font-sans">
                At Ranknest IT, we create SEO-optimized content that helps your website rank higher
                on search engines and attract the right audience. Our keyword-focused, engaging, and
                original content improves online visibility, drives organic traffic, enhances user
                engagement, and increases conversions. From blogs and landing pages to website copy,
                we deliver content that supports long-term business growth and brand authority.
              </p>

              {/* Feature Checklist */}
              <div className="pt-2 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                {[
                  "Keyword-Focused & Semantic Writing",
                  "Organic Traffic & Visibility Growth",
                  "Structured Heading & Metadata Hierarchy",
                  "Long-Term Brand Authority Building",
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
                  <span>Inquire About SEO Content</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Side: Search & Content Discovery */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:border-[#B7ED51]/40">
                <div className="flex items-center justify-between pb-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#B7ED51]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#AEB8BA]">
                      SEARCH &amp; CONTENT DISCOVERY
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#B7ED51] uppercase">
                    ORGANIC PIPELINE
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Search query representation */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-[#030607]">
                    <Search className="h-4 w-4 text-[#B7ED51]" />
                    <span className="font-mono text-xs text-[#F5F7F7]">
                      comprehensive authority guide on modern digital growth
                    </span>
                  </div>

                  {/* Document preview card */}
                  <div className="p-4 rounded-xl border border-[#B7ED51]/30 bg-[#080F12] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#B7ED51]/15 text-[#B7ED51] font-bold">
                        H1 · INDEXABLE
                      </span>
                      <span className="text-[10px] text-[#AEB8BA] font-mono">
                        ranknestit.com/insights
                      </span>
                    </div>
                    <div className="h-3 w-3/4 rounded bg-white/80" />
                    <div className="space-y-1.5 pt-1">
                      <div className="h-2 w-full rounded bg-[#AEB8BA]/30" />
                      <div className="h-2 w-5/6 rounded bg-[#AEB8BA]/30" />
                      <div className="h-2 w-2/3 rounded bg-[#AEB8BA]/30" />
                    </div>
                  </div>

                  {/* Signal Matrix */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">INTENT MATCH</span>
                      <span className="font-mono text-xs font-bold text-[#B7ED51]">PRIMARY</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">SCHEMA TYPE</span>
                      <span className="font-mono text-xs font-bold text-[#52BCEE]">ARTICLE</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">CRAWL STATUS</span>
                      <span className="font-mono text-xs font-bold text-[#F5F7F7]">DISCOVERED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PANEL 02: ENGAGING & CONVERSION-FOCUSED CONTENT */}
          {/* ========================================================= */}
          <div
            onMouseEnter={() => setHoveredPanel("conversion")}
            className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Visual Side */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:border-[#52BCEE]/40">
                <div className="flex items-center justify-between pb-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#52BCEE]" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#AEB8BA]">
                      CONTENT → AUDIENCE → ACTION
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#52BCEE] uppercase">
                    CONVERSION FUNNEL
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Conversion Journey Visual */}
                  <div className="p-4 rounded-xl border border-[#52BCEE]/25 bg-[#050C10] space-y-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#52BCEE]">
                      <span>ENGAGEMENT SIGNAL</span>
                      <span className="text-white/30">────→</span>
                      <span>QUALIFIED LEAD</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-lg bg-[#030607] border border-white/5 space-y-1">
                        <span className="font-mono text-[9px] text-[#B7ED51] block">ATTENTION</span>
                        <p className="text-[11px] text-[#AEB8BA]">Compelling storytelling &amp; hook</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#030607] border border-white/5 space-y-1">
                        <span className="font-mono text-[9px] text-[#52BCEE] block">ACTION</span>
                        <p className="text-[11px] text-[#AEB8BA]">Persuasive conversion copy</p>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">RESONANCE</span>
                      <span className="font-mono text-xs font-bold text-[#B7ED51]">HIGH</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">READABILITY</span>
                      <span className="font-mono text-xs font-bold text-[#52BCEE]">OPTIMAL</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02] text-center">
                      <span className="font-mono text-[9px] text-[#AEB8BA] block">RETENTION</span>
                      <span className="font-mono text-xs font-bold text-[#F5F7F7]">STEADY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 lg:order-2 order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-[#52BCEE]/40 text-[#52BCEE] bg-[#52BCEE]/10">
                  SYSTEM 02
                </span>
                <span className="font-mono text-xs text-[#AEB8BA] tracking-widest uppercase">
                  CONVERSION &amp; ENGAGEMENT
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7F7] tracking-tight">
                Engaging &amp; Conversion-Focused Content
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-[#AEB8BA] font-sans">
                At Ranknest IT, we create engaging and conversion-focused content that captures
                attention, builds trust, and motivates your audience to take action. Our compelling
                website copy, blogs, landing pages, and marketing content are strategically crafted
                to increase engagement, generate qualified leads, improve conversions, and strengthen
                your brand&apos;s online presence for sustainable business growth.
              </p>

              {/* Feature Checklist */}
              <div className="pt-2 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                {[
                  "Compelling Website & Landing Page Copy",
                  "High-Resonance In-Depth Articles",
                  "Persuasive Call-to-Action Architecture",
                  "Qualified Inbound Lead Generation",
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
                  <span>Build Conversion-Focused Content</span>
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
