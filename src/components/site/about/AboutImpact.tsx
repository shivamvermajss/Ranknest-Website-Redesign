import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Container } from "../ui";
import { Reveal } from "../motion";

function CounterItem({
  value,
  suffix = "+",
  label,
  sub,
}: {
  value: number | string;
  suffix?: string;
  label: string;
  sub: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== "number" || reduce || !isInView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, reduce]);

  return (
    <div
      ref={ref}
      className="group relative p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 last:border-b-0"
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F7F7]">
          {typeof value === "number" ? (reduce || !isInView ? value : count) : value}
        </span>
        {suffix && (
          <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B7ED51]">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 font-display text-lg sm:text-xl font-semibold text-[#F5F7F7]">{label}</p>
      <p className="mt-1 text-xs sm:text-sm text-[#B4BEC1]">{sub}</p>
    </div>
  );
}

export function AboutImpact() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#080D0E] border-t border-white/5">
      {/* Ambient background bloom */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="grid-lines absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 mb-4 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                Our Impact
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-[#F5F7F7]">
              Numbers that tell our <span className="text-[#B7ED51]">story.</span>
            </h2>
          </Reveal>
        </div>

        {/* Large Editorial Data Moment: 2x2 Grid with Subtle Lines */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl border border-white/10 bg-[#030505]/80 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <CounterItem
                value={150}
                suffix="+"
                label="Happy Clients"
                sub="Across global industries & markets"
              />
              <CounterItem
                value={250}
                suffix="+"
                label="Projects Delivered"
                sub="SEO campaigns & high-performance web systems"
              />
              <CounterItem
                value={5}
                suffix="+"
                label="Years of Experience"
                sub="Continuous adaptation across algorithm eras"
              />
              <CounterItem
                value="24/7"
                suffix=""
                label="Direct Support"
                sub="Dedicated strategists & technical oversight"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
