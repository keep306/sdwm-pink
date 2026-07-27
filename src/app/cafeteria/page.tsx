"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

const popularDishes = [
  { name: "猪肘面", icon: "🍜", desc: "浓郁汤底 · 大块猪肘", tag: "人气TOP1" },
  { name: "麻辣烫", icon: "🥘", desc: "自选食材 · 麻辣鲜香", tag: "经典必吃" },
  { name: "重庆小面", icon: "🍝", desc: "正宗川味 · 辣得过瘾", tag: "辣味推荐" },
  { name: "自选菜", icon: "🍱", desc: "荤素搭配 · 经济实惠", tag: "日常首选" },
  { name: "麻辣香锅", icon: "🫕", desc: "现点现炒 · 香辣可口", tag: "聚餐推荐" },
];

export default function CafeteriaPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">CANTEEN</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">食堂美食</h1>
      </div>

      <section className="px-5 mt-6 mb-8 space-y-4">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)" }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-4xl">🍽️</span>
              <div>
                <h3 className="font-bold text-lg">学校食堂</h3>
                <p className="text-white/70 text-sm">覆盖南北口味</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-extrabold">10<span className="text-lg">-</span>20</p>
                <p className="text-xs text-white/70">元/餐</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-sm text-white/80">📍 支持外卖</p>
                <p className="text-xs text-white/60 mt-0.5">配送到宿舍楼下</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Popular Dishes */}
        <SectionHeader icon="🔥" title="热门推荐" subtitle="学长学姐亲测好吃" />
        <div className="space-y-3">
          {popularDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="glass rounded-2xl p-4 flex items-center gap-4 card-hover"
            >
              <span className="text-3xl shrink-0">{dish.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">{dish.name}</h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-medium">
                    {dish.tag}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{dish.desc}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)] shrink-0">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">大学食堂 · 舌尖上的青春 🍜</p>
      </footer>
    </PageTransition>
  );
}
