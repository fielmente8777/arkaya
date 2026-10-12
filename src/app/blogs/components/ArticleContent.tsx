import { ArticleBlock, ArticleType } from "@/@types/articlesPage";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "./pagedata";

const CONTACT_URL = `${SITE_URL}/contact-us/`;

const diamond = "size-1.5 shrink-0 rotate-45 bg-p6";

const linkCls = "font-medium text-p1 underline underline-offset-4 hover:text-p5";

const renderBlock = (block: ArticleBlock, i: number) => {
  switch (block.type) {
    case "paragraph":
      return <p key={i} className="text-sm font-light leading-7 text-p5 md:text-base md:leading-8">{block.text}</p>;
    case "quote":
      return (
        <blockquote key={i} className="border-l-2 border-p1 pl-5 font-primary text-lg text-p2 md:text-xl">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-light text-p5 md:text-base">
              <span aria-hidden className={`mt-2.5 ${diamond}`} />
              {item}
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure key={i} className="flex flex-col gap-2">
          <div className="relative aspect-5/3 w-full overflow-hidden">
            <Image src={block.src} alt={block.alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </div>
          {block.caption && <figcaption className="text-xs text-p5">{block.caption}</figcaption>}
        </figure>
      );
    case "faq":
      return (
        <div key={i} className="border-l-2 border-p6/50 pl-5">
          <p className="font-primary text-base text-p2">{block.question}</p>
          <p className="mt-1 text-sm font-light leading-7 text-p5 md:text-base">{block.answer}</p>
        </div>
      );
    case "cta":
      return (
        <p key={i} className="border border-p6/40 bg-p3 p-5 text-sm leading-7 text-p2 md:text-base md:leading-8">
          {block.parts.map((part, j) =>
            typeof part === "string" ? (
              part
            ) : (
              <a key={j} href={`${SITE_URL}${part.href}`} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {part.label}
              </a>
            )
          )}
        </p>
      );
  }
};

/**
 * Article text + sticky sidebar. Renders two siblings (<article>, <aside>) so the parent
 * grid in the page decides the two-column layout.
 */
const ArticleContent: React.FC<Pick<ArticleType, "intro" | "sections" | "tags">> = ({
  intro,
  sections,
  tags,
}) => (
  <>
    <article className="flex flex-col gap-6">
      <p className="text-base font-light italic leading-8 text-p5 md:text-lg">{intro}</p>

      {sections.map(({ id, heading, blocks }) => (
        <section key={id} className="flex flex-col gap-4">
          <h2 id={id} className="scroll-mt-28 pt-2 font-primary text-xl text-p2 md:text-2xl">
            {heading}
          </h2>
          {blocks.map(renderBlock)}
        </section>
      ))}

      <ul className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <li key={tag} className="border border-p6/40 bg-p3 px-3 py-1 text-[11px] uppercase tracking-widest text-p5">
            {tag}
          </li>
        ))}
      </ul>
    </article>

    <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
      <nav aria-label="In this article" className="flex flex-col gap-3 border border-p6/30 bg-p3 p-5">
        <p className="text-[11px] uppercase tracking-widest text-p5">In this article</p>
        <ul className="flex flex-col gap-2">
          {sections.map(({ id, heading }) => (
            <li key={id}>
              <a href={`#${id}`} className="flex items-start gap-3 text-sm text-p2 transition-colors hover:text-p1">
                <span aria-hidden className={`mt-2 ${diamond}`} />
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-start gap-3 bg-linear-to-br from-p1 to-p5 p-6 text-white">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">Plan your stay</p>
        <h3 className="font-primary text-2xl leading-tight">Plan Your Mukteshwar Escape</h3>
        <p className="text-xs font-light leading-5 text-white/90">
          Share your dates and Arkaya will help shape the stay around your plans.
        </p>
        <Link
          href={CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center border border-white px-5 text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-p1"
        >
          Enquire Now
        </Link>
      </div>

    </aside>
  </>
);

export default ArticleContent;
