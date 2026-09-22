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
  { label: "Vision / Desktop", title: "智慧校园证件照标准化预处理系统", text: "面向校园证件照制作场景的桌面端视觉工具，将检测、裁剪、背景替换和图像增强组织成清晰流程。", tags: ["Python", "OpenCV", "PyQt5"], href: "/projects/id-photo-processor" },
  { label: "Embedded / C", title: "STM32 硬件编程综合实训", text: "围绕 STM32F103C8 完成多组外设驱动与硬件联调，从 GPIO 基础控制延伸到传感器、显示和通信。", tags: ["STM32", "C", "HAL"], href: "/projects/stm32-training" },
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
        <div className="section-heading"><div><p className="section-kicker">Notes</p><h2 id="notes-title">学习记录</h2></div><Link className="text-link text-link-dark" href="/blog">进入博客 <ArrowUpRight size={17} /></Link></div>
        <div className="notes-list"><Link href="/blog/smart-streetlight-debugging"><span>01</span><div><p>设备端、消息与页面：怎样看待一次物联网联调</p><small>IoT / 2026.09.21</small></div><ArrowUpRight size={20} /></Link><Link href="/blog/from-domain-to-https"><span>02</span><div><p>从域名到 HTTPS：个人网站的第一条上线链路</p><small>Web / 2026.09.17</small></div><ArrowUpRight size={20} /></Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
