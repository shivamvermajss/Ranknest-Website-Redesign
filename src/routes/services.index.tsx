import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { seo } from "@/lib/seo";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { Container, PageHero } from "@/components/site/ui";
import { CTASection, serviceIcons } from "@/components/site/sections";

export const Route = createFileRoute("/services/")({
  head: () => seo("Services", "Best digital marketing & SEO agency — SEO, web development, local SEO, content, social media and Google Ads."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Best Digital Marketing & SEO Agency" intro="Complete digital growth services designed to increase your visibility, generate leads and build authority online." />
      <section className="pb-16">
        <Container className="space-y-4">
          {services.map((s, i) => {
            const I = serviceIcons[s.slug] ?? Search;
            return (
              <Reveal key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="glass card-sweep group grid items-center gap-6 rounded-3xl p-8 transition-all duration-500 md:grid-cols-12 md:p-12">
                  <span className="font-display text-6xl font-semibold text-foreground/15 transition-colors group-hover:text-primary/60 md:col-span-2 md:text-8xl">{String(i + 1).padStart(2, "0")}</span>
                  <div className="md:col-span-6">
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{s.name}</h2>
                    <p className="mt-4 text-muted-foreground">{s.description}</p>
                  </div>
                  <div className="flex items-center justify-between md:col-span-4 md:justify-end md:gap-6">
                    <I className="h-10 w-10 text-primary transition-transform duration-500 group-hover:scale-110" />
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <CTASection title="Ready to Build Lasting Digital Authority?" />
    </>
  );
}
