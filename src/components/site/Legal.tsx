import { Container, PageHero } from "./ui";

export function LegalPage({ title, sections }: { title: string; sections: string[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="pb-28">
        <Container className="max-w-3xl">
          <div className="glass rounded-3xl p-8 md:p-12">
            <p className="text-muted-foreground">The full {title.toLowerCase()} text from Ranknest IT will be published here.</p>
            <ol className="mt-10 space-y-6">
              {sections.map((s, i) => (
                <li key={s} className="border-t border-border pt-6">
                  <h2 className="text-xl font-semibold"><span className="mr-3 text-primary">{String(i + 1).padStart(2, "0")}</span>{s}</h2>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
