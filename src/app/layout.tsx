import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import BottomNav from "@/components/BottomNav";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "山东外贸职业学院 · 2026级新生开学助手",
  description:
    "山东外贸职业学院青岛北校区2026级新生入学指南。一站式迎新服务：报到流程、宿舍指南、军训安排、入学准备、校园生活、联系学姐。",
  keywords: [
    "山东外贸职业学院",
    "新生入学",
    "青岛北校区",
    "报到指南",
    "宿舍",
    "军训",
    "2026级",
  ],
  authors: [{ name: "山东外贸职业学院" }],
  appleWebApp: {
    capable: true,
    title: "开学助手",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* iOS PWA meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="开学助手" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ff9ab2" />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ToastProvider>
          <ClientLayout>
            <main className="max-w-lg mx-auto min-h-screen pb-14 safe-bottom">
              {children}
            </main>
            <BottomNav />
          </ClientLayout>
        </ToastProvider>
      </body>
    </html>
  );
}
