import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { ServiceVisualArt } from "./ServiceVisualArt";
import { cn } from "@/lib/utils";

export const CORE_SERVICES = [
  {
    num: "01",
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    tagline: "Organic Search Discovery",
    description:
      "Improve rankings, drive organic traffic and grow the business with data-driven SEO strategies.",
    accent: "#B7ED51",
    isLime: true,
  },
  {
    num: "02",
    slug: "web-development",
    title: "High-Performance Web Development",
    shortTitle: "Web Development",
    tagline: "Modular Enterprise Architecture",
    description:
      "High-performance, secure and fully responsive enterprise websites architected for speed and seamless integration.",
    accent: "#52BCEE",
    isLime: false,
  },
  {
    num: "03",
    slug: "local-seo",
    title: "Local SEO & Google Business Profile (GMB)",
    shortTitle: "Local SEO & GMB",
    tagline: "Geographic Map Pack Signals",
    description:
      "Get found by customers near you with an optimized Google Business Profile and local search presence.",
    accent: "#B7ED51",
    isLime: true,
  },
  {
    num: "04",
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    tagline: "Semantic Authority & Trust",
    description:
      "Create valuable, SEO-friendly content that attracts, educates and converts the target audience.",
    accent: "#52BCEE",
    isLime: false,
  },
  {
    num: "05",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    tagline: "Audience Network Synergy",
    description:
      "Build the brand, engage the audience and drive meaningful business growth across social platforms.",
    accent: "#52BCEE",
    isLime: false,
  },
  {
    num: "06",
    slug: "google-ads",
    title: "Google Ads (PPC & Performance Marketing)",
    shortTitle: "Google Ads (PPC)",
    tagline: "High-Intent Acquisition",
    description:
      "Reach ideal customers with high-converting pay-per-click campaigns designed to maximize return on investment.",
    accent: "#B7ED51",
    isLime: true,
  },
];

export function ServicesWorkspace() {
  const [activeSlug, setActiveSlug] = useState<string>("seo");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Mobile accordion state (can open/close single item)
  const [mobileOpenSlug, setMobileOpenSlug] = useState<string | null>("seo");

  const activeService =
    CORE_SERVICES.find((s) => s.slug === activeSlug) || CORE_SERVICES[0]!;

  return (
    <section id="services-ecosystem" className="relative py-20 md:py-28 bg-[#030505]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container className="relative space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-8">
          <div className="space-y-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B7ED51]">
                  GROWTH ARCHITECTURE
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F7F7]">
                Digital Growth Ecosystem
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm text-[#B4BEC1] max-w-xl">
                Ranknest IT does not provide isolated services. Explore how each capability functions as a cohesive node in your digital growth engine.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[#52BCEE]" />
              <span>06 Synchronized Capabilities</span>
            </div>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP / TABLET: Interactive Two-Column Visual Storytelling Ecosystem */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Service Navigation / List (01..06) */}
          <div className="md:col-span-5 lg:col-span-5 space-y-3">
            {CORE_SERVICES.map((service) => {
              const isActive = activeSlug === service.slug;
              const isHovered = hoveredSlug === service.slug;
              const isSubdued = hoveredSlug !== null && !isHovered && !isActive;

              return (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveSlug(service.slug)}
                  onMouseEnter={() => setHoveredSlug(service.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className={cn(
                    "group relative flex w-full items-center justify-between rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer border",
                    isActive
                      ? "border-white/20 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.6)] translate-x-1.5"
                      : isHovered
                      ? "border-white/15 bg-white/[0.025] translate-x-1"
                      : "border-white/[0.06] bg-white/[0.015] hover:border-white/10",
                    isSubdued && "opacity-45"
                  )}
                >
                  {/* Left edge glowing laser line */}
                  <div
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r transition-all duration-300",
                      isActive
                        ? "opacity-100 scale-y-100"
                        : isHovered
                        ? "opacity-80 scale-y-75"
                        : "opacity-0 scale-y-0"
                    )}
                    style={{ backgroundColor: service.accent }}
                  />

                  <div className="flex items-center gap-4 min-w-0">
                    {/* Number Indicator */}
                    <span
                      className={cn(
                        "font-mono text-sm font-semibold tracking-wider transition-colors duration-200",
                        isActive
                          ? "text-[#F5F7F7]"
                          : "text-muted-foreground/60 group-hover:text-muted-foreground"
                      )}
                      style={{ color: isActive ? service.accent : undefined }}
                    >
                      {service.num}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className={cn(
                          "font-display text-base font-semibold tracking-tight truncate transition-colors duration-200",
                          isActive
                            ? "text-[#F5F7F7]"
                            : "text-[#B4BEC1] group-hover:text-[#F5F7F7]"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground/70 truncate mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right arrow indicator */}
                  <div className="pl-3 shrink-0">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300",
                        isActive
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-white/5 bg-transparent text-muted-foreground/40 group-hover:border-white/15 group-hover:text-white"
                      )}
                    >
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isActive && "translate-x-0.5 text-[#B7ED51]"
                        )}
                      />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Active Service Detail Glass Showcase */}
          <div className="md:col-span-7 lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Top laser highlight line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#B7ED51]/60 to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${activeService.accent}, transparent)`,
                  }}
                />

                {/* Header Metadata */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-sm font-bold tracking-wider px-2.5 py-1 rounded-md border"
                      style={{
                        borderColor: `${activeService.accent}40`,
                        backgroundColor: `${activeService.accent}12`,
                        color: activeService.accent,
                      }}
                    >
                      {activeService.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {activeService.tagline}
                    </span>
                  </div>

                  <span
                    className="h-2 w-2 rounded-full animate-ping"
                    style={{ backgroundColor: activeService.accent }}
                  />
                </div>

                {/* Abstract Interactive Visual Art for the Service */}
                <div className="my-6 rounded-2xl border border-white/[0.06] bg-[#020404]/80 overflow-hidden shadow-inner">
                  <ServiceVisualArt slug={activeService.slug} />
                </div>

                {/* Title & Original Client Description */}
                <div className="space-y-4">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-[#F5F7F7]">
                    {activeService.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#B4BEC1]">
                    {activeService.description}
                  </p>
                </div>

                {/* Explore Link Navigating to Existing Service Page */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <Link
                    to="/services/$slug"
                    params={{ slug: activeService.slug }}
                    className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-glow cursor-pointer"
                    style={{
                      backgroundColor: activeService.accent,
                      color: "#030505",
                    }}
                  >
                    <span>Explore {activeService.shortTitle}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="font-mono text-xs text-muted-foreground/60 hidden sm:block">
                    Dedicated Service Architecture
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE: Clean Expandable Accordion Interaction (Section 29 & 30) */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-3">
          {CORE_SERVICES.map((service) => {
            const isOpen = mobileOpenSlug === service.slug;

            return (
              <div
                key={service.slug}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-white/20 bg-white/[0.035] shadow-lg"
                    : "border-white/[0.08] bg-white/[0.015]"
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenSlug(isOpen ? null : service.slug)
                  }
                  className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-semibold"
                      style={{ color: service.accent }}
                    >
                      {service.num}
                    </span>
                    <span className="font-display text-sm font-semibold text-[#F5F7F7]">
                      {service.title}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-white"
                    )}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 space-y-4 border-t border-white/[0.06]">
                    <div className="rounded-xl border border-white/[0.06] bg-[#020404]/80 overflow-hidden">
                      <ServiceVisualArt slug={service.slug} />
                    </div>

                    <p className="text-xs leading-relaxed text-[#B4BEC1]">
                      {service.description}
                    </p>

                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-[#030505] transition-all"
                      style={{ backgroundColor: service.accent }}
                    >
                      <span>Explore {service.shortTitle}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
