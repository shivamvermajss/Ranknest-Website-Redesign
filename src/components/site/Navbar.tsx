import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";
import { CTAButton } from "./ui";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight" aria-label="Ranknest IT home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary font-bold text-primary-foreground">R</span>
      Ranknest <span className="text-primary">IT</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass" : "border border-transparent",
        )}
        aria-label="Main"
      >
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {n.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <CTAButton to="/contact" className="px-5 py-2.5">Get Free Audit</CTAButton>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-background/95 px-6 pt-6 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-16 space-y-2">
              {nav.map((n, i) => (
                <motion.li key={n.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.06 }}>
                  <Link to={n.to} onClick={() => setOpen(false)} className="block py-2 font-display text-4xl font-semibold data-[status=active]:text-primary" activeOptions={{ exact: n.to === "/" }}>
                    {n.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pb-10" onClick={() => setOpen(false)}>
              <CTAButton to="/contact" className="w-full justify-center">Get Free Audit</CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
