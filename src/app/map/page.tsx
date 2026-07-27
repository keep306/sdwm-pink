"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

const locations = [
  { icon: "🏫", name: "教学楼", desc: "日常上课地点" },
  { icon: "🏠", name: "宿舍楼", desc: "公主楼 · 男生宿舍 · 普通女生宿舍" },
  { icon: "🍽️", name: "食堂", desc: "校园餐厅 · 南北风味" },
  { icon: "📚", name: "图书馆", desc: "自习 · 借阅 · 阅览" },
  { icon: "⚽", name: "体育场", desc: "运动 · 跑步 · 足球" },
  { icon: "📦", name: "快递点", desc: "菜鸟驿站" },
  { icon: "🛒", name: "超市", desc: "生活用品 · 零食" },
  { icon: "🏥", name: "医务室", desc: "基础医疗服务" },
];

export default function MapPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">CAMPUS MAP</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">校园地图</h1>
      </div>

      <section className="px-5 mt-6 mb-8 space-y-4">
        {/* 360° VR Panorama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 relative">
            <iframe
              src="https://www.720yun.com/t/03vk6l7m5r9?view=iframe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              allow="xr-spatial-tracking; accelerometer; gyroscope"
              loading="lazy"
              title="山东外贸职业学院北校区 360° 全景漫游"
              className="absolute inset-0"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">🏫 360° 校园全景漫游</p>
            <p className="text-xs text-[var(--text-muted)]">
              可拖动旋转、缩放查看校园全貌 | 山东省青岛市李沧区虎山路街道巨峰路201号
            </p>
            <a
              href="https://www.720yun.com/t/03vk6l7m5r9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-blue-600 dark:text-blue-400 underline"
            >
              全屏查看全景 →
            </a>
          </div>
        </motion.div>

        {/* Location Guide */}
        <SectionHeader icon="📍" title="校园地标" subtitle="快速了解校园主要建筑" />
        <div className="grid grid-cols-2 gap-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <span className="text-3xl block mb-2">{loc.icon}</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">{loc.name}</h4>
              <p className="text-xs text-[var(--text-muted)]">{loc.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800"
        >
          <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
            💡 报到当天校园内会有志愿者引导，各路口设有指示牌。建议提前保存校园地图到手机，方便随时查看。
          </p>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">校园不大 · 但很温暖 🏫</p>
      </footer>
    </PageTransition>
  );
}
