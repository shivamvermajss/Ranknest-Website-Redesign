import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ContactHero } from "@/components/site/contact/ContactHero";
import { ContactTransition } from "@/components/site/contact/ContactTransition";
import { ContactWorkspace } from "@/components/site/contact/ContactWorkspace";
import { ContactLocationPanel } from "@/components/site/contact/ContactLocationPanel";
import { ContactCTA } from "@/components/site/contact/ContactCTA";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact",
      "Let's Build Your Digital Success Together. Connect with Ranknest IT for Search Engine Optimization, enterprise Web Development, and full-funnel digital marketing across India & the UAE."
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Hero with Editorial Headline and Animated Connection Network */}
      <ContactHero />

      {/* 2. Transition: "Tell us what you're building" + Discover -> Discuss -> Plan -> Grow */}
      <ContactTransition />

      {/* 3. Connected Glass Contact Workspace: 14 Services Selector + Form with Focus Glows */}
      <ContactWorkspace />

      {/* 4. Contact Information & Premium Dark Location / Map Panel */}
      <ContactLocationPanel />

      {/* 5. "Ready to Grow Your Business Online?" CTA with Upward Trajectory Visual */}
      <ContactCTA />
    </div>
  );
}
