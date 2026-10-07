import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Post } from "@/data/site";
import { Container } from "../ui";
import { Reveal } from "../motion";
import { BlogThumbnail } from "./BlogThumbnail";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("1");

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase();
    return posts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q)
    );
  }, [posts, searchQuery]);

  const handlePageChange = (p: string) => {
    if (p === "…" || p === currentPage) return;
    setCurrentPage(p);
    const el = document.getElementById("latest-insights");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pages = ["1", "2", "3", "4", "…", "11"];

  return (
    <section id="latest-insights" className="relative py-20 md:py-28 bg-[#030505]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#52BCEE]/5 blur-[160px]"
        aria-hidden="true"
      />

      <Container className="relative space-y-12">
        {/* Section Header & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-8">
          <div className="space-y-2">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#52BCEE]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#52BCEE]">
                  EDITORIAL ARCHIVE
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F7F7]">
                Latest Insights
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm text-[#B4BEC1] max-w-lg">
                Field research, search algorithmic analyses, and technical methodologies to scale organic reach.
              </p>
            </Reveal>
          </div>

          {/* Section 17: Premium Search Bar with Cyan/Lime Focus Glow */}
          <Reveal delay={0.15}>
            <div className="relative w-full md:w-80">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground/60 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search insights..."
                  className="w-full rounded-full border border-white/10 bg-[#060b0c]/80 pl-10 pr-9 py-2.5 text-xs text-[#F5F7F7] placeholder:text-muted-foreground/50 outline-none transition-all duration-300 hover:border-white/20 focus:border-[#52BCEE] focus:shadow-[0_0_20px_rgba(82,188,238,0.18)]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 text-muted-foreground hover:text-white transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="absolute right-1 -bottom-5 text-[10px] text-muted-foreground font-mono">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Empty state if search has no results */}
        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center space-y-3">
            <p className="text-base text-[#F5F7F7] font-medium">
              No articles found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-muted-foreground">
              Try searching for &quot;SEO&quot;, &quot;Content&quot;, &quot;AI&quot;, or &quot;Video&quot;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-2 text-xs font-semibold text-[#B7ED51] hover:underline cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          /* Refined 3-Column Editorial Grid */
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={post.slug} delay={(idx % 3) * 0.08}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group relative flex flex-col h-full rounded-2xl border border-transparent p-3 sm:p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                  >
                    {/* Thumbnail Frame */}
                    <div className="relative overflow-hidden rounded-xl">
                      <BlogThumbnail
                        index={idx}
                        slug={post.slug}
                        title={post.title}
                        className="aspect-[16/10] w-full"
                      />
                    </div>

                    {/* Metadata & Numbering Header */}
                    <div className="mt-5 flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <span className="font-mono text-xs font-semibold text-muted-foreground/60 transition-colors group-hover:text-[#B7ED51]">
                        {num}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                        <Clock className="h-3 w-3 text-[#B7ED51]" />
                        <span>{post.read}</span>
                      </div>
                    </div>

                    {/* Article Title */}
                    <h3 className="mt-3.5 font-display text-lg sm:text-xl font-semibold leading-snug tracking-tight text-[#F5F7F7] transition-colors duration-200 group-hover:text-[#B7ED51]">
                      {post.title}
                    </h3>

                    {/* Footer link with arrow movement */}
                    <div className="mt-auto pt-6 flex items-center justify-between text-xs font-semibold text-muted-foreground transition-colors group-hover:text-[#F5F7F7]">
                      <span className="text-[11px] uppercase tracking-wider">
                        Technical Report
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#B7ED51] transition-transform duration-300 group-hover:translate-x-1">
                        Read
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Subtle bottom active accent bar */}
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-[#B7ED51] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Section 15: Functional Client-Side Pagination */}
        <div className="pt-8">
          <nav
            className="flex items-center justify-center gap-2"
            aria-label="Pagination Navigation"
          >
            {/* Prev arrow */}
            <button
              type="button"
              onClick={() => {
                const num = parseInt(currentPage);
                if (num > 1) handlePageChange(String(num - 1));
              }}
              disabled={currentPage === "1"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-all duration-200 hover:border-white/20 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page number buttons */}
            {pages.map((p) => {
              const isActive = currentPage === p;
              const isEllipsis = p === "…";

              if (isEllipsis) {
                return (
                  <span
                    key={p}
                    className="grid h-10 w-10 place-items-center text-sm font-mono text-muted-foreground/60 select-none"
                  >
                    …
                  </span>
                );
              }

              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePageChange(p)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer border",
                    isActive
                      ? "border-[#B7ED51] bg-[#B7ED51] text-[#030505] shadow-[0_0_15px_rgba(183,237,81,0.35)]"
                      : "border-white/10 bg-white/[0.02] text-muted-foreground hover:border-[#52BCEE]/50 hover:text-[#52BCEE] hover:bg-white/[0.05]"
                  )}
                >
                  {p.padStart(2, "0")}
                </button>
              );
            })}

            {/* Next arrow */}
            <button
              type="button"
              onClick={() => {
                const num = parseInt(currentPage);
                if (num < 11) handlePageChange(String(num + 1));
              }}
              disabled={currentPage === "11"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-all duration-200 hover:border-white/20 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </Container>
    </section>
  );
}
