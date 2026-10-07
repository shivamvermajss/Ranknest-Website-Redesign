import { useEffect } from "react";
import { PPCSubNav } from "./PPCSubNav";
import { PPCHero } from "./PPCHero";
import { PPCStrategySection } from "./PPCStrategySection";
import { PPCServicesShowcase } from "./PPCServicesShowcase";
import { WhyPPCSection } from "./WhyPPCSection";
import { WhyRanknestPPC } from "./WhyRanknestPPC";
import { PPCCTA } from "./PPCCTA";

export function PPCServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* Services Sub-Navigation Bar */}
      <PPCSubNav />

      {/* 1. Hero Section with Performance & Conversion Engine */}
      <PPCHero />

      {/* 2. Customized PPC Strategy & Campaign Intelligence */}
      <PPCStrategySection />

      {/* 3. Our PPC Services (Google Ads, Display, Shopping, Social Media PPC) */}
      <PPCServicesShowcase />

      {/* 4. Why Your Business Needs PPC Services & Paid Funnel Flow */}
      <WhyPPCSection />

      {/* 5. Why Choose Ranknest IT for PPC Services & 4 Core Principles */}
      <WhyRanknestPPC />

      {/* 6. Closing Request a Quote CTA */}
      <PPCCTA />
    </div>
  );
}
