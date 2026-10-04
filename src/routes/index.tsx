import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TrendingUp, Search, Globe } from "lucide-react";
import { seo } from "@/lib/seo";
import { Reveal, SplitText } from "@/components/site/motion";
import { Container, CTAButton, SectionHeading } from "@/components/site/ui";
import { CTASection, FAQ, ServicesGrid, Stats, Strengths } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => seo("Digital Marketing & Web Development That Drives Real Results", "Ranknest IT is a digital marketing, SEO and web development agency helping businesses grow visibility, leads and sustainable growth."),
  component: Home,
});

function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const x2 = useTransform(sx, (v) => v * -1.6);
  const y2 = useTransform(sy, (v) => v * -1.6);
  return (
    <div
      className="relative h-[420px] md:h-[520px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 24);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 24);
      }}
      aria-hidden
    >
      <div className="absolute inset-[12%] rounded-full bg-primary/15 blur-[90px]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        {[170, 130, 90].map((r, i) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" className="text-foreground/10" strokeDasharray={i === 1 ? "4 8" : undefined}>
            <animateTransform attributeName="transform" type="rotate" from={`0 200 200`} to={`${i % 2 ? -360 : 360} 200 200`} dur={`${40 + i * 15}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx="370" cy="200" r="4" className="fill-primary">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="40s" repeatCount="indefinite" />
        </circle>
      </svg>
      <motion.div style={{ x: sx, y: sy }} className="glass absolute left-[4%] top-[14%] w-56 rounded-2xl p-5 animate-float">
        <div className="flex items-center gap-2 text-xs text-muted-foreground"><TrendingUp className="h-4 w-4 text-primary" /> Organic growth</div>
        <svg viewBox="0 0 200 60" className="mt-4 w-full">
          <path d="M0 55 C30 50 45 40 70 38 S110 20 140 18 S180 6 200 4" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary" />
        </svg>
      </motion.div>
      <motion.div style={{ x: x2, y: y2 }} className="glass absolute bottom-[14%] right-[2%] w-60 rounded-2xl p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground"><Search className="h-4 w-4 text-primary" /> Search visibility</div>
        <div className="mt-4 space-y-2">
          {[90, 70, 52].map((w) => <div key={w} className="h-1.5 rounded-full bg-primary/70" style={{ width: `${w}%` }} />)}
        </div>
      </motion.div>
      <div className="glass absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl shadow-glow">
        <Globe className="h-10 w-10 text-primary" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <div className="atmos-glow absolute inset-0 animate-drift" aria-hidden />
        <div className="grid-lines absolute inset-0" aria-hidden />
        <Container className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Ranknest IT · Digital Growth Agency</p>
            <h1 className="text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-[4.6rem]">
              <SplitText text="Digital Marketing & Web Development" />
              <span className="text-gold block">That Drives Real Results</span>
            </h1>
            <Reveal delay={0.5}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                SEO, web development, paid ads and content strategies that help your business grow visibility, generate qualified leads and build lasting digital authority.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTAButton to="/contact">Get Free Audit</CTAButton>
                <CTAButton to="/services" variant="ghost">Explore Services</CTAButton>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5"><HeroVisual /></div>
        </Container>
      </section>

      <section className="py-28">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-5">Who we are</p>
            <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              A digital marketing, SEO & web development partner <span className="text-muted-foreground">built around your growth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5 md:pt-14">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ranknest IT helps businesses grow with smart digital marketing — combining search engine optimization, high-performance websites, local SEO, content, social media and Google Ads into one strategy.
            </p>
            <div className="glass mt-8 rounded-2xl p-6">
              <p className="eyebrow">Our focus</p>
              <p className="mt-3 font-display text-xl">Visibility. Qualified leads. Sustainable growth.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Why choose Ranknest IT" title={<>Strategy you can <span className="text-gold">trust.</span></>} />
          <div className="mt-14"><Strengths /></div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="Services" title="One ecosystem for digital growth." />
            <CTAButton to="/services" variant="ghost">All services</CTAButton>
          </div>
          <div className="mt-14"><ServicesGrid /></div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Our impact" title="Trusted by Businesses Across World" />
          <div className="mt-14"><Stats /></div>
        </Container>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
