"use client";

import { ArticlesListType } from "@/@types/articlesPage";
import BlogCard from "@/components/cards/BlogCard";
import { useMemo, useState } from "react";

const ArticlesList: React.FC<ArticlesListType> = ({ title, allLabel, pageSize, posts }) => {
  const [category, setCategory] = useState(allLabel);
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(posts.map((p) => p.category)))],
    [allLabel, posts]
  );

  const filtered = category === allLabel ? posts : posts.filter((p) => p.category === category);
  const totalPages = Math.ceil(filtered.length / pageSize);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  const selectCategory = (c: string) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-p6/30 pb-6 lg:flex-row lg:items-center lg:justify-between">
        {/* <h2 className="font-primary text-2xl text-p2 md:text-3xl">{title}</h2> */}

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => selectCategory(c)}
              aria-pressed={c === category}
              className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-widest transition-colors ${
                c === category ? "bg-p1 text-white" : "bg-p4 text-p2 hover:text-p1"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {visible.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === page ? "page" : undefined}
              className={`size-10 text-sm transition-colors ${
                n === page ? "bg-p1 text-white" : "bg-p3 text-p2 hover:text-p1"
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </>
  );
};

export default ArticlesList;
