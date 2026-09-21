import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [{ href: "/", label: "首页" }, { href: "/projects", label: "项目" }, { href: "/blog", label: "博客" }, { href: "/about", label: "关于" }];

export function SiteHeader() {
  return <header className="site-header"><div className="site-wrap header-inner"><Link className="brand" href="/" aria-label="返回首页"><span />呃啊呃啊</Link><nav aria-label="主导航">{navLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><a className="header-action" href="mailto:eaea499@outlook.com">联系我 <Mail size={15} /></a></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-wrap footer-top"><p className="footer-statement">保持好奇，持续构建。</p><div className="footer-links"><a className="footer-link" href="https://github.com/eaea499" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17} /></a><a className="footer-link" href="mailto:eaea499@outlook.com">邮箱 <Mail size={17} /></a></div></div><div className="site-wrap footer-bottom"><p>© 2026 呃啊呃啊</p><div className="filing-links"><a className="mps-filing" href="https://beian.mps.gov.cn/#/query/webSearch?code=36102402000313" target="_blank" rel="noreferrer"><Image src="/beian-badge.png" alt="公安备案图标" width={18} height={18} />赣公网安备36102402000313号</a><a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">赣ICP备2026022882号-1</a></div></div></footer>;
}
