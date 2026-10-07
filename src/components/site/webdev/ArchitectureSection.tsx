import { motion } from "framer-motion";
import { Layout, Cpu, Database, ShieldCheck, Globe, ArrowDown } from "lucide-react";

interface Layer {
  number: string;
  name: string;
  category: string;
  description: string;
  icon: typeof Layout;
  color: string;
}

const LAYERS: Layer[] = [
  {
    number: "01",
    name: "User Interface (UI / UX)",
    category: "FRONT-END LAYER",
    description: "Responsive wireframes, component design systems, typography hierarchy, and intuitive navigation.",
    icon: Layout,
    color: "#B7ED51",
  },
  {
    number: "02",
    name: "Application & State Layer",
    category: "LOGIC RUNTIME",
    description: "Dynamic client routing, interactive state management, form validations, and smooth micro-animations.",
    icon: Cpu,
    color: "#52BCEE",
  },
  {
    number: "03",
    name: "Data & Content Orchestration",
    category: "CONTENT INTEGRATION",
    description: "Clean API connections, dynamic database endpoints, and structured content management pipelines.",
    icon: Database,
    color: "#B7ED51",
  },
  {
    number: "04",
    name: "Security & Protection Layer",
    category: "DATA INTEGRITY",
    description: "End-to-end SSL/TLS encryption, secure headers, privacy protections, and input sanitization.",
    icon: ShieldCheck,
    color: "#52BCEE",
  },
  {
    number: "05",
    name: "Global Edge Deployment",
    category: "DELIVERY NETWORK",
    description: "Distributed edge caching, fast global response times, automated sitemaps, and continuous uptime.",
    icon: Globe,
    color: "#B7ED51",
  },
];

export function ArchitectureSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#52BCEE]/4 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
              SYSTEM ANATOMY
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#B4BEC1]">FULL STACK COHESION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            Engineered from <br />
            <span className="text-[#B7ED51]">UI to Global Deployment.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#B4BEC1]">
            A reliable digital presence requires harmony across every architectural layer—connecting
            front-end aesthetics seamlessly to secure back-end infrastructure.
          </p>
        </div>

        {/* VERTICAL ARCHITECTURAL STACK */}
        <div className="mt-16 max-w-3xl mx-auto space-y-3 relative">
          {LAYERS.map((layer, idx) => {
            const Icon = layer.icon;

            return (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative flex items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-white/8 bg-[#060A0C]/85 backdrop-blur-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${layer.color}15`,
                      borderColor: `${layer.color}35`,
                      color: layer.color,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold" style={{ color: layer.color }}>
                        {layer.number}
                      </span>
                      <span className="font-mono text-[10px] text-[#B4BEC1] uppercase">
                        {layer.category}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-[#F5F7F7] mt-0.5">
                      {layer.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#B4BEC1] mt-1 max-w-xl">
                      {layer.description}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#B4BEC1] uppercase">CONNECTED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
