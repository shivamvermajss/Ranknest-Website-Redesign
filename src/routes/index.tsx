import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { HomeHero } from "@/components/site/home/HomeHero";
import { WhoWeAre } from "@/components/site/home/WhoWeAre";
import { StrategicFlow } from "@/components/site/home/StrategicFlow";
import { MissionVision } from "@/components/site/home/MissionVision";
import { WhyChoose } from "@/components/site/home/WhyChoose";
import { HomeServices } from "@/components/site/home/HomeServices";
import { TrustAndStats } from "@/components/site/home/TrustAndStats";
import { HomeFaq } from "@/components/site/home/HomeFaq";
import { HomeLeadForm } from "@/components/site/home/HomeLeadForm";
import { HomeCTA } from "@/components/site/home/HomeCTA";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Digital Marketing & Web Development That Drives Real Results",
      "Ranknest IT is a digital marketing, SEO and web development agency helping businesses grow visibility, leads and sustainable growth through expert SEO, custom web development, AI-ready optimization, and performance-driven strategies.",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 01. Hero Section with Staggered Motion and Digital Growth Visualization */}
      <HomeHero />

      {/* 02. Section 02: Who We Are / Editorial Introduction & Digital Growth Engine */}
      <WhoWeAre />

      {/* 03. Strategic Progression Storytelling (Your Goals → Research → Strategy → Grow) */}
      <StrategicFlow />

      {/* 04. Restored Mission & Vision Split Layout */}
      <MissionVision />

      {/* 05. Why Choose Ranknest IT with Asymmetric 6 Value Propositions */}
      <WhyChoose />

      {/* 06. Services Ecosystem with Generative Engine Optimization as Featured Hero */}
      <HomeServices />

      {/* 07. Trusted by Businesses Across World Logo Wall & Animated Counters */}
      <TrustAndStats />

      {/* 08. Restored FAQ with 2-Column Accordion */}
      <HomeFaq />

      {/* 09. Lead Generation Conversion Section (Your name, last name, email, message) */}
      <HomeLeadForm />

      {/* 10. Immersive Final CTA */}
      <HomeCTA />
    </div>
  );
}
