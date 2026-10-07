import { motion } from "framer-motion";
import { Zap, ShieldCheck, Search, CheckCircle2, Lock, Gauge, Globe } from "lucide-react";

interface Benchmark {
  id: string;
  name: string;
  label: string;
  status: string;
  color: string;
  icon: typeof Zap;
  description: string;
  signals: string[];
}

const BENCHMARKS: Benchmark[] = [
  {
    id: "speed",
    name: "Speed & Performance",
    label: "PERFORMANCE",
    status: "OPTIMIZED",
    color: "#B7ED51",
    icon: Gauge,
    description:
      "Engineered for rapid loading, clean asset payloads, and smooth interactions, ensuring visitors engage immediately without latency or friction.",
    signals: [
      "Optimized Asset & Media Delivery",
      "Minimal Render-Blocking Resources",
      "Smooth Interaction Transitions",
    ],
  },
  {
    id: "security",
    name: "Enterprise Security & Protection",
    label: "SECURITY",
    status: "ENCRYPTED",
    color: "#52BCEE",
    icon: ShieldCheck,
    description:
      "Built with modern security protocols, SSL/TLS encryption, and safe data handling practices to safeguard your business assets and visitor privacy.",
    signals: [
      "End-to-End SSL/TLS Encryption",
      "Secure API & Form Data Transmission",
      "Hardened Web Infrastructure Standards",
    ],
  },
  {
    id: "seo",
    name: "Search Engine Discoverability",
    label: "DISCOVERABILITY",
    status: "INDEXABLE",
    color: "#B7ED51",
    icon: Search,
    description:
      "Architected with clean semantic HTML5, valid schema markup, and accessible structure so search crawlers can index and understand your content seamlessly.",
    signals: [
      "Semantic HTML5 Heading Hierarchy",
      "Structured Metadata & Schema Engineering",
      "Fast Bot Crawlability & Valid Sitemap",
    ],
  },
];

export function PerformanceSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              FOUNDATIONAL BENCHMARKS
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#B4BEC1]">CORE STANDARDS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            Fast. Secure. <br />
            <span className="text-[#B7ED51]">Search-Engine Ready.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B4BEC1]">
            A great website requires more than good looks. We engineer every digital asset around
            three foundational pillars: speed, security, and organic search discoverability.
          </p>
        </div>

        {/* 3 BENCHMARK CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENCHMARKS.map((b, idx) => {
            const Icon = b.icon;

            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl border border-white/8 bg-[#060A0C]/80 p-7 sm:p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Header status badge */}
                <div className="flex items-center justify-between pb-5 border-b border-white/8">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${b.color}15`,
                      borderColor: `${b.color}40`,
                      color: b.color,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded border"
                    style={{
                      borderColor: `${b.color}40`,
                      color: b.color,
                      backgroundColor: `${b.color}10`,
                    }}
                  >
                    {b.status}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <span className="font-mono text-[10px] tracking-widest text-[#B4BEC1] block uppercase">
                    {b.label}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F5F7F7]">
                    {b.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#B4BEC1]">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/8 space-y-2">
                  {b.signals.map((sig, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 mt-0.5"
                        style={{ color: b.color }}
                      />
                      <span className="text-xs text-[#F5F7F7] font-medium leading-snug">
                        {sig}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
