"use client";

import { ArrowUp, Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function ArticleTools() {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(100, Math.round((window.scrollY / maxScroll) * 100)) : 0);
      setShowTop(window.scrollY > 320);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("复制此链接", window.location.href);
    }
  };

  return <>
    <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
    <aside className={`article-tools${showTop ? " is-visible" : ""}`} aria-label="文章工具">
      <button onClick={copyLink} type="button" title="复制文章链接">{copied ? <Check size={17} /> : <Copy size={17} />}<span>{copied ? "已复制" : "复制链接"}</span></button>
      {showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} type="button" title="返回顶部"><ArrowUp size={17} /><span>顶部</span></button>}
    </aside>
  </>;
}
