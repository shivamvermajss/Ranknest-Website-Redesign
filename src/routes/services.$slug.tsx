import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { Container, CTAButton, PageHero } from "@/components/site/ui";
import { CTASection, ServiceCard, serviceIcons, Strengths } from "@/components/site/sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => (loaderData ? seo(loaderData.service.name, loaderData.service.description) : seo("Service", "Ranknest IT service")),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const Icon = serviceIcons[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} intro={service.description}>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton to="/contact">Get Free Audit</CTAButton>
          <CTAButton to="/services" variant="ghost">All Services</CTAButton>
        </div>
      </PageHero>
      <section className="py-20">
        <Container className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="glass grid aspect-square place-items-center rounded-3xl shadow-glow">
              <Icon className="h-20 w-20 text-primary" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="eyebrow mb-5">Overview</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{service.name} by Ranknest IT</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
          </Reveal>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <p className="eyebrow mb-10">Why work with us</p>
          <Strengths />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <p className="eyebrow mb-10">Other services</p>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((s) => <ServiceCard key={s.slug} s={s} index={services.indexOf(s)} />)}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
