import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { posts } from "@/data/site";
import { BlogHero } from "@/components/site/blog/BlogHero";
import { FeaturedArticle } from "@/components/site/blog/FeaturedArticle";
import { BlogGrid } from "@/components/site/blog/BlogGrid";
import { BlogCTA } from "@/components/site/blog/BlogCTA";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo(
      "Blog",
      "Ranknest IT Insights — Practical, data-backed insights on Search Engine Optimization, local SEO, content marketing, AI chatbot visibility, and sustainable digital growth."
    ),
  component: BlogPage,
});

function BlogPage() {
  const featured = posts[0]!;

  return (
    <div className="relative min-h-screen bg-[#030505] text-[#F5F7F7] selection:bg-[#B7ED51] selection:text-[#030505]">
      {/* 1. Blog Hero with Editorial Headline and Unique InsightNetwork Visual */}
      <BlogHero />

      {/* 2. Featured Article Showcase */}
      <FeaturedArticle post={featured} />

      {/* 3. Latest Insights Editorial Grid with Search & Functional Pagination */}
      <BlogGrid posts={posts} />

      {/* 4. Blog CTA: Ready to turn insights into growth? */}
      <BlogCTA />
    </div>
  );
}
