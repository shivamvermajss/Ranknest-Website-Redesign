import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Reveal } from "@/components/site/motion";
import { Container, PageHero, SectionHeading, CTAButton } from "@/components/site/ui";
import { CTASection, Stats, Strengths } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Ranknest IT helps businesses grow with smart digital marketing — SEO, web development, Google Ads, social media and content."),
  component: About,
});

const values = ["Innovation", "Integrity", "Collaboration", "Excellence"];
const whatWeDo = ["SEO", "Local SEO", "Google Ads", "Website Design & Development", "Social Media Marketing", "Content Marketing"];

function About() {
  return (
    <>
      <PageHero eyebrow="About Ranknest IT" title="Helping Businesses Grow with Smart Digital Marketing" intro="We combine search, web and performance marketing to help businesses build visibility and achieve sustainable growth." />

      <section className="py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <SectionHeading className="md:col-span-6" eyebrow="Our mission" title={<>Smart, scalable, <span className="text-gold">future-ready</span> solutions.</>} />
          <div className="grid grid-cols-2 gap-4 md:col-span-6">
            {values.map((v, i) => (
              <Reveal key={v} delay={i * 0.08}>
                <div className="glass card-sweep rounded-2xl p-6">
                  <span className="font-display text-sm text-primary">0{i + 1}</span>
                  <p className="mt-8 font-display text-2xl font-semibold">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Our impact" title="Numbers that tell our story." />
          <div className="mt-12"><Stats /></div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl">Built to make digital growth clear and measurable.</h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>Ranknest IT was created to help businesses navigate the digital landscape with strategies that deliver real, measurable results.</p>
            <p>Over 5+ years we have delivered 250+ projects for 150+ happy clients, growing from SEO into a complete digital marketing and web development partner.</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="What we do" title="Full-spectrum digital services." />
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {whatWeDo.map((w, i) => (
              <Reveal key={w} delay={i * 0.04}>
                <li className="group flex items-center justify-between py-6 transition-colors hover:text-primary">
                  <span className="font-display text-2xl font-semibold md:text-4xl">{w}</span>
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10"><CTAButton to="/services" variant="ghost">Explore Services</CTAButton></div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Why choose Ranknest IT" title="How we work." />
          <div className="mt-14"><Strengths /></div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-5">Our commitment</p>
            <p className="font-display text-3xl font-medium leading-snug md:text-5xl">We're committed to transparent, ethical and data-driven marketing that helps your business grow for the long term.</p>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Let's Grow Together" />
    </>
  );
}
