import { Building2, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../ui";
import { AnimatedCounter, Reveal } from "../motion";
import { stats } from "@/data/site";
import { cn } from "@/lib/utils";

// Architectural sector markers (ready for vector logo assets)
const clientSectors = [
  { label: "Enterprise Technology", code: "TECH-01", isCyan: true },
  { label: "Global E-Commerce", code: "ECOM-02", isCyan: false },
  { label: "FinTech & Capital", code: "FIN-03", isCyan: true },
  { label: "Healthcare & Life Sciences", code: "HLTH-04", isCyan: false },
  { label: "B2B Logistics & Supply", code: "LOG-05", isCyan: true },
  { label: "Professional Services", code: "PROF-06", isCyan: false },
];

export function TrustAndStats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-[#030505] border-t border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute left-1/2 top-0 h-80 w-[60%] -translate-x-1/2 rounded-full bg-[#B7ED51]/5 blur-[120px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <Container className="relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <p className="eyebrow mb-4">Proven Impact</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Trusted by Businesses Across World
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Partnering with ambitious enterprises and high-growth brands to deliver measurable
              search dominance and sustainable revenue acceleration.
            </p>
          </Reveal>
        </div>

        {/* Premium Logo Wall Placeholder Structure */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-[#080D0E]/60 p-6 sm:p-8 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground px-2">
              <span className="uppercase tracking-widest font-semibold">
                Client Enterprise Network
              </span>
              <span className="font-mono text-primary flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C53736]" />
                Global Presence
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {clientSectors.map((sector) => (
                <div
                  key={sector.code}
                  className="glass group relative flex h-24 flex-col items-center justify-center rounded-2xl p-4 text-center border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Building2
                      className={`h-4 w-4 ${sector.isCyan ? "text-[#52BCEE]" : "text-[#B7ED51]"}`}
                    />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {sector.code}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                    {sector.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Statistics Editorial Grid */}
        <div className="mt-20 sm:mt-24">
          <div className="grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={cn(
                  "px-4 py-10 md:px-8 md:py-16 text-center sm:text-left transition-colors duration-300 hover:bg-white/[0.01]",
                  i > 0 && "border-l border-white/10",
                )}
              >
                <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <div className="mt-4 flex items-center gap-2 justify-center sm:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
