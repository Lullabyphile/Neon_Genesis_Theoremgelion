import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Genesis Theoremgelions",
  description: "数学博士生团队网站：研究数学，也每周一起看动画片。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
