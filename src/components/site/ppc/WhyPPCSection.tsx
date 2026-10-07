import { motion } from "framer-motion";
import { Eye, Target, MousePointerClick, TrendingUp, Zap, ArrowRight } from "lucide-react";

interface ConceptualSignal {
  tag: string;
  name: string;
  focus: string;
  description: string;
  color: string;
}

const SIGNALS: ConceptualSignal[] = [
  {
    tag: "01",
    name: "REACH",
    focus: "Immediate Market Presence",
    description:
      "Instant top-of-page visibility across high-volume search engines and premium digital networks.",
    color: "#B7ED51",
  },
  {
    tag: "02",
    name: "INTENT",
    focus: "Active Commercial Demand",
    description:
      "Reaching buyers at the precise moment they are evaluating solutions and ready to make a decision.",
    color: "#52BCEE",
  },
  {
    tag: "03",
    name: "TRAFFIC",
    focus: "Targeted Inbound Clicks",
    description:
      "Filtering out low-quality queries to ensure your ad spend only attracts genuine, qualified visitors.",
    color: "#B7ED51",
  },
  {
    tag: "04",
    name: "ACTION",
    focus: "Measurable Conversions",
    description:
      "Guiding visitors through high-converting landing experiences designed to generate leads and sales.",
    color: "#52BCEE",
  },
];

const FUNNEL_STEPS = [
  { id: "aud", name: "AUDIENCE", icon: Eye, color: "#B4BEC1" },
  { id: "imp", name: "AD IMPRESSION", icon: Target, color: "#52BCEE" },
  { id: "clk", name: "CLICK", icon: MousePointerClick, color: "#B7ED51" },
  { id: "lnd", name: "LANDING PAGE", icon: Zap, color: "#52BCEE" },
  { id: "act", name: "ACTION / CONVERSION", icon: TrendingUp, color: "#B7ED51" },
];

export function WhyPPCSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-10 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
        <div className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-[#52BCEE]/4 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Header */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
                IMMEDIATE MARKET IMPACT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Why Your Business <br />
              <span className="text-[#B7ED51]">Needs PPC Services</span>
            </h2>

            <p className="font-mono text-xs tracking-wider text-[#B4BEC1] uppercase pt-2">
              Transforming Active Search Intent Into Real Commercial Growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-5 text-base sm:text-lg leading-relaxed text-[#B4BEC1]"
          >
            <p>
              Digital advertising has become highly competitive, making it essential to invest in
              campaigns that produce measurable results. A professionally managed PPC campaign
              allows your business to reach customers at the exact moment they are searching for
              products or services similar to yours. Instead of waiting months for organic
              rankings to improve, PPC advertising provides immediate visibility and drives
              targeted traffic from day one.
            </p>
            <p>
              Our team focuses on building campaigns that generate meaningful conversions rather
              than simply increasing clicks. We continuously analyze campaign performance, optimize
              bidding strategies, refine audience targeting, and improve ad quality to reduce
              advertising costs while increasing conversions. This strategic approach ensures that
              every dollar spent contributes to your business growth.
            </p>
          </motion.div>
        </div>

        {/* 4 CONCEPTUAL SIGNALS CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SIGNALS.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/8 bg-[#030607]/80 p-5 sm:p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                  style={{ borderColor: `${s.color}40`, color: s.color }}
                >
                  SIGNAL {s.tag}
                </span>
                <span className="font-mono text-[10px] text-[#B4BEC1] uppercase">
                  CONCEPTUAL
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-[#F5F7F7] tracking-wider">
                {s.name}
              </h3>
              <span className="text-xs text-[#B7ED51] font-medium block mt-0.5 mb-2">
                {s.focus}
              </span>
              <p className="text-xs sm:text-sm text-[#B4BEC1] leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PAID TRAFFIC FLOW VISUAL (Audience -> Ad Impression -> Click -> Landing -> Action) */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5F7F7] font-bold">
                PAID TRAFFIC CONVERSION FUNNEL
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#52BCEE] hidden sm:block">
              PRECISION VALUE CHAIN
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {FUNNEL_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-white/15 bg-white/[0.03] text-white mb-3 shadow-sm">
                    <Icon className="h-5 w-5" style={{ color: step.color }} />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#F5F7F7] tracking-wider">
                    {step.name}
                  </span>
                  <span className="text-[11px] text-[#B4BEC1] mt-1">
                    {idx === 0 && "In-Market Searchers"}
                    {idx === 1 && "High-Relevance Copy"}
                    {idx === 2 && "Qualified Visit"}
                    {idx === 3 && "Conversion Optimized"}
                    {idx === 4 && "Lead or Sale Achieved"}
                  </span>

                  {/* Flow Arrow indicator between items */}
                  {idx < FUNNEL_STEPS.length - 1 && (
                    <div className="hidden md:flex absolute top-5 -right-3 text-white/20">
                      <ArrowRight className="h-4 w-4 text-white/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
