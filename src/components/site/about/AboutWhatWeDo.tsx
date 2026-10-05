import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, MapPin, Target, Globe2, Share2, FileText } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";

export function AboutWhatWeDo() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const services = [
    {
      num: "01",
      title: "Search Engine Optimization (SEO)",
      shortTitle: "SEO",
      slug: "seo",
      icon: Search,
      tag: "Organic Search Dominance",
      desc: "Comprehensive technical SEO, keyword research, on-page optimization, and high-authority link engineering designed to drive continuous organic visibility.",
    },
    {
      num: "02",
      title: "Local SEO",
      shortTitle: "Local SEO",
      slug: "local-seo",
      icon: MapPin,
      tag: "Geo-Targeted Visibility",
      desc: "Optimizing Google Business profiles, localized citations, and geo-targeted keywords to dominate high-intent local map packs and community searches.",
    },
    {
      num: "03",
      title: "Google Ads (PPC)",
      shortTitle: "Google Ads",
      slug: "google-ads",
      icon: Target,
      tag: "Immediate Commercial Intent",
      desc: "High-converting pay-per-click campaigns architected for maximum ROI, precision keyword bidding, negative-match filtering, and strict lead attribution.",
    },
    {
      num: "04",
      title: "Website Design & Development",
      shortTitle: "Web Development",
      slug: "web-development",
      icon: Globe2,
      tag: "Engineered Architecture",
      desc: "Custom high-speed, secure, and fully responsive websites engineered with clean semantic code, optimized conversion paths, and modern performance standards.",
    },
    {
      num: "05",
      title: "Social Media Marketing",
      shortTitle: "Social Media",
      slug: "social-media-marketing",
      icon: Share2,
      tag: "Brand Authority & Reach",
      desc: "Targeted organic and paid social campaigns that build genuine brand equity, engage targeted demographics, and drive qualified business conversions.",
    },
    {
      num: "06",
      title: "Content Marketing",
      shortTitle: "Content Marketing",
      slug: "content-marketing",
      icon: FileText,
      tag: "Authoritative Thought Leadership",
      desc: "High-value, SEO-optimized articles, whitepapers, and guides that educate prospective clients, rank for high-intent keywords, and establish market authority.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#050808] border-t border-white/5">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-4 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                  What We Do
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[#F5F7F7]">
                Full-spectrum <span className="text-[#B7ED51]">digital services.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <CTAButton to="/services" variant="ghost">
              Explore All Services
            </CTAButton>
          </Reveal>
        </div>

        {/* Interactive Vertical Service List with Dynamic Right Ecosystem */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* LEFT (7 cols): Interactive Accordion/List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {services.map((s, idx) => {
              const Icon = s.icon;
              const isHovered = activeIdx === idx;
              return (
                <div
                  key={s.slug}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative py-6 transition-all duration-300 ${
                    isHovered ? "pl-3" : "pl-0"
                  }`}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="flex flex-col gap-2 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-xs font-semibold transition-colors ${
                            isHovered ? "text-[#B7ED51]" : "text-muted-foreground/60"
                          }`}
                        >
                          {s.num}
                        </span>
                        <h3
                          className={`font-display text-xl sm:text-2xl font-semibold transition-colors ${
                            isHovered ? "text-[#B7ED51]" : "text-[#F5F7F7]"
                          }`}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className={`h-5 w-5 transition-all duration-300 ${
                          isHovered
                            ? "text-[#B7ED51] translate-x-0.5 -translate-y-0.5 opacity-100"
                            : "text-muted-foreground opacity-40"
                        }`}
                      />
                    </div>

                    {/* Expandable details preview on active item */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-[#B4BEC1] max-w-xl pl-8">
                        {s.desc}
                      </p>
                    </div>
                  </Link>

                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#B7ED51] transition-all duration-300 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* RIGHT (5 cols): Abstract Digital Ecosystem Preview */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="rounded-3xl bg-[#080D0E]/90 border border-white/10 p-8 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  Service Architecture
                </span>
                <span className="text-[10px] font-mono text-[#B7ED51]">
                  Active Focus: {services[activeIdx].num}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B7ED51]/10 border border-[#B7ED51]/30 text-[#B7ED51]">
                    {(() => {
                      const ActiveIcon = services[activeIdx].icon;
                      return <ActiveIcon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#B7ED51] tracking-wider">
                      {services[activeIdx].tag}
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#F5F7F7]">
                      {services[activeIdx].shortTitle}
                    </h4>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#B4BEC1] pt-2">
                  {services[activeIdx].desc}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Custom Strategy Included</span>
                  <Link
                    to="/services/$slug"
                    params={{ slug: services[activeIdx].slug }}
                    className="text-[#B7ED51] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    View Service Page ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
