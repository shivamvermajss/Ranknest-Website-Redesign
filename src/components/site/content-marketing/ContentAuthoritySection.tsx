import { motion } from "framer-motion";
import { Search, Users, Sparkles, Award, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";

export function ContentAuthoritySection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                SEARCH &amp; INTELLECT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Content Built for <br />
              <span className="text-[#B7ED51]">People and Search.</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#AEB8BA]">
              Search algorithms prioritize relevance, depth, and topical authority, while humans
              look for clarity, empathy, and actionable answers. We engineer content that bridges
              both demands seamlessly.
            </p>

            {/* Authority Chain */}
            <div className="pt-2 space-y-3">
              <span className="font-mono text-xs text-[#52BCEE] uppercase tracking-wider block">
                THE CONTENT AUTHORITY ACCELERATOR
              </span>

              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[#AEB8BA]">
                  CONTENT
                </span>
                <span className="text-white/20">→</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[#52BCEE]">
                  VISIBILITY
                </span>
                <span className="text-white/20">→</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[#F5F7F7]">
                  TRUST
                </span>
                <span className="text-white/20">→</span>
                <span className="px-3 py-1 rounded-full border border-[#B7ED51]/40 bg-[#B7ED51]/10 text-[#B7ED51] font-bold">
                  AUTHORITY
                </span>
                <span className="text-white/20">→</span>
                <span className="px-3 py-1 rounded-full border border-[#52BCEE]/40 bg-[#52BCEE]/10 text-[#52BCEE] font-bold">
                  GROWTH
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/8 space-y-2.5">
              {[
                "Targeting commercial & transactional search intent",
                "Establishing topic cluster dominance across key industry themes",
                "Balancing algorithmic crawlability with memorable human storytelling",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#B7ED51]" />
                  <span className="text-sm text-[#F5F7F7]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual: Central Document surrounded by Search, Audience, Relevance, Authority */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Central Editorial Card */}
              <div className="relative z-10 max-w-sm mx-auto p-6 rounded-2xl border border-white/12 bg-[#091114] space-y-3 shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/6">
                  <span className="font-mono text-[9px] text-[#B7ED51] uppercase font-bold">
                    TOPICAL PILLAR ASSET
                  </span>
                  <Award className="h-4 w-4 text-[#B7ED51]" />
                </div>
                <div className="h-3.5 w-3/4 rounded bg-white/90" />
                <div className="h-2 w-full rounded bg-[#AEB8BA]/30" />
                <div className="h-2 w-5/6 rounded bg-[#AEB8BA]/30" />
                <div className="pt-2 flex items-center justify-between font-mono text-[9px] text-[#AEB8BA]">
                  <span>H1, H2, SCHEMA</span>
                  <span className="text-[#52BCEE]">OPTIMIZED</span>
                </div>
              </div>

              {/* 4 Connected Surrounding Orbit Badges */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-3.5 rounded-xl border border-white/8 bg-[#040809] flex items-center gap-2.5">
                  <Search className="h-4 w-4 text-[#B7ED51]" />
                  <div>
                    <span className="font-mono text-[9px] text-[#AEB8BA] block">DISCOVERY</span>
                    <span className="font-mono text-xs font-bold text-[#F5F7F7]">SEARCH</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-white/8 bg-[#040809] flex items-center gap-2.5">
                  <Users className="h-4 w-4 text-[#52BCEE]" />
                  <div>
                    <span className="font-mono text-[9px] text-[#AEB8BA] block">RESONANCE</span>
                    <span className="font-mono text-xs font-bold text-[#F5F7F7]">AUDIENCE</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-white/8 bg-[#040809] flex items-center gap-2.5">
                  <Sparkles className="h-4 w-4 text-[#B7ED51]" />
                  <div>
                    <span className="font-mono text-[9px] text-[#AEB8BA] block">SEMANTICS</span>
                    <span className="font-mono text-xs font-bold text-[#F5F7F7]">RELEVANCE</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-white/8 bg-[#040809] flex items-center gap-2.5">
                  <Award className="h-4 w-4 text-[#52BCEE]" />
                  <div>
                    <span className="font-mono text-[9px] text-[#AEB8BA] block">CREDIBILITY</span>
                    <span className="font-mono text-xs font-bold text-[#F5F7F7]">AUTHORITY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
