import { motion } from "framer-motion";
import { Eye, BarChart3, Users, CheckCircle2 } from "lucide-react";
import { LocalMediaFrame } from "./LocalMediaFrame";

export function WhyChooseRanknestLocal() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050809] border-t border-white/6 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] rounded-full bg-[#B7ED51]/4 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Client Content & Conceptual Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono text-[#B7ED51] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span>THE RANKNEST ADVANTAGE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7F7] leading-tight">
              Why Choose Ranknest IT <br />
              <span className="text-[#B7ED51]">for Local SEO?</span>
            </h2>

            {/* Verbatim Supporting Content */}
            <p className="text-base sm:text-lg text-[#AEB8BA] leading-relaxed">
              At Rank Nest IT, we combine industry expertise, data-driven strategies, and ethical
              SEO practices to help businesses achieve sustainable local search success. We focus
              on delivering long-term results by improving your website, strengthening your local
              authority, optimizing your online presence, and creating meaningful customer
              experiences.
            </p>

            <p className="text-sm sm:text-base text-[#AEB8BA]/85 leading-relaxed">
              Every strategy is tailored to your business goals, ensuring that your company attracts
              more qualified local customers while staying ahead of the competition.
            </p>

            {/* 3 Conceptual Strengths Derived Strictly from Content */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Strength 1: Local Visibility */}
              <div className="rounded-2xl border border-white/8 bg-[#030505]/80 p-4 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#B7ED51]/30 bg-[#B7ED51]/15 text-[#B7ED51]">
                  <Eye className="h-4 w-4" />
                </div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  LOCAL VISIBILITY
                </div>
                <p className="text-xs text-[#AEB8BA] leading-relaxed">
                  Strengthening your digital presence across Google Maps, 3-Pack, and local
                  directories.
                </p>
              </div>

              {/* Strength 2: Data-Driven Strategy */}
              <div className="rounded-2xl border border-white/8 bg-[#030505]/80 p-4 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#52BCEE]/30 bg-[#52BCEE]/15 text-[#52BCEE]">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  DATA-DRIVEN STRATEGY
                </div>
                <p className="text-xs text-[#AEB8BA] leading-relaxed">
                  Ethical, customized optimization that targets high buying-intent local queries.
                </p>
              </div>

              {/* Strength 3: Local Customer Discovery */}
              <div className="rounded-2xl border border-white/8 bg-[#030505]/80 p-4 space-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#B7ED51]/30 bg-[#B7ED51]/15 text-[#B7ED51]">
                  <Users className="h-4 w-4" />
                </div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  CUSTOMER DISCOVERY
                </div>
                <p className="text-xs text-[#AEB8BA] leading-relaxed">
                  Transforming nearby search visibility into direct customer calls, inquiries, and
                  visits.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Media Frame with Authentic Client Image */}
          <div className="lg:col-span-5 flex justify-center">
            <LocalMediaFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
