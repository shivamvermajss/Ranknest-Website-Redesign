import { useState as useReactState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MessageCircleQuestion, Plus } from "lucide-react";
import { Container, CTAButton } from "../ui";
import { Reveal } from "../motion";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

export function HomeFaq() {
  const [open, setOpen] = useReactState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-[#080D0E] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-[#B7ED51]/5 blur-[120px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <Container className="relative">
        {/* Desktop: 2-column layout (Editorial left, accordion right) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Support Invite */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow mb-4">Clarity &amp; Guidance</p>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
                  Frequently Asked Questions
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Everything you need to know about our data-driven strategies, project timelines,
                  and how we deliver measurable business growth.
                </p>

                {/* Direct Help Card */}
                <div className="glass mt-10 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-glass">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <MessageCircleQuestion className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Have a specific question?
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Our team of digital strategists is available to review your existing search
                    presence and discuss custom solutions.
                  </p>
                  <div className="mt-6">
                    <CTAButton to="/contact" variant="ghost" className="w-full justify-center">
                      Ask Our Team
                    </CTAButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Premium Accordion */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="space-y-4">
                {faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={f.q}
                      className={cn(
                        "glass rounded-2xl border transition-all duration-300 overflow-hidden",
                        isOpen
                          ? "border-primary/40 shadow-glow bg-white/[0.03]"
                          : "border-white/10 hover:border-white/20",
                      )}
                    >
                      <button
                        className="flex w-full items-center justify-between gap-6 p-6 sm:p-7 text-left transition-colors"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                      >
                        <span className="flex items-center gap-3 font-display text-lg sm:text-xl font-semibold text-foreground">
                          <span
                            className={cn(
                              "text-xs font-mono transition-colors",
                              isOpen ? "text-primary" : "text-muted-foreground/60",
                            )}
                          >
                            0{i + 1}
                          </span>
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "border-primary bg-primary text-primary-foreground rotate-45"
                              : "border-white/10 text-primary hover:border-primary/50",
                          )}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5">
                              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                {f.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
