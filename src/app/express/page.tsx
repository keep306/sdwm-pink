"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import CopyButton from "@/components/CopyButton";
import BackToTop from "@/components/BackToTop";

const address = "山东省青岛市李沧区虎山路街道巨峰路201号 山东外贸职业学院（北校区）菜鸟驿站";

export default function ExpressPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">EXPRESS</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">快递指南</h1>
      </div>

      <section className="px-5 mt-6 mb-8 space-y-4">
        {/* Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📦</span>
              <h3 className="font-bold text-base">学校快递地址</h3>
            </div>
            <div className="bg-white/15 rounded-xl p-4 mb-4">
              <p className="text-sm leading-relaxed font-medium whitespace-pre-line">
                {address}
              </p>
            </div>
            <CopyButton
              text={address}
              label="一键复制地址"
              successMessage="快递地址已复制"
              className="w-full justify-center"
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5"
        >
          <SectionHeader icon="ℹ️" title="取件须知" />
          <ul className="space-y-3">
            {[
              "快递统一配送至菜鸟驿站，凭取件码取件",
              "取件时请携带手机，出示取件身份码",
              "大件快递建议自备小推车",
              "开学季快递量大，建议错峰取件",
              "寄件也可以在菜鸟驿站完成",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800"
        >
          <div className="flex items-center gap-2 mb-2">
            <span>💡</span>
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">开学季寄快递建议</p>
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            建议提前3-5天寄出大件行李，避开报到高峰。被褥等大件物品可提前邮寄到学校，报到时轻装出行更加方便。
          </p>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">菜鸟驿站营业时间：9:00 - 20:00</p>
      </footer>
    </PageTransition>
  );
}
