"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

interface DormInfo {
  name: string;
  icon: string;
  type: string;
  capacity: string;
  furniture: string;
  features: string[];
  bathroom: string;
  gradient: string;
}

const femaleDorms: DormInfo[] = [
  {
    name: "公主楼（7、8号楼）",
    icon: "👑",
    type: "女生宿舍 · 全校公认条件最好",
    capacity: "六人间 / 四人间",
    furniture: "正宗上床下桌",
    features: ["空调", "24小时不断电", "暖气", "独立学习空间"],
    bathroom: "女生卫浴位于宿舍楼内",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
  },
  {
    name: "普通女生宿舍",
    icon: "🏘️",
    type: "女生宿舍",
    capacity: "六人间",
    furniture: "两个三连桌",
    features: ["空调", "24小时不断电", "暖气"],
    bathroom: "宿舍楼内公共卫浴（有帘子隔板，私密性OK）",
    gradient: "linear-gradient(135deg, #fa709a 0%, #e8578a 100%)",
  },
];

const maleDorms: DormInfo[] = [
  {
    name: "男生宿舍",
    icon: "🏠",
    type: "男生宿舍",
    capacity: "七人间",
    furniture: "一个三连桌",
    features: ["空调", "24小时不断电", "暖气"],
    bathroom: "公共卫浴 · 菜鸟驿站对面",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
  },
];

export default function DormitoryPage() {
  const [activeTab, setActiveTab] = useState<"female" | "male" | "power">("female");

  const tabs = [
    { key: "female" as const, label: "女生宿舍", icon: "👧" },
    { key: "male" as const, label: "男生宿舍", icon: "👦" },
    { key: "power" as const, label: "用电指南", icon: "⚡" },
  ];

  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">DORMITORY</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">宿舍专区</h1>
      </div>

      {/* Tabs */}
      <div className="px-5 mt-6 mb-6">
        <div className="flex bg-gray-100 dark:bg-gray-800/50 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white dark:bg-gray-700 text-[var(--text-primary)] shadow-sm"
                  : "text-[var(--text-muted)]"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mb-8">
        {activeTab !== "power" && (
          <>
            <SectionHeader
              icon={activeTab === "female" ? "👧" : "👦"}
              title={activeTab === "female" ? "女生宿舍" : "男生宿舍"}
            />
            <div className="space-y-4">
              {(activeTab === "female" ? femaleDorms : maleDorms).map((dorm, i) => (
                <motion.div
                  key={dorm.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-5 text-white relative overflow-hidden" style={{ background: dorm.gradient }}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-3xl">{dorm.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold">{dorm.name}</h3>
                        <p className="text-xs text-white/70">{dorm.capacity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--text-muted)] w-14 shrink-0">家具</span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{dorm.furniture}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--text-muted)] w-14 shrink-0">配置</span>
                      <div className="flex flex-wrap gap-1.5">
                        {dorm.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--text-muted)] w-14 shrink-0">卫浴</span>
                      <span className="text-sm text-[var(--text-primary)]">{dorm.bathroom}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Power Guide */}
        {activeTab === "power" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <SectionHeader icon="⚡" title="宿舍用电指南" />

            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚡</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-2">宿舍限电功率</p>
              <p className="text-5xl font-extrabold text-orange-500 mb-2">500<span className="text-xl">W</span></p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                超过此功率可能触发断电保护，
                <br />
                请勿使用大功率电器
              </p>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <span>⚠️</span> 注意事项
              </h3>
              <ul className="space-y-2.5">
                {[
                  "请勿在宿舍内使用电热毯、电暖器、电饭锅等大功率电器",
                  "宿舍实行24小时供电，但请合理用电、节约能源",
                  "如遇断电，请先检查是否超功率使用，再联系宿管",
                  "离开宿舍时请关闭不必要的电器设备",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-orange-400 mt-1 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Shared Amenities */}
        <div className="mt-6">
          <SectionHeader icon="🧺" title="宿舍公共设施" subtitle="所有宿舍楼均配备" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-5"
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🧺", label: "洗衣机", desc: "每层标配" },
                { icon: "👕", label: "烘干机", desc: "部分楼层有" },
                { icon: "👟", label: "洗鞋机", desc: "部分楼层有" },
                { icon: "🔥", label: "热水间", desc: "每层配备" },
                { icon: "📱", label: "APP预约", desc: "洗澡不用排队" },
                { icon: "🛒", label: "校内超市", desc: "含711便利店" },
              ].map((amenity) => (
                <div key={amenity.label} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <span className="text-2xl block mb-1">{amenity.icon}</span>
                  <p className="text-xs font-semibold text-[var(--text-primary)]">{amenity.label}</p>
                  <p className="text-[10px] text-[var(--text-muted)]">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">具体宿舍分配以学校安排为准</p>
      </footer>
    </PageTransition>
  );
}
