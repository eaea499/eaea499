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
  openGraph: {
    title: "呃啊呃啊 | 杰子的个人空间",
    description: "记录物联网、视觉和 Web 开发实践。",
    url: "https://eaea499.cn",
    siteName: "呃啊呃啊",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "呃啊呃啊 | 杰子的个人空间",
    description: "记录物联网、视觉和 Web 开发实践。",
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
