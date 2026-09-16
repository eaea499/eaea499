import { ArrowUpRight, Camera, Cpu, Network, Sparkles } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const focusAreas = [
  { icon: Cpu, index: "01", title: "嵌入式与设备", text: "从 STM32、ESP32 到传感器与执行模块，关注设备端稳定采集和控制。" },
  { icon: Camera, index: "02", title: "视觉感知", text: "使用 OpenCV 与 YOLOv8 处理图像，把识别结果带回真实的应用场景。" },
  { icon: Network, index: "03", title: "设备与平台联调", text: "通过 MQTT、HTTP 串起感知、通信、控制与数据展示，持续打磨完整链路。" },
];

const projects = [
  { label: "IoT / Control", title: "智能路灯系统", text: "围绕环境感知、设备控制与平台展示展开的物联网实践，关注从数据采集到设备响应的完整闭环。", tags: ["STM32", "传感器", "MQTT"], className: "project-card project-card-lamp" },
  { label: "Vision / Edge", title: "ESP32-S3-CAM 视觉采集", text: "以摄像头模组为起点进行图像采集与传输，让轻量硬件也能成为感知系统的一部分。", tags: ["ESP32-S3-CAM", "HTTP", "图像采集"], className: "project-card project-card-camera" },
  { label: "Python / CV", title: "图像处理实践", text: "用 Python、OpenCV 与 YOLOv8 完成图像处理和检测相关探索，记录每次联调里的具体问题。", tags: ["Python", "OpenCV", "YOLOv8"], className: "project-card project-card-vision" },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="site-wrap hero-content">
          <p className="eyebrow"><Sparkles size={15} /> 个人作品集 / 持续建设中</p>
          <h1 id="hero-title">把感知、通信与<br />控制做成能运行的系统。</h1>
          <p className="hero-summary">我是黎俊杰，一名物联网工程本科生。这里记录真实的项目实践、学习笔记，以及从设备端走向 Web 的每一步。</p>
          <div className="hero-actions"><Link className="button button-primary" href="/projects">查看项目 <ArrowUpRight size={18} /></Link><Link className="button button-secondary" href="/about">关于我</Link></div>
        </div>
        <div className="hero-index" aria-hidden="true">EA / 499</div>
      </section>

      <section className="intro-band"><div className="site-wrap intro-grid"><p className="section-kicker">目前在做</p><p className="intro-copy">不只做单点功能。更在意一套系统里，设备如何感知、数据如何抵达、控制如何发生，以及最后如何被人看见。</p></div></section>

      <section className="section site-wrap" id="focus" aria-labelledby="focus-title">
        <div className="section-heading"><div><p className="section-kicker">Focus</p><h2 id="focus-title">正在积累的能力</h2></div><p>从嵌入式基础出发，向全栈 Web 与可展示的完整作品持续延伸。</p></div>
        <div className="focus-grid">{focusAreas.map(({ icon: Icon, index, title, text }) => <article className="focus-item" key={title}><div className="focus-top"><span>{index}</span><Icon size={24} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title"><div className="site-wrap">
        <div className="section-heading section-heading-light"><div><p className="section-kicker">Selected work</p><h2 id="projects-title">项目不是关键词堆砌</h2></div><Link className="text-link" href="/projects">查看全部 <ArrowUpRight size={17} /></Link></div>
        <div className="projects-grid">{projects.map((project) => <article className={project.className} key={project.title}><div className="project-visual" aria-hidden="true"><span className="project-visual-line" /><span className="project-visual-dot dot-one" /><span className="project-visual-dot dot-two" /></div><p>{project.label}</p><h3>{project.title}</h3><p className="project-text">{project.text}</p><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section site-wrap notes-section" id="notes" aria-labelledby="notes-title">
        <div className="section-heading"><div><p className="section-kicker">Notes</p><h2 id="notes-title">学习记录，正在写入</h2></div><Link className="text-link text-link-dark" href="/blog">进入博客 <ArrowUpRight size={17} /></Link></div>
        <div className="notes-list"><article><span>01</span><div><p>从一块开发板开始，重新理解感知与连接</p><small>嵌入式 / 即将发布</small></div><ArrowUpRight size={20} /></article><Link href="/blog/from-domain-to-https"><span>02</span><div><p>从域名到 HTTPS：个人网站的第一条上线链路</p><small>Web / 2026.09.17</small></div><ArrowUpRight size={20} /></Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
