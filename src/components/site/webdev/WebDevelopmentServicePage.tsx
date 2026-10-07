import { useEffect } from "react";
import { WebSubNav } from "./WebSubNav";
import { WebDevelopmentHero } from "./WebDevelopmentHero";
import { CorePillars } from "./CorePillars";
import { DevelopmentProcess } from "./DevelopmentProcess";
import { ResponsiveExperience } from "./ResponsiveExperience";
import { PerformanceSection } from "./PerformanceSection";
import { ArchitectureSection } from "./ArchitectureSection";
import { WebDevelopmentCTA } from "./WebDevelopmentCTA";

export function WebDevelopmentServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Sub-Navigation Capsule */}
      <WebSubNav />

      {/* 2. Hero Section with Digital Architecture Visual */}
      <WebDevelopmentHero />

      {/* 3. Core Pillars (Website Design & Website Development) */}
      <CorePillars />

      {/* 4. Development Process (5-Stage Digital Lifecycle) */}
      <DevelopmentProcess />

      {/* 5. Responsive Experience (Desktop / Tablet / Mobile UI) */}
      <ResponsiveExperience />

      {/* 6. Performance, Security & SEO Benchmarks */}
      <PerformanceSection />

      {/* 7. Website Architecture (Full-Stack System Anatomy) */}
      <ArchitectureSection />

      {/* 8. Closing Request a Quote CTA */}
      <WebDevelopmentCTA />
    </div>
  );
}
