"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Countdown from "@/components/Countdown";
import QuickLinkCard from "@/components/QuickLinkCard";

import ThemeToggle from "@/components/ThemeToggle";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const quickLinks = [
  { icon: "📄", title: "报到流程", desc: "报到时间 · 地点 · 材料", href: "/register", gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" },
  { icon: "🏠", title: "宿舍指南", desc: "房型 · 配置 · 用电", href: "/dormitory", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
  { icon: "🎒", title: "入学准备", desc: "清单 · 物品 · 行李", href: "/packing", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
  { icon: "👩‍🎓", title: "学姐", desc: "咨询 · 帮助 · 迎新", href: "/senior", gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" },
];

const features = [
  { icon: "🎯", title: "军训专区", desc: "时间安排与注意事项", href: "/military" },
  { icon: "📦", title: "快递指南", desc: "地址与菜鸟驿站", href: "/express" },
  { icon: "🍜", title: "食堂美食", desc: "南北口味一网打尽", href: "/cafeteria" },
  { icon: "🗺️", title: "校园地图", desc: "快速熟悉校园布局", href: "/map" },
  { icon: "💰", title: "学费缴纳", desc: "缴费方式与助学贷款", href: "/register" },
  { icon: "❓", title: "常见问题", desc: "FAQ 问答专区", href: "/faq" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <PageTransition>
      <BackToTop />

      {/* ====== Hero Section ====== */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 px-5 pt-8 pb-10 safe-top">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-white/60 text-xs font-medium tracking-wide">山东外贸职业学院</p>
              <h1 className="text-lg font-bold mt-0.5">青岛北校区</h1>
            </div>
            <ThemeToggle />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-white/70 text-sm mb-2 font-medium tracking-wider">WELCOME · 2026</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
              欢迎<span className="text-yellow-300">2026级</span>
              <br />
              新同学
            </h2>
            <p className="text-white/60 text-sm mt-2">新生入学指南 · 一站式迎新服务</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4"
          >
            <p className="text-center text-white/60 text-xs mb-3 font-medium tracking-wide">距 离 开 学 还 有</p>
            <Countdown />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[var(--bg-primary)] rounded-t-[2rem]" />
      </section>

      {/* ====== Quick Links ====== */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">快捷入口</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map((link, i) => (
            <QuickLinkCard key={link.href} {...link} delay={0.1 + i * 0.05} />
          ))}
        </div>
      </section>

      {/* ====== More Features ====== */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">更多服务</h3>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.button
              key={f.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push(f.href)}
              className="glass rounded-2xl p-4 text-left card-hover"
            >
              <span className="text-2xl block mb-2">{f.icon}</span>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-0.5">{f.title}</h4>
              <p className="text-xs text-[var(--text-muted)]">{f.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ====== School Stats ====== */}
      <section className="px-5 mb-8">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] mb-3 tracking-wide uppercase">山外实力</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: "60年", label: "办学历史", sub: "始于1964", gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" },
            { value: "98%", label: "就业率", sub: "常年95%以上", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
            { value: "100%", label: "推荐报考率", sub: "软科数据", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
            { value: "10个", label: "国家级骨干专业", sub: "外贸黄埔军校", gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="relative overflow-hidden rounded-2xl p-4 text-white text-center"
              style={{ background: stat.gradient }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl font-extrabold">{stat.value}</p>
                <p className="text-xs font-semibold mt-1">{stat.label}</p>
                <p className="text-[10px] text-white/60 mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Why Choose Us ====== */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="glass rounded-2xl p-5"
        >
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <span>🏆</span> 为什么选择山东外贸职业学院？
          </h3>
          <div className="space-y-2.5">
            {[
              { icon: "🏫", text: "山东省商务厅直属公办院校，60年外贸名校" },
              { icon: "📍", text: "坐落青岛市中心李沧核心区，万达地铁环绕" },
              { icon: "❄️", text: "空调 + 暖气 + 24h不断电 + 上床下桌" },
              { icon: "💼", text: "就业率98%，每年1000+企业校招，68%留青岛" },
              { icon: "🌍", text: "8名欧盟同传 + 20余名外教，外语实力全国高职第一梯队" },
              { icon: "🚀", text: "全国最早开设跨境电商，行业黄埔军校" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-base shrink-0">{item.icon}</span>
                <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => router.push("/about")}
            className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium active:bg-blue-700 transition-colors"
          >
            了解更多 → 关于山外
          </button>
        </motion.div>
      </section>

      {/* ====== Campus Tip ====== */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #d43d6e 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span>
              <h3 className="font-bold text-base">温 馨 提 示</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              请认准学校官方通知渠道，谨防各类诈骗信息。
              如有疑问，可以随时联系<span className="text-yellow-300 font-medium"> 学姐 </span>
              获取帮助哦～
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">
          山东外贸职业学院 · 2026级新生迎新助手
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Made with ❤️ for SDWMFTC
        </p>
      </footer>
    </PageTransition>
  );
}
