import { motion } from "framer-motion";
import { LocalDiscoveryNetwork } from "./LocalDiscoveryNetwork";

export function WhyLocalSEOMatters() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header: Two Columns */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#B7ED51] uppercase tracking-wider mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span>LOCAL IMPACT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Why Local SEO <br />
              <span className="text-[#B7ED51]">Matters for Your Business</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-[#AEB8BA] leading-relaxed">
              Most consumers use search engines to find nearby businesses before making a purchase
              or booking a service. If your business isn&apos;t visible in local search results, you
              are likely losing customers to competitors who have invested in local optimization.
            </p>
            <p className="text-sm sm:text-base text-[#AEB8BA]/85 leading-relaxed">
              A well-executed Local SEO strategy increases brand awareness, builds trust, drives
              more website visits, and generates high-quality leads from people who are actively
              looking for your services. Since local search traffic often has strong purchase
              intent, improving your local visibility can directly increase inquiries,
              appointments, and sales.
            </p>
          </div>
        </div>

        {/* Local Discovery Network Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <LocalDiscoveryNetwork />
        </motion.div>
      </div>
    </section>
  );
}
