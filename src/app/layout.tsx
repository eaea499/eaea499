import type { Metadata } from "next";
import "./globals.css";
import "./interaction.css";

export const metadata: Metadata = { title: "呃啊呃啊 | 杰子的个人空间", description: "呃啊呃啊的个人空间，记录物联网、视觉和 Web 开发实践。" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
