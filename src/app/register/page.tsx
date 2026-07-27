"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

const materials = [
  { name: "录取通知书", required: true, desc: "原件，报到时需核验" },
  { name: "身份证", required: true, desc: "原件及复印件3份" },
  { name: "个人档案", required: true, desc: "密封完好，勿私自拆封" },
  { name: "农商银行卡", required: true, desc: "用于学费代扣及校园消费" },
  { name: "一寸照片", required: false, desc: "蓝底，建议准备6张以上" },
  { name: "户口迁移证", required: false, desc: "如需迁移户口请携带" },
];

const tuitionInfo = [
  {
    title: "线上缴费",
    icon: "💳",
    content: "学校将在开学前开放线上缴费通道，请关注学校官方通知。缴费支持微信、支付宝、银行卡等多种方式。",
  },
  {
    title: "助学贷款",
    icon: "📋",
    content: "已办理助学贷款的同学，无需提前缴纳学费及住宿费。开学报到时携带助学贷款回执单提交即可，学校将协助办理相关手续。",
  },
];

export default function RegisterPage() {
  return (
    <PageTransition>
      <BackToTop />

      {/* Header */}
      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">REGISTRATION</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">报到流程</h1>
      </div>

      {/* ====== 报到时间 ====== */}
      <section className="px-5 mt-6 mb-8">
        <SectionHeader icon="📅" title="报到时间" subtitle="请以录取通知书通知时间为准" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl shrink-0">
              🗓️
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">2026年9月</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">具体日期以录取通知书为准</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== 报到地点 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="📍" title="报到地点" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl shrink-0">
              🏫
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">山东外贸职业学院</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">青岛北校区 · 山东省青岛市李沧区巨峰路201号</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== 携带材料清单 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="📋" title="携带材料" subtitle="以下材料请务必准备齐全" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {materials.map((item, i) => (
            <div
              key={item.name}
              className={`flex items-start gap-3 px-5 py-3.5 ${
                i < materials.length - 1 ? "border-b border-[var(--border-color)]" : ""
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  item.required
                    ? "bg-red-100 dark:bg-red-900/30 text-red-500"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                }`}
              >
                {item.required ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <span className="text-xs font-bold">-</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
                  {item.required && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 font-medium">
                      必需
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====== 招生代码 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🏷️" title="招生代码" subtitle="填报志愿时使用" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white text-center"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <p className="text-white/70 text-xs mb-2">院校代码</p>
            <p className="text-5xl font-extrabold tracking-widest">D010</p>
            <p className="text-white/70 text-xs mt-2">山东省商务厅直属公办院校</p>
          </div>
        </motion.div>
      </section>

      {/* ====== 两大校区 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🏫" title="两大校区" subtitle="均在青岛市区核心地段" />
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🏫</span>
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">北校区（主校区·李沧）</h3>
                <p className="text-xs text-[var(--text-muted)]">山东省青岛市李沧区虎山路街道巨峰路201号</p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              位于李沧核心商圈，周边万达广场、李村夜市步行可达，地铁2号线、3号线通达全城。这里是新生报到和主要教学生活区。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🏢</span>
              <div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">南校区（市南）</h3>
                <p className="text-xs text-[var(--text-muted)]">青岛市市南区江西路</p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              距离五四广场不到一公里，周边是青岛金融贸易核心区，实习机会丰富。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== 学费缴纳 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="💰" title="学费缴纳" subtitle="缴费方式与助学贷款说明" />
        <div className="space-y-3">
          {tuitionInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xl">{info.icon}</span>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">{info.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{info.content}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">💡</span>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">学费标准</h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              省属公办院校，学费4000-6000元/年，远低于民办专科。入学即可报名自考本科，毕业可同时拿专科+本科双证。专升本上岸每年超1000人，升本率全省第一梯队。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== 3+2 专本贯通 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🎓" title="3+2 专本贯通" subtitle="拿全日制本科文凭的捷径" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <p className="text-sm leading-relaxed font-medium">
              在山外读3年 + 在本科院校读2年 = 全日制本科文凭 + 学士学位
            </p>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              对接山东青年政治学院、临沂大学、枣庄学院、山东女子学院等本科院校。2026年新增电子商务专业。分数够的同学重点考虑！
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">如有疑问请联系招生办或小羊学姐</p>
      </footer>
    </PageTransition>
  );
}
