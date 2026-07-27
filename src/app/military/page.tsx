"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

export default function MilitaryPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">MILITARY TRAINING</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">军训专区</h1>
      </div>

      <section className="px-5 mt-6 mb-8">
        <div className="space-y-4">
          {/* 军训时间 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl p-5 text-white"
            style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #d43d6e 100%)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex items-center gap-4">
              <span className="text-4xl">⏰</span>
              <div>
                <p className="text-white/70 text-xs mb-1">军训时长</p>
                <p className="text-3xl font-extrabold">14<span className="text-lg font-normal"> 天</span></p>
                <p className="text-white/70 text-xs mt-1">预计两周左右</p>
              </div>
            </div>
          </motion.div>

          {/* 军训服 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">👕</span>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">军训服装</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">开学后统一发放，统一购买</p>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
              军训服装包括迷彩服、帽子、腰带、军训鞋等，具体费用以学校通知为准。
            </p>
          </motion.div>

          {/* 免训申请 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🏥</span>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">免训申请</h3>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-orange-500 text-sm shrink-0 mt-0.5">⚠️</span>
                <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  只有身体特殊原因可以申请免训
                </p>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                需提供医院证明，向辅导员提交书面申请，经学校审批后方可免训。
              </p>
            </div>
          </motion.div>

          {/* 军训小贴士 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">💪</span>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">军训小贴士</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                "提前准备防晒霜，军训期间紫外线较强",
                "准备一双舒适的运动鞋垫，减轻脚部疲劳",
                "带好大容量水杯，及时补充水分",
                "注意休息，保证充足的睡眠",
                "如有身体不适应立即向教官报告，不要硬撑",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-green-500 mt-1 shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">军训是大学生活的美好回忆，加油！💪</p>
      </footer>
    </PageTransition>
  );
}
