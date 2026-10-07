import { motion } from "framer-motion";
import { Search, HeartHandshake, Target, TrendingUp, CheckCircle2 } from "lucide-react";

interface Pillar {
  number: string;
  name: string;
  title: string;
  description: string;
  icon: typeof Search;
  color: string;
  tag: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    name: "SEO-OPTIMIZED",
    title: "Organic Search Dominance",
    description:
      "Crafted with strategic keyword intent, structured heading hierarchy, and search engine crawlability to drive long-term organic visibility.",
    icon: Search,
    color: "#B7ED51",
    tag: "DISCOVERABLE",
  },
  {
    number: "02",
    name: "ENGAGING",
    title: "Human-Centric Resonance",
    description:
      "Written with compelling hooks, relatable brand storytelling, and thought leadership that captures attention and retains active readers.",
    icon: HeartHandshake,
    color: "#52BCEE",
    tag: "COMPELLING",
  },
  {
    number: "03",
    name: "RELEVANT",
    title: "Exact Audience Alignment",
    description:
      "Addressing the precise questions, commercial pain points, and evaluation criteria that matter most to your target market.",
    icon: Target,
    color: "#B7ED51",
    tag: "INTENT-MATCHED",
  },
  {
    number: "04",
    name: "CONVERSION-FOCUSED",
    title: "Action-Driven Pathways",
    description:
      "Seamlessly guiding engaged visitors through logical conversion funnels that transform casual readers into high-quality leads and clients.",
    icon: TrendingUp,
    color: "#52BCEE",
    tag: "ACTIONABLE",
  },
];

export function ContentPillars() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              CORE PILLARS
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#AEB8BA]">QUALITY STANDARDS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            The Four Foundations of <br />
            <span className="text-[#B7ED51]">Effective Content.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            Every article, landing page, and marketing asset produced by Ranknest IT is evaluated
            against four essential criteria to guarantee measurable business impact.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl border border-white/8 bg-[#060A0C]/80 p-6 sm:p-7 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/8">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                    style={{ borderColor: `${pillar.color}40`, color: pillar.color }}
                  >
                    PILLAR {pillar.number}
                  </span>
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center border"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}35`,
                      color: pillar.color,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="font-mono text-[10px] text-[#AEB8BA] uppercase tracking-wider block">
                    {pillar.name}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#F5F7F7]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AEB8BA] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#AEB8BA] uppercase">STANDARD</span>
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: pillar.color }}
                  >
                    {pillar.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
