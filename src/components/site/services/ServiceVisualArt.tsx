import { motion } from "motion/react";
import { Search, Code2, MapPin, FileText, Share2, Target } from "lucide-react";

interface ServiceVisualArtProps {
  slug: string;
}

export function ServiceVisualArt({ slug }: ServiceVisualArtProps) {
  switch (slug) {
    case "seo":
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          {/* Ambient Lime aura */}
          <div className="absolute inset-0 bg-[#B7ED51]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Grid baseline */}
            <path d="M 40 260 L 360 260" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M 40 200 L 360 200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <path d="M 40 140 L 360 140" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <path d="M 40 80 L 360 80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

            {/* Ascending Organic Discovery Path */}
            <path
              d="M 50 250 C 120 240, 180 180, 240 130 C 290 90, 330 60, 360 40"
              stroke="#B7ED51"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Secondary Support Trajectory */}
            <path
              d="M 50 255 C 130 250, 190 200, 250 155 C 300 120, 335 90, 360 70"
              stroke="#52BCEE"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.7"
            />

            {/* Trajectory Nodes */}
            <circle cx="50" cy="250" r="4" fill="#B7ED51" />
            <circle cx="160" cy="200" r="5" fill="#B7ED51" />
            <circle cx="250" cy="125" r="6" fill="#B7ED51" />
            <circle cx="360" cy="40" r="8" fill="#B7ED51" />
            <circle cx="360" cy="40" r="14" stroke="#B7ED51" strokeWidth="1.5" opacity="0.4" />

            {/* Abstract Search Icon Watermark */}
            <g transform="translate(180, 50)" opacity="0.8">
              <circle cx="20" cy="20" r="16" stroke="#B7ED51" strokeWidth="2" fill="rgba(183,237,81,0.05)" />
              <line x1="32" y1="32" x2="44" y2="44" stroke="#B7ED51" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>

          {/* Telemetry Tag */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Organic Search Trajectory
            </span>
          </div>
        </div>
      );

    case "web-development":
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          <div className="absolute inset-0 bg-[#52BCEE]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Digital Modular Architecture Layers */}
            <rect x="70" y="60" width="260" height="180" rx="16" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(8,13,14,0.6)" />
            <rect x="95" y="85" width="210" height="40" rx="8" stroke="#52BCEE" strokeWidth="1.2" opacity="0.6" fill="rgba(82,188,238,0.06)" />
            <rect x="95" y="140" width="100" height="75" rx="8" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
            <rect x="205" y="140" width="100" height="75" rx="8" stroke="#B7ED51" strokeWidth="1" opacity="0.5" fill="rgba(183,237,81,0.03)" />

            {/* Connecting Architectural Laser Conduits */}
            <path d="M 145 125 L 145 140" stroke="#52BCEE" strokeWidth="1.5" />
            <path d="M 255 125 L 255 140" stroke="#B7ED51" strokeWidth="1.5" />

            {/* Corner Node Terminals */}
            <circle cx="70" cy="60" r="4" fill="#52BCEE" />
            <circle cx="330" cy="60" r="4" fill="#52BCEE" />
            <circle cx="70" cy="240" r="4" fill="#52BCEE" />
            <circle cx="330" cy="240" r="4" fill="#52BCEE" />
          </svg>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Modular Enterprise Architecture
            </span>
          </div>
        </div>
      );

    case "local-seo":
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          <div className="absolute inset-0 bg-[#B7ED51]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Map-like grid lines */}
            <path d="M 60 80 L 340 100" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
            <path d="M 40 180 L 360 170" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
            <path d="M 100 40 L 140 260" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
            <path d="M 260 40 L 240 260" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />

            {/* Concentric Local Discovery Radius Rings */}
            <circle cx="200" cy="150" r="85" stroke="#B7ED51" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
            <circle cx="200" cy="150" r="55" stroke="#B7ED51" strokeWidth="1.2" opacity="0.5" />
            <circle cx="200" cy="150" r="25" stroke="#52BCEE" strokeWidth="1.5" opacity="0.7" />

            {/* Pulsating Location Beacon */}
            <circle cx="200" cy="150" r="8" fill="#B7ED51" />
            <circle cx="200" cy="150" r="14" stroke="#B7ED51" strokeWidth="1.5" opacity="0.4" />

            {/* Local Hub Pins */}
            <circle cx="120" cy="90" r="4" fill="#52BCEE" />
            <circle cx="280" cy="110" r="4" fill="#B7ED51" />
            <circle cx="250" cy="210" r="4" fill="#52BCEE" />
          </svg>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Geo-Targeted Search Signal
            </span>
          </div>
        </div>
      );

    case "content-marketing":
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          <div className="absolute inset-0 bg-[#52BCEE]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Structured Content Blocks Flowing into Search */}
            <rect x="70" y="80" width="110" height="140" rx="10" stroke="#52BCEE" strokeWidth="1.5" fill="rgba(82,188,238,0.04)" />
            <line x1="88" y1="110" x2="162" y2="110" stroke="#52BCEE" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="88" y1="130" x2="150" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="88" y1="150" x2="158" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="88" y1="170" x2="135" y2="170" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Connecting Flow Vectors */}
            <path d="M 180 150 C 220 150, 240 120, 270 120" stroke="#B7ED51" strokeWidth="2" strokeLinecap="round" />
            <path d="M 180 160 C 220 160, 240 190, 270 190" stroke="#52BCEE" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Authority Nodes */}
            <circle cx="270" cy="120" r="12" stroke="#B7ED51" strokeWidth="1.5" fill="rgba(183,237,81,0.1)" />
            <circle cx="270" cy="190" r="10" stroke="#52BCEE" strokeWidth="1.2" fill="rgba(82,188,238,0.1)" />
            <circle cx="330" cy="155" r="18" stroke="#B7ED51" strokeWidth="2" fill="rgba(183,237,81,0.06)" />
          </svg>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Semantic Authority & Signals
            </span>
          </div>
        </div>
      );

    case "social-media-marketing":
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          <div className="absolute inset-0 bg-[#52BCEE]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Interconnected Social Audience Nodes */}
            <circle cx="200" cy="150" r="22" stroke="#52BCEE" strokeWidth="2" fill="rgba(82,188,238,0.1)" />
            <circle cx="100" cy="90" r="12" stroke="#52BCEE" strokeWidth="1.5" fill="rgba(82,188,238,0.06)" />
            <circle cx="300" cy="90" r="14" stroke="#B7ED51" strokeWidth="1.5" fill="rgba(183,237,81,0.06)" />
            <circle cx="100" cy="210" r="14" stroke="#B7ED51" strokeWidth="1.5" fill="rgba(183,237,81,0.06)" />
            <circle cx="300" cy="210" r="12" stroke="#52BCEE" strokeWidth="1.5" fill="rgba(82,188,238,0.06)" />

            {/* Connecting Network Conduits */}
            <line x1="112" y1="96" x2="182" y2="138" stroke="#52BCEE" strokeWidth="1.5" />
            <line x1="288" y1="96" x2="218" y2="138" stroke="#B7ED51" strokeWidth="1.5" />
            <line x1="112" y1="204" x2="182" y2="162" stroke="#B7ED51" strokeWidth="1.5" />
            <line x1="288" y1="204" x2="218" y2="162" stroke="#52BCEE" strokeWidth="1.5" />

            {/* Active Signal Waves */}
            <circle cx="200" cy="150" r="45" stroke="#52BCEE" strokeWidth="1" strokeDasharray="3 4" opacity="0.3" />
            <circle cx="200" cy="150" r="70" stroke="#52BCEE" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
          </svg>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Audience Network Synergy
            </span>
          </div>
        </div>
      );

    case "google-ads":
    default:
      return (
        <div className="relative h-full w-full flex items-center justify-center p-6 select-none">
          <div className="absolute inset-0 bg-[#B7ED51]/8 rounded-3xl blur-2xl" />

          <svg className="relative w-full h-[280px] sm:h-[320px]" viewBox="0 0 400 300" fill="none">
            {/* Targeted Traffic & Conversion Path */}
            <circle cx="240" cy="150" r="75" stroke="#B7ED51" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="240" cy="150" r="45" stroke="#B7ED51" strokeWidth="1.5" opacity="0.5" />
            <circle cx="240" cy="150" r="18" stroke="#52BCEE" strokeWidth="2" fill="rgba(82,188,238,0.15)" />

            {/* Precision Laser Vector Trajectory */}
            <path
              d="M 60 230 C 120 220, 160 170, 240 150"
              stroke="#B7ED51"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Crosshair Target Lines */}
            <line x1="240" y1="60" x2="240" y2="240" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
            <line x1="150" y1="150" x2="330" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />

            <circle cx="60" cy="230" r="4" fill="#B7ED51" />
            <circle cx="150" cy="180" r="5" fill="#52BCEE" />
            <circle cx="240" cy="150" r="6" fill="#B7ED51" />
          </svg>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51] animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              High-Intent Paid Acquisition
            </span>
          </div>
        </div>
      );
  }
}
