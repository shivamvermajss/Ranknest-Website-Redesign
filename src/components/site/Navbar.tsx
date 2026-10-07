import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Share2,
  Target,
  Code2,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const SERVICE_DROPDOWN_ITEMS = [
  {
    name: "SEO Services",
    to: "/services/seo",
    sub: "Search Intelligence & Rankings",
    icon: Search,
    isLime: true,
  },
  {
    name: "Social Media Services",
    to: "/services/social-media-marketing",
    sub: "Audience & Community Growth",
    icon: Share2,
    isLime: false,
  },
  {
    name: "PPC Services",
    to: "/services/google-ads",
    sub: "High-ROI Paid Advertising",
    icon: Target,
    isLime: true,
  },
  {
    name: "Website Development Services",
    to: "/services/web-development",
    sub: "High-Performance Modern Web",
    icon: Code2,
    isLime: false,
  },
  {
    name: "Content Marketing",
    to: "/services/content-marketing",
    sub: "Authority & Search Intent",
    icon: FileText,
    isLime: true,
  },
  {
    name: "Local SEO - GMB",
    to: "/services/local-seo",
    sub: "Google Business Profile & Maps",
    icon: MapPin,
    isLime: false,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isSeoActive = pathname === "/services/seo" || pathname === "/services/seo-services";
  const isSocialActive =
    pathname === "/services/social-media-marketing" ||
    pathname === "/services/social-media-services" ||
    pathname === "/services/social-media";
  const isPpcActive =
    pathname === "/services/google-ads" ||
    pathname === "/services/ppc" ||
    pathname === "/services/ppc-services" ||
    pathname === "/services/ppc-advertising-services";
  const isWebDevActive =
    pathname === "/services/web-development" ||
    pathname === "/services/website-development-services" ||
    pathname === "/services/website-development" ||
    pathname === "/services/web-dev";
  const isContentActive =
    pathname === "/services/content-marketing" ||
    pathname === "/services/content-marketing-services" ||
    pathname === "/services/content-strategy" ||
    pathname === "/services/content-writing" ||
    pathname === "/services/content";
  const isLocalActive =
    pathname === "/services/local-seo" ||
    pathname === "/services/local-seo-gmb" ||
    pathname === "/services/local-seo-services" ||
    pathname === "/services/local-seo-service" ||
    pathname === "/services/gmb" ||
    pathname === "/services/google-business-profile" ||
    pathname === "/services/local-search";
  const isServicesSection = pathname.startsWith("/services");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

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

        {/* Desktop Navigation Links: Slim Frosted Capsule with Services Dropdown */}
        <div className="hidden md:flex items-center gap-0.5 rounded-full p-1 bg-white/[0.035] border border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          {nav.map((n) => {
            if (n.to === "/services") {
              return (
                <div
                  key="services-dropdown-desktop"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    className={cn(
                      "relative flex items-center gap-1.5 px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full text-muted-foreground transition-all duration-200 hover:text-white hover:bg-white/[0.08]",
                      isServicesSection &&
                        "text-white bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
                    )}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 opacity-60 transition-transform duration-200",
                        servicesDropdownOpen && "rotate-180 opacity-100",
                      )}
                    />
                  </Link>

                  {/* Glassmorphic Services Dropdown Menu (Requirement 27) */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full mt-2 w-[340px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-[#060A0C]/95 p-2 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(82,188,238,0.12)] ring-1 ring-white/5"
                      >
                        <div className="px-3 py-1.5 border-b border-white/8 mb-1 flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#B7ED51] font-semibold">
                            Ranknest Services
                          </span>
                          <span className="font-mono text-[9px] text-[#B4BEC1]/60">2026 SUITE</span>
                        </div>

                        <div className="space-y-1">
                          {SERVICE_DROPDOWN_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isCurrent =
                              (item.to === "/services/seo" && isSeoActive) ||
                              (item.to === "/services/social-media-marketing" && isSocialActive) ||
                              (item.to === "/services/google-ads" && isPpcActive) ||
                              (item.to === "/services/web-development" && isWebDevActive) ||
                              (item.to === "/services/content-marketing" && isContentActive) ||
                              (item.to === "/services/local-seo" && isLocalActive) ||
                              pathname === item.to;

                            return (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setServicesDropdownOpen(false)}
                                className={cn(
                                  "group flex items-center gap-3 rounded-xl p-2 transition-all duration-200",
                                  isCurrent
                                    ? "bg-[#B7ED51]/12 border border-[#B7ED51]/35 text-white shadow-[0_0_15px_rgba(183,237,81,0.15)]"
                                    : "hover:bg-white/[0.06] text-[#B4BEC1] hover:text-white border border-transparent",
                                )}
                              >
                                <div
                                  className={cn(
                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors",
                                    isCurrent
                                      ? "border-[#B7ED51] bg-[#B7ED51]/20 text-[#B7ED51]"
                                      : item.isLime
                                        ? "border-white/10 bg-white/[0.03] text-[#B7ED51] group-hover:border-[#B7ED51]/40"
                                        : "border-white/10 bg-white/[0.03] text-[#52BCEE] group-hover:border-[#52BCEE]/40",
                                  )}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span
                                      className={cn(
                                        "text-xs font-semibold tracking-wide truncate",
                                        isCurrent ? "text-[#B7ED51]" : "text-white",
                                      )}
                                    >
                                      {item.name}
                                    </span>
                                    {isCurrent && (
                                      <span className="flex items-center gap-1 shrink-0 rounded-full bg-[#B7ED51]/20 px-1.5 py-0.2 text-[9px] font-mono font-bold text-[#B7ED51]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-ping" />
                                        CURRENT
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[10px] text-muted-foreground truncate">
                                    {item.sub}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Dropdown Footer: All Services */}
                        <div className="mt-1 pt-1.5 border-t border-white/8 px-1">
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-center font-mono text-[11px] text-[#52BCEE] hover:text-white hover:bg-white/[0.04] transition-colors"
                          >
                            <span>Explore All Services Overview</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="relative px-3.5 py-1 text-xs sm:text-[13px] font-medium rounded-full text-muted-foreground transition-all duration-200 hover:text-white hover:bg-white/[0.08] data-[status=active]:text-white data-[status=active]:bg-white/[0.12] data-[status=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
              >
                <span className="relative z-10 flex items-center gap-1.5">{n.label}</span>
              </Link>
            );
          })}
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
            className="fixed inset-0 z-50 flex flex-col bg-[#030505]/98 px-6 pt-5 backdrop-blur-3xl md:hidden overflow-y-auto"
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

            <div className="mt-6 flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 px-2">
                Navigation
              </p>
              {nav.map((n, i) => {
                if (n.to === "/services") {
                  return (
                    <div key="services-mobile" className="rounded-2xl border border-white/5 bg-white/[0.02] p-2">
                      <div className="flex items-center justify-between px-3 py-2">
                        <Link
                          to="/services"
                          onClick={() => setOpen(false)}
                          className="text-base font-semibold text-white"
                        >
                          Services
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 text-muted-foreground"
                          aria-label="Toggle services list"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              mobileServicesOpen && "rotate-180",
                            )}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="mt-1 space-y-1 border-t border-white/5 pt-2 pl-2">
                          {SERVICE_DROPDOWN_ITEMS.map((item) => {
                            const isCurrent =
                              (item.to === "/services/seo" && isSeoActive) ||
                              (item.to === "/services/social-media-marketing" && isSocialActive) ||
                              (item.to === "/services/google-ads" && isPpcActive) ||
                              (item.to === "/services/web-development" && isWebDevActive) ||
                              (item.to === "/services/content-marketing" && isContentActive) ||
                              (item.to === "/services/local-seo" && isLocalActive) ||
                              pathname === item.to;
                            return (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                                  isCurrent
                                    ? "bg-[#B7ED51]/15 text-[#B7ED51] font-bold border border-[#B7ED51]/30"
                                    : "text-muted-foreground hover:text-white",
                                )}
                              >
                                <span>{item.name}</span>
                                {isCurrent ? (
                                  <span className="font-mono text-[9px] text-[#B7ED51] uppercase">Active</span>
                                ) : (
                                  <span className="opacity-40">↗</span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.05 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-base font-medium text-foreground transition-all hover:border-primary/40 hover:bg-white/[0.06] data-[status=active]:border-primary/40 data-[status=active]:bg-primary/10 data-[status=active]:text-primary"
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      <span>{n.label}</span>
                      <span className="opacity-50">↗</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pb-8 pt-6 border-t border-white/10" onClick={() => setOpen(false)}>
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
