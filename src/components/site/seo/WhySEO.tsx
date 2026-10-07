import { motion, useReducedMotion } from "motion/react";
import { Eye, Compass, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

interface ConceptualSignal {
  id: string;
  name: string;
  tagline: string;
  explanation: string;
  icon: typeof Eye;
  accent: "lime" | "cyan";
}

const SIGNALS: ConceptualSignal[] = [
  {
    id: "visibility",
    name: "VISIBILITY",
    tagline: "Presence at Key Decision Moments",
    explanation:
      "Capturing qualified search demand precisely when potential customers actively research your solutions.",
    icon: Eye,
    accent: "lime",
  },
  {
    id: "discovery",
    name: "DISCOVERY",
    tagline: "Connecting with Unreached Audiences",
    explanation:
      "Expanding organic touchpoints across non-branded queries and relevant commercial search queries.",
    icon: Compass,
    accent: "cyan",
  },
  {
    id: "authority",
    name: "AUTHORITY",
    tagline: "Algorithmic & Domain Trust",
    explanation:
      "Earning high-trust signals, citation equity, and technical excellence that search engines reward with durability.",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    id: "growth",
    name: "GROWTH",
    tagline: "Compounding Digital Equity",
    explanation:
      "Unlike ad spend that expires when budgets halt, SEO builds enduring business equity with lowering acquisition cost.",
    icon: TrendingUp,
    accent: "lime",
  },
];

export function WhySEO() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#030505]">
      {/* Background Subtle Converging Signals Animation (Requirement 16) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 600" className="h-full w-full opacity-25">
          <defs>
            <radialGradient id="signalCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(183, 237, 81, 0.2)" />
              <stop offset="60%" stopColor="rgba(82, 188, 238, 0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Converging rays to center */}
          <line x1="100" y1="80" x2="720" y2="300" stroke="rgba(82, 188, 238, 0.25)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="240" y1="520" x2="720" y2="300" stroke="rgba(183, 237, 81, 0.25)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="1300" y1="120" x2="720" y2="300" stroke="rgba(82, 188, 238, 0.25)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="1200" y1="500" x2="720" y2="300" stroke="rgba(183, 237, 81, 0.25)" strokeWidth="1" strokeDasharray="3 6" />

          {/* Central convergence node: VISIBLE */}
          <circle cx="720" cy="300" r="80" fill="url(#signalCoreGlow)" />
          <circle cx="720" cy="300" r="30" fill="#080D0E" stroke="#B7ED51" strokeWidth="1" />
          <text x="720" y="304" textAnchor="middle" fill="#B7ED51" fontSize="9" fontFamily="monospace" letterSpacing="1.5">
            VISIBLE
          </text>

          {/* Traveling convergence particles */}
          {!reduce && (
            <>
              <circle r="2.5" fill="#52BCEE">
                <animateMotion dur="8s" repeatCount="indefinite" path="M 100 80 L 720 300" />
              </circle>
              <circle r="2.5" fill="#B7ED51">
                <animateMotion dur="9s" repeatCount="indefinite" path="M 240 520 L 720 300" />
              </circle>
              <circle r="2.5" fill="#52BCEE">
                <animateMotion dur="7s" repeatCount="indefinite" path="M 1300 120 L 720 300" />
              </circle>
              <circle r="2.5" fill="#B7ED51">
                <animateMotion dur="10s" repeatCount="indefinite" path="M 1200 500 L 720 300" />
              </circle>
            </>
          )}
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Storytelling Split (Requirement 15) */}
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Eyebrow + Large Heading */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#52BCEE]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
                SEARCH VISIBILITY ESSENTIALS
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Why Your Business <br />
              <span className="text-cyan-gradient">Needs SEO Services</span>
            </h2>

            {/* Strategic Principle Callout Box */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-wider text-[#B7ED51]">
                CORE REALITY:
              </p>
              <p className="mt-2 text-sm text-[#F5F7F7] leading-relaxed">
                Paid advertising creates rented traffic that disappears when spending stops. SEO builds
                an appreciating corporate asset that compounds in authority month over month.
              </p>
            </div>
          </div>

          {/* Right Column: Original Explanatory Content Preserved! */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
            <p>
              Digital competition has made it essential to invest in strategies that produce
              lasting, measurable results. A professionally managed SEO campaign allows your business
              to be found by customers at the exact moment they&apos;re searching for products or services
              like yours. Unlike paid ads that stop the moment you stop spending, SEO builds equity
              that continues driving traffic and leads over time.
            </p>
            <p>
              Our team focuses on building strategies that generate meaningful traffic and
              conversions, not just higher rankings for their own sake. We continuously analyze search
              performance, refine keyword targeting, strengthen technical health, and build
              authoritative backlinks to improve rankings while lowering long-term customer
              acquisition costs. This strategic approach ensures every effort contributes to
              sustainable business growth.
            </p>
          </div>
        </div>

        {/* Bottom Conceptual Signals (Requirement 15: VISIBILITY, DISCOVERY, AUTHORITY, GROWTH) */}
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
                {/* Accent Top Border Line */}
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
                    SIGNAL
                  </span>
                </div>

                <div className="mt-5">
                  <h3
                    className="font-mono text-base font-bold tracking-wider"
                    style={{ color: accentColor }}
                  >
                    {signal.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-white/90">
                    {signal.tagline}
                  </p>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#B4BEC1]">
                  {signal.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
