import { Eye, Heart, Users, TrendingUp, Sparkles } from "lucide-react";

interface ConceptualSignal {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: typeof Eye;
  accent: "lime" | "cyan";
}

const SIGNALS: ConceptualSignal[] = [
  {
    id: "visibility",
    name: "VISIBILITY",
    tagline: "Omnipresence Across Algorithmic Feeds",
    desc: "Placing your content in front of active users searching and scrolling through major platforms daily.",
    icon: Eye,
    accent: "lime",
  },
  {
    id: "engagement",
    name: "ENGAGEMENT",
    tagline: "Likes, Views, Shares & Conversations",
    desc: "Fostering active interactions that build social proof, boost algorithmic distribution, and build credibility.",
    icon: Heart,
    accent: "cyan",
  },
  {
    id: "audience",
    name: "AUDIENCE",
    tagline: "Followers & Loyal Community Members",
    desc: "Gathering genuine subscribers, group members, and channel viewers who care about your message.",
    icon: Users,
    accent: "lime",
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Compounding Digital Influence",
    desc: "Transforming social momentum into long-term brand equity, customer inquiries, and commercial value.",
    icon: TrendingUp,
    accent: "cyan",
  },
];

export function WhySocialMedia() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#030505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Eyebrow + Large Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#52BCEE]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
                SOCIAL ADVANTAGE
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Why Social Presence <br />
              <span className="text-cyan-gradient">Defines Modern Brands</span>
            </h2>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-wider text-[#B7ED51]">
                CORE REALITY:
              </p>
              <p className="mt-2 text-sm text-[#F5F7F7] leading-relaxed">
                Audiences evaluate credibility in seconds based on social presence, consistency,
                and active engagement. Strong social positioning turns casual scrollers into loyal advocates.
              </p>
            </div>
          </div>

          {/* Right Column: Supporting Content */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
            <p>
              In today&apos;s interconnected digital landscape, a dormant social presence leaves valuable
              customer attention on the table. Every day, millions of potential customers explore
              Instagram reels, engage on Facebook pages, research reviews on YouTube, and join
              targeted discussion communities on Telegram.
            </p>
            <p>
              Ranknest IT bridges the gap between content creation and audience reach. We combine
              reliable delivery, platform-safe practices, and dedicated support to help creators,
              startups, and enterprises scale their credibility across the world&apos;s most influential
              networks without friction.
            </p>
          </div>
        </div>

        {/* 4 Conceptual Signals (Requirement 20: VISIBILITY, ENGAGEMENT, AUDIENCE, GROWTH) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            const isLime = signal.accent === "lime";
            const accentColor = isLime ? "#B7ED51" : "#52BCEE";

            return (
              <div
                key={signal.id}
                className="group relative rounded-2xl border border-white/8 bg-[#070B0D]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div
                  className="absolute top-0 inset-x-6 h-[1.5px] rounded-full transition-opacity opacity-40 group-hover:opacity-100"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-transparent"
                    style={{
                      backgroundColor: isLime
                        ? "rgba(183, 237, 81, 0.1)"
                        : "rgba(82, 188, 238, 0.1)",
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accentColor }} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-[#B4BEC1]/60 uppercase">
                    PILLAR
                  </span>
                </div>

                <div className="mt-5">
                  <h3
                    className="font-mono text-base font-bold tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {signal.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-white/90">{signal.tagline}</p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#B4BEC1]">{signal.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
