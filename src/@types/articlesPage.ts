export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "faq"; question: string; answer: string }
  /** closing call-to-action line: plain strings mixed with link objects (href is a site path) */
  | { type: "cta"; parts: Array<string | ArticleLink> };

export interface ArticleLink {
  label: string;
  href: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  blocks: ArticleBlock[];
}

export interface ArticleType {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  bannerImage: string;
  bannerAlt: string;
  metaData: { title: string; description: string; keyWords: string };
  intro: string;
  tags: string[];
  sections: ArticleSection[];
}

export interface ArticlesHeroType {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ArticlesListType {
  title: string;
  allLabel: string;
  pageSize: number;
  posts: ArticleType[];
}
