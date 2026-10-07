import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock, ExternalLink, Navigation, Globe2, Building } from "lucide-react";
import { contact } from "@/data/site";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { cn } from "@/lib/utils";

const locationDetails = [
  {
    id: "india",
    country: "India",
    region: "Delhi NCR Hub",
    address: ["Shakti Khand 2, Indirapuram,", "Ghaziabad 201014"],
    coords: "28.6415° N, 77.3698° E",
    mapQuery: "Shakti Khand 2, Indirapuram, Ghaziabad 201014",
    accent: "#B7ED51",
    // Google Maps embed URL
    embedUrl:
      "https://maps.google.com/maps?q=Shakti%20Khand%202%2C%20Indirapuram%2C%20Ghaziabad%20201014&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "uae",
    country: "UAE",
    region: "Middle East Hub",
    address: ["Building no C 73, Shabiya 10,", "Abu Dhabi (UAE)"],
    coords: "24.3417° N, 54.5267° E",
    mapQuery: "Building no C 73, Shabiya 10, Abu Dhabi UAE",
    accent: "#52BCEE",
    embedUrl:
      "https://maps.google.com/maps?q=Building%20no%20C%2073%2C%20Shabiya%2010%2C%20Abu%20Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
];

export function ContactLocationPanel() {
  const [activeLocationId, setActiveLocationId] = useState<"india" | "uae">("india");
  const activeLocation = locationDetails.find((l) => l.id === activeLocationId) || locationDetails[0]!;

  return (
    <section className="relative py-20 md:py-28 bg-[#030505] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-[#52BCEE]/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container className="relative space-y-16">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#52BCEE]">
                GLOBAL HUBS & DIRECT REACH
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F7F7]">
              Visit or Connect With Our Hubs
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-[#B4BEC1] max-w-xl mx-auto">
              Operating cross-border across India and the United Arab Emirates to provide continuous strategic support and technical execution.
            </p>
          </Reveal>
        </div>

        {/* 20 & 21: Premium Contact Information Area */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email Item */}
          <Reveal delay={0.1}>
            <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#52BCEE]/40 hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#52BCEE]/5 text-[#52BCEE] transition-all duration-300 group-hover:border-[#52BCEE]/40 group-hover:shadow-[0_0_15px_rgba(82,188,238,0.2)]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground block">
                    Corporate Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm font-medium text-[#F5F7F7] transition-colors group-hover:text-[#52BCEE] hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-6 rounded-full bg-[#52BCEE] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </div>
          </Reveal>

          {/* Direct Phone Lines */}
          <Reveal delay={0.15}>
            <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#B7ED51]/40 hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#B7ED51]/5 text-[#B7ED51] transition-all duration-300 group-hover:border-[#B7ED51]/40 group-hover:shadow-[0_0_15px_rgba(183,237,81,0.2)]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground block">
                    Direct Phone Lines
                  </span>
                  <div className="flex flex-col text-xs sm:text-sm font-medium text-[#F5F7F7]">
                    <a
                      href={`tel:${contact.phones[0]}`}
                      className="transition-colors group-hover:text-[#B7ED51] hover:underline"
                    >
                      {contact.phones[0]}
                    </a>
                    {contact.phones[1] && (
                      <a
                        href={`tel:${contact.phones[1]}`}
                        className="text-xs text-muted-foreground hover:text-[#B7ED51] transition-colors"
                      >
                        {contact.phones[1]}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-6 rounded-full bg-[#B7ED51] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </div>
          </Reveal>

          {/* Operating Hours */}
          <Reveal delay={0.2}>
            <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#52BCEE]/40 hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#52BCEE]/5 text-[#52BCEE] transition-all duration-300 group-hover:border-[#52BCEE]/40 group-hover:shadow-[0_0_15px_rgba(82,188,238,0.2)]">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground block">
                    Working Hours
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#F5F7F7] group-hover:text-[#52BCEE] transition-colors">
                    {contact.hours}
                  </p>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-6 rounded-full bg-[#52BCEE] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </div>
          </Reveal>

          {/* Strategic Consulting Coverage */}
          <Reveal delay={0.25}>
            <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#B7ED51]/40 hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#B7ED51]/5 text-[#B7ED51] transition-all duration-300 group-hover:border-[#B7ED51]/40 group-hover:shadow-[0_0_15px_rgba(183,237,81,0.2)]">
                  <Globe2 className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground block">
                    Global Reach
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#F5F7F7] group-hover:text-[#B7ED51] transition-colors">
                    India & UAE On-Site Operations
                  </p>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-6 rounded-full bg-[#B7ED51] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </div>
          </Reveal>
        </div>

        {/* 18 & 19: Premium Location & Map Panel */}
        <Reveal delay={0.2}>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
            {/* Top hub selector tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#B7ED51]">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B7ED51]">
                    LOCATIONS
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#F5F7F7]">
                    Ranknest IT Physical Hubs
                  </h3>
                </div>
              </div>

              {/* Hub Toggle Pills */}
              <div className="inline-flex rounded-xl border border-white/10 bg-black/40 p-1">
                {locationDetails.map((loc) => {
                  const isActive = activeLocationId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setActiveLocationId(loc.id as "india" | "uae")}
                      className={cn(
                        "relative flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                        isActive
                          ? "bg-white/[0.08] text-[#F5F7F7] shadow-sm"
                          : "text-muted-foreground hover:text-[#F5F7F7]"
                      )}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: loc.accent }}
                      />
                      {loc.country} Hub
                      {isActive && (
                        <motion.div
                          layoutId="activeLocationPill"
                          className="absolute inset-0 rounded-lg border border-white/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map and Location Details Grid */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
              {/* Left: Location specs & coordinates */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs">
                    <Navigation className="h-3 w-3" style={{ color: activeLocation.accent }} />
                    <span className="font-mono text-muted-foreground">
                      {activeLocation.coords}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl font-semibold text-[#F5F7F7]">
                    {activeLocation.country} Office
                  </h4>

                  <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: activeLocation.accent }}>
                    {activeLocation.region}
                  </p>

                  <div className="space-y-1 text-base leading-relaxed text-[#F5F7F7] font-medium pt-2">
                    {activeLocation.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(activeLocation.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#F5F7F7] transition-all duration-200 hover:border-[#B7ED51] hover:bg-white/[0.08] hover:text-[#B7ED51]"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Subtle telemetry card */}
                <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Consultation Hours</span>
                    <span className="text-[#F5F7F7] font-medium">{contact.hours}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Support Availability</span>
                    <span className="text-[#B7ED51] font-medium">24/7 Strategic Monitoring</span>
                  </div>
                </div>
              </div>

              {/* Right: Premium Dark Map Container */}
              <div className="lg:col-span-7 relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-[#030505] shadow-inner group">
                {/* Dark mode filter applied over embedded map to blend smoothly into #030505 */}
                <iframe
                  title={`${activeLocation.country} Office Location`}
                  src={activeLocation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(92%) hue-rotate(180deg) brightness(88%) contrast(90%)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Overlay vignette */}
                <div
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(3,5,5,0.85)] border border-white/10 rounded-2xl"
                  aria-hidden="true"
                />

                {/* Pulsing Location Indicator Node */}
                <div
                  className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div
                    className="h-10 w-10 rounded-full animate-ping opacity-35"
                    style={{ backgroundColor: activeLocation.accent }}
                  />
                  <div
                    className="absolute h-5 w-5 rounded-full border-2 border-white shadow-[0_0_15px_rgba(183,237,81,0.8)]"
                    style={{ backgroundColor: activeLocation.accent }}
                  />
                </div>

                {/* Bottom map badge */}
                <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-lg border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5" style={{ color: activeLocation.accent }} />
                  <span className="text-[11px] font-medium text-[#F5F7F7]">
                    {activeLocation.country} Campus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
