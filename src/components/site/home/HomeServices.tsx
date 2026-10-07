import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Megaphone, PenLine, Search, Sparkles, Target } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";

const homeServicesList = [
  {
    num: "01",
    slug: "generative-engine-optimization",
    category: "Next-Gen AI Search",
    name: "Generative Engine Optimization",
    desc: "Secure brand presence in LLM responses and AI search assistants through advanced schema engineering and structured data.",
    icon: Sparkles,
    featured: true,
    accent: "text-[#B7ED51]",
    tags: [
      { text: "LLM Citation Mapping", color: "text-[#52BCEE] border-[#52BCEE]/20 bg-[#52BCEE]/10" },
      {
        text: "Entity Graph Engineering",
        color: "text-[#B7ED51] border-[#B7ED51]/20 bg-[#B7ED51]/10",
      },
      {
        text: "Conversational AI Visibility",
        color: "text-foreground border-white/10 bg-white/[0.03]",
      },
    ],
  },
  {
    num: "02",
    slug: "web-development",
    category: "Engineering & Architecture",
    name: "Web Development",
    desc: "High-performance, secure and fully responsive enterprise websites architected for speed and seamless integration.",
    icon: Code2,
    featured: false,
    accent: "text-[#52BCEE]",
    isCyan: true,
    tags: [
      { text: "Next-Gen Architecture", color: "text-[#52BCEE]" },
      { text: "Sub-Second Load", color: "text-muted-foreground" },
      { text: "Conversion Focused", color: "text-muted-foreground" },
    ],
  },
  {
    num: "03",
    slug: "seo",
    category: "Search Visibility",
    name: "Search Engine Optimization (SEO)",
    desc: "Improve rankings, drive organic traffic and grow the business with data-driven SEO strategies.",
    icon: Search,
    featured: false,
    accent: "text-[#B7ED51]",
  },
  {
    num: "04",
    slug: "google-ads",
    category: "Performance Marketing",
    name: "Google Ads (PPC)",
    desc: "Reach ideal customers with high-converting pay-per-click campaigns designed to maximize return on investment.",
    icon: Target,
    featured: false,
    accent: "text-[#52BCEE]",
    isCyan: true,
  },
  {
    num: "05",
    slug: "social-media-marketing",
    category: "Brand & Engagement",
    name: "Social Media Marketing",
    desc: "Build the brand, engage the audience and drive meaningful business growth across social platforms.",
    icon: Megaphone,
    featured: false,
    accent: "text-[#52BCEE]",
    isCyan: true,
  },
  {
    num: "06",
    slug: "content-marketing",
    category: "Authority & Content",
    name: "Content Marketing",
    desc: "Create valuable, SEO-friendly content that attracts, educates and converts the target audience.",
    icon: PenLine,
    featured: false,
    accent: "text-[#B7ED51]",
  },
];

export function HomeServices() {
  const featuredService = homeServicesList[0]!;
  const secondaryService = homeServicesList[1]!;
  const supportingServices = homeServicesList.slice(2);

  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-[#080D0E] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/4 h-[550px] w-[550px] rounded-full bg-[#B7ED51]/5 blur-[140px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <Container className="relative">
        {/* Header with Title and All Services Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="eyebrow mb-4">Services Ecosystem</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              One ecosystem for <span className="text-lime-gradient">digital growth.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              End-to-end digital capabilities designed to compound search visibility, generate
              qualified leads, and architect enterprise authority.
            </p>
          </div>
          <CTAButton to="/services" variant="ghost" className="self-start md:self-auto">
            View All Services
          </CTAButton>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="space-y-6">
          {/* Top Row: Large Featured (01 GEO) + Supporting (02 Web Dev) */}
          <div className="grid gap-6 lg:grid-cols-12">
            {/* 01: Featured Generative Engine Optimization */}
            <Reveal className="lg:col-span-7 h-full" delay={0.1}>
              <Link
                to="/services/$slug"
                params={{ slug: featuredService.slug }}
                className="glass card-sweep group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10 border border-[#B7ED51]/35 hover:border-[#B7ED51]/70 transition-all duration-500 hover:shadow-glow hover:-translate-y-1.5"
              >
                {/* Visual Ambient Glow */}
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B7ED51]/12 blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div>
                  <div className="flex items-center justify-between pb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> Featured Service
                    </span>
                    <span className="font-mono text-3xl font-bold text-primary/40 group-hover:text-primary transition-colors">
                      {featuredService.num}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-[#52BCEE] font-semibold">
                      {featuredService.category}
                    </p>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {featuredService.name}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                      {featuredService.desc}
                    </p>
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    {featuredService.tags?.map((tag) => (
                      <span key={tag.text} className={`rounded-lg border px-2.5 py-1 ${tag.color}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* 02: Web Development (Electric Cyan) */}
            <Reveal className="lg:col-span-5 h-full" delay={0.15}>
              <Link
                to="/services/$slug"
                params={{ slug: secondaryService.slug }}
                className="glass card-sweep-cyan group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-[#52BCEE]/50 transition-all duration-500 hover:shadow-glow-cyan hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between pb-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#52BCEE]/10 border border-[#52BCEE]/30 text-[#52BCEE] transition-transform duration-500 group-hover:scale-110">
                      <Code2 className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-2xl font-bold text-foreground/20 group-hover:text-[#52BCEE] transition-colors">
                      {secondaryService.num}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-[#52BCEE] font-semibold">
                      {secondaryService.category}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-foreground group-hover:text-[#52BCEE] transition-colors">
                      {secondaryService.name}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {secondaryService.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                    <span>Performance</span> · <span>Security</span> · <span>Scalability</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#52BCEE] transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>

          {/* Bottom Row: 4 Supporting Services (03, 04, 05, 06) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.slug} delay={0.2 + i * 0.06} className="h-full">
                  <Link
                    to="/services/$slug"
                    params={{ slug: svc.slug }}
                    className={`glass ${svc.isCyan ? "card-sweep-cyan" : "card-sweep"} group relative flex h-full flex-col justify-between rounded-3xl p-7 border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-glow hover:-translate-y-1.5`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-6">
                        <span
                          className={`grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/40 transition-colors`}
                        >
                          <Icon
                            className={`h-6 w-6 ${svc.accent} transition-transform duration-500 group-hover:scale-110`}
                          />
                        </span>
                        <span className="font-mono text-2xl font-bold text-foreground/20 group-hover:text-primary transition-colors">
                          {svc.num}
                        </span>
                      </div>

                      <div className="mt-2">
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`}
                        >
                          {svc.category}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {svc.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80 group-hover:text-primary transition-transform duration-300 group-hover:translate-x-1">
                        Learn more <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
