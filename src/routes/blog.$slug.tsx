import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { seo } from "@/lib/seo";
import { posts } from "@/data/site";
import { Container } from "@/components/site/ui";
import { CTASection, PostArt, RelatedPosts } from "@/components/site/sections";
import { SplitText } from "@/components/site/motion";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => (loaderData ? seo(loaderData.post.title, `${loaderData.post.title} — ${loaderData.post.read} on the Ranknest IT blog.`) : seo("Article", "Ranknest IT blog")),
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <article className="pt-40">
        <Container className="max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <p className="eyebrow mt-10">{post.read}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl"><SplitText text={post.title} /></h1>
        </Container>
        <Container className="mt-14">
          <PostArt index={posts.indexOf(post)} className="aspect-[21/9]" />
        </Container>
        <Container className="max-w-2xl py-16">
          <div className="space-y-6 text-lg leading-[1.8] text-muted-foreground">
            <p>Full article content will appear here once imported from the original Ranknest IT blog.</p>
          </div>
        </Container>
      </article>
      <section className="py-16">
        <Container>
          <p className="eyebrow mb-10">Related articles</p>
          <RelatedPosts exclude={post.slug} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
