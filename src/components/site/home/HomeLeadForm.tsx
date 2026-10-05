import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Sparkles, Send, ShieldCheck, Mail, Phone } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

type FormErrors = Partial<Record<"firstName" | "lastName" | "email" | "message", string>>;

export function HomeLeadForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const firstName = (fd.get("firstName") as string)?.trim() ?? "";
    const lastName = (fd.get("lastName") as string)?.trim() ?? "";
    const email = (fd.get("email") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";

    const errs: FormErrors = {};
    if (!firstName) errs.firstName = "Please enter your first name.";
    if (!lastName) errs.lastName = "Please enter your last name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!message || message.length < 10)
      errs.message = "Please enter your message (at least 10 characters).";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("loading");
    // Ready for future API integration
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
  }

  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-[#030505] border-t border-white/5">
      {/* Ambient background bloom */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#B7ED51]/5 blur-[130px] pointer-events-none" />
      <div className="grid-lines absolute inset-0 opacity-20 pointer-events-none" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Context & Strategic Perks */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">Start a Conversation</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
                Let’s Architect Your <span className="text-lime-gradient">Digital Growth</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Request a complimentary digital audit and strategic consultation. Our team will
                analyze your search footprint, technical stack, and market potential.
              </p>

              {/* Consultation Perks */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[#B7ED51]/15 text-[#B7ED51] shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Full Search &amp; Technical Audit
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Comprehensive health review of your website's crawlability and index status.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[#52BCEE]/15 text-[#52BCEE] shrink-0">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      AI &amp; GEO Visibility Check
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Analysis of how your brand currently ranks in AI search and LLM engines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[#B7ED51]/15 text-[#B7ED51] shrink-0">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Custom 90-Day Growth Roadmap
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Actionable blueprint tailored to your industry, competition, and targets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contact info */}
              <div className="mt-10 pt-8 border-t border-white/10 text-xs text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{contact.phones.join(" · ")}</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-8 sm:p-10 border border-primary/25 shadow-glow">
                {state === "done" ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/20 text-primary border border-primary/40 shadow-glow">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                      Consultation Request Received
                    </h3>
                    <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. A senior Ranknest IT strategist will review your
                      business information and reach out within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setState("idle")}
                      className="mt-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        Request Your Strategic Consultation
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Fill in your details below and our team will get in touch shortly.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 pt-2">
                      {/* Your Name (First Name) */}
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Your name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          placeholder="First name"
                          className={cn(
                            "w-full rounded-xl border bg-white/[0.025] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:bg-white/[0.05]",
                            errors.firstName ? "border-destructive" : "border-white/10",
                          )}
                          aria-invalid={!!errors.firstName}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>
                        )}
                      </div>

                      {/* Your Last Name */}
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Your last name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          placeholder="Last name"
                          className={cn(
                            "w-full rounded-xl border bg-white/[0.025] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:bg-white/[0.05]",
                            errors.lastName ? "border-destructive" : "border-white/10",
                          )}
                          aria-invalid={!!errors.lastName}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Your Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your email address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.025] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:bg-white/[0.05]",
                          errors.email ? "border-destructive" : "border-white/10",
                        )}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>

                    {/* Enter Your Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Enter your message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your business goals, target audience, or current digital marketing challenges..."
                        className={cn(
                          "w-full rounded-xl border bg-white/[0.025] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:bg-white/[0.05]",
                          errors.message ? "border-destructive" : "border-white/10",
                        )}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:bg-[#c6f46c] transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      We respect your privacy. No spam. All client information is strictly
                      confidential.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
