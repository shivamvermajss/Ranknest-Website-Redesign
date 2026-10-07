import { useState } from "react";
import { motion } from "framer-motion";
import { Layout, BookOpen, Share2, Megaphone, Feather, CheckCircle2 } from "lucide-react";

interface Touchpoint {
  id: string;
  name: string;
  label: string;
  description: string;
  icon: typeof Layout;
  color: string;
  focus: string;
}

const TOUCHPOINTS: Touchpoint[] = [
  {
    id: "website",
    name: "Website Copy",
    label: "CONVERSION FOUNDATION",
    description: "High-impact homepage, service, and landing page copy crafted to clearly communicate value propositions and drive inquiries.",
    icon: Layout,
    color: "#B7ED51",
    focus: "Conversion & Brand Positioning",
  },
  {
    id: "blogs",
    name: "Blogs & Articles",
    label: "TOPICAL AUTHORITY",
    description: "In-depth editorial articles and educational guides designed to answer customer queries and build long-term search dominance.",
    icon: BookOpen,
    color: "#52BCEE",
    focus: "Search Intent & Thought Leadership",
  },
  {
    id: "social",
    name: "Social Media Content",
    label: "COMMUNITY RESONANCE",
    description: "Engaging multi-channel posts, insights, and stories crafted to keep your audience engaged and connected across digital platforms.",
    icon: Share2,
    color: "#C53736",
    focus: "Audience Dialogue & Reach",
  },
  {
    id: "marketing",
    name: "Marketing Content",
    label: "CAMPAIGN ACCELERATION",
    description: "Strategic collateral, email sequences, and promotional assets built to support paid advertising and multi-channel campaigns.",
    icon: Megaphone,
    color: "#B7ED51",
    focus: "Lead Nurturing & Revenue Impact",
  },
];

export function ContentEcosystem() {
  const [selectedTouchpoint, setSelectedTouchpoint] = useState<string>("website");

  const current = TOUCHPOINTS.find((t) => t.id === selectedTouchpoint) || TOUCHPOINTS[0];

  return (
    <section className="relative py-28 sm:py-36 bg-[#030505] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#52BCEE]/4 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#52BCEE] font-semibold">
              CONNECTED MULTI-CHANNEL ECOSYSTEM
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
            Content That Works Across <br />
            <span className="text-[#B7ED51]">Every Touchpoint.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AEB8BA]">
            Strategic content isn&apos;t created in silos. We connect your website copy, editorial
            blogs, social storytelling, and marketing assets into one cohesive authority engine.
          </p>
        </div>

        {/* CONNECTED ECOSYSTEM DIAGRAM */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-[#060A0C]/90 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Visual Cross Connection Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: Blogs */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedTouchpoint("blogs")}
                  className={`w-full p-5 rounded-2xl border text-left transition-all ${
                    selectedTouchpoint === "blogs"
                      ? "bg-[#0A1215] border-[#52BCEE] shadow-[0_0_20px_rgba(82,188,238,0.25)]"
                      : "bg-[#030607]/80 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#52BCEE] mb-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">BLOGS &amp; GUIDES</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#F5F7F7]">In-Depth Articles</h4>
                  <p className="text-xs text-[#AEB8BA] mt-1">Organic search capture</p>
                </button>
              </div>

              {/* Center: Content Core + Top/Bottom Touchpoints */}
              <div className="space-y-6 flex flex-col items-center">
                {/* Top: Website Copy */}
                <button
                  onClick={() => setSelectedTouchpoint("website")}
                  className={`w-full p-5 rounded-2xl border text-left transition-all ${
                    selectedTouchpoint === "website"
                      ? "bg-[#0A1215] border-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)]"
                      : "bg-[#030607]/80 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#B7ED51] mb-2">
                    <Layout className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">WEBSITE COPY</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#F5F7F7]">Landing Pages &amp; UI</h4>
                  <p className="text-xs text-[#AEB8BA] mt-1">High conversion clarity</p>
                </button>

                {/* Central Hub */}
                <div className="h-16 w-16 rounded-2xl border border-[#B7ED51]/40 bg-[#0C1618] flex flex-col items-center justify-center shadow-[0_0_25px_rgba(183,237,81,0.2)]">
                  <Feather className="h-6 w-6 text-[#B7ED51] animate-pulse" />
                  <span className="font-mono text-[7px] text-[#B7ED51] uppercase font-bold mt-1">
                    CORE
                  </span>
                </div>

                {/* Bottom: Marketing Content */}
                <button
                  onClick={() => setSelectedTouchpoint("marketing")}
                  className={`w-full p-5 rounded-2xl border text-left transition-all ${
                    selectedTouchpoint === "marketing"
                      ? "bg-[#0A1215] border-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)]"
                      : "bg-[#030607]/80 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#B7ED51] mb-2">
                    <Megaphone className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">MARKETING ASSETS</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#F5F7F7]">Campaign Collateral</h4>
                  <p className="text-xs text-[#AEB8BA] mt-1">Lead nurturing material</p>
                </button>
              </div>

              {/* Right: Social Media */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setSelectedTouchpoint("social")}
                  className={`w-full p-5 rounded-2xl border text-left transition-all ${
                    selectedTouchpoint === "social"
                      ? "bg-[#0A1215] border-[#C53736] shadow-[0_0_20px_rgba(197,55,54,0.25)]"
                      : "bg-[#030607]/80 border-white/8 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#C53736] mb-2">
                    <Share2 className="h-4 w-4" />
                    <span className="font-mono text-xs font-bold uppercase">SOCIAL MEDIA</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#F5F7F7]">Audience Stories</h4>
                  <p className="text-xs text-[#AEB8BA] mt-1">Community dialogue</p>
                </button>
              </div>
            </div>

            {/* Selected Touchpoint Inspector Banner */}
            <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B7ED51]">
                  ACTIVE FOCUS · {current.label}
                </span>
                <p className="text-sm text-[#F5F7F7] font-medium mt-0.5">
                  {current.description}
                </p>
              </div>
              <span className="font-mono text-xs text-[#52BCEE] shrink-0 bg-[#52BCEE]/10 px-3 py-1 rounded-full border border-[#52BCEE]/25">
                {current.focus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
