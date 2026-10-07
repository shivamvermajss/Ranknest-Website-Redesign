import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Sparkles, Users, TrendingUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon, TelegramIcon } from "./SocialIcons";

export function SocialMediaCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#030505]">
      {/* Background Radiance & Technical Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full blur-[160px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(183, 237, 81, 0.25) 0%, rgba(82, 188, 238, 0.2) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-[#080E10] to-[#040708] p-8 sm:p-12 md:p-16 backdrop-blur-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-[#B7ED51]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-[#52BCEE]/10 to-transparent pointer-events-none" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                START YOUR AUDIENCE JOURNEY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Ready to Grow Your <br />
              <span className="text-lime-gradient">Social Presence?</span>
            </h2>

            {/* Explanatory Context */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              Whether expanding your Instagram audience, driving YouTube viewership, elevating Facebook
              engagement, or launching Telegram community reach, our specialists provide trusted,
              secure, and results-backed growth solutions.
            </p>

            {/* SOCIAL GROWTH TRAJECTORY VISUAL (Requirement 24) */}
            {/* Instagram, Facebook, YouTube, Telegram -> AUDIENCE -> GROWTH */}
            <div className="mt-12 rounded-2xl border border-white/8 bg-black/50 p-4 sm:p-6 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {/* 4 Platforms */}
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#080D0E] px-3 py-2">
                  <InstagramIcon className="h-3.5 w-3.5 text-[#C53736]" />
                  <FacebookIcon className="h-3.5 w-3.5 text-[#52BCEE]" />
                  <YoutubeIcon className="h-3.5 w-3.5 text-[#C53736]" />
                  <TelegramIcon className="h-3.5 w-3.5 text-[#52BCEE]" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-wider ml-1">
                    PLATFORMS
                  </span>
                </div>

                <div className="flex items-center text-white/30 text-xs font-mono font-bold">
                  <span className="hidden sm:inline">────</span>
                  <span className="text-[#52BCEE]">→</span>
                </div>

                {/* Central Audience */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#080D0E] px-3.5 py-2 shadow-inner">
                  <Users className="h-4 w-4 text-[#B7ED51]" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#B7ED51] tracking-wider">
                    AUDIENCE
                  </span>
                </div>

                <div className="flex items-center text-white/30 text-xs font-mono font-bold">
                  <span className="hidden sm:inline">────</span>
                  <span className="text-[#B7ED51]">→</span>
                </div>

                {/* Apex Growth */}
                <div className="flex items-center gap-2 rounded-xl border border-[#B7ED51]/40 bg-[#B7ED51]/15 px-3.5 py-2 shadow-[0_0_15px_rgba(183,237,81,0.25)]">
                  <TrendingUp className="h-4 w-4 text-[#B7ED51]" />
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-wider">
                    GROWTH
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-[#B4BEC1]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                <span>UNIFIED MULTI-PLATFORM AUDIENCE PIPELINE</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {/* Primary */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#B7ED51] px-8 py-4 text-base font-bold text-[#030505] shadow-[0_0_35px_rgba(183,237,81,0.45)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#c6f46c] hover:shadow-[0_0_45px_rgba(183,237,81,0.65)] active:scale-[0.98]"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span>Get a Free Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Secondary */}
              <a
                href="tel:+91770197196"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-[#F5F7F7] backdrop-blur-md transition-all duration-300 hover:border-[#52BCEE]/50 hover:bg-white/[0.08] hover:shadow-[0_0_25px_rgba(82,188,238,0.2)] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-[#52BCEE]" />
                <span>Call Our Social Team</span>
              </a>
            </div>

            {/* Confidence Notice */}
            <p className="mt-6 text-xs text-[#B4BEC1]/60 font-mono">
              100% MONEY-BACK GUARANTEE • 24/7 DEDICATED SUPPORT • FAST NATURAL DELIVERY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
