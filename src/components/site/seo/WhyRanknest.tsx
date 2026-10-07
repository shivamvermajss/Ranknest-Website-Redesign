import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Award, BarChart3, TrendingUp, Check } from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof ShieldCheck;
  accent: "lime" | "cyan";
}

const STEPS: StepItem[] = [
  {
    num: "01",
    title: "Industry Expertise",
    tagline: "Specialized Search Intelligence",
    description:
      "Deep algorithmic understanding paired with exhaustive cross-industry search query analysis. Our specialists architect campaigns aligned with evolving engine standards.",
    icon: Award,
    accent: "lime",
  },
  {
    num: "02",
    title: "Proven Optimization",
    tagline: "Data-Backed Precision",
    description:
      "Ethical, sustainable on-page, technical, and authority protocols built for long-term algorithmic resilience without exposure to penalty risks.",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    num: "03",
    title: "Transparent Reporting",
    tagline: "Zero Ambiguity Metrics",
    description:
      "Direct telemetry, regular updates, and honest analysis. We prioritize qualified traffic and actionable business outcomes over vanity numbers.",
    icon: BarChart3,
    accent: "lime",
  },
  {
    num: "04",
    title: "Sustainable Growth",
    tagline: "Long-Term Digital Equity",
    description:
      "Building persistent organic visibility that compounds over time, maximizing your return on investment and lowering ongoing customer acquisition costs.",
    icon: TrendingUp,
    accent: "cyan",
  },
];

export function WhyRanknest() {
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-[#060A0C]">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0 opacity-15" />
        <div
          className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full blur-[160px] opacity-15"
          style={{ background: "radial-gradient(circle, #B7ED51 0%, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: Large Statement & Original Positioning Content (Requirement 18) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-[#B7ED51]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B7ED51] font-semibold">
                THE RANKNEST IT ADVANTAGE
              </span>
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Why Choose Ranknest IT <br />
              <span className="text-lime-gradient">for SEO Services</span>
            </h2>

            {/* Original client positioning copy preserved! */}
            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[#B4BEC1]">
              <p>
                Choosing the right SEO agency can significantly impact your business growth. At Rank
                Nest IT, we combine industry expertise, proven optimization techniques, and
                transparent reporting to create strategies that deliver measurable results. Our
                focus extends beyond rankings alone because we prioritize attracting qualified
                organic traffic that&apos;s genuinely interested in your products or services. Every
                strategy is executed with precision, transparency, and a commitment to maximizing
                your long-term return on investment.
              </p>
              <p>
                Whether your goal is ranking higher on Google, increasing organic traffic, improving
                local visibility, or building lasting domain authority, our SEO specialists develop
                customized solutions that help your business achieve sustainable growth through
                effective search optimization.
              </p>
            </div>

            {/* Direct Trust Credentials */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#080D0E]/90 p-5 backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                GUARANTEE OF INTEGRITY:
              </p>
              <div className="mt-3 space-y-2 text-xs text-[#B4BEC1]">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#B7ED51]" />
                  <span>No black-hat manipulation or toxic link networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#52BCEE]" />
                  <span>Transparent performance tracking & verifiable telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-[#B7ED51]" />
                  <span>Strategies aligned with Google Quality Rater guidelines</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Vertical Sequence with Illuminated Connecting Signal (Requirement 19) */}
          <div className="lg:col-span-7 relative">
            {/* The Vertical Connecting Signal Line */}
            <div
              className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/10 hidden sm:block"
              aria-hidden="true"
            >
              <motion.div
                className="w-full bg-gradient-to-b from-[#B7ED51] via-[#52BCEE] to-[#B7ED51]"
                style={{
                  height: `${((activeStep + 1) / STEPS.length) * 100}%`,
                  boxShadow: "0 0 12px #B7ED51",
                  transition: "height 0.5s ease",
                }}
              />
            </div>

            <div className="space-y-6 sm:pl-16">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isSelected = activeStep === index;
                const isLime = step.accent === "lime";
                const accentColor = isLime ? "#B7ED51" : "#52BCEE";

                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group relative rounded-2xl border p-6 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? isLime
                          ? "border-[#B7ED51]/60 bg-[#0A1012] shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(183,237,81,0.15)] scale-[1.01]"
                          : "border-[#52BCEE]/60 bg-[#0A1012] shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(82,188,238,0.15)] scale-[1.01]"
                        : "border-white/8 bg-[#070B0D]/60 hover:border-white/15 opacity-80 hover:opacity-100"
                    }`}
                  >
                    {/* Step Indicator Node (On vertical line for desktop) */}
                    <div
                      className="absolute -left-[54px] top-7 hidden sm:flex h-7 w-7 items-center justify-center rounded-full border bg-[#060A0C] transition-all duration-300"
                      style={{
                        borderColor: isSelected ? accentColor : "rgba(255, 255, 255, 0.2)",
                        boxShadow: isSelected ? `0 0 15px ${accentColor}` : "none",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] font-bold"
                        style={{ color: isSelected ? accentColor : "#B4BEC1" }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors"
                          style={{
                            backgroundColor: isSelected
                              ? isLime
                                ? "rgba(183, 237, 81, 0.15)"
                                : "rgba(82, 188, 238, 0.15)"
                              : "rgba(255, 255, 255, 0.03)",
                            borderColor: isSelected ? accentColor : "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <Icon className="h-5 w-5" style={{ color: accentColor }} />
                        </div>

                        <div>
                          <span className="font-mono text-xs text-[#B4BEC1]/60 tracking-wider">
                            STEP {step.num}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-full border transition-colors"
                        style={{
                          borderColor: isSelected ? accentColor : "rgba(255, 255, 255, 0.1)",
                          color: isSelected ? accentColor : "#B4BEC1",
                        }}
                      >
                        {step.tagline}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#B4BEC1]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
