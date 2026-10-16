import { Metadata } from "next";
import ArticlesList from "./components/ArticlesList";
import { ArticlesPageData } from "./components/pagedata";

export const metadata: Metadata = {
  title: "Journal | Arkaya Mukteshwar",
  description:
    "Itineraries, seasonal guides and planning notes for slow, memorable stays in Mukteshwar.",
};

export default function Articles() {
  const { hero, list } = ArticlesPageData;

  return (
    <main className="bg-background">
      <section className="border-b border-p6/30 bg-background2 px-4 py-14 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-330 flex-col items-center gap-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-p1">{hero.eyebrow}</p>
          <h1 className="font-primary text-4xl leading-tight text-p2 md:text-[56px] md:leading-16">
            {hero.title}
          </h1>
          <span aria-hidden className="h-px w-16 bg-p6" />
          <p className="max-w-xl text-sm font-light text-p5 md:text-base">{hero.description}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-330 flex-col gap-8 md:gap-10">
          <ArticlesList {...list} />
        </div>
      </section>
    </main>
  );
}

