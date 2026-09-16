import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectBrowser } from "@/components/project-browser";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const projects = [
  { number: "01", title: "智能路灯系统", kind: "物联网系统实践", summary: "从环境数据采集开始，尝试连接设备控制、消息通信和数据展示，让路灯场景形成可观察、可联调的闭环。", parts: ["STM32 基础开发", "传感器数据采集", "设备控制与通信"], stack: ["STM32", "传感器", "MQTT / HTTP"], group: "iot" as const },
  { number: "02", title: "ESP32-S3-CAM 视觉采集", kind: "边缘感知探索", summary: "围绕摄像头开发板进行图像采集与传输探索，理解小型设备在感知链路中的职责和约束。", parts: ["摄像头数据采集", "网络传输", "设备端联调"], stack: ["ESP32-S3-CAM", "HTTP", "图像采集"], group: "vision" as const },
  { number: "03", title: "Python 图像处理实践", kind: "计算机视觉学习", summary: "使用 Python、OpenCV 与 YOLOv8 进行图像处理和检测相关练习，把模型输出放回具体任务中理解。", parts: ["图像预处理", "目标检测尝试", "结果展示界面"], stack: ["Python", "OpenCV", "YOLOv8", "PyQt5"], group: "vision" as const },
];

export default function ProjectsPage() {
  return <><SiteHeader /><main className="inner-page"><div className="site-wrap page-heading"><p className="section-kicker">Projects</p><h1>围绕真实问题<br />做出的练习。</h1><p>这里保留项目的边界和过程。能做什么、还在补什么，都比漂亮的技术名词更重要。</p></div><div className="site-wrap"><ProjectBrowser projects={projects} /></div><section className="site-wrap page-cta"><p>项目会随着实践持续更新。</p><Link href="/blog">查看学习笔记 <ArrowUpRight size={18} /></Link></section></main><SiteFooter /></>;
}
