import { SocialMediaHero } from "./SocialMediaHero";
import { SocialSubNav } from "./SocialSubNav";
import { SocialPlatformIntro } from "./SocialPlatformIntro";
import { SocialPlatformsShowcase } from "./SocialPlatformsShowcase";
import { ServiceCommitment } from "./ServiceCommitment";
import { WhySocialMedia } from "./WhySocialMedia";
import { SocialMediaCTA } from "./SocialMediaCTA";

export function SocialMediaServicePage() {
  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Split-Screen Hero with Audience Growth Network Visual */}
      <SocialMediaHero />

      {/* 2. Horizontal Services Navigation Capsule (Social Media Active) */}
      <SocialSubNav />

      {/* 3. Social Platform Editorial Intro */}
      <SocialPlatformIntro />

      {/* 4. The 4 Platform Experiences with Client Promotional Graphics */}
      <SocialPlatformsShowcase />

      {/* 5. 100% Money-Back Guarantee Service Commitment Panel */}
      <ServiceCommitment />

      {/* 6. Why Social Media Editorial & 4 Conceptual Pillars */}
      <WhySocialMedia />

      {/* 7. Social Growth Closing CTA */}
      <SocialMediaCTA />
    </div>
  );
}
