import { SEOHero } from "./SEOHero";
import { SEOSubNav } from "./SEOSubNav";
import { SEOStrategySystem } from "./SEOStrategySystem";
import { WhySEO } from "./WhySEO";
import { WhyRanknest } from "./WhyRanknest";
import { AIVisibilityCTA } from "./AIVisibilityCTA";

export function SEOServicePage() {
  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Split-Screen Hero with Search Intelligence Engine */}
      <SEOHero />

      {/* 2. Horizontal Services Navigation Capsule (Requirement 28) */}
      <SEOSubNav />

      {/* 3. Interactive SEO Strategy System (Requirements 10-14) */}
      <SEOStrategySystem />

      {/* 4. Why Your Business Needs SEO Services (Requirements 15-17) */}
      <WhySEO />

      {/* 5. Why Choose Ranknest IT for SEO Services (Requirements 18-19) */}
      <WhyRanknest />

      {/* 6. AI Search Visibility CTA (Requirements 20-22) */}
      <AIVisibilityCTA />
    </div>
  );
}
