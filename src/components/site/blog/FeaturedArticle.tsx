import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import type { Post } from "@/data/site";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { BlogThumbnail } from "./BlogThumbnail";

interface FeaturedArticleProps {
  post: Post;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <section id="featured-insight" className="relative py-20 md:py-28 bg-[#050808] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[650px] rounded-full bg-[#B7ED51]/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7ED51]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B7ED51]">
                FEATURED INSIGHT
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              Primary Analysis · 01
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group relative block rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035]"
          >
            {/* Top subtle highlight line */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#B7ED51]/40 to-transparent" />

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              {/* LEFT: Large thumbnail in premium visual frame */}
              <div className="lg:col-span-7 relative">
                <BlogThumbnail
                  index={0}
                  slug={post.slug}
                  title={post.title}
                  isFeatured
                  className="aspect-[16/10] sm:aspect-[16/9] w-full"
                />
              </div>

              {/* RIGHT: Article Information */}
              <div className="lg:col-span-5 space-y-6">
                {/* Metadata */}
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[#B7ED51]">
                    <Clock className="h-3.5 w-3.5" />
                    {post.read.toUpperCase()}
                  </span>
                  <span className="h-3 w-px bg-white/10" />
                  <span className="text-muted-foreground/80">TECHNICAL ARCHITECTURE</span>
                </div>

                {/* Large Title */}
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.12] tracking-tight text-[#F5F7F7] transition-colors duration-300 group-hover:text-[#B7ED51]">
                  {post.title}
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#B4BEC1]">
                  Comprehensive analysis and actionable execution principles for businesses targeting regional and hyper-local search dominant positioning with modern technical hygiene.
                </p>

                {/* Editorial Read Link */}
                <div className="pt-2 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-[#F5F7F7] transition-all duration-300 group-hover:border-[#B7ED51] group-hover:bg-[#B7ED51] group-hover:text-[#030505]">
                    <span>Read Full Insight</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    6 min investment
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
