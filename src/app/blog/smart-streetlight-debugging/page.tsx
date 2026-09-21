import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ArticleTools } from "@/components/article-tools";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const milestones = [
  ["01", "先确认设备端", "先看 Wi-Fi、MQTT、光照、PWM 和 INA219 是否分别正常，再进入平台联调。"],
  ["02", "让消息可追踪", "为 telemetry、vision、fault、commandAck 和 deviceInfo 分配清晰的 MQTT 主题。"],
  ["03", "把异常写进策略", "视觉服务中断超过阈值时自动回到高亮，避免识别链路异常导致照明过暗。"],
  ["04", "最后验证闭环", "用单灯、广播、双节点和手机局域网访问分别确认命令、回执和页面状态。"],
];

export const metadata = {
  title: "设备端、消息与页面：怎样看待一次物联网联调 | eaea499.cn",
  description: "智能路灯系统的设备、消息、后端与前端联调记录。",
};

export default function SmartStreetlightDebuggingPage() {
  return <><SiteHeader /><ArticleTools /><main className="article-page"><article className="article-wrap">
    <Link className="back-link" href="/blog"><ArrowLeft size={16} /> 返回博客</Link>
    <header className="article-header"><p className="section-kicker">IoT / 2026.09.21</p><h1>设备端、消息与页面：<br />怎样看待一次物联网联调</h1><p className="article-lead">智能路灯不是把几个模块接在一起就结束了。真正困难的部分，是让每一层都能被观察、被验证，也能在异常时做出明确反应。</p></header>
    <div className="article-rule" />
    <section className="article-prose">
      <p>这个项目从两个 ESP32-S3-CAM 路灯节点开始。设备侧采集光照和电流，摄像头提供图像流，电脑端 YOLOv8 服务判断人流，平台再把状态和控制结果展示到 Web/PWA 页面。</p>
      <p>如果只盯着最终页面，很容易把问题归结为“前端没刷新”。实际联调时，问题可能发生在设备没有发布、MQTT 主题不一致、后端没有缓存，或者 SSE 没有推送。于是我把链路拆成几层，逐层确认。</p>
      <h2>先让每一层说清楚自己</h2>
      <p>设备端通过 telemetry 上报光照、亮度、模式、电流、视觉状态和故障；vision 主题承载行人检测结果；fault 主题只在故障状态变化时发布事件；commandAck 用来确认设备是否执行了命令。主题和消息职责明确后，排查就有了位置。</p>
    </section>
    <section className="article-timeline" aria-label="联调过程"><p className="section-kicker">The debugging path</p>{milestones.map(([number, title, text]) => <div className="timeline-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</section>
    <section className="article-prose">
      <h2>安全回退不是附加功能</h2>
      <p>自动策略是：白天关闭，夜晚无人时保持 30%，夜晚有人时恢复 100%。但视觉服务不可能永远在线，因此 vision 超时后自动回到高亮，避免“识别服务坏了，路灯却一直低亮”的情况。</p>
      <p>这类设计让我意识到，嵌入式系统里的异常处理不是最后补上的 if，而是产品行为的一部分。用户不一定知道哪个服务出了问题，但系统应该给出可理解、可预期的结果。</p>
      <h2>从原型走向可维护系统</h2>
      <p>当前项目已经完成双节点联网联调、批量控制、故障上报、视觉检测和 Web/PWA 展示，但仍然是局域网原型：后端状态保存在内存中，公网访问、账号鉴权和历史数据持久化还没有纳入当前版本。</p>
      <p>下一阶段更重要的不是继续堆功能，而是把 telemetry、vision、fault、commandAck 和 command 记录持久化，形成可追踪的历史数据，再考虑权限和更完整的运维界面。</p>
    </section>
    <footer className="article-footer"><p>eaea499.cn / 智能路灯项目记录</p><Link href="/projects/smart-streetlight">查看项目 <ArrowUpRight size={17} /></Link></footer>
  </article></main><SiteFooter /></>;
}
