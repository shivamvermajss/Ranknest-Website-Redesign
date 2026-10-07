import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  focus: string;
  description: string;
  icon: typeof ShieldCheck;
  metricLabel: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Industry Understanding & Competitor Research",
    focus: "Strategic Groundwork",
    description:
      "We dive deep into your market dynamics, competitive advantages, and customer purchase behaviors before launching a single ad.",
    icon: ShieldCheck,
    metricLabel: "MARKET-ALIGNED",
  },
  {
    number: "02",
    title: "Targeted, High-Intent Campaigns",
    focus: "Precision Execution",
    description:
      "Our focus extends beyond generating website traffic; we prioritize attracting qualified visitors genuinely interested in your products or services.",
    icon: Target,
    metricLabel: "QUALIFIED TRAFFIC",
  },
  {
    number: "03",
    title: "Continuous Performance Optimization",
    focus: "Active Governance",
    description:
      "We regularly monitor campaign data, identify opportunities for improvement, and make adjustments that enhance Quality Scores and lower acquisition costs.",
    icon: TrendingUp,
    metricLabel: "BID TUNED",
  },
  {
    number: "04",
    title: "Transparent Strategy & Maximized ROI",
    focus: "Accountable Partnership",
    description:
      "Every campaign is managed with precision, transparency, and an unwavering commitment to sustainable growth and positive return on ad spend.",
    icon: BarChart3,
    metricLabel: "VALUE FOCUSED",
  },
];

export function WhyRanknestPPC() {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* LEFT: Trust Statement & Authentic Client Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                WHY CHOOSE RANKNEST IT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Why Choose Ranknest IT{" "}
              <span className="text-[#B7ED51]">for PPC Services</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#B4BEC1]">
              <p>
                Choosing the right PPC agency can significantly impact your business growth. At
                Ranknest IT, we combine industry expertise, advanced advertising tools, and proven
                optimization strategies to create campaigns that deliver measurable results. Our focus
                extends beyond generating website traffic because we prioritize attracting qualified
                visitors who are genuinely interested in your products or services. Every campaign is
                managed with precision, transparency, and a commitment to maximizing your return on
                investment.
              </p>
              <p>
                Whether your goal is generating leads, increasing online sales, expanding brand
                visibility, or entering new markets, our PPC specialists develop customized
                solutions that help your business achieve sustainable growth through effective digital
                advertising.
              </p>
            </div>

            <div className="pt-4 border-t border-white/8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-[#030505] bg-[#B7ED51]/20 flex items-center justify-center font-mono text-xs font-bold text-[#B7ED51]">
                  G
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#030505] bg-[#52BCEE]/20 flex items-center justify-center font-mono text-xs font-bold text-[#52BCEE]">
                  M
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#030505] bg-[#C53736]/20 flex items-center justify-center font-mono text-xs font-bold text-[#C53736]">
                  L
                </div>
              </div>
              <span className="font-mono text-xs text-[#B4BEC1]">
                Google Ads · Meta · LinkedIn Certified Specialists
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Sequential Illuminated 4 Principles */}
          <div className="lg:col-span-7 relative">
            {/* Illuminated Vertical Guide Line */}
            <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-white/10 hidden sm:block" />
            <div
              className="absolute left-6 sm:left-8 top-6 w-0.5 bg-gradient-to-b from-[#B7ED51] via-[#52BCEE] to-[#B7ED51] transition-all duration-500 hidden sm:block"
              style={{
                height: `${((activePillar + 1) / PILLARS.length) * 88}%`,
              }}
            />

            <div className="space-y-4">
              {PILLARS.map((pillar, index) => {
                const isSelected = activePillar === index;
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActivePillar(index)}
                    className={`relative flex items-start gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#060B0C] border-[#B7ED51] shadow-[0_0_30px_rgba(183,237,81,0.15)] scale-[1.01]"
                        : "bg-[#040708]/80 border-white/8 hover:border-white/20"
                    }`}
                  >
                    {/* Node indicator */}
                    <div
                      className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isSelected
                          ? "bg-[#B7ED51] text-[#030505] border-[#B7ED51] shadow-[0_0_16px_rgba(183,237,81,0.5)] font-bold"
                          : "bg-white/[0.03] border-white/10 text-[#B4BEC1]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="font-mono text-xs font-bold tracking-widest"
                          style={{ color: isSelected ? "#B7ED51" : "#B4BEC1" }}
                        >
                          PRINCIPLE {pillar.number}
                        </span>
                        <span
                          className="font-mono text-[9px] uppercase px-2 py-0.5 rounded border"
                          style={{
                            borderColor: isSelected ? "rgba(183,237,81,0.4)" : "rgba(255,255,255,0.1)",
                            color: isSelected ? "#B7ED51" : "#B4BEC1",
                          }}
                        >
                          {pillar.metricLabel}
                        </span>
                      </div>

                      <h3 className="font-display text-base sm:text-lg font-bold text-[#F5F7F7]">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#B4BEC1] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
