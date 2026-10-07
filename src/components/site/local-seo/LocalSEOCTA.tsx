import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Radio, ShieldCheck, Sparkles } from "lucide-react";

export function LocalSEOCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden border-t border-white/8">
      {/* Background Radial Lighting and Map Rings */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#B7ED51]/6 blur-[160px]" />
        {/* Animated Concentric Radar Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 opacity-40 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#B7ED51]/10 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(183,237,81,0.15)] mb-6">
          <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
            GET STARTED TODAY
          </span>
          <span className="text-white/20">|</span>
          <span className="font-mono text-xs text-[#AEB8BA]">LOCAL EXPANSION</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F7F7] leading-tight max-w-4xl mx-auto">
          Start Growing Your <br />
          <span className="text-[#B7ED51]">Local Business Today.</span>
        </h2>

        {/* Verbatim Client Supporting Paragraph */}
        <p className="mt-6 text-base sm:text-lg text-[#AEB8BA] leading-relaxed max-w-3xl mx-auto">
          If you&apos;re ready to increase your visibility in local search results and attract more
          customers from your service area, Rank Nest IT is here to help. Our Local SEO specialists
          create customized strategies that improve rankings, generate qualified leads, and
          support long-term business growth.
        </p>

        <p className="mt-3 text-sm sm:text-base text-[#AEB8BA]/80 leading-relaxed max-w-2xl mx-auto">
          Contact us today to learn how our professional Local SEO services can help your business
          become the preferred choice in your local market.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/7701971969"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#B7ED51] px-8 py-4 text-base font-bold text-[#030505] transition-all duration-300 hover:bg-[#cbf576] hover:shadow-[0_0_35px_rgba(183,237,81,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/[0.08] hover:border-white/30 backdrop-blur-md"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Ambient Connectivity Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#AEB8BA]">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#B7ED51]" />
            <span>GEO-TARGETED SERVICE AREA</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-[#52BCEE]" />
            <span>3-PACK &amp; AI-SEARCH SYNC</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#B7ED51]" />
            <span>VERIFIED CITATION NETWORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
