import { Link } from "@tanstack/react-router";

interface ServiceNavItem {
  id: string;
  name: string;
  to: string;
  isActive?: boolean;
}

const SERVICE_NAV_ITEMS: ServiceNavItem[] = [
  { id: "web", name: "WEB DEVELOPMENT", to: "/services/web-development", isActive: true },
  { id: "seo", name: "SEO SERVICES", to: "/services/seo" },
  { id: "social", name: "SOCIAL MEDIA SERVICES", to: "/services/social-media-marketing" },
  { id: "ppc", name: "PPC / GOOGLE ADS", to: "/services/google-ads" },
  { id: "local", name: "LOCAL SEO - GMB", to: "/services/local-seo" },
  { id: "content", name: "CONTENT MARKETING", to: "/services/content-marketing" },
  { id: "all", name: "ALL SERVICES", to: "/services" },
];

export function WebSubNav() {
  return (
    <div className="relative z-20 border-y border-white/8 bg-[#040708]/90 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Section Indicator */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B4BEC1]">
              SERVICES ECOSYSTEM:
            </span>
          </div>

          {/* Horizontal Scroll Capsule for Desktop & Mobile */}
          <div className="flex w-full lg:w-auto items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {SERVICE_NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 ${
                  item.isActive
                    ? "bg-[#B7ED51] text-[#030505] shadow-[0_0_16px_rgba(183,237,81,0.5)] font-bold scale-[1.02]"
                    : "text-[#B4BEC1] hover:text-white hover:bg-white/[0.06] border border-white/5"
                }`}
              >
                {item.isActive && (
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#030505] animate-pulse" />
                )}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
