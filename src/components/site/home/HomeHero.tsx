import { motion, useReducedMotion } from "motion/react";
import { Cpu, TrendingUp, ShieldCheck } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { DigitalGrowthHeroVisual } from "./DigitalGrowthHeroVisual";

export function HeroVisual() {
  return <DigitalGrowthHeroVisual />;
}

export function HomeHero() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Background system: almost-black foundation + subtle ambient glow */}
      <div className="atmos-glow absolute inset-0 animate-drift pointer-events-none" aria-hidden />
      <div className="grid-lines absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#B7ED51]/5 blur-[140px] pointer-events-none" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-10">
        <motion.div
          className="lg:col-span-6 xl:col-span-5 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span>Digital Growth Agency</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              <span className="text-[#52BCEE] font-medium">AI &amp; Search Intelligence</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[4.1rem]"
          >
            Digital Marketing &amp; Web Development{" "}
            <span className="text-lime-gradient block sm:inline">That Drives Real Results</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg font-normal"
          >
            We help businesses rank higher, generate quality leads, and grow faster through expert
            SEO, custom web development, AI-ready optimization, and performance-driven digital
            marketing strategies that deliver measurable results.
          </motion.p>

          {/* Trust Value Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground/90"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Data-Driven Execution
            </span>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-[#52BCEE]" /> Generative Engine Optimized
            </span>
            <span className="h-3 w-px bg-white/10 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-primary" /> Measurable ROI
            </span>
          </motion.div>

          {/* CTA Group */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton to="/contact" className="px-7 py-3.5 text-base font-semibold">
              Get Free Audit
            </CTAButton>
            <CTAButton to="/services" variant="ghost" className="px-6 py-3.5 text-base">
              Explore Services
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Visualization */}
        <motion.div
          className="lg:col-span-6 xl:col-span-7 relative z-10 overflow-visible"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <DigitalGrowthHeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
