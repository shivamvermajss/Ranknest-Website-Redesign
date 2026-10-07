import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Building2,
  Search,
  FileCode2,
  CheckCircle2,
  MapPin,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string[];
  features: string[];
  icon: typeof Compass;
  accent: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "strategy",
    number: "01",
    eyebrow: "FOUNDATIONAL ARCHITECTURE",
    title: "Our Local SEO Strategy",
    description: [
      "Every business serves a different market, which is why we create customized Local SEO strategies instead of relying on generic templates. We begin by understanding your business goals, target audience, competitors, and service areas. Our experts then optimize every important ranking factor to improve your visibility in local search results while ensuring your website provides an excellent user experience.",
      "Our strategy includes keyword research, on-page optimization, technical SEO improvements, local content development, Google Business Profile optimization, citation management, reputation management, and continuous performance monitoring. By combining these elements, we help your business build authority and maintain consistent growth in local search rankings.",
    ],
    features: [
      "Custom market & service area mapping",
      "NAP consistency & citation management",
      "Reputation & review engagement frameworks",
      "Continuous ranking & visibility monitoring",
    ],
    icon: Compass,
    accent: "#B7ED51",
  },
  {
    id: "gbp",
    number: "02",
    eyebrow: "MAPS & 3-PACK VISIBILITY",
    title: "Google Business Profile Optimization",
    description: [
      "Your Google Business Profile is one of the most important assets for local search visibility. We optimize every aspect of your profile, including business information, service categories, descriptions, images, business hours, products, and customer engagement. A fully optimized profile improves your chances of appearing in Google Maps and the Local Pack while making it easier for customers to contact your business.",
    ],
    features: [
      "Primary & secondary category architecture",
      "Geocoded high-resolution photo assets",
      "Product & service catalog indexing",
      "Direct customer call & navigation hooks",
    ],
    icon: Building2,
    accent: "#52BCEE",
  },
  {
    id: "keywords",
    number: "03",
    eyebrow: "HIGH BUYING INTENT",
    title: "Local Keyword Research",
    description: [
      "Successful Local SEO starts with understanding how your customers search online. Our team performs in-depth keyword research to identify high-value local search terms that match your services and target locations. Instead of focusing only on broad keywords, we target search phrases with strong buying intent to help attract visitors who are more likely to become customers.",
    ],
    features: [
      "Geo-modified search query discovery",
      "Commercial & transactional intent clustering",
      "Hyper-local neighborhood & district terms",
      "Zero-volume long-tail capture",
    ],
    icon: Search,
    accent: "#B7ED51",
  },
  {
    id: "onpage",
    number: "04",
    eyebrow: "LOCATION RELEVANCE",
    title: "On-Page Local SEO Optimization",
    description: [
      "Your website plays a critical role in local search performance. We optimize page titles, meta descriptions, heading tags, URLs, internal linking, and website content to improve relevance for both users and search engines. Every service page is structured around clear topics and local intent, helping search engines better understand what your business offers while improving the overall user experience. Dedicated service pages and well-organized location content are widely recommended for stronger local search performance.",
    ],
    features: [
      "Dedicated location-targeted service pages",
      "LocalBusiness Schema & structured data markup",
      "Optimized geo-titles, headers & meta tags",
      "Localized internal linking mesh",
    ],
    icon: FileCode2,
    accent: "#52BCEE",
  },
];

export function LocalSEOServices() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = SERVICES_DATA[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#B7ED51] uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span>CORE CAPABILITIES</span>
            <span className="text-white/20">|</span>
            <span className="text-[#AEB8BA]">FOUR PILLARS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            The Local Search <br />
            <span className="text-[#B7ED51]">Optimization System</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            Engineered around four synchronized pillars that elevate local ranking signals,
            strengthen Google Business Profile authority, and convert nearby searchers into clients.
          </p>
        </div>

        {/* Tab Stepper Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((srv, idx) => {
            const Icon = srv.icon;
            const isSelected = idx === activeTab;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 backdrop-blur-md group",
                  isSelected
                    ? "border-[#B7ED51]/60 bg-[#B7ED51]/10 shadow-[0_0_25px_rgba(183,237,81,0.18)]"
                    : "border-white/6 bg-white/[0.02] text-[#AEB8BA] hover:border-white/15 hover:bg-white/[0.04] hover:text-white"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
                      isSelected
                        ? "border-[#B7ED51] bg-[#B7ED51]/20 text-[#B7ED51]"
                        : "border-white/10 bg-white/[0.03] text-[#AEB8BA] group-hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-[#AEB8BA]/60 font-bold">
                    {srv.number}
                  </span>
                </div>
                <div className="font-display text-xs sm:text-sm font-bold text-white tracking-wide">
                  {srv.title}
                </div>
                <div className="font-mono text-[10px] text-[#B7ED51]/80 mt-1 uppercase tracking-wider">
                  {srv.eyebrow}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Panel */}
        <div className="rounded-3xl border border-white/10 bg-[#030505]/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Text & Verbatim Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B7ED51]/40 bg-[#B7ED51]/15 text-[#B7ED51]">
                  <CurrentIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#B7ED51] font-bold">
                    AREA {current.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#AEB8BA] leading-relaxed">
                {current.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Verified Features */}
              <div className="pt-4 border-t border-white/8 space-y-2.5">
                <div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                  Core Implementation Elements:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#AEB8BA]">
                      <CheckCircle2 className="h-4 w-4 text-[#B7ED51] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Custom Conceptual Diagram per Service */}
            <div className="lg:col-span-6 flex justify-center">
              {/* Visual 01: Strategy Matrix */}
              {activeTab === 0 && (
                <div className="w-full max-w-md rounded-2xl border border-[#B7ED51]/30 bg-[#080D0E] p-6 font-mono text-xs space-y-4 shadow-[0_0_30px_rgba(183,237,81,0.1)]">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3">
                    <span className="text-[#B7ED51] font-bold">STRATEGY ARCHITECTURE</span>
                    <span className="text-[#AEB8BA] text-[10px]">CUSTOM MATRIX</span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center justify-between">
                      <span className="text-white font-medium">Business Goals Analysis</span>
                      <span className="text-[#B7ED51] text-[10px]">VERIFIED</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center justify-between">
                      <span className="text-white font-medium">Service Area Radius Audit</span>
                      <span className="text-[#52BCEE] text-[10px]">MAPPED</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center justify-between">
                      <span className="text-white font-medium">Competitor Gap Analysis</span>
                      <span className="text-[#B7ED51] text-[10px]">INDEXED</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 flex items-center justify-between">
                      <span className="text-white font-medium">Multi-Channel Technical SEO</span>
                      <span className="text-[#52BCEE] text-[10px]">ACTIVE</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#B7ED51]/20 bg-[#B7ED51]/5 p-3 text-[11px] text-[#AEB8BA]">
                    → Result: Zero generic templates. 100% tailored to local market demand.
                  </div>
                </div>
              )}

              {/* Visual 02: Conceptual Business Profile Card */}
              {activeTab === 1 && (
                <div className="w-full max-w-md rounded-2xl border border-[#52BCEE]/30 bg-[#080D0E] p-6 space-y-4 shadow-[0_0_30px_rgba(82,188,238,0.1)]">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3 font-mono text-xs">
                    <span className="text-[#52BCEE] font-bold">GOOGLE BUSINESS PROFILE</span>
                    <span className="text-[#B7ED51] text-[10px]">● OPTIMIZED</span>
                  </div>

                  {/* Conceptual Profile Mockup (Zero Fake Reviews/Ratings) */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-base font-bold text-white">Target Business Entity</div>
                        <div className="font-mono text-xs text-[#52BCEE]">
                          Verified Local Service Provider
                        </div>
                      </div>
                      <span className="h-6 px-2.5 rounded-full bg-[#B7ED51]/20 border border-[#B7ED51]/40 text-[#B7ED51] font-mono text-[10px] flex items-center">
                        CLAIMED & SYNCED
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs text-[#AEB8BA] pt-2 border-t border-white/6">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#B7ED51]" />
                        <span>Address & Service Radius: Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="h-3.5 w-3.5 text-[#52BCEE]" />
                        <span>Categories: Primary + 4 Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-[#B7ED51]" />
                        <span>Product & Service Catalog: Fully Indexed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="rounded-lg bg-white/[0.04] p-2 text-center font-mono text-[10px] text-white">
                        CALL ACTION: ACTIVE
                      </div>
                      <div className="rounded-lg bg-white/[0.04] p-2 text-center font-mono text-[10px] text-[#B7ED51]">
                        MAPS ROUTE: SYNCED
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 03: Local Keyword Query Constructor */}
              {activeTab === 2 && (
                <div className="w-full max-w-md rounded-2xl border border-[#B7ED51]/30 bg-[#080D0E] p-6 space-y-4 font-mono shadow-[0_0_30px_rgba(183,237,81,0.1)]">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3 text-xs">
                    <span className="text-[#B7ED51] font-bold">QUERY INTENT ENGINE</span>
                    <span className="text-[#AEB8BA] text-[10px]">HIGH-VALUE CLUSTERS</span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                      <div className="text-[10px] text-[#AEB8BA] uppercase mb-1">
                        High Intent Search Pattern:
                      </div>
                      <div className="text-xs text-white font-bold flex flex-wrap items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-[#B7ED51]/15 text-[#B7ED51] border border-[#B7ED51]/30">
                          [PRIMARY SERVICE]
                        </span>
                        <span>+</span>
                        <span className="px-2 py-0.5 rounded bg-[#52BCEE]/15 text-[#52BCEE] border border-[#52BCEE]/30">
                          [CITY / DISTRICT]
                        </span>
                        <span>+</span>
                        <span className="px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                          [BUYING INTENT]
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 space-y-2">
                      <div className="text-[10px] text-[#AEB8BA] uppercase">Intent Breakdown:</div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white">Commercial Buying</span>
                        <span className="text-[#B7ED51]">Targeted</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white">Immediate Proximity</span>
                        <span className="text-[#52BCEE]">Geo-Anchored</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white">Direct Booking Terms</span>
                        <span className="text-[#B7ED51]">Prioritized</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual 04: On-Page Local SEO Frame */}
              {activeTab === 3 && (
                <div className="w-full max-w-md rounded-2xl border border-[#52BCEE]/30 bg-[#080D0E] p-6 space-y-4 font-mono shadow-[0_0_30px_rgba(82,188,238,0.1)]">
                  <div className="flex items-center justify-between border-b border-white/8 pb-3 text-xs">
                    <span className="text-[#52BCEE] font-bold">ON-PAGE LOCAL SCHEMA</span>
                    <span className="text-[#B7ED51] text-[10px]">STRUCTURED DATA</span>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-[#52BCEE]">
                      <span>&lt;LocalBusiness Schema&gt;</span>
                      <span className="text-[10px] text-[#B7ED51]">VALID JSON-LD</span>
                    </div>
                    <div className="pl-3 border-l-2 border-white/10 space-y-1 text-[#AEB8BA] text-[11px]">
                      <div>&quot;@type&quot;: &quot;ProfessionalService&quot;,</div>
                      <div>&quot;name&quot;: &quot;Target Business&quot;,</div>
                      <div>&quot;geo&quot;: &#123; &quot;latitude&quot;, &quot;longitude&quot; &#125;,</div>
                      <div>&quot;areaServed&quot;: [&quot;Local Service Area&quot;],</div>
                      <div>&quot;hasMap&quot;: &quot;Verified Map Embed&quot;</div>
                    </div>
                    <div className="text-[#52BCEE]">&lt;/LocalBusiness&gt;</div>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3 text-[11px] text-[#AEB8BA]">
                    → Optimized page titles, meta tags, URLs & dedicated service pages built for
                    search bots and humans.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
