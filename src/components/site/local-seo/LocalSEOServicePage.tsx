import { LocalSubNav } from "./LocalSubNav";
import { LocalSEOHero } from "./LocalSEOHero";
import { LocalSearchSignalFlow } from "./LocalSearchSignalFlow";
import { WhyLocalSEOMatters } from "./WhyLocalSEOMatters";
import { LocalSEOServices } from "./LocalSEOServices";
import { LocalSearchEcosystem } from "./LocalSearchEcosystem";
import { WhyChooseRanknestLocal } from "./WhyChooseRanknestLocal";
import { LocalSearchTimelineFlow } from "./LocalSearchTimelineFlow";
import { LocalSEOCTA } from "./LocalSEOCTA";

export function LocalSEOServicePage() {
  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* Services Suite Sub-Navigation */}
      <LocalSubNav />

      {/* Hero Section with Local Search Map */}
      <LocalSEOHero />

      {/* Signature Animated Flow: Search to Contact */}
      <LocalSearchSignalFlow />

      {/* Why Local SEO Matters with Local Discovery Network */}
      <WhyLocalSEOMatters />

      {/* Four Local SEO Services (Interactive System) */}
      <LocalSEOServices />

      {/* The Local Search Ecosystem (Connected Architecture) */}
      <LocalSearchEcosystem />

      {/* Why Choose Ranknest IT & Authentic Feature Media Frame */}
      <WhyChooseRanknestLocal />

      {/* From Search to Local Discovery (Editorial Timeline) */}
      <LocalSearchTimelineFlow />

      {/* Final Closing CTA Section */}
      <LocalSEOCTA />
    </div>
  );
}
