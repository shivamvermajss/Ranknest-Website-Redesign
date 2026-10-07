import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Compass, ShieldCheck } from "lucide-react";
import { LocalSearchMap } from "./LocalSearchMap";

export function LocalSEOHero() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden bg-[#030505]">
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#B7ED51]/6 blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-[#52BCEE]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Editorial Positioning & Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 space-y-6"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(183,237,81,0.12)]">
              <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                LOCAL SEARCH INTELLIGENCE
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-xs text-[#AEB8BA]">2026 EDITION</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#F5F7F7] leading-[1.06]">
              Own Your Local <br />
              <span className="text-[#B7ED51]">Search Visibility.</span>
            </h1>

            {/* Original Client Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm sm:text-base font-medium text-white/90 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#52BCEE] shrink-0" />
              <span>&ldquo;Command visibility across AI search.&rdquo;</span>
            </div>

            {/* Authentic Client Supporting Copy */}
            <p className="text-base sm:text-lg text-[#AEB8BA] leading-relaxed max-w-2xl">
              If your customers are searching for products or services in your area, your business
              needs to appear where they are looking. At Rank Nest IT, we provide professional Local
              SEO services that improve your visibility in local search results, increase website
              traffic, generate qualified leads, and help you attract more customers from your
              target locations.
            </p>

            <p className="text-sm sm:text-base text-[#AEB8BA]/85 leading-relaxed max-w-2xl">
              Our strategies are designed to strengthen your online presence across Google Search,
              Google Maps, and other local directories while building long-term authority for your
              business. A strong local SEO strategy combines optimized service pages, location
              relevance, technical improvements, and trust signals to improve both rankings and
              conversions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://wa.me/7701971969"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#B7ED51] px-7 py-3.5 text-sm font-bold text-[#030505] transition-all duration-300 hover:bg-[#cbf576] hover:shadow-[0_0_30px_rgba(183,237,81,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/[0.08] hover:border-white/30 backdrop-blur-md"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Telemetry Badges */}
            <div className="pt-4 border-t border-white/8 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-2.5 text-center">
                <MapPin className="h-4 w-4 text-[#B7ED51] mx-auto mb-1" />
                <div className="font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider">
                  Maps & 3-Pack
                </div>
              </div>
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-2.5 text-center">
                <Compass className="h-4 w-4 text-[#52BCEE] mx-auto mb-1" />
                <div className="font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider">
                  High Buying Intent
                </div>
              </div>
              <div className="rounded-xl border border-white/6 bg-white/[0.02] p-2.5 text-center">
                <ShieldCheck className="h-4 w-4 text-[#B7ED51] mx-auto mb-1" />
                <div className="font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider">
                  Zero Templates
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Local Search Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center"
          >
            <LocalSearchMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
