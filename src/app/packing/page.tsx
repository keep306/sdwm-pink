"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

interface ChecklistItem {
  id: string;
  name: string;
  note?: string;
}

interface ChecklistCategory {
  icon: string;
  title: string;
  items: ChecklistItem[];
  gradient: string;
}

const checklistData: ChecklistCategory[] = [
  {
    icon: "📌",
    title: "必须携带",
    gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)",
    items: [
      { id: "must-1", name: "录取通知书", note: "原件，最重要的证件" },
      { id: "must-2", name: "身份证", note: "原件及复印件" },
      { id: "must-3", name: "个人档案", note: "密封完好" },
      { id: "must-4", name: "农商银行卡", note: "学费代扣" },
      { id: "must-5", name: "一寸照片", note: "蓝底6张以上" },
    ],
  },
  {
    icon: "🧳",
    title: "生活用品",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
    items: [
      { id: "life-1", name: "换洗衣物", note: "青岛春秋季温差大" },
      { id: "life-2", name: "洗漱用品", note: "牙刷、毛巾、洗发水等" },
      { id: "life-3", name: "手机充电器" },
      { id: "life-4", name: "插排 / 插座", note: "宿舍桌面必备" },
      { id: "life-5", name: "雨伞", note: "青岛多雨" },
      { id: "life-6", name: "水杯 / 保温杯" },
      { id: "life-7", name: "拖鞋" },
      { id: "life-8", name: "衣架" },
    ],
  },
  {
    icon: "💡",
    title: "建议携带",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
    items: [
      { id: "sug-1", name: "防晒用品", note: "军训必备" },
      { id: "sug-2", name: "常用药品", note: "感冒药、创可贴、肠胃药" },
      { id: "sug-3", name: "床上用品", note: "枕头、被褥（学校可购买）" },
      { id: "sug-4", name: "台灯 / 小夜灯" },
      { id: "sug-5", name: "U盘" },
      { id: "sug-6", name: "锁具", note: "柜子小锁" },
    ],
  },
];

export default function PackingPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("packing-checklist");
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {
      // ignore
    }
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("packing-checklist", JSON.stringify([...next]));
      return next;
    });
  };

  const totalItems = checklistData.reduce((sum, c) => sum + c.items.length, 0);
  const checkedCount = [...checked].filter((id) =>
    checklistData.some((c) => c.items.some((i) => i.id === id))
  ).length;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">CHECKLIST</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">入学物品清单</h1>
      </div>

      {/* Progress bar */}
      {mounted && (
        <section className="px-5 mt-6 mb-6">
          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[var(--text-primary)]">准备进度</span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {checkedCount}/{totalItems}
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="px-5 mb-8 space-y-6">
        {checklistData.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + catIdx * 0.08 }}
          >
            <SectionHeader icon={cat.icon} title={cat.title} />
            <div className="glass rounded-2xl overflow-hidden">
              {cat.items.map((item, i) => {
                const isChecked = checked.has(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      i < cat.items.length - 1 ? "border-b border-[var(--border-color)]" : ""
                    } ${isChecked ? "bg-green-50/50 dark:bg-green-900/10" : ""}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                        isChecked
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      {isChecked && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-medium transition-colors ${
                          isChecked
                            ? "text-[var(--text-muted)] line-through"
                            : "text-[var(--text-primary)]"
                        }`}
                      >
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">清单数据保存在本地浏览器</p>
      </footer>
    </PageTransition>
  );
}
