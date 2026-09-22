import { ArrowLeft, ArrowUpRight, Camera, Check, FileOutput, Palette, ScanFace, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "智慧校园证件照标准化预处理系统 | eaea499.cn",
  description: "基于 Python、OpenCV、PyQt5 和 YOLOv8 的校园证件照标准化预处理工具案例。",
};

const technologies = ["Python", "OpenCV", "PyQt5", "YOLOv8", "PP-HumanSeg", "NumPy"];

const capabilities = [
  { icon: ScanFace, title: "人脸检测与裁剪", text: "定位人脸区域并按目标证件照比例完成智能裁剪，减少手动调整。" },
  { icon: Palette, title: "标准背景替换", text: "支持蓝、白、红三种常用背景色，并提供 GrabCut 与人像分割方案。" },
  { icon: SlidersHorizontal, title: "图像质量增强", text: "提供亮度、对比度、去噪、锐化和自动增强等处理能力。" },
  { icon: FileOutput, title: "预设与批量导出", text: "针对学生证、一卡通和考试报名等场景提供预设方案并导出结果。" },
];

const flow = [
  { icon: Camera, title: "导入图像", text: "文件选择、摄像头采集或批量导入" },
  { icon: ScanFace, title: "识别与标准化", text: "人脸定位、尺寸裁剪和背景分割" },
  { icon: FileOutput, title: "调整与导出", text: "增强效果、对比预览和结果保存" },
];

export default function IdPhotoProcessorPage() {
  return <>
    <header className="site-header"><div className="site-wrap header-inner"><Link className="brand" href="/"><span />呃啊呃啊</Link><nav aria-label="主导航"><Link href="/projects">项目</Link><Link href="/blog">博客</Link><Link href="/about">关于</Link></nav><Link className="header-action" href="/projects"><ArrowLeft size={16} />返回项目</Link></div></header>
    <main className="case-page">
      <section className="case-hero"><div className="site-wrap case-hero-inner"><div><p className="eyebrow">PROJECT 02 / COMPUTER VISION</p><h1>智慧校园证件照标准化预处理系统</h1><p className="case-lead">一个面向校园证件照制作场景的桌面端视觉工具，把检测、裁剪、背景替换和图像增强组织成一条清晰的处理流程。</p><div className="case-actions"><a className="button button-primary" href="https://github.com/eaea499/smart-campus-id-photo-processor" target="_blank" rel="noreferrer">查看 GitHub <ArrowUpRight size={17} /></a><Link className="button button-secondary" href="/projects">返回项目列表</Link></div></div><dl className="case-meta"><div><dt>项目类型</dt><dd>课程设计 / 计算机视觉实践</dd></div><div><dt>运行方式</dt><dd>Windows 桌面端 GUI</dd></div><div><dt>我的角色</dt><dd>功能设计与核心流程开发</dd></div></dl></div></section>

      <section className="case-intro"><div className="site-wrap case-intro-grid"><p className="section-kicker">Overview</p><p>项目将证件照制作中重复的人工操作拆解为多个可验证步骤：先定位人脸，再完成比例裁剪和背景处理，最后进行图像增强与导出。界面强调操作顺序和结果对比，方便在本地快速试验不同方案。</p></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Workflow</p><h2>从原图到标准化结果</h2></div><p>每一步都可以单独调整，也可以通过预设方案一次完成。</p></div><div className="case-flow">{flow.map(({ icon: Icon, title, text }, index) => <div className="case-flow-item" key={title}><span>0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{text}</p>{index < flow.length - 1 && <ArrowUpRight className="case-flow-arrow" size={20} />}</div>)}</div></section>

      <section className="case-section case-section-muted"><div className="site-wrap"><div className="section-heading"><div><p className="section-kicker">Capabilities</p><h2>核心功能</h2></div><p>围绕真实的证件照制作任务组织功能，不把模型能力和最终使用场景割裂开。</p></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="case-section site-wrap"><div className="case-split"><div><p className="section-kicker">Implementation</p><h2>把算法能力放进可使用的界面</h2><p className="case-copy">项目不是单独调用一个模型，而是使用 PyQt5 组织导入、预览、参数调整和导出等完整交互。人脸检测和人像分割负责提供视觉能力，OpenCV 负责图像处理，用户可以通过界面观察每一步的结果。</p></div><ul className="contribution-list contribution-list-light"><li><Check size={18} />使用 OpenCV 完成裁剪、滤波、增强和格式处理</li><li><Check size={18} />使用 YOLOv8 与备用检测方案完成不同场景下的人脸定位</li><li><Check size={18} />接入 PP-HumanSeg 与 GrabCut 进行背景处理尝试</li><li><Check size={18} />通过预设方案降低重复操作，支持批量处理与结果导出</li></ul></div></section>

      <section className="case-section case-section-dark"><div className="site-wrap case-split"><div><p className="section-kicker">Current boundary</p><h2>目前的边界</h2><p className="case-copy">这是一个本地运行的桌面工具，适合课程设计、图像处理实验和本地批量制作。证件照属于敏感个人信息，项目不上传用户图片，也不作为公网在线处理服务使用。</p></div><ul className="contribution-list"><li><ShieldCheck size={18} />测试图片仅限授权使用，输出结果由用户本地保存</li><li><ShieldCheck size={18} />具体证件或报名要求仍需人工确认</li><li><ShieldCheck size={18} />后续可继续优化复杂背景、低分辨率和边缘细节</li></ul></div></section>

      <section className="case-section site-wrap"><div className="section-heading"><div><p className="section-kicker">Technology</p><h2>技术栈</h2></div><p>每项技术都对应一个明确的处理环节。</p></div><div className="case-tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
      <section className="site-wrap case-end"><Link className="back-link" href="/projects"><ArrowLeft size={16} />返回全部项目</Link><a className="text-link" href="https://github.com/eaea499/smart-campus-id-photo-processor" target="_blank" rel="noreferrer">访问 GitHub <ArrowUpRight size={17} /></a></section>
    </main>
  </>;
}
