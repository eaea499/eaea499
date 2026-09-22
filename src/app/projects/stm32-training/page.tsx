import { ArrowLeft, ArrowUpRight, Cpu, Gauge, Lightbulb, Radio, ScanLine, ShieldCheck, Thermometer } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "STM32 硬件编程综合实训 | eaea499.cn",
  description: "基于 STM32F103C8、C、HAL 和 Keil 的嵌入式外设驱动与硬件联调项目。",
};

const technologies = ["STM32F103C8", "C", "STM32 HAL", "Keil MDK-ARM", "STM32CubeMX", "I2C / UART / PWM"];

const capabilities = [
  { icon: Cpu, title: "GPIO 与按键控制", text: "从 LED、蜂鸣器和继电器等基础外设开始，理解输入输出和状态控制。" },
  { icon: Thermometer, title: "传感器采集", text: "接入 DHT11、MQ2 等模块，完成数据读取、阈值判断和异常反馈。" },
  { icon: ScanLine, title: "OLED 与交互反馈", text: "使用 OLED 显示温湿度、触摸状态和灯带模式，让设备状态可观察。" },
  { icon: Lightbulb, title: "灯带与定时控制", text: "通过定时器和 PWM 控制 WS2813 灯带，实现颜色切换和动态效果。" },
];

const flow = [
  { icon: Cpu, title: "底层初始化", text: "时钟、GPIO、定时器和 HAL 外设配置" },
  { icon: Radio, title: "模块驱动", text: "传感器、显示、按键和串口模块接入" },
  { icon: Gauge, title: "综合联调", text: "用中断、阈值和状态机组织设备行为" },
];

export default function Stm32TrainingPage() {
  return <>
    <header className="site-header"><div className="site-wrap header-inner"><Link className="brand" href="/"><span />呃啊呃啊</Link><nav aria-label="主导航"><Link href="/projects">项目</Link><Link href="/blog">博客</Link><Link href="/about">关于</Link></nav><Link className="header-action" href="/projects"><ArrowLeft size={16} />返回项目</Link></div></header>
    <main className="case-page">
      <section className="case-hero"><div className="site-wrap case-hero-inner"><div><p className="eyebrow">PROJECT 03 / EMBEDDED SYSTEMS</p><h1>STM32 硬件编程综合实训</h1><p className="case-lead">围绕 STM32F103C8 开发板完成多组外设驱动和硬件联调练习，从 GPIO 基础控制延伸到传感器、显示、通信和灯带效果。</p><div className="case-actions"><a className="button button-primary" href="https://github.com/eaea499/STM32-hardware-programming-training" target="_blank" rel="noreferrer">查看 GitHub <ArrowUpRight size={17} /></a><Link className="button button-secondary" href="/projects">返回项目列表</Link></div></div><dl className="case-meta"><div><dt>项目类型</dt><dd>嵌入式课程设计 / 硬件实训</dd></div><div><dt>目标平台</dt><dd>STM32F103C8T6</dd></div><div><dt>开发工具</dt><dd>Keil MDK-ARM / STM32CubeMX</dd></div></dl></div></section>

      <section className="case-intro"><div className="site-wrap case-intro-grid"><p className="section-kicker">Overview</p><p>项目由多组相互独立的 Keil 工程组成，覆盖 LED、按键、定时器、串口、DHT11、MQ2、OLED、红外 NEC、触摸按键、PAJ7620 和 WS2813 等典型外设。通过逐个模块验证，再进行组合联调，建立对单片机软硬件协同工作的整体认识。</p></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Practice path</p><h2>从单个外设到综合行为</h2></div><p>先让每个模块稳定工作，再把采集、判断和输出组织成完整设备行为。</p></div><div className="case-flow">{flow.map(({ icon: Icon, title, text }, index) => <div className="case-flow-item" key={title}><span>0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p>{index < flow.length - 1 && <ArrowUpRight className="case-flow-arrow" size={20} />}</div>)}</div></section>

      <section className="case-section case-section-muted"><div className="site-wrap"><div className="section-heading"><div><p className="section-kicker">Capabilities</p><h2>训练内容</h2></div><p>这些练习共同构成嵌入式开发中常见的感知、控制与反馈链路。</p></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="case-section site-wrap"><div className="case-split"><div><p className="section-kicker">Implementation</p><h2>把硬件状态变成可调试的软件逻辑</h2><p className="case-copy">项目使用 C 和 STM32 HAL 组织工程，通过 GPIO、UART、I2C、定时器和 PWM 等外设接口连接实际模块。串口中断用于接收控制指令，定时器用于周期任务和灯带时序，OLED 则把传感器和设备状态直接反馈出来。</p></div><ul className="contribution-list contribution-list-light"><li><ShieldCheck size={18} />完成多组 STM32F103C8 外设工程和模块驱动</li><li><ShieldCheck size={18} />实现 DHT11 温湿度采集与 OLED 显示</li><li><ShieldCheck size={18} />实现串口中断接收、按键输入和继电器控制</li><li><ShieldCheck size={18} />实现 WS2813 灯带颜色切换、闪烁和定时控制</li></ul></div></section>

      <section className="case-section case-section-dark"><div className="site-wrap case-split"><div><p className="section-kicker">Current boundary</p><h2>项目边界</h2><p className="case-copy">这是面向学习和硬件实训的本地工程集合，重点是外设驱动与联调过程。部分联网实验曾使用物联网平台进行数据上报，但公网展示页不会包含任何 Wi-Fi、MQTT 账号、密码或平台凭据。</p></div><ul className="contribution-list"><li><ShieldCheck size={18} />公开页面仅展示技术路线，不公开实验凭据</li><li><ShieldCheck size={18} />不同子工程依赖对应硬件模块和接线环境</li><li><ShieldCheck size={18} />后续可整理统一工程结构和硬件演示记录</li></ul></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Technology</p><h2>技术栈</h2></div><p>每项技术都对应底层控制、通信或硬件反馈中的一个环节。</p></div><div className="case-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
      <section className="site-wrap case-end"><Link className="back-link" href="/projects"><ArrowLeft size={16} />返回全部项目</Link><a className="text-link" href="https://github.com/eaea499/STM32-hardware-programming-training" target="_blank" rel="noreferrer">访问 GitHub <ArrowUpRight size={17} /></a></section>
    </main>
  </>;
}
