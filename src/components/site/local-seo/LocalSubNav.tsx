import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ServiceNavItem {
  id: string;
  name: string;
  to: string;
}

const SERVICES_NAV: ServiceNavItem[] = [
  { id: "seo", name: "SEO SERVICES", to: "/services/seo" },
  { id: "social", name: "SOCIAL MEDIA", to: "/services/social-media-marketing" },
  { id: "ppc", name: "PPC ADS", to: "/services/google-ads" },
  { id: "webdev", name: "WEB DEV", to: "/services/web-development" },
  { id: "content", name: "CONTENT MARKETING", to: "/services/content-marketing" },
  { id: "local", name: "LOCAL SEO - GMB", to: "/services/local-seo" },
];

export function LocalSubNav() {
  return (
    <nav
      aria-label="Service navigation"
      className="sticky top-16 sm:top-20 z-40 w-full border-b border-white/8 bg-[#030505]/85 backdrop-blur-xl transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
        {/* Breadcrumb Context */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#AEB8BA]">
          <Link to="/services" className="hover:text-white transition-colors">
            SERVICES
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-[#B7ED51] font-semibold">LOCAL SEARCH INTELLIGENCE</span>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="flex w-full sm:w-auto items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
          {SERVICES_NAV.map((item) => {
            const isCurrent = item.id === "local";
            return (
              <Link
                key={item.id}
                to={item.to}
                className={cn(
                  "shrink-0 rounded-full px-3 sm:px-3.5 py-1 text-xs font-mono font-medium transition-all duration-200 border",
                  isCurrent
                    ? "border-[#B7ED51]/50 bg-[#B7ED51]/15 text-[#B7ED51] shadow-[0_0_15px_rgba(183,237,81,0.25)]"
                    : "border-white/5 bg-white/[0.02] text-[#AEB8BA] hover:border-white/20 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
