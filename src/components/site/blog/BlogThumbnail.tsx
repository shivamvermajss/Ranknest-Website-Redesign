import { ArrowUpRight, BookOpen, Sparkles, Terminal, Activity, Layers, Cpu, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogThumbnailProps {
  index: number;
  slug: string;
  title: string;
  className?: string;
  isFeatured?: boolean;
}

// 2026 Digital Intelligence Abstract Palette & Motifs for the 6 client articles
const THEMES = [
  {
    // 0: Local SEO Services in Faridabad
    primary: "#B7ED51",
    secondary: "#52BCEE",
    icon: Compass,
    badge: "SEARCH ARCHITECTURE",
    pattern: "grid",
    gradient: "radial-gradient(75% 75% at 25% 30%, rgba(183, 237, 81, 0.3) 0%, transparent 70%), radial-gradient(60% 60% at 85% 85%, rgba(82, 188, 238, 0.25) 0%, transparent 65%)",
  },
  {
    // 1: Affordable Content Marketing
    primary: "#52BCEE",
    secondary: "#B7ED51",
    icon: Layers,
    badge: "CONTENT SYSTEMS",
    pattern: "concentric",
    gradient: "radial-gradient(75% 75% at 80% 25%, rgba(82, 188, 238, 0.32) 0%, transparent 70%), radial-gradient(65% 65% at 20% 80%, rgba(183, 237, 81, 0.2) 0%, transparent 65%)",
  },
  {
    // 2: AI Chatbot Visibility Guide 2026
    primary: "#B7ED51",
    secondary: "#C53736",
    icon: Cpu,
    badge: "NEURAL LLM VISIBILITY",
    pattern: "matrix",
    gradient: "radial-gradient(80% 80% at 35% 35%, rgba(183, 237, 81, 0.35) 0%, transparent 70%), radial-gradient(60% 60% at 75% 75%, rgba(197, 55, 54, 0.22) 0%, transparent 65%)",
  },
  {
    // 3: Video SEO
    primary: "#52BCEE",
    secondary: "#B7ED51",
    icon: Activity,
    badge: "MEDIA INDEXING",
    pattern: "waveform",
    gradient: "radial-gradient(75% 75% at 30% 70%, rgba(82, 188, 238, 0.32) 0%, transparent 70%), radial-gradient(65% 65% at 75% 25%, rgba(183, 237, 81, 0.25) 0%, transparent 65%)",
  },
  {
    // 4: Local SEO for Travel
    primary: "#B7ED51",
    secondary: "#52BCEE",
    icon: Terminal,
    badge: "GEO GRAPH INTELLIGENCE",
    pattern: "circuit",
    gradient: "radial-gradient(75% 75% at 70% 30%, rgba(183, 237, 81, 0.3) 0%, transparent 70%), radial-gradient(65% 65% at 30% 75%, rgba(82, 188, 238, 0.25) 0%, transparent 65%)",
  },
  {
    // 5: Ecommerce SEO Logistics
    primary: "#52BCEE",
    secondary: "#B7ED51",
    icon: BookOpen,
    badge: "ECOMMERCE TAXONOMY",
    pattern: "network",
    gradient: "radial-gradient(75% 75% at 40% 40%, rgba(82, 188, 238, 0.3) 0%, transparent 70%), radial-gradient(65% 65% at 85% 85%, rgba(183, 237, 81, 0.22) 0%, transparent 65%)",
  },
];

export function BlogThumbnail({
  index,
  className,
  isFeatured = false,
}: BlogThumbnailProps) {
  const theme = THEMES[index % THEMES.length]!;
  const Icon = theme.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-[#060b0c] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* Background Multi-Gradient Layer */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: theme.gradient }}
      />

      {/* Subtle Digital Grid Overlay */}
      <div className="grid-lines absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Cybernetic Geometry & Motifs */}
      <svg
        className="absolute inset-0 h-full w-full opacity-25 transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 400 250"
      >
        <circle cx="200" cy="125" r="90" stroke="white" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.3" />
        <circle cx="200" cy="125" r="50" stroke={theme.primary} strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M 0 125 L 400 125" stroke="white" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.2" />
        <path d="M 200 0 L 200 250" stroke="white" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.2" />
        <path d="M 50 200 C 120 180, 260 80, 350 40" stroke={theme.secondary} strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>

      {/* Center Icon Watermark */}
      <div
        className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-muted-foreground/80 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:text-white"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>

      {/* Top telemetry tag */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-mono tracking-wider text-muted-foreground backdrop-blur-md">
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: theme.primary }}
        />
        <span>{theme.badge}</span>
      </div>

      {/* Hover Overlay: Dark Tint + "READ ARTICLE →" Pill */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#B7ED51]/60 bg-[#030505]/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)] transition-transform duration-300 group-hover:scale-105">
          <span>Read Article</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#B7ED51]" />
        </span>
      </div>
    </div>
  );
}
