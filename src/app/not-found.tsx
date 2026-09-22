import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page"><div className="site-wrap not-found-inner"><p className="section-kicker">404 / Page not found</p><h1>这条路径还没有内容。</h1><p>页面可能已经移动，或者链接地址还没有加入网站。</p><div className="not-found-actions"><Link className="button button-primary" href="/"><Home size={17} />返回首页</Link><Link className="button button-secondary" href="/projects"><ArrowLeft size={17} />查看项目</Link></div></div></main>;
}
