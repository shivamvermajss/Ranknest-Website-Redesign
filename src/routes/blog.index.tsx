import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { posts } from "@/data/site";
import { Reveal } from "@/components/site/motion";
import { Container, PageHero } from "@/components/site/ui";
import { BlogCard, PostArt } from "@/components/site/sections";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => seo("Blog", "Insights on SEO, local SEO, content marketing and digital growth from Ranknest IT."),
  component: Blog,
});

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights for digital growth." />
      <section className="pb-28">
        <Container>
          <Reveal>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid items-center gap-8 md:grid-cols-12">
              <PostArt index={0} className="aspect-[16/10] md:col-span-7 transition-transform duration-700 group-hover:scale-[1.01]" />
              <div className="md:col-span-5">
                <p className="eyebrow">Featured · {featured.read}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight transition-colors group-hover:text-primary md:text-5xl">{featured.title}</h2>
              </div>
            </Link>
          </Reveal>
          <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}><BlogCard p={p} index={i + 1} /></Reveal>
            ))}
          </div>
          <nav className="mt-20 flex justify-center gap-2" aria-label="Pagination">
            {["1", "2", "3", "4", "…", "11"].map((n) => (
              <span key={n} aria-current={n === "1" ? "page" : undefined} className={cn("grid h-11 w-11 place-items-center rounded-full text-sm", n === "1" ? "bg-primary text-primary-foreground" : "glass text-muted-foreground")}>{n}</span>
            ))}
          </nav>
        </Container>
      </section>
    </>
  );
}
