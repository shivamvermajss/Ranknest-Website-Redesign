import { useEffect } from "react";
import { ContentSubNav } from "./ContentSubNav";
import { ContentMarketingHero } from "./ContentMarketingHero";
import { CoreContentSystems } from "./CoreContentSystems";
import { ContentEcosystem } from "./ContentEcosystem";
import { ContentProcess } from "./ContentProcess";
import { ContentAuthoritySection } from "./ContentAuthoritySection";
import { ContentMediaFrame } from "./ContentMediaFrame";
import { ContentPillars } from "./ContentPillars";
import { ContentMarketingCTA } from "./ContentMarketingCTA";

export function ContentMarketingServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Services Sub-Navigation Bar */}
      <ContentSubNav />

      {/* 2. Hero Section with Content Engine Visual */}
      <ContentMarketingHero />

      {/* 3. Main Content & Core Interactive Systems (SEO-Optimized & Conversion-Focused) */}
      <CoreContentSystems />

      {/* 4. Connected Multi-Touchpoint Content Ecosystem */}
      <ContentEcosystem />

      {/* 5. Content Lifecycle Process: From Idea to Impact */}
      <ContentProcess />

      {/* 6. Content, Search & Authority Relationship */}
      <ContentAuthoritySection />

      {/* 7. Editorial Media Frame with Client Promotional Graphic */}
      <ContentMediaFrame />

      {/* 8. Four Content Pillars */}
      <ContentPillars />

      {/* 9. Closing Request a Quote CTA */}
      <ContentMarketingCTA />
    </div>
  );
}
