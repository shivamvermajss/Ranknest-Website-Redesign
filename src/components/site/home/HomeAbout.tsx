import {
  BarChart3,
  Bot,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

const pillars = [
  {
    title: "Digital Growth",
    category: "Sustainable Scaling",
    desc: "Scalable multi-channel infrastructure engineered for long-term authority and compound search dominance.",
    icon: TrendingUp,
    accent: "text-[#B7ED51]",
    barColor: "bg-[#B7ED51]",
  },
  {
    title: "Search & AI Visibility",
    category: "SEO · GEO · AEO",
    desc: "Omnipresence across classic search engines, Google SGE, and next-generation conversational AI answer engines.",
    icon: Sparkles,
    accent: "text-[#52BCEE]",
    barColor: "bg-[#52BCEE]",
  },
  {
    title: "Qualified Leads",
    category: "Conversion Architecture",
    desc: "Precision targeting and high-converting funnel design that turn high-intent traffic into commercial relationships.",
    icon: Target,
    accent: "text-[#B7ED51]",
    barColor: "bg-[#B7ED51]",
  },
  {
    title: "Measurable Growth",
    category: "Data & Attribution",
    desc: "Transparent reporting dashboards and clear attribution that tangibly validate return on investment.",
    icon: BarChart3,
    accent: "text-[#52BCEE]",
    barColor: "bg-[#52BCEE]",
  },
];

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-[#030505] border-t border-white/5">
      {/* Background glow and subtle grid */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#52BCEE]/5 blur-[130px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <Container className="relative">
        {/* Eyebrow & Section Title */}
        <Reveal>
          <p className="eyebrow mb-4">Your Trusted Partner for Digital Growth</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            About <span className="text-[#B7ED51]">Rank</span><span className="text-[#52BCEE]">nest</span> <span className="text-[#C53736]">IT</span>
          </h2>
        </Reveal>

        {/* Editorial Top Split: Large Typography on Left, Company Description on Right */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative border-l-2 border-primary/40 pl-6 sm:pl-8">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground">
                A digital marketing, SEO &amp; web development partner{" "}
                <span className="text-muted-foreground font-normal">
                  built around your real business growth.
                </span>
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-primary">
                  Results-Driven
                </span>
                <span className="rounded-full border border-[#52BCEE]/25 bg-[#52BCEE]/10 px-3 py-1 text-[#52BCEE]">
                  AI-Ready SEO &amp; GEO
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-muted-foreground">
                  Ethical &amp; Transparent
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-6 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground"
            delay={0.2}
          >
            <p>
              Ranknest IT is a results-driven digital marketing and technology agency dedicated to
              transforming how ambitious businesses connect with their audiences. We engineer
              comprehensive digital strategies that combine advanced Search Engine Optimization
              (SEO), Generative Engine Optimization (GEO), AI Engine Optimization (AEO), Google Ads,
              Social Media Marketing, and Content Marketing with cutting-edge web development.
            </p>
            <p>
              By fusing data-driven marketing methodologies with AI-powered digital solutions, we
              help brands command superior online visibility, attract highly qualified leads, and
              secure measurable, sustainable growth in an evolving digital landscape.
            </p>
          </Reveal>
        </div>

        {/* Secondary Visual Block: 4 Abstract Visual Pillars */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Our Core Growth Pillars
            </span>
            <span className="text-xs text-primary font-mono">04 Strategic Focus Areas</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={0.1 + i * 0.08}>
                  <div className="glass group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-primary/40 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between pb-6">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-primary/40 transition-colors">
                          <Icon className={`h-6 w-6 ${pillar.accent}`} />
                        </div>
                        <span className="text-xs font-mono font-semibold text-muted-foreground/60 group-hover:text-primary transition-colors">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {pillar.category}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {pillar.desc}
                      </p>
                    </div>

                    {/* Abstract indicator graphic */}
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-1 flex-1 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full ${pillar.barColor} rounded-full transition-all duration-700`}
                            style={{ width: `${65 + i * 10}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">Focus</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
