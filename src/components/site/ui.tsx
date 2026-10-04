import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal, SplitText } from "./motion";

type BtnProps = { to: string; children: ReactNode; variant?: "gold" | "ghost"; className?: string; params?: Record<string, string> };

export function CTAButton({ to, children, variant = "gold", className, params }: BtnProps) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300",
        variant === "gold"
          ? "bg-primary text-primary-foreground hover:shadow-glow hover:-translate-y-0.5"
          : "glass text-foreground hover:border-primary/40",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, intro, className }: { eyebrow: string; title: ReactNode; intro?: string; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass rounded-2xl p-7", className)}>{children}</div>;
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="atmos-glow absolute inset-0 animate-drift" aria-hidden />
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
          <SplitText text={title} />
        </h1>
        {intro && (
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-6", className)}>{children}</div>;
}
