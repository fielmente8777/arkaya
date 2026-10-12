import { ArticleType } from "@/@types/articlesPage";
import Image from "next/image";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

type BlogCardProps = Pick<
  ArticleType,
  "slug" | "category" | "readTime" | "title" | "description" | "bannerImage" | "bannerAlt"
>;

/** Story card: banner, "CATEGORY · READ TIME", title, teaser and "Read story →". The whole card is the link. */
const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  category,
  readTime,
  title,
  description,
  bannerImage,
  bannerAlt,
}) => (
  <Link href={`/blogs/${slug}`} className="group flex h-full flex-col gap-3">
    <div className="relative aspect-11/8 w-full overflow-hidden bg-background2">
      <Image
        src={bannerImage}
        alt={bannerAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <p className="text-[11px] uppercase tracking-[0.2em] text-p1">
      {category} · {readTime}
    </p>

    <h3 className="font-primary text-lg leading-snug text-p2 transition-colors group-hover:text-p1 md:text-xl">
      {title}
    </h3>

    <p className="line-clamp-3 text-sm font-light leading-6 text-p5">{description}</p>

    <span className="mt-auto inline-flex w-fit items-center gap-2 border-b border-p1 pb-0.5 text-[11px] uppercase tracking-widest text-p2">
      Read story
      <TbArrowRight
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  </Link>
);

export default BlogCard;
