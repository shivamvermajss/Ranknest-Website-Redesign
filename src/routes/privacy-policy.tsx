import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/Legal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seo("Privacy Policy", "Privacy Policy of Ranknest IT."),
  component: () => <LegalPage title="Privacy Policy" sections={["Information We Collect", "How We Use Information", "Cookies", "Data Security", "Contact Us"]} />,
});
