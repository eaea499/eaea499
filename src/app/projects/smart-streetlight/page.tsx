import { ArrowLeft, ArrowUpRight, Camera, Check, Cpu, Database, GitBranch, Lightbulb, Radio, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "智能路灯系统 | eaea499.cn",
  description: "基于 ESP32-S3-CAM、MQTT 与 YOLOv8 的智能路灯物联网系统案例。",
};

const technologies = ["ESP32-S3-CAM", "ESP-IDF", "MQTT / EMQX", "Spring Boot", "React / Vite", "Python / YOLOv8"];

const capabilities = [
  { icon: Lightbulb, title: "环境感知与调光", text: "通过 D23 光敏模块判断昼夜，结合人流识别结果自动调整路灯亮度。" },
  { icon: Camera, title: "边缘图像采集", text: "ESP32-S3-CAM 提供拍照与视频流，视觉服务在电脑端完成 YOLOv8 推理。" },
  { icon: Radio, title: "消息通信与控制", text: "使用 MQTT 串起遥测、视觉、故障和控制命令，支持单灯与广播控制。" },
  { icon: ShieldCheck, title: "故障与安全回退", text: "INA219 检测异常电流；视觉服务超时后自动回到高亮，避免路灯误判过暗。" },
];

const flow = [
  { icon: Cpu, title: "设备节点", text: "D23 / INA219 / LED PWM / OV3660" },
  { icon: Radio, title: "消息总线", text: "EMQX / MQTT telemetry、vision、fault、command" },
  { icon: Database, title: "服务与界面", text: "Spring Boot API + React Web/PWA" },
];

export default function SmartStreetlightPage() {
  return <>
    <header className="site-header"><div className="site-wrap header-inner"><Link className="brand" href="/"><span />eaea499.cn</Link><nav aria-label="主导航"><Link href="/projects">项目</Link><Link href="/blog">博客</Link><Link href="/about">关于</Link></nav><Link className="header-action" href="/projects"><ArrowLeft size={16} />返回项目</Link></div></header>
    <main className="case-page">
      <section className="case-hero"><div className="site-wrap case-hero-inner"><div><p className="eyebrow">PROJECT 01 / IOT SYSTEM</p><h1>智能路灯系统</h1><p className="case-lead">一个从传感器、设备控制到 Web 展示的物联网原型，尝试把“路灯什么时候该亮、应该多亮”变成一条可以观察、联调和验证的完整链路。</p><div className="case-actions"><a className="button button-primary" href="https://github.com/eaea499" target="_blank" rel="noreferrer">查看 GitHub <ArrowUpRight size={17} /></a><Link className="button button-secondary" href="/projects">返回项目列表</Link></div></div><dl className="case-meta"><div><dt>项目类型</dt><dd>课程设计 / 物联网实践</dd></div><div><dt>当前状态</dt><dd>双节点联网联调完成</dd></div><div><dt>我的角色</dt><dd>系统设计与全链路开发</dd></div></dl></div></section>

      <section className="case-intro"><div className="site-wrap case-intro-grid"><p className="section-kicker">Overview</p><p>项目围绕两个 ESP32-S3-CAM 路灯节点展开。设备采集光照、电流和图像信息，消息平台负责传输，后端和 Web/PWA 负责状态展示与控制，最终形成“感知 - 判断 - 执行 - 反馈”的闭环。</p></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Architecture</p><h2>一条可追踪的系统链路</h2></div><p>每一层都有明确职责，便于单独调试，也便于从设备问题定位到平台反馈。</p></div><div className="case-flow">{flow.map(({ icon: Icon, title, text }, index) => <div className="case-flow-item" key={title}><span>0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p>{index < flow.length - 1 && <ArrowUpRight className="case-flow-arrow" size={20} />}</div>)}</div></section>

      <section className="case-section case-section-muted"><div className="site-wrap"><div className="section-heading"><div><p className="section-kicker">Capabilities</p><h2>核心功能</h2></div><p>功能围绕真实场景验证，而不是只停留在单个模块演示。</p></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="case-section site-wrap"><div className="case-split"><div><p className="section-kicker">Control policy</p><h2>把策略写成可验证的规则</h2><p className="case-copy">系统先根据光照判断昼夜，再根据视觉服务返回的人流结果决定亮度。策略有明确的安全边界，视觉服务不可用时不会保持低亮，而是回到高亮状态。</p></div><div className="policy-list"><div><span>白天</span><strong>0%</strong><p>路灯关闭</p></div><div><span>夜晚 · 无人</span><strong>30%</strong><p>保持基础照明</p></div><div><span>夜晚 · 有人</span><strong>100%</strong><p>恢复高亮照明</p></div><div><span>vision 超时</span><strong>100%</strong><p>安全回退</p></div></div></div></section>

      <section className="case-section case-section-dark"><div className="site-wrap case-split"><div><p className="section-kicker">My contribution</p><h2>我负责的部分</h2><p className="case-copy">从设备端到 Web 端参与完整链路开发和联调，重点处理不同模块之间的协议、状态和异常反馈。</p></div><ul className="contribution-list"><li><Check size={18} />设计设备状态、控制命令与 MQTT 主题</li><li><Check size={18} />完成传感器采集、PWM 调光、摄像头服务和故障判断</li><li><Check size={18} />接入 Spring Boot API、SSE 实时推送与 React/PWA 界面</li><li><Check size={18} />验证双节点在线、批量控制与 vision 超时安全回退</li></ul></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Field notes</p><h2>联调时真正遇到的问题</h2></div><Link className="text-link" href="/blog/smart-streetlight-debugging">阅读完整记录 <ArrowUpRight size={17} /></Link></div><div className="case-notes"><article><span>01</span><div><h3>先分层，再定位</h3><p>把设备、MQTT、后端和前端拆开验证，避免把通信问题误判成页面问题。</p></div></article><article><span>02</span><div><h3>异常也要有明确行为</h3><p>视觉服务超时后回到高亮，故障变化通过独立主题上报，系统不会静默失败。</p></div></article><article><span>03</span><div><h3>用回执确认控制结果</h3><p>单灯和广播命令都保留 commandAck，便于确认多节点是否真正执行。</p></div></article></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Technology</p><h2>技术栈</h2></div><p>选择每项技术，是为了匹配它在链路中的具体职责。</p></div><div className="case-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="case-boundary"><p className="section-kicker">Current boundary</p><p>目前是局域网内可运行的原型系统，后端状态保存在内存中。公网部署、账号鉴权、历史数据持久化和正式生产安全策略仍属于后续工作。</p></div></section>

      <section className="site-wrap case-end"><Link className="back-link" href="/projects"><ArrowLeft size={16} />返回全部项目</Link><a className="text-link" href="https://github.com/eaea499" target="_blank" rel="noreferrer">访问 GitHub <GitBranch size={17} /></a></section>
    </main>
  </>;
}
