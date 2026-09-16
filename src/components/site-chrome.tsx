import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [{ href: "/", label: "首页" }, { href: "/projects", label: "项目" }, { href: "/blog", label: "博客" }, { href: "/about", label: "关于" }];

export function SiteHeader() {
  return <header className="site-header"><div className="site-wrap header-inner"><Link className="brand" href="/" aria-label="返回首页"><span />eaea499.cn</Link><nav aria-label="主导航">{navLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><Link className="header-action" href="/about">建立联系 <ArrowUpRight size={15} /></Link></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-wrap footer-top"><p className="footer-statement">保持好奇，持续构建。</p><Link className="footer-link" href="/about">关于我 <ArrowUpRight size={17} /></Link></div><div className="site-wrap footer-bottom"><p>© 2026 黎俊杰</p><a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">赣ICP备2026022882号-1</a></div></footer>;
}
