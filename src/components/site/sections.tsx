import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, BarChart3, Code2, MapPin, MessageSquare, Megaphone, PenLine, Plus, Search, ShieldCheck, Target, Users, Eye } from "lucide-react";
import { useState } from "react";
import { faqs, posts, services, stats, strengths, type Post, type Service } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatedCounter, Reveal } from "./motion";
import { Container, CTAButton, SectionHeading } from "./ui";

export const serviceIcons: Record<string, typeof Search> = {
  seo: Search, "web-development": Code2, "local-seo": MapPin,
  "content-marketing": PenLine, "social-media-marketing": Megaphone, "google-ads": Target,
};
const strengthIcons = [Users, MessageSquare, BarChart3, ShieldCheck];

export function ServiceCard({ s, index, featured }: { s: Service; index: number; featured?: boolean }) {
  const Icon = serviceIcons[s.slug] ?? Search;
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className={cn("glass card-sweep group flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1", featured && "md:p-10")}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 text-primary transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <h3 className={cn("mt-auto pt-12 font-semibold leading-tight", featured ? "text-3xl md:text-5xl" : "text-2xl")}>{s.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5">{s.description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-70 transition-opacity group-hover:opacity-100">
        Learn more <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function ServicesGrid() {
  const [first, ...rest] = services;
  return (
    <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
      <Reveal className="md:col-span-1 md:row-span-2"><ServiceCard s={first} index={0} featured /></Reveal>
      {rest.map((s, i) => (
        <Reveal key={s.slug} delay={0.05 * i}><ServiceCard s={s} index={i + 1} /></Reveal>
      ))}
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={cn("px-4 py-10 md:px-8 md:py-14", i > 0 && "md:border-l border-border", i % 2 === 1 && "border-l md:border-l")}>
          <p className="font-display text-5xl font-semibold tracking-tight md:text-7xl"><AnimatedCounter value={s.value} suffix={s.suffix} /></p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Strengths() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {strengths.map((s, i) => {
        const I = strengthIcons[i] ?? Users;
        return (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="glass card-sweep group h-full rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1">
              <I className="h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-10 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  if (!faqs.length) return null;
  return (
    <section className="py-28">
      <Container className="grid gap-12 md:grid-cols-12">
        <SectionHeading className="md:col-span-5" eyebrow="FAQ" title="Questions, answered." />
        <div className="md:col-span-7 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <Plus className={cn("h-5 w-5 shrink-0 text-primary transition-transform duration-300", open === i && "rotate-45")} />
              </button>
              <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} className="overflow-hidden">
                <p className="pb-6 text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTASection({ title = "Ready to grow your digital visibility?", text = "Partner with Ranknest IT to generate qualified leads, build digital authority and achieve sustainable growth." }: { title?: string; text?: string }) {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-28">
            <div className="absolute left-1/2 top-0 h-80 w-[60%] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-drift" aria-hidden />
            <div className="grid-lines absolute inset-0" aria-hidden />
            <div className="relative">
              <p className="eyebrow mb-6">Let's talk</p>
              <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.02] md:text-7xl">{title}</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{text}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <CTAButton to="/contact">Get Free Audit</CTAButton>
                <CTAButton to="/services" variant="ghost">Explore Services</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

const hues = [85, 265, 200, 30, 300, 150];
export function PostArt({ index, className }: { index: number; className?: string }) {
  const h = hues[index % hues.length];
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-surface", className)}
      style={{ backgroundImage: `radial-gradient(70% 80% at ${20 + index * 13}% 30%, oklch(0.6 0.13 ${h} / 0.55), transparent 70%), radial-gradient(50% 60% at 85% 90%, oklch(0.83 0.15 85 / 0.25), transparent 70%)` }}
      aria-hidden
    >
      <div className="grid-lines absolute inset-0 opacity-70" />
      <Eye className="absolute bottom-4 right-4 h-5 w-5 text-foreground/30" />
    </div>
  );
}

export function BlogCard({ p, index }: { p: Post; index: number }) {
  return (
    <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
      <PostArt index={index} className="aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.02]" />
      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.read}</p>
      <h3 className="mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-primary">{p.title}</h3>
    </Link>
  );
}

export function RelatedPosts({ exclude }: { exclude?: string }) {
  const list = posts.filter((p) => p.slug !== exclude).slice(0, 3);
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {list.map((p) => <BlogCard key={p.slug} p={p} index={posts.indexOf(p)} />)}
    </div>
  );
}
