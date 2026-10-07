import { motion } from "framer-motion";
import { CampaignIntelligenceVisual } from "./CampaignIntelligenceVisual";

export function PPCStrategySection() {
  return (
    <section className="relative py-24 sm:py-28 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#B7ED51]/4 blur-[130px]" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-[#52BCEE]/4 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Two-Column Header */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                TAILORED PAID STRATEGY
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Customized PPC Strategy{" "}
              <span className="text-[#B7ED51]">for Every Business</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-5 text-base sm:text-lg leading-relaxed text-[#B4BEC1]"
          >
            <p>
              No two businesses have the same goals, which is why we develop personalized PPC
              strategies instead of using generic campaign templates. Our process begins with
              understanding your industry, competitors, customer behavior, and business
              objectives. Based on this research, we create campaigns that target high-intent
              keywords and relevant audiences, helping your business connect with potential
              customers who are ready to take action.
            </p>
            <p>
              From campaign creation to performance optimization, every aspect of your advertising
              is managed by experienced professionals who understand how search engines and
              advertising platforms work. We regularly monitor campaign data, identify
              opportunities for improvement, and make adjustments that enhance overall performance.
            </p>
          </motion.div>
        </div>

        {/* Embedded Campaign Intelligence Pipeline Visual */}
        <CampaignIntelligenceVisual />
      </div>
    </section>
  );
}
