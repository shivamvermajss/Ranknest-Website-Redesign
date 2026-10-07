import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Feather, Search, Award, TrendingUp, Sparkles } from "lucide-react";
import { ContentEngine } from "./ContentEngine";

export function ContentMarketingHero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-24 md:pt-36 md:pb-28 overflow-hidden bg-[#030505]">
      {/* Background Architectural Grid & Subtle Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Technical Coordinate Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #B7ED51 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Ambient Glows */}
        <div className="absolute -top-32 left-1/4 h-[550px] w-[550px] rounded-full bg-[#B7ED51]/6 blur-[140px]" />
        <div className="absolute top-1/3 -right-24 h-[600px] w-[600px] rounded-full bg-[#52BCEE]/6 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-[400px] w-[400px] rounded-full bg-[#C53736]/4 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow & Service Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md w-fit mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                CONTENT STRATEGY
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[11px] text-[#AEB8BA] tracking-wider">
                CONTENT MARKETING SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F7F7] leading-[1.08]">
              Content Marketing <br />
              <span className="bg-gradient-to-r from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] bg-clip-text text-transparent">
                That Builds Authority.
              </span>
            </h1>

            {/* Prominent Original Phrase Subheading */}
            <div className="mt-4 flex items-center gap-2">
              <div className="h-px w-6 bg-[#B7ED51]/60" />
              <p className="font-mono text-xs uppercase tracking-widest text-[#AEB8BA]">
                Strategic Storytelling &amp; Organic Search Impact by Ranknest IT
              </p>
            </div>

            {/* Authentic Client Content */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#AEB8BA] max-w-2xl font-sans">
              Ranknest IT delivers strategic content marketing services that create engaging,
              SEO-optimized content to attract your target audience, improve search rankings, build
              brand authority, generate quality leads, and drive sustainable business growth.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#B7ED51] px-7 py-3.5 text-sm font-bold text-[#030505] shadow-[0_0_24px_rgba(183,237,81,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(183,237,81,0.6)]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#F5F7F7] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Signals Telemetry Bar */}
            <div className="mt-12 pt-8 border-t border-white/8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#B7ED51]">
                  <Search className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-wider">SEO-OPTIMIZED</span>
                </div>
                <span className="text-[12px] text-[#AEB8BA] mt-1">High-intent search rankings</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#52BCEE]">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-wider">BRAND AUTHORITY</span>
                </div>
                <span className="text-[12px] text-[#AEB8BA] mt-1">Deep topical credibility</span>
              </div>

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-[#F5F7F7]">
                  <TrendingUp className="h-4 w-4 text-[#B7ED51]" />
                  <span className="font-mono text-xs font-bold tracking-wider">QUALIFIED LEADS</span>
                </div>
                <span className="text-[12px] text-[#AEB8BA] mt-1">Conversion-focused writing</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content Engine Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0"
          >
            <ContentEngine />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
