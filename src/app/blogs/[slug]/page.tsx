import BlogCard from "@/components/cards/BlogCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import ArticleContent from "../components/ArticleContent";
import { articles, getArticle, getRelatedArticles, SITE_URL } from "../components/pagedata";

/** Route: /blogs/[slug] – e.g. /blogs/romantic-getaway-mukteshwar */
type PageProps = { params: Promise<{ slug: string }> };

// only slugs present in pagedata are valid; anything else goes straight to 404
export const dynamicParams = false;

export const generateStaticParams = () => articles.map(({ slug }) => ({ slug }));

// one lookup shared by generateMetadata + the page within a request
const getPost = cache((slug: string) => getArticle(slug));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Story not found" };

  const { title, description, keyWords } = post.metaData;
  return {
    title,
    description,
    keywords: keyWords,
    alternates: { canonical: `${SITE_URL}/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      images: [{ url: post.bannerImage, alt: post.bannerAlt }],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedArticles(post.slug);

  return (
    <main className="bg-background">
      <section className="px-4 pb-10 pt-12 md:px-8 md:pb-14 md:pt-20">
        <div className="mx-auto flex max-w-330 flex-col items-center gap-8 md:gap-10">
          <header className="flex max-w-3xl flex-col items-center gap-4 text-center">
            <Link href="/blogs" className="text-[11px] uppercase tracking-widest text-p5 hover:text-p1">
              ← All stories
            </Link>
            <p className="text-[11px] uppercase tracking-[0.25em] text-p1">
              {post.category} · {post.readTime}
            </p>
            <h1 className="font-primary text-3xl leading-tight text-p2 md:text-[48px] md:leading-14">
              {post.title}
            </h1>
            <p className="text-base font-light italic text-p5 md:text-xl">{post.description}</p>
            <p className="text-xs uppercase tracking-widest text-p6">
              {post.author} · {post.publishedAt}
            </p>
          </header>

          <div className="relative aspect-4/3 w-full overflow-hidden bg-background2 md:aspect-11/5">
            <Image
              src={post.bannerImage}
              alt={post.bannerAlt}
              fill
              priority
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 md:px-8 md:pb-16">
        <div className="mx-auto grid max-w-330 items-start gap-10 lg:grid-cols-[5fr_3fr] lg:gap-16">
          <ArticleContent {...post} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-p6/30 bg-background2 px-4 py-12 md:px-8 md:py-16">
          <div className="mx-auto flex max-w-330 flex-col gap-8 md:gap-10">
            <div className="flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-p1">Keep reading</p>
                <h2 className="font-primary text-2xl text-p2 md:text-3xl">More from the Journal</h2>
              </div>
              <Link href="/blogs" className="shrink-0 border-b border-p1 pb-0.5 text-[11px] uppercase tracking-widest text-p2">
                All stories
              </Link>
            </div>

            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
              {related.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
