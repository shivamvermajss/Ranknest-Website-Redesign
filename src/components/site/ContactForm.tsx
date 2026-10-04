import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "phone" | "scope", string>>;

/** Clean, backend-ready form. Replace `submit` with a real API call when available. */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = Object.fromEntries(fd) as Record<string, string>;
    const errs: Errors = {};
    if (!v["name"]?.trim()) errs.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(v["email"] ?? "")) errs.email = "Please enter a valid email.";
    if (v["phone"] && !/^[+\d\s()-]{7,20}$/.test(v["phone"])) errs.phone = "Please enter a valid phone number.";
    if ((v["scope"] ?? "").trim().length < 10) errs.scope = "Tell us a little more (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
  }

  if (state === "done")
    return (
      <div className="glass flex flex-col items-center rounded-3xl p-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-6 text-2xl font-semibold">Request received</h3>
        <p className="mt-3 text-muted-foreground">Thank you — our team will get back to you shortly.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-3xl p-7 md:p-10">
      <Field name="name" label="Full Name" error={errors.name} autoComplete="name" />
      <Field name="email" label="Corporate Email" type="email" error={errors.email} autoComplete="email" />
      <Field name="phone" label="Phone Number" type="tel" error={errors.phone} autoComplete="tel" />
      <Field name="scope" label="Project Scope & AI Readiness Goals" textarea error={errors.scope} placeholder="Describe your current search challenges or system requirements..." />
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow disabled:opacity-70"
      >
        {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Request Technical Consultation
      </button>
    </form>
  );
}

function Field({ name, label, error, textarea, ...rest }: { name: string; label: string; error?: string | undefined; textarea?: boolean; type?: string; placeholder?: string; autoComplete?: string }) {
  const cls = cn(
    "w-full rounded-xl border bg-background/40 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:bg-background/60",
    error ? "border-destructive" : "border-input",
  );
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea id={name} name={name} rows={5} className={cls} aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} {...rest} />
      ) : (
        <input id={name} name={name} className={cls} aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} {...rest} />
      )}
      {error && <p id={`${name}-err`} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
