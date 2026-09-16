import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const milestones = [
  ["01", "注册域名", "确定 eaea499.cn 作为长期使用的个人站域名。"],
  ["02", "接入服务器", "在阿里云 Ubuntu ECS 上配置 Nginx，并完成 DNS 解析。"],
  ["03", "完成备案与 HTTPS", "ICP 备案通过后，使用 Let's Encrypt 为主域名和 www 配置证书。"],
  ["04", "发布第一版", "用 Next.js 构建静态页面，通过 GitHub 管理代码，再部署到服务器。"],
];

export default function FromDomainToHttpsPage() {
  return <><SiteHeader /><main className="article-page">
    <article className="article-wrap">
      <Link className="back-link" href="/blog"><ArrowLeft size={16} /> 返回博客</Link>
      <header className="article-header"><p className="section-kicker">Web / 2026.09.17</p><h1>从域名到 HTTPS：<br />个人网站的第一条上线链路</h1><p className="article-lead">这不是一份标准教程，而是 eaea499.cn 从一个想法变成可访问网站的真实记录。</p></header>

      <div className="article-rule" />
      <section className="article-prose">
        <p>我想做的不是一张只用于校招的在线简历，而是一个可以长期维护的个人空间。它能放项目、写博客，也能随着学习方向和生活经历慢慢生长。</p>
        <p>所以第一步并不是写页面，而是先把真正属于自己的地址、服务器和访问链路搭起来。网站最终要能被别人打开，也要能被自己持续更新。</p>
        <h2>先把路走通</h2>
        <p>域名确定为 <strong>eaea499.cn</strong> 后，我完成了实名与 DNS 解析；服务器使用中国大陆的 Ubuntu ECS，前面由 Nginx 接收访问。选择这条路径，是因为我希望把备案、部署、证书和后续扩展都放在一套可持续维护的环境里。</p>
        <p>ICP备案通过后，网站终于具备了正式对外访问的基础。接着为主域名和 <strong>www</strong> 子域名配置 HTTPS 证书，并让 HTTP 自动跳转到 HTTPS。地址栏里的锁不只是一个图标，它意味着浏览器与网站之间的连接已经被加密。</p>
      </section>

      <section className="article-timeline" aria-label="上线过程">
        <p className="section-kicker">The path</p>
        {milestones.map(([number, title, text]) => <div className="timeline-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
      </section>

      <section className="article-prose">
        <h2>代码要能回到手里</h2>
        <p>第一版使用 Next.js、TypeScript 和 Tailwind CSS。页面不需要复杂的动画或刻意的装饰，重要的是信息层次、内容和阅读感受。因此首页只保留个人方向、项目和笔记入口；项目、博客、关于页面分别承担各自的内容。</p>
        <p>代码同步到 GitHub 后，网站不再只是服务器上的一份文件。每次更新都有版本记录，也能从任意一台可信的设备继续维护。当前这一版先以静态导出的方式交给 Nginx 托管，足够轻，也足够稳定。</p>
        <h2>从这里继续</h2>
        <p>网站现在已经上线，但它不该就此定型。接下来会补全项目的真实细节、图片和复盘；博客会持续记录物联网、视觉与 Web 开发中的具体问题。等需要文章后台、数据存储或交互功能时，再把它演进为完整的全栈应用。</p>
        <p>先让它好好存在，再慢慢把它写成自己的样子。</p>
      </section>

      <footer className="article-footer"><p>eaea499.cn / 第一篇公开记录</p><Link href="/projects">查看项目 <ArrowUpRight size={17} /></Link></footer>
    </article>
  </main><SiteFooter /></>;
}
