import { ShieldCheck, Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServiceCommitment() {
  return (
    <section className="relative overflow-hidden py-16 bg-[#040708]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#B7ED51]/30 bg-[#080D0E]/90 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(183,237,81,0.12)]">
          {/* Subtle Ambient Lime Radiance */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #B7ED51 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Badge Lockup */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B7ED51]/40 bg-[#B7ED51]/10 text-[#B7ED51] shadow-[0_0_20px_rgba(183,237,81,0.25)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B7ED51] font-semibold">
                    CLIENT PROTECTION PROTOCOL
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Service Commitment
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-[#B4BEC1]">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1">
                  <Check className="h-3 w-3 text-[#B7ED51]" /> 100% Safe & Secure
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1">
                  <Check className="h-3 w-3 text-[#52BCEE]" /> 24/7 Dedicated Support
                </span>
              </div>
            </div>

            {/* Right Guarantee Narrative (Exact wording from client source preserved!) */}
            <div className="lg:col-span-8 space-y-3 border-t border-white/8 pt-6 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-8 lg:pt-0">
              <p className="text-sm sm:text-base leading-relaxed text-[#F5F7F7]">
                Your satisfaction is our priority—if we are unable to deliver your order according to
                our service terms, you&apos;re covered by our{" "}
                <span className="font-bold text-[#B7ED51]">100% Money-Back Guarantee</span> as outlined
                in our refund policy. Choose Ranknest IT for affordable, trusted, and results-driven
                social media growth solutions.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#B4BEC1]/70 font-mono">
                  REFUND POLICY COMPLIANT • ZERO MANIPULATION RISKS • CONFIDENTIAL DELIVERY
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#B7ED51] hover:underline"
                >
                  <span>Inquire About Terms</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
