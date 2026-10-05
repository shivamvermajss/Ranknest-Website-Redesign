import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display tracking-tight transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
      aria-label="Ranknest IT home"
    >
      {/* Brand Icon Squircle Container - Sleek & Compact */}
      <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#080d0e] border border-white/15 p-1 shadow-md shadow-black/40 transition-all duration-300 group-hover:border-[#B7ED51]/40">
        <img
          src="/logo.jpeg"
          alt="Ranknest IT"
          className="h-full w-full object-contain rounded-lg"
        />
      </div>

      {/* Brand Wordmark Lockup: Exactly as in public/logo.jpeg */}
      {/* Rank (Lime #B7ED51) + nest (Cyan #52BCEE) + IT (Coral Red #C53736) */}
      <div className="flex items-center text-sm sm:text-base font-bold tracking-tight leading-none select-none">
        <span className="text-[#B7ED51]">Rank</span>
        <span className="text-[#52BCEE]">nest</span>
        <span className="ml-1 text-[#C53736]">IT</span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3 transition-all duration-300">
      <nav
        className={cn(
          "relative mx-auto flex max-w-5xl items-center justify-between rounded-full px-3.5 sm:px-5 transition-all duration-500",
          "before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
          scrolled
            ? "py-1.5 sm:py-2 bg-[#050809]/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-white/5"
            : "py-2 sm:py-2.5 bg-[#070b0d]/70 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]",
        )}
        aria-label="Main"
      >
        <Logo />

        {/* Desktop Navigation Links: Slim Frosted Capsule */}
        <div className="hidden md:flex items-center gap-0.5 rounded-full p-1 bg-white/[0.035] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full text-muted-foreground transition-all duration-200 hover:text-white hover:bg-white/[0.08] data-[status=active]:text-white data-[status=active]:bg-white/[0.12] data-[status=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">{n.label}</span>
            </Link>
          ))}
        </div>

        {/* Right CTA Button - Sleek & Compact */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-[#B7ED51] px-4 py-1.5 text-xs font-semibold text-[#030505] shadow-[0_0_20px_-4px_rgba(183,237,81,0.45)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(183,237,81,0.65)] hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Shimmer sweep effect */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              aria-hidden="true"
            />
            <span className="relative font-bold">Get Free Audit</span>
            <span className="relative transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden relative flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] border border-white/12 text-white shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white/[0.12] hover:border-white/20 active:scale-95"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </nav>

      {/* Mobile Menu Frosted Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-[#030505]/95 px-6 pt-5 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Logo />
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] border border-white/12 text-white transition-all hover:bg-white/[0.12]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 px-2">
                Navigation
              </p>
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.05 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3.5 text-lg font-medium text-foreground transition-all hover:border-primary/40 hover:bg-white/[0.06] data-[status=active]:border-primary/40 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    <span>{n.label}</span>
                    <span className="opacity-50">↗</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div
              className="mt-auto pb-8 pt-6 border-t border-white/10"
              onClick={() => setOpen(false)}
            >
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#B7ED51] py-3.5 text-center font-bold text-[#030505] shadow-[0_0_25px_rgba(183,237,81,0.4)]"
              >
                <span>Get Free Audit</span>
                <span>↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
