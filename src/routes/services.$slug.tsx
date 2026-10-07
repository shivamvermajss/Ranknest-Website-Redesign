import { Search } from "lucide-react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { Container, CTAButton, PageHero } from "@/components/site/ui";
import { CTASection, ServiceCard, serviceIcons, Strengths } from "@/components/site/sections";
import { SEOServicePage } from "@/components/site/seo/SEOServicePage";
import { SocialMediaServicePage } from "@/components/site/social/SocialMediaServicePage";
import { PPCServicePage } from "@/components/site/ppc/PPCServicePage";
import { WebDevelopmentServicePage } from "@/components/site/webdev/WebDevelopmentServicePage";
import { ContentMarketingServicePage } from "@/components/site/content-marketing/ContentMarketingServicePage";
import { LocalSEOServicePage } from "@/components/site/local-seo/LocalSEOServicePage";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    let service = services.find((s) => s.slug === params.slug);
    if (!service && (params.slug === "seo-services" || params.slug === "seo-service")) {
      service = services.find((s) => s.slug === "seo");
    }
    if (
      !service &&
      (params.slug === "social-media-services" ||
        params.slug === "social-media-service" ||
        params.slug === "social-media")
    ) {
      service = services.find((s) => s.slug === "social-media-marketing");
    }
    if (
      !service &&
      (params.slug === "ppc" ||
        params.slug === "ppc-services" ||
        params.slug === "ppc-service" ||
        params.slug === "ppc-advertising-services" ||
        params.slug === "google-ads-services" ||
        params.slug === "google-ads-ppc")
    ) {
      service = services.find((s) => s.slug === "google-ads");
    }
    if (
      !service &&
      (params.slug === "website-development-services" ||
        params.slug === "website-development" ||
        params.slug === "web-development-services" ||
        params.slug === "web-dev" ||
        params.slug === "web-design")
    ) {
      service = services.find((s) => s.slug === "web-development");
    }
    if (
      !service &&
      (params.slug === "content-marketing-services" ||
        params.slug === "content-marketing-service" ||
        params.slug === "content-strategy" ||
        params.slug === "content-writing" ||
        params.slug === "content")
    ) {
      service = services.find((s) => s.slug === "content-marketing");
    }
    if (
      !service &&
      (params.slug === "local-seo" ||
        params.slug === "local-seo-gmb" ||
        params.slug === "local-seo-services" ||
        params.slug === "local-seo-service" ||
        params.slug === "gmb" ||
        params.slug === "google-business-profile" ||
        params.slug === "local-search")
    ) {
      service = services.find((s) => s.slug === "local-seo");
    }
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return seo("Service", "Ranknest IT service");
    if (loaderData.service.slug === "seo") {
      return seo(
        "SEO Services That Drive Rankings and Traffic",
        "Data-driven Search Engine Optimization (SEO) campaigns that help businesses rank higher, attract qualified organic traffic, and grow sustainably. Custom search intelligence by Ranknest IT."
      );
    }
    if (loaderData.service.slug === "social-media-marketing") {
      return seo(
        "Social Media Services That Build Real Audiences | Ranknest IT",
        "Affordable social media services to grow your online presence with followers, likes, views, engagement, and marketing solutions across Instagram, Facebook, YouTube, and Telegram."
      );
    }
    if (loaderData.service.slug === "google-ads") {
      return seo(
        "PPC Advertising Services | Performance Marketing | Ranknest IT",
        "Boost traffic, qualified leads, and sales with professional PPC and Google Ads services. Data-driven campaigns, expert optimization, and maximum ROI by Ranknest IT."
      );
    }
    if (loaderData.service.slug === "web-development") {
      return seo(
        "Website Development Services | Professional Web Engineering | Ranknest IT",
        "Deliver fast, responsive, SEO-friendly, and secure websites that enhance user experience, strengthen your brand, and drive business growth across all devices. Expert web development by Ranknest IT."
      );
    }
    if (loaderData.service.slug === "content-marketing") {
      return seo(
        "Content Marketing Services | Strategic Content Intelligence | Ranknest IT",
        "Create engaging, SEO-optimized content to attract target audiences, improve search rankings, build brand authority, generate qualified leads, and drive sustainable business growth."
      );
    }
    if (loaderData.service.slug === "local-seo") {
      return seo(
        "Local SEO & Google Business Profile (GMB) Services | Ranknest IT",
        "Improve local rankings with expert Local SEO and Google Business Profile (GMB) optimization. Attract nearby customers, increase visibility, and grow your business."
      );
    }
    return seo(loaderData.service.name, loaderData.service.description);
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  // Individual SEO Service Page Redesign
  if (service.slug === "seo") {
    return <SEOServicePage />;
  }

  // Individual Social Media Services Page Redesign
  if (service.slug === "social-media-marketing") {
    return <SocialMediaServicePage />;
  }

  // Individual PPC / Google Ads Service Page Redesign
  if (service.slug === "google-ads") {
    return <PPCServicePage />;
  }

  // Individual Website Development Services Page Redesign
  if (service.slug === "web-development") {
    return <WebDevelopmentServicePage />;
  }

  // Individual Content Marketing Services Page Redesign
  if (service.slug === "content-marketing") {
    return <ContentMarketingServicePage />;
  }

  // Individual Local SEO / Google Business Profile Service Page Redesign
  if (service.slug === "local-seo") {
    return <LocalSEOServicePage />;
  }

  // Fallback template for other services
  const Icon = serviceIcons[service.slug] ?? Search;
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
