import type { Metadata } from "next";
import "./globals.css";
import "./interaction.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaea499.cn"),
  title: { default: "呃啊呃啊 | 杰子的个人空间", template: "%s | 呃啊呃啊" },
  description: "呃啊呃啊的个人空间，记录物联网、视觉和 Web 开发实践。",
  applicationName: "呃啊呃啊",
  keywords: ["物联网", "嵌入式", "计算机视觉", "Web 开发", "个人作品集"],
  alternates: { canonical: "/" },
  robots: { index: false, follow: false, nocache: true },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
