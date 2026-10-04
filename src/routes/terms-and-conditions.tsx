import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/Legal";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => seo("Terms & Conditions", "Terms & Conditions of Ranknest IT."),
  component: () => <LegalPage title="Terms & Conditions" sections={["Use of Services", "Payments", "Intellectual Property", "Limitation of Liability", "Contact Us"]} />,
});
