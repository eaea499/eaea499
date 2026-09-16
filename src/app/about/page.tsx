import { ArrowUpRight, BadgeCheck, GraduationCap, Wrench } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const strengths = ["嵌入式设备与传感器联调", "MQTT / HTTP 数据通信", "Python / OpenCV 图像处理", "Web 页面与部署实践"];

export default function AboutPage() {
  return <><SiteHeader /><main className="inner-page"><section className="site-wrap about-hero"><div><p className="section-kicker">About</p><h1>黎俊杰</h1><p className="about-lead">物联网工程本科生。正在把设备端积累延伸到可被访问、被理解、被持续维护的 Web 空间。</p></div><div className="about-mark" aria-hidden="true">LJ</div></section><section className="about-band"><div className="site-wrap about-grid"><article><GraduationCap size={26} /><p className="detail-kind">Education</p><h2>南昌航空大学</h2><p>物联网工程本科在读</p></article><article><Wrench size={26} /><p className="detail-kind">Direction</p><h2>感知 · 连接 · 展示</h2><p>嵌入式、视觉和全栈 Web 的交叉实践</p></article></div></section><section className="site-wrap strengths-section"><p className="section-kicker">Working set</p><h2>目前的工具与方向</h2><div className="strengths-grid">{strengths.map((strength) => <div key={strength}><BadgeCheck size={19} />{strength}</div>)}</div></section><section className="site-wrap page-cta"><p>这个网站本身，也是我正在完成的项目。</p><Link href="/projects">回到项目 <ArrowUpRight size={18} /></Link></section></main><SiteFooter /></>;
}
