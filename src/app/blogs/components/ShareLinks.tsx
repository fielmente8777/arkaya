"use client";

import { useEffect, useState } from "react";

/** "Share: WhatsApp · Facebook · X · Copy link" — builds the links from the current page URL. */
const ShareLinks: React.FC<{ title: string }> = ({ title }) => {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(window.location.href), []);

  const text = encodeURIComponent(title);
  const link = encodeURIComponent(url);
  const cls = "text-[11px] uppercase tracking-widest text-p5 transition-colors hover:text-p1";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — nothing to do */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="text-[11px] uppercase tracking-widest text-p2">Share</span>
      <a className={cls} target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${text}%20${link}`}>WhatsApp</a>
      <a className={cls} target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}>Facebook</a>
      <a className={cls} target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${text}&url=${link}`}>X</a>
      <button type="button" onClick={copy} className={cls}>{copied ? "Copied" : "Copy link"}</button>
    </div>
  );
};

export default ShareLinks;
