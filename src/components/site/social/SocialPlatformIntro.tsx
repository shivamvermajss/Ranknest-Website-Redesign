import { Sparkles, Layers } from "lucide-react";

export function SocialPlatformIntro() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 bg-[#030505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
            <Layers className="h-3.5 w-3.5 text-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              SOCIAL PLATFORMS
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            One Strategy. <br />
            <span className="text-lime-gradient">Everywhere Your Audience Lives.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
            Social growth requires platform-specific optimization. From high-retention Instagram reels
            and trusted Facebook community pages to YouTube watch-time amplification and Telegram
            channel broadcasting, Ranknest IT provides dependable, secure marketing solutions
            tailored to your unique business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
