import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { seo } from "@/lib/seo";
import { contact, helpOptions } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { Container, PageHero } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Let's build your digital success together. Contact Ranknest IT in India or the UAE."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Build Your Digital Success Together" intro="Tell us about your goals and our team will get back to you with the right strategy." />
      <section className="pb-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-3xl font-semibold">How Can We Help?</h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {helpOptions.map((h) => (
                  <li key={h} className="glass rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary">{h}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mt-12 space-y-5 text-muted-foreground">
              <p className="flex gap-3"><Mail className="h-5 w-5 text-primary" /><a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a></p>
              <p className="flex gap-3"><Phone className="h-5 w-5 text-primary" />{contact.phones.join(" · ")}</p>
              <p className="flex gap-3"><Clock className="h-5 w-5 text-primary" />{contact.hours}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-7"><ContactForm /></Reveal>
        </Container>
      </section>
      <section className="pb-28">
        <Container className="grid gap-4 md:grid-cols-2">
          {contact.locations.map((l, i) => (
            <Reveal key={l.country} delay={i * 0.1}>
              <div className="glass card-sweep relative overflow-hidden rounded-3xl p-10">
                <div className="grid-lines absolute inset-0" aria-hidden />
                <div className="relative">
                  <MapPin className="h-8 w-8 text-primary" />
                  <p className="eyebrow mt-10">{l.country}</p>
                  <p className="mt-3 font-display text-2xl">{l.lines.map((x) => <span key={x} className="block">{x}</span>)}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(l.lines.join(" "))}`} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-primary">Open in Maps →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
