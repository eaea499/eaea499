import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectBrowser } from "@/components/project-browser";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const projects = [
  { number: "01", title: "智能路灯系统", kind: "物联网系统实践", summary: "从环境数据采集开始，尝试连接设备控制、消息通信和数据展示，让路灯场景形成可观察、可联调的闭环。", parts: ["ESP32-S3-CAM 节点", "传感器数据采集", "设备控制与通信"], stack: ["ESP32-S3", "MQTT", "HTTP"], href: "/projects/smart-streetlight" },
  { number: "02", title: "智慧校园证件照标准化预处理系统", kind: "计算机视觉应用", summary: "面向校园证件照制作场景的桌面端工具，将人脸检测、尺寸标准化、背景替换和图像增强串成一套可操作的处理流程。", parts: ["人脸检测与智能裁剪", "蓝白红背景替换", "批量处理与结果导出"], stack: ["Python", "OpenCV", "PyQt5", "YOLOv8"], href: "/projects/id-photo-processor" },
  { number: "03", title: "STM32 硬件编程综合实训", kind: "嵌入式系统实践", summary: "围绕 STM32F103C8 开发板完成多组外设驱动与联调练习，从 GPIO 基础控制延伸到传感器、显示、通信和灯带效果。", parts: ["外设驱动与模块联调", "传感器与 OLED 显示", "串口中断与 PWM 控制"], stack: ["STM32F103C8", "C", "HAL", "Keil"], href: "/projects/stm32-training" },
];

export default function ProjectsPage() {
  return <><SiteHeader /><main className="inner-page"><div className="site-wrap page-heading"><p className="section-kicker">Projects</p><h1>围绕真实问题<br />做出的练习。</h1><p>这里保留项目的边界和过程。能做什么、还在补什么，都比漂亮的技术名词更重要。</p></div><div className="site-wrap"><ProjectBrowser projects={projects} /></div><section className="site-wrap page-cta"><p>项目会随着实践持续更新。</p><Link href="/blog">查看学习笔记 <ArrowUpRight size={18} /></Link></section></main><SiteFooter /></>;
}
