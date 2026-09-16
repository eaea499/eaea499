import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const drafts = [
  { category: "WEB", title: "从域名、备案到 HTTPS：个人网站的第一条上线链路", description: "记录 eaea499.cn 从零开始接入公网的过程。" },
  { category: "IOT", title: "设备端、消息与页面：怎样看待一次物联网联调", description: "把感知、通信、控制拆开，再重新连成一条能观察的链路。" },
  { category: "CV", title: "从图像采集到检测结果：我在视觉实践中关注什么", description: "不止看模型输出，也看输入、环境和整个实现过程。" },
];

export default function BlogPage() {
  return <><SiteHeader /><main className="inner-page"><div className="site-wrap page-heading blog-heading"><p className="section-kicker">Notes</p><h1>把踩过的坑和<br />想明白的事写下来。</h1><p>博客刚开始建设。文章会以项目复盘、开发记录和学习理解为主。</p></div><section className="site-wrap draft-list" aria-label="即将发布的文章">{drafts.map((draft, index) => <article key={draft.title}><div className="draft-index">0{index + 1}</div><div><p className="detail-kind">{draft.category} / 即将发布</p><h2>{draft.title}</h2><p>{draft.description}</p></div><BookOpen size={24} strokeWidth={1.5} /></article>)}</section><section className="site-wrap page-cta"><p>文章发布后会在这里按时间归档。</p><Link href="/projects">先看项目 <ArrowUpRight size={18} /></Link></section></main><SiteFooter /></>;
}
