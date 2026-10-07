import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Loader2, Check, X, Shield, Sparkles } from "lucide-react";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { ServiceSelector } from "./ServiceSelector";
import { cn } from "@/lib/utils";

type FormErrors = Partial<Record<"name" | "email" | "phone" | "scope", string>>;

export function ContactWorkspace() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Form states
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<"name" | "email" | "phone" | "scope", boolean>>>({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    scope: "",
  });
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleToggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleInputChange = (field: "name" | "email" | "phone" | "scope", val: string) => {
    setFormValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: "name" | "email" | "phone" | "scope") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formValues[field]);
  };

  const validateField = (field: "name" | "email" | "phone" | "scope", val: string): boolean => {
    let err: string | undefined = undefined;
    if (field === "name") {
      if (!val.trim()) err = "Please enter your full name.";
    } else if (field === "email") {
      if (!/^\S+@\S+\.\S+$/.test(val.trim())) err = "Please enter a valid corporate email.";
    } else if (field === "phone") {
      if (val.trim() && !/^[+\d\s()-]{7,20}$/.test(val.trim())) {
        err = "Please enter a valid phone number.";
      }
    } else if (field === "scope") {
      if (val.trim().length < 10) {
        err = "Tell us a little more about your project (10+ characters).";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return !err;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameValid = validateField("name", formValues.name);
    const isEmailValid = validateField("email", formValues.email);
    const isPhoneValid = validateField("phone", formValues.phone);
    const isScopeValid = validateField("scope", formValues.scope);

    setTouched({ name: true, email: true, phone: true, scope: true });

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isScopeValid) {
      return;
    }

    setState("loading");
    // Simulate consultation submission matching original client flow
    await new Promise((r) => setTimeout(r, 950));
    setState("done");
  };

  const isFieldValid = (field: "name" | "email" | "phone" | "scope"): boolean => {
    if (!touched[field] || errors[field]) return false;
    if (field === "phone") return formValues.phone.trim().length >= 7;
    return formValues[field].trim().length > 0;
  };

  return (
    <section id="contact-workspace" className="relative py-20 md:py-28 bg-[#050808]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          {/* Unified Connected Glass Workspace */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] p-6 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Top decorative subtle laser bar */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B7ED51]/40 to-transparent" />
            <div className="grid-lines absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
              {/* LEFT COLUMN: How Can We Help (14 Real Services) */}
              <div className="lg:col-span-5 xl:col-span-5">
                <ServiceSelector
                  selectedServices={selectedServices}
                  onToggleService={handleToggleService}
                  hoveredService={hoveredService}
                  onHoverService={setHoveredService}
                />
              </div>

              {/* VERTICAL DIVIDER on large screens */}
              <div
                className="hidden lg:block absolute left-[42.5%] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* RIGHT COLUMN: Contact Form */}
              <div className="lg:col-span-7 xl:col-span-7 lg:pl-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#52BCEE]">
                      CONSULTATION REQUEST
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#F5F7F7]">
                    Project Specifications
                  </h3>
                  <p className="mt-1 text-sm text-[#B4BEC1]">
                    Fill in your details below to schedule an architectural strategy session with our senior digital growth team.
                  </p>
                </div>

                {state === "done" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center rounded-2xl border border-[#B7ED51]/30 bg-[#B7ED51]/[0.04] p-10 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B7ED51]/40 bg-[#B7ED51]/10 text-[#B7ED51]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="mt-6 font-display text-2xl font-semibold text-[#F5F7F7]">
                      Consultation Request Received
                    </h4>
                    <p className="mt-2.5 max-w-md text-sm text-[#B4BEC1] leading-relaxed">
                      Thank you — our technical team is reviewing your project requirements and will get back to you shortly with strategic recommendations.
                    </p>
                    {selectedServices.length > 0 && (
                      <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-lg">
                        {selectedServices.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-3 py-1 text-xs text-[#B7ED51]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setState("idle");
                        setFormValues({ name: "", email: "", phone: "", scope: "" });
                        setSelectedServices([]);
                        setTouched({});
                        setErrors({});
                      }}
                      className="mt-8 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-[#F5F7F7] hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    {/* Full Name* -> Lime Focus Glow */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]/90">
                          Full Name <span className="text-[#B7ED51]">*</span>
                        </label>
                        {isFieldValid("name") && (
                          <span className="flex items-center gap-1 text-[11px] text-[#B7ED51]">
                            <Check className="h-3 w-3" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formValues.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          placeholder="e.g. Alex Morgan"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-err" : undefined}
                          className={cn(
                            "w-full rounded-xl border bg-[#030505]/70 px-4 py-3.5 text-sm text-[#F5F7F7] placeholder:text-muted-foreground/40 outline-none transition-all duration-200",
                            errors.name
                              ? "border-[#C53736]/70 focus:border-[#C53736] focus:shadow-[0_0_15px_rgba(197,55,54,0.15)]"
                              : "border-white/10 hover:border-white/20 focus:border-[#B7ED51] focus:shadow-[0_0_15px_rgba(183,237,81,0.12)] focus:bg-[#030505]/90"
                          )}
                        />
                      </div>
                      {errors.name && (
                        <p id="name-err" className="mt-1.5 text-xs text-[#C53736]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Corporate Email* -> Cyan Focus Glow */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]/90">
                          Corporate Email <span className="text-[#52BCEE]">*</span>
                        </label>
                        {isFieldValid("email") && (
                          <span className="flex items-center gap-1 text-[11px] text-[#52BCEE]">
                            <Check className="h-3 w-3" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formValues.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          placeholder="e.g. alex@enterprise.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-err" : undefined}
                          className={cn(
                            "w-full rounded-xl border bg-[#030505]/70 px-4 py-3.5 text-sm text-[#F5F7F7] placeholder:text-muted-foreground/40 outline-none transition-all duration-200",
                            errors.email
                              ? "border-[#C53736]/70 focus:border-[#C53736] focus:shadow-[0_0_15px_rgba(197,55,54,0.15)]"
                              : "border-white/10 hover:border-white/20 focus:border-[#52BCEE] focus:shadow-[0_0_15px_rgba(82,188,238,0.12)] focus:bg-[#030505]/90"
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-err" className="mt-1.5 text-xs text-[#C53736]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number -> Lime Focus Glow */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]/90">
                          Phone Number <span className="text-muted-foreground font-normal lowercase">(optional)</span>
                        </label>
                        {isFieldValid("phone") && (
                          <span className="flex items-center gap-1 text-[11px] text-[#B7ED51]">
                            <Check className="h-3 w-3" /> Valid
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formValues.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          onBlur={() => handleBlur("phone")}
                          placeholder="+91 98765 43210 or +971 50 123 4567"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-err" : undefined}
                          className={cn(
                            "w-full rounded-xl border bg-[#030505]/70 px-4 py-3.5 text-sm text-[#F5F7F7] placeholder:text-muted-foreground/40 outline-none transition-all duration-200",
                            errors.phone
                              ? "border-[#C53736]/70 focus:border-[#C53736] focus:shadow-[0_0_15px_rgba(197,55,54,0.15)]"
                              : "border-white/10 hover:border-white/20 focus:border-[#B7ED51] focus:shadow-[0_0_15px_rgba(183,237,81,0.12)] focus:bg-[#030505]/90"
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p id="phone-err" className="mt-1.5 text-xs text-[#C53736]">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Project Scope & AI Readiness Goals* -> Cyan Focus Glow */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="scope" className="text-xs font-semibold uppercase tracking-wider text-[#F5F7F7]/90">
                          Project Scope & AI Readiness Goals <span className="text-[#52BCEE]">*</span>
                        </label>
                        {isFieldValid("scope") && (
                          <span className="flex items-center gap-1 text-[11px] text-[#52BCEE]">
                            <Check className="h-3 w-3" /> Valid
                          </span>
                        )}
                      </div>

                      {/* Interactive Selected Services Attachment Badges */}
                      {selectedServices.length > 0 && (
                        <div className="mb-2.5 flex flex-wrap items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] p-2">
                          <span className="text-[11px] font-medium text-muted-foreground mr-1">
                            Attached Focus:
                          </span>
                          {selectedServices.map((service) => (
                            <span
                              key={service}
                              className="inline-flex items-center gap-1 rounded-md border border-[#B7ED51]/30 bg-[#B7ED51]/10 px-2 py-0.5 text-[11px] font-medium text-[#B7ED51]"
                            >
                              {service}
                              <button
                                type="button"
                                onClick={() => handleToggleService(service)}
                                className="hover:text-white transition-colors cursor-pointer"
                                aria-label={`Remove ${service}`}
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="relative">
                        <textarea
                          id="scope"
                          name="scope"
                          rows={4}
                          value={formValues.scope}
                          onChange={(e) => handleInputChange("scope", e.target.value)}
                          onBlur={() => handleBlur("scope")}
                          placeholder="Describe your current search challenges, technical stack, or organic growth targets..."
                          aria-invalid={!!errors.scope}
                          aria-describedby={errors.scope ? "scope-err" : undefined}
                          className={cn(
                            "w-full rounded-xl border bg-[#030505]/70 px-4 py-3.5 text-sm text-[#F5F7F7] placeholder:text-muted-foreground/40 outline-none transition-all duration-200 resize-y",
                            errors.scope
                              ? "border-[#C53736]/70 focus:border-[#C53736] focus:shadow-[0_0_15px_rgba(197,55,54,0.15)]"
                              : "border-white/10 hover:border-white/20 focus:border-[#52BCEE] focus:shadow-[0_0_15px_rgba(82,188,238,0.12)] focus:bg-[#030505]/90"
                          )}
                        />
                      </div>
                      {errors.scope && (
                        <p id="scope-err" className="mt-1.5 text-xs text-[#C53736]">
                          {errors.scope}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={state === "loading"}
                        className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#B7ED51] px-6 py-4 text-sm font-semibold text-[#030505] transition-all duration-300 hover:bg-[#c6f46c] hover:shadow-glow disabled:opacity-60 cursor-pointer shadow-md"
                      >
                        {state === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-[#030505]" />
                            <span>Processing Consultation Request...</span>
                          </>
                        ) : (
                          <span>Request Technical Consultation</span>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground/70 pt-1">
                      <Shield className="h-3.5 w-3.5 text-[#52BCEE]" />
                      <span>Enterprise confidentiality guaranteed. No obligation technical review.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
