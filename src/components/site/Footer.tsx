import { Link } from "@tanstack/react-router";
import { contact, services } from "@/data/site";
import { Logo } from "./Navbar";

const quick = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
const socials = [
  { short: "f", label: "Facebook" },
  { short: "ig", label: "Instagram" },
  { short: "in", label: "LinkedIn" },
  { short: "X", label: "X" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Empowering businesses with AI-powered digital marketing solutions that drive visibility, leads, and sustainable growth.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ short, label }) => (
              <span key={label} title={label} aria-label={label} className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary">
                <span className="text-xs font-semibold">{short}</span>
              </span>
            ))}
          </div>
        </div>
        <FooterCol title="Quick Links">
          {quick.map((q) => (
            <li key={q.to}><Link to={q.to} className="hover:text-primary">{q.label}</Link></li>
          ))}
        </FooterCol>
        <FooterCol title="Our Services">
          {services.map((s) => (
            <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.short}</Link></li>
          ))}
        </FooterCol>
        <div className="space-y-4 text-sm text-muted-foreground md:col-span-4">
          <h3 className="eyebrow">Contact</h3>
          {contact.locations.map((l) => (
            <p key={l.country}><span className="text-foreground">{l.country}:</span> {l.lines.join(" ")}</p>
          ))}
          <p><a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a></p>
          <p>{contact.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="mr-4 hover:text-primary">{p}</a>)}</p>
          <p>{contact.hours}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© 2025 Ranknest IT. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="md:col-span-2">
      <h3 className="eyebrow mb-4">{title}</h3>
      <ul className="space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
