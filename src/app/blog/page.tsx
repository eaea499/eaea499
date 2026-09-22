import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const notes = [
  { category: "WEB", title: "从域名到 HTTPS：个人网站的第一条上线链路", description: "把域名、备案、服务器、证书和上线过程整理成一条真实记录。", href: "/blog/from-domain-to-https", status: "2026.09.17" },
  { category: "IOT", title: "设备端、消息与页面：怎样看待一次物联网联调", description: "把感知、通信、控制拆开，再重新连成一条能观察的链路。", href: "/blog/smart-streetlight-debugging", status: "2026.09.21" },
];

export default function BlogPage() {
  return <><SiteHeader /><main className="inner-page"><div className="site-wrap page-heading blog-heading"><p className="section-kicker">Notes</p><h1>把踩过的坑和<br />想明白的事写下来。</h1><p>记录项目复盘、开发过程和学习理解。不追求高产，只写确实做过、真正想清楚的内容。</p></div><section className="site-wrap draft-list" aria-label="文章列表">{notes.map((note, index) => {
    const content = <><div className="draft-index">0{index + 1}</div><div><p className="detail-kind">{note.category} / {note.status}</p><h2>{note.title}</h2><p>{note.description}</p></div><BookOpen size={24} strokeWidth={1.5} /></>;
    return <Link className="draft-link" href={note.href} key={note.title}>{content}</Link>;
  })}</section><section className="site-wrap page-cta"><p>文章会按时间沉淀，也会随新的实践持续修订。</p><Link href="/projects">先看项目 <ArrowUpRight size={18} /></Link></section></main><SiteFooter /></>;
}
