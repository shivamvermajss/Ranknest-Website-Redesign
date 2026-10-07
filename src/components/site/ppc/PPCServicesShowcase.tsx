import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Eye,
  ShoppingBag,
  Share2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Target,
  Zap,
  Globe,
  Sliders,
  Filter,
} from "lucide-react";

interface ServiceData {
  number: string;
  id: string;
  title: string;
  category: string;
  accent: string;
  glow: string;
  description: string;
  deliverables: string[];
  visualType: "search" | "display" | "shopping" | "social";
}

const SERVICES: ServiceData[] = [
  {
    number: "01",
    id: "google-ads",
    title: "Google Ads Management",
    category: "SEARCH INTENT ENGINE",
    accent: "#B7ED51",
    glow: "rgba(183, 237, 81, 0.35)",
    description:
      "Google Ads remains one of the most powerful digital advertising platforms available today. Our Google Ads management services help businesses appear prominently in search results when customers are actively looking for their products or services. We create compelling advertisements, optimize keyword targeting, improve Quality Scores, and monitor campaign performance to ensure maximum visibility and profitability.",
    deliverables: [
      "High-Intent Keyword Research & Matching",
      "Compelling Responsive Search Ad Copywriting",
      "Quality Score & Negative Keyword Optimization",
      "Real-Time Bid & Budget Management",
    ],
    visualType: "search",
  },
  {
    number: "02",
    id: "display-advertising",
    title: "Display Advertising",
    category: "DISPLAY NETWORK",
    accent: "#52BCEE",
    glow: "rgba(82, 188, 238, 0.35)",
    description:
      "Display advertising allows your business to increase brand awareness by reaching potential customers across millions of websites. We create visually engaging display campaigns that strengthen your brand presence and encourage users to revisit your website. These campaigns are ideal for businesses looking to expand their audience and stay visible throughout the customer buying journey.",
    deliverables: [
      "Multi-Format Visual & Responsive Banner Creation",
      "Audience Retargeting & Brand Recall Funnels",
      "Contextual & Topic-Based Publisher Placements",
      "Cross-Device Frequency & Placement Filtering",
    ],
    visualType: "display",
  },
  {
    number: "03",
    id: "shopping-ads",
    title: "Shopping Ads",
    category: "PRODUCT DISCOVERY",
    accent: "#B7ED51",
    glow: "rgba(183, 237, 81, 0.35)",
    description:
      "For online stores, Shopping Ads provide an effective way to showcase products directly within search results. Our team optimizes product feeds, bidding strategies, and campaign structures to improve product visibility and increase online sales. Shopping campaigns are designed to attract buyers who are actively searching for products similar to yours, resulting in higher conversion rates and improved return on investment.",
    deliverables: [
      "Google Merchant Center Product Feed Optimization",
      "High-Intent SKU & Custom Label Campaign Structuring",
      "Competitive Bidding & Smart Shopping Strategy",
      "Product Title & Visual Attribute Enhancement",
    ],
    visualType: "shopping",
  },
  {
    number: "04",
    id: "social-ppc",
    title: "Social Media PPC Advertising",
    category: "SOCIAL AUDIENCE",
    accent: "#C53736",
    glow: "rgba(197, 55, 54, 0.35)",
    description:
      "Paid advertising on social media platforms enables businesses to reach highly targeted audiences based on demographics, interests, online behavior, and purchasing intent. Our team creates engaging campaigns across Facebook, Instagram, and LinkedIn to help businesses generate leads, increase brand awareness, and improve customer engagement. Every campaign is carefully optimized to deliver measurable business results while maintaining cost efficiency.",
    deliverables: [
      "Demographic, Behavioral & Lookalike Audience Modeling",
      "Multi-Platform Campaigns (Meta, Instagram, LinkedIn)",
      "High-Converting Creative Formats & Lead Forms",
      "Conversion API & Pixel Event Tracking Setup",
    ],
    visualType: "social",
  },
];

export function PPCServicesShowcase() {
  const [hoveredService, setHoveredService] = useState<string>("google-ads");

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden" id="services-ecosystem">
      {/* Background architectural glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#52BCEE]/4 blur-[160px]" />
        <div className="absolute bottom-1/3 right-10 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
              OUR PPC SERVICES
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-xs text-[#B4BEC1]">PERFORMANCE ECOSYSTEM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            Specialized Paid Channels. <br />
            <span className="text-[#B7ED51]">One Cohesive Performance Strategy.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#B4BEC1] leading-relaxed">
            From search intent to contextual display, shopping feeds, and paid social—we engineer
            every ad channel to connect with high-intent buyers and turn clicks into measurable
            business value.
          </p>
        </div>

        {/* ECOSYSTEM CONNECTION BUS (Visual representation connecting 4 services to Central Conversion) */}
        <div className="mt-14 mb-16 hidden lg:block" aria-hidden="true">
          <div className="relative h-20 w-full max-w-4xl mx-auto flex items-center justify-between px-8 rounded-2xl border border-white/8 bg-[#060A0C]/60 backdrop-blur-xl">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider transition-colors duration-300"
                style={{ color: hoveredService === s.id ? s.accent : "#B4BEC1" }}
              >
                <span
                  className="h-2 w-2 rounded-full transition-transform duration-300"
                  style={{
                    backgroundColor: s.accent,
                    transform: hoveredService === s.id ? "scale(1.4)" : "scale(1)",
                  }}
                />
                <span>{s.title.split(" ")[0]}</span>
              </div>
            ))}

            {/* Central Convergence Hub */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#B7ED51]/10 border border-[#B7ED51]/30">
              <Zap className="h-3.5 w-3.5 text-[#B7ED51]" />
              <span className="font-mono text-[10px] uppercase font-bold text-[#B7ED51] tracking-widest">
                CONVERGING ENGINE
              </span>
            </div>
          </div>
        </div>

        {/* FOUR EDITORIAL SERVICE EXPERIENCES */}
        <div className="mt-12 space-y-24">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  hoveredService === service.id ? "opacity-100" : "lg:opacity-90"
                } transition-opacity duration-300`}
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } space-y-6`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: `${service.accent}40`,
                        color: service.accent,
                        backgroundColor: `${service.accent}10`,
                      }}
                    >
                      SERVICE {service.number}
                    </span>
                    <span className="font-mono text-xs text-[#B4BEC1] tracking-widest uppercase">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F7F7] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-base sm:text-lg leading-relaxed text-[#B4BEC1] font-sans">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 grid sm:grid-cols-2 gap-3 border-t border-white/8">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: service.accent }}
                        />
                        <span className="text-xs sm:text-sm text-[#F5F7F7] font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#F5F7F7] transition-colors"
                      style={{ color: service.accent }}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Micro-Visual Graphic Frame Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
                    {/* Ambient Glow */}
                    <div
                      className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-[80px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                      style={{ backgroundColor: service.accent }}
                    />

                    {/* Visual Card Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/8 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: service.accent }} />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#B4BEC1]">
                          {service.category} TELEMETRY
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#B7ED51] flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                        MONITORED
                      </span>
                    </div>

                    {/* CUSTOM MICRO-VISUALS */}
                    <div className="mt-6 relative z-10">
                      {service.visualType === "search" && (
                        /* SEARCH INTENT ENGINE VISUAL */
                        <div className="space-y-4">
                          {/* Search bar simulation */}
                          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#B7ED51]/30 bg-[#030607] shadow-[0_0_20px_rgba(183,237,81,0.1)]">
                            <Search className="h-4 w-4 text-[#B7ED51]" />
                            <span className="font-mono text-xs text-[#F5F7F7]">
                              best enterprise software solutions near me
                            </span>
                            <span className="ml-auto font-mono text-[10px] uppercase text-[#B7ED51] bg-[#B7ED51]/10 px-2 py-0.5 rounded">
                              HIGH INTENT
                            </span>
                          </div>

                          {/* Ad Preview Card */}
                          <div className="p-4 rounded-xl border border-white/10 bg-[#080E10] space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 bg-[#B7ED51] text-[#030505] rounded">
                                Sponsored
                              </span>
                              <span className="text-xs text-[#B4BEC1] font-mono">
                                ranknestit.com/solutions
                              </span>
                            </div>
                            <h4 className="text-sm font-semibold text-[#52BCEE] hover:underline cursor-pointer">
                              Certified Performance Marketing & Scalable Growth | Ranknest IT
                            </h4>
                            <p className="text-xs text-[#B4BEC1] leading-relaxed">
                              Data-driven PPC campaigns designed to maximize ROI, reduce CPA, and attract qualified commercial leads.
                            </p>
                          </div>

                          {/* Quality Score & Keyword Signals */}
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02]">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">QUALITY SCORE</span>
                              <span className="font-mono text-xs font-bold text-[#B7ED51]">OPTIMAL (10/10)</span>
                            </div>
                            <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02]">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">BID STRATEGY</span>
                              <span className="font-mono text-xs font-bold text-[#52BCEE]">MAX VALUE</span>
                            </div>
                            <div className="p-2.5 rounded-lg border border-white/6 bg-white/[0.02]">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">AD RELEVANCE</span>
                              <span className="font-mono text-xs font-bold text-[#F5F7F7]">ABOVE AVG</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {service.visualType === "display" && (
                        /* DISPLAY NETWORK VISUAL */
                        <div className="space-y-4">
                          <div className="grid grid-cols-12 gap-3 items-center">
                            {/* Large Display Banner Mock */}
                            <div className="col-span-8 p-4 rounded-xl border border-[#52BCEE]/30 bg-[#050C10] relative overflow-hidden">
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[9px] uppercase text-[#52BCEE] tracking-wider">
                                  RESPONSIVE DISPLAY 300x250
                                </span>
                                <Globe className="h-3.5 w-3.5 text-[#52BCEE]" />
                              </div>
                              <div className="h-16 rounded-lg bg-gradient-to-r from-[#52BCEE]/20 via-[#B7ED51]/10 to-transparent p-3 flex flex-col justify-center">
                                <span className="text-xs font-bold text-white">Scale Your Market Reach</span>
                                <span className="text-[10px] text-[#B4BEC1]">Ranknest Display Architecture</span>
                              </div>
                            </div>

                            {/* Small Skyscraper Banner Mock */}
                            <div className="col-span-4 p-3 rounded-xl border border-white/10 bg-[#080E10] flex flex-col justify-between h-28">
                              <span className="font-mono text-[8px] text-[#B4BEC1]">160x600</span>
                              <div className="w-full h-8 rounded bg-[#52BCEE]/15 flex items-center justify-center">
                                <span className="font-mono text-[9px] text-[#52BCEE] font-bold">RECALL</span>
                              </div>
                              <span className="font-mono text-[8px] text-[#B7ED51] text-center">CONTEXTUAL</span>
                            </div>
                          </div>

                          {/* Placements Telemetry */}
                          <div className="p-3 rounded-xl border border-white/8 bg-[#030607] flex items-center justify-between">
                            <span className="text-xs text-[#B4BEC1]">Contextual Placements</span>
                            <span className="font-mono text-xs text-[#52BCEE] font-semibold">
                              Verified Publisher Whitelist
                            </span>
                          </div>
                        </div>
                      )}

                      {service.visualType === "shopping" && (
                        /* SHOPPING ADS VISUAL */
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-3">
                            {/* Product Card 1 */}
                            <div className="p-3.5 rounded-xl border border-[#B7ED51]/30 bg-[#050C10] space-y-2">
                              <div className="h-20 rounded-lg bg-[#0A1618] flex items-center justify-center border border-white/5 relative">
                                <ShoppingBag className="h-7 w-7 text-[#B7ED51]" />
                                <span className="absolute top-1.5 right-1.5 font-mono text-[8px] text-[#B7ED51] bg-[#B7ED51]/15 px-1 rounded">
                                  IN STOCK
                                </span>
                              </div>
                              <span className="text-xs font-semibold text-white block line-clamp-1">
                                Enterprise Solution SKU-A
                              </span>
                              <span className="font-mono text-xs text-[#B7ED51] font-bold">
                                High-Intent Query
                              </span>
                            </div>

                            {/* Product Card 2 */}
                            <div className="p-3.5 rounded-xl border border-white/10 bg-[#080E10] space-y-2">
                              <div className="h-20 rounded-lg bg-[#0C1214] flex items-center justify-center border border-white/5 relative">
                                <Layers className="h-7 w-7 text-[#52BCEE]" />
                                <span className="absolute top-1.5 right-1.5 font-mono text-[8px] text-[#52BCEE] bg-[#52BCEE]/15 px-1 rounded">
                                  OPTIMIZED
                                </span>
                              </div>
                              <span className="text-xs font-semibold text-white block line-clamp-1">
                                Scalable Growth Suite B
                              </span>
                              <span className="font-mono text-xs text-[#52BCEE] font-bold">
                                Product Feed Synced
                              </span>
                            </div>
                          </div>

                          {/* Merchant Feed Status */}
                          <div className="p-3 rounded-xl border border-white/8 bg-[#030607] flex items-center justify-between">
                            <span className="text-xs text-[#B4BEC1]">Google Merchant Center</span>
                            <span className="font-mono text-xs text-[#B7ED51] flex items-center gap-1 font-semibold">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Feed Active & Approved
                            </span>
                          </div>
                        </div>
                      )}

                      {service.visualType === "social" && (
                        /* SOCIAL AUDIENCE MATRIX VISUAL */
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2.5">
                            <div className="p-3 rounded-xl border border-white/10 bg-[#080E10] text-center">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">META / IG</span>
                              <span className="font-mono text-xs font-bold text-[#C53736]">INTEREST</span>
                            </div>
                            <div className="p-3 rounded-xl border border-white/10 bg-[#080E10] text-center">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">LINKEDIN</span>
                              <span className="font-mono text-xs font-bold text-[#52BCEE]">B2B ROLES</span>
                            </div>
                            <div className="p-3 rounded-xl border border-white/10 bg-[#080E10] text-center">
                              <span className="font-mono text-[10px] text-[#B4BEC1] block">LOOKALIKE</span>
                              <span className="font-mono text-xs font-bold text-[#B7ED51]">MATCHED</span>
                            </div>
                          </div>

                          {/* Audience targeting filter visual */}
                          <div className="p-3.5 rounded-xl border border-[#C53736]/30 bg-[#0C0607] space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-[#F5F7F7] flex items-center gap-1.5">
                                <Filter className="h-3.5 w-3.5 text-[#C53736]" />
                                Demographic & Intent Segmentation
                              </span>
                              <span className="font-mono text-[9px] text-[#C53736] uppercase">
                                PRECISION FILTER
                              </span>
                            </div>
                            <p className="text-[11px] text-[#B4BEC1]">
                              Purchasing intent, job seniority, and in-market signals curated to maximize qualified lead generation.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
