import { ArrowUpRight, Camera, Cpu, Network } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const focusAreas = [
  { icon: Cpu, index: "01", title: "嵌入式与设备", text: "从 STM32、ESP32 到传感器与执行模块，关注设备端稳定采集和控制。" },
  { icon: Camera, index: "02", title: "视觉感知", text: "使用 OpenCV 与 YOLOv8 处理图像，把识别结果带回真实的应用场景。" },
  { icon: Network, index: "03", title: "设备与平台联调", text: "通过 MQTT、HTTP 串起感知、通信、控制与数据展示，持续打磨完整链路。" },
];

const projects = [
  { label: "IoT / Control", title: "智能路灯系统", text: "围绕环境感知、设备控制与平台展示展开的物联网实践，关注从数据采集到设备响应的完整闭环。", tags: ["ESP32-S3", "MQTT", "YOLOv8"], href: "/projects/smart-streetlight" },
  { label: "Vision / Edge", title: "ESP32-S3-CAM 视觉采集", text: "以摄像头模组为起点进行图像采集与传输，让轻量硬件也能成为感知系统的一部分。", tags: ["ESP32-S3-CAM", "HTTP", "图像采集"] },
  { label: "Python / CV", title: "图像处理实践", text: "用 Python、OpenCV 与 YOLOv8 完成图像处理和检测相关探索，记录每次联调里的具体问题。", tags: ["Python", "OpenCV", "YOLOv8"] },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="site-wrap hero-grid">
          <div className="hero-content">
            <p className="eyebrow">PERSONAL SITE / 2026</p>
            <h1 id="hero-title">让设备、数据与<br />体验可靠协同。</h1>
            <p className="hero-summary">我是杰子，物联网工程本科生。这里沉淀真实项目、开发记录，以及从嵌入式走向 Web 的持续实践。</p>
            <div className="hero-actions"><Link className="button button-primary" href="/projects">查看项目 <ArrowUpRight size={17} /></Link><Link className="button button-secondary" href="/about">了解更多</Link></div>
          </div>
          <div className="hero-photo" role="img" aria-label="电子电路板特写" />
        </div>
      </section>

      <section className="overview"><div className="site-wrap overview-grid"><p className="section-kicker">Current focus</p><p>不只完成单点功能，更关注一套系统里设备如何感知、数据如何抵达、控制如何发生，以及最后如何被人理解和使用。</p></div></section>

      <section className="section site-wrap" id="focus" aria-labelledby="focus-title">
        <div className="section-heading"><div><p className="section-kicker">Focus</p><h2 id="focus-title">正在积累的能力</h2></div><p>从嵌入式基础出发，向全栈 Web 与可展示的完整作品持续延伸。</p></div>
        <div className="focus-grid">{focusAreas.map(({ icon: Icon, index, title, text }) => <article className="focus-item" key={title}><div className="focus-top"><span>{index}</span><Icon size={24} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section site-wrap featured-work" id="projects" aria-labelledby="projects-title">
        <div className="section-heading"><div><p className="section-kicker">Selected work</p><h2 id="projects-title">代表项目</h2></div><Link className="text-link text-link-dark" href="/projects">查看全部 <ArrowUpRight size={17} /></Link></div>
        <div className="project-list">{projects.map((project, index) => <Link className="project-row" href={project.href ?? "/projects"} key={project.title}><span className="project-row-index">0{index + 1}</span><div><p className="detail-kind">{project.label}</p><h3>{project.title}</h3><p>{project.text}</p></div><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><ArrowUpRight className="project-row-arrow" size={20} /></Link>)}</div>
      </section>

      <section className="section site-wrap notes-section" id="notes" aria-labelledby="notes-title">
        <div className="section-heading"><div><p className="section-kicker">Notes</p><h2 id="notes-title">学习记录，正在写入</h2></div><Link className="text-link text-link-dark" href="/blog">进入博客 <ArrowUpRight size={17} /></Link></div>
        <div className="notes-list"><article><span>01</span><div><p>从一块开发板开始，重新理解感知与连接</p><small>嵌入式 / 即将发布</small></div><ArrowUpRight size={20} /></article><Link href="/blog/from-domain-to-https"><span>02</span><div><p>从域名到 HTTPS：个人网站的第一条上线链路</p><small>Web / 2026.09.17</small></div><ArrowUpRight size={20} /></Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
