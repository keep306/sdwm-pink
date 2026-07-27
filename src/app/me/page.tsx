"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";

const services = [
  { icon: "📄", title: "报到流程", desc: "查看报到事项", href: "/register" },
  { icon: "🏠", title: "宿舍指南", desc: "了解住宿信息", href: "/dormitory" },
  { icon: "🎒", title: "入学清单", desc: "我的物品清单", href: "/packing" },
  { icon: "❓", title: "常见问题", desc: "FAQ 问答", href: "/faq" },
];

const tools = [
  { icon: "📦", title: "快递地址", desc: "一键复制", href: "/express" },
  { icon: "🗺️", title: "校园地图", desc: "查看地图", href: "/map" },
  { icon: "👩‍🎓", title: "联系学姐", desc: "添加微信", href: "/senior" },
];

export default function MePage() {
  const router = useRouter();

  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-4 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">PROFILE</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">我的</h1>
      </div>

      {/* Profile Card */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl border-2 border-white/30">
              🎓
            </div>
            <div>
              <h3 className="font-bold text-lg">2026级新同学</h3>
              <p className="text-white/70 text-sm">山东外贸职业学院 · 青岛北校区</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">常用服务</h3>
        <div className="glass rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <button
              key={s.href}
              onClick={() => router.push(s.href)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                i < services.length - 1 ? "border-b border-[var(--border-color)]" : ""
              }`}
            >
              <span className="text-xl">{s.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">{s.title}</p>
                <p className="text-xs text-[var(--text-muted)]">{s.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">实用工具</h3>
        <div className="glass rounded-2xl overflow-hidden">
          {tools.map((t, i) => (
            <button
              key={t.href}
              onClick={() => router.push(t.href)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                i < tools.length - 1 ? "border-b border-[var(--border-color)]" : ""
              }`}
            >
              <span className="text-xl">{t.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--text-primary)]">{t.title}</p>
                <p className="text-xs text-[var(--text-muted)]">{t.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      {/* About School */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => router.push("/about")}
            className="w-full glass rounded-2xl p-5 text-left card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏛️</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-[var(--text-primary)]">关于山外</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">60年名校 · 外贸黄埔军校 · 办学实力</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)]">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </button>
        </motion.div>
      </section>

      {/* Settings */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">设置</h3>
        <div className="glass rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌓</span>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">深色模式</p>
                <p className="text-xs text-[var(--text-muted)]">切换明暗主题</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 mb-8 text-center">
        <p className="text-xs text-[var(--text-muted)]">
          山东外贸职业学院2026级新生迎新助手 v1.0
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Made with ❤️ for SDWMFTC
        </p>
      </section>
    </PageTransition>
  );
}
