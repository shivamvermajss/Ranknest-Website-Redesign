import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { AboutHero } from "@/components/site/about/AboutHero";
import { AboutWhoWeAre } from "@/components/site/about/AboutWhoWeAre";
import { AboutMissionVision } from "@/components/site/about/AboutMissionVision";
import { AboutImpact } from "@/components/site/about/AboutImpact";
import { AboutStory } from "@/components/site/about/AboutStory";
import { AboutWhatWeDo } from "@/components/site/about/AboutWhatWeDo";
import { AboutHowWeWork } from "@/components/site/about/AboutHowWeWork";
import { AboutCommitment } from "@/components/site/about/AboutCommitment";
import { AboutCTA } from "@/components/site/about/AboutCTA";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About Us",
      "Ranknest IT helps businesses grow with smart digital marketing — SEO, web development, Google Ads, social media and content.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 01 — Hero / Identity */}
      <AboutHero />

      {/* 02 — Who We Are */}
      <AboutWhoWeAre />

      {/* 03 — Mission & Vision */}
      <AboutMissionVision />

      {/* 04 — Our Impact (Real Stats & Counting) */}
      <AboutImpact />

      {/* 05 — Our Story (Foundational Progression) */}
      <AboutStory />

      {/* 06 — What We Do (Interactive Service Ecosystem) */}
      <AboutWhatWeDo />

      {/* 07 — How We Work (Growth Methodology) */}
      <AboutHowWeWork />

      {/* 08 — Our Commitment */}
      <AboutCommitment />

      {/* 09 — Final CTA */}
      <AboutCTA />
    </div>
  );
}
