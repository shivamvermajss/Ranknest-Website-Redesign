import { TrendingUp, Cpu, BarChart3, Sliders, Users, LineChart } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";

export function AboutHowWeWork() {
  const principles = [
    {
      num: "01",
      title: "Results-Driven Strategies",
      desc: "Marketing campaigns designed to increase traffic, quality leads, and measurable business growth.",
      icon: TrendingUp,
      accent: "text-[#B7ED51]",
      border: "border-[#B7ED51]/30",
      bg: "bg-[#B7ED51]/5",
    },
    {
      num: "02",
      title: "AI-Powered Solutions",
      desc: "AI-driven insights to stay ahead in today's evolving digital and generative search landscape.",
      icon: Cpu,
      accent: "text-[#52BCEE]",
      border: "border-[#52BCEE]/30",
      bg: "bg-[#52BCEE]/5",
    },
    {
      num: "03",
      title: "Transparent Reporting",
      desc: "Monitor campaign performance with detailed analytics, regular updates, and clear reporting.",
      icon: BarChart3,
      accent: "text-[#52BCEE]",
      border: "border-[#52BCEE]/30",
      bg: "bg-[#52BCEE]/5",
    },
    {
      num: "04",
      title: "Customized Growth Plans",
      desc: "Every strategy is tailored to the business goals, industry, and target audience.",
      icon: Sliders,
      accent: "text-[#B7ED51]",
      border: "border-[#B7ED51]/30",
      bg: "bg-[#B7ED51]/5",
    },
    {
      num: "05",
      title: "Dedicated Experts",
      desc: "Work with experienced digital marketing professionals committed to long-term success.",
      icon: Users,
      accent: "text-[#B7ED51]",
      border: "border-[#B7ED51]/30",
      bg: "bg-[#B7ED51]/5",
    },
    {
      num: "06",
      title: "Sustainable Growth",
      desc: "Build scalable marketing strategies that deliver consistent results and lasting business value.",
      icon: LineChart,
      accent: "text-[#B7ED51]",
      border: "border-[#B7ED51]/30",
      bg: "bg-[#B7ED51]/5",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#030505] border-t border-white/5">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-4 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Methodology
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[#F5F7F7]">
              How we <span className="text-[#B7ED51]">work.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              A cohesive 6-step growth methodology turning complex digital opportunities into
              predictable, compounding commercial performance.
            </p>
          </Reveal>
        </div>

        {/* Growth Methodology Process Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={0.08 * idx}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-[#080D0E]/85 border border-white/10 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl border ${item.bg} ${item.border} ${item.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#F5F7F7] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#B4BEC1]">{item.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase">
                    <span className={item.accent}>Operational Pillar</span>
                    <span>Verified Step</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
