import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ServicesHero } from "@/components/site/services/ServicesHero";
import { ServicesIntro } from "@/components/site/services/ServicesIntro";
import { ServicesWorkspace } from "@/components/site/services/ServicesWorkspace";
import { ServicesCTA } from "@/components/site/services/ServicesCTA";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo(
      "Services",
      "Best digital marketing & SEO agency — Data-driven SEO, high-performance web development, local SEO, content marketing, social media and Google Ads by Ranknest IT."
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Services Hero with Editorial Headline and Unique Growth Ecosystem Visual */}
      <ServicesHero />

      {/* 2. Introduction: Everything your digital growth needs. Built to work together. */}
      <ServicesIntro />

      {/* 3. Interactive Services Ecosystem Workspace (Desktop Storytelling & Mobile Accordion) */}
      <ServicesWorkspace />

      {/* 4. Closing CTA: Ready to Build Lasting Digital Authority? */}
      <ServicesCTA />
    </div>
  );
}
