"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

const stats = [
  { value: "1964", label: "建校年份", icon: "🏛️" },
  { value: "60年", label: "办学历史", icon: "📜" },
  { value: "98%", label: "就业率", icon: "💼" },
  { value: "100%", label: "软科推荐率", icon: "⭐" },
  { value: "10个", label: "国家级骨干专业", icon: "🏅" },
  { value: "1000+", label: "校招企业/年", icon: "🤝" },
];

const majors = [
  "国际经济与贸易", "关务与外贸服务", "旅游管理", "电子商务",
  "商务英语", "大数据与会计", "国际金融", "软件技术",
  "保险实务", "国际商务",
];

const highlights = [
  {
    icon: "🏫",
    title: "公办名校 · 60年底蕴",
    content: "山东省商务厅直属公办院校，创建于1964年。山东省最早、唯一专门从事外经贸教育的全日制公办高职院校。国家优质高等职业院校、山东省技能型人才培养特色名校。",
    gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)",
  },
  {
    icon: "🌍",
    title: "外语天花板 · 全国高职第一梯队",
    content: "外语教师130余人，含8名欧盟认证同传译员——全国高职极其罕见。常年20余名欧美母语外教驻校。建有国内领先的「外语村」语言文化实践教学基地。开设英、日、韩、西、法等语种。",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
  },
  {
    icon: "📦",
    title: "跨境电商 · 全国最早最专业",
    content: "2012年起率先开展跨境电商人才培养，比多数高校早近十年。全国首批跨境电商专业招生院校。建有山东省跨境电商工程技术研发中心、青岛跨境电商孵化基地。教学成果获国家级二等奖。",
    gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)",
  },
  {
    icon: "💼",
    title: "就业硬实力 · 98%就业率",
    content: "每年1000+企业到校招聘，提供1.5万岗位。68%毕业生留在青岛工作。校友创办进出口额1500万以上外贸企业3000多家，国际物流企业600多家。毕业生遍布青岛外贸圈，口碑：好用、上手快、外语过关。",
    gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
  },
  {
    icon: "🎓",
    title: "升学畅通 · 升本全省前列",
    content: "7个3+2专本贯通专业，对接山东青年政治学院、临沂大学等本科院校，毕业拿全日制本科文凭。专升本上岸每年超1000人，升本率全省公办专科第一梯队。入学即可报名自考本科，毕业拿双证。",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    icon: "✈️",
    title: "国际视野 · 全国高职唯一海外分校",
    content: "与16个国家和地区、50多所海外院校合作。2016年在美国设立华盛顿州分校——全国高职第一家也是目前唯一。在多米尼加、尼泊尔等'一带一路'国家设有海外培训中心。",
    gradient: "linear-gradient(135deg, #ff9ab2 0%, #d43d6e 100%)",
  },
];

const rankings = [
  { label: "金苹果（金平果）", value: "5★ 中国一流高职" },
  { label: "软科财经类高职", value: "全国第25名" },
  { label: "软科推荐报考率", value: "100%" },
  { label: "山东省高职满意度", value: "第11名" },
  { label: "软科就业满意度", value: "4.5分（各项最高）" },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">ABOUT SDWMFTC</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">关于山外</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">外贸界"黄埔军校" · 60年名校底蕴</p>
      </div>

      {/* ====== Hero Stats ====== */}
      <section className="px-5 mt-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4 text-center">山东外贸职业学院</h2>
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-white/10 rounded-xl p-2.5">
                  <span className="text-lg block mb-0.5">{stat.icon}</span>
                  <p className="text-lg font-extrabold">{stat.value}</p>
                  <p className="text-[10px] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====== School Intro ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🏫" title="学校简介" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-5"
        >
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            山东外贸职业学院隶属山东省商务厅，创建于1964年，是山东省最早也是唯一专门从事外经贸教育的全日制公办普通高职院校。
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
            学校是教育部职业院校外语类专业教指委主任委员单位、全国外经贸职业教育教学指导委员会副主任委员单位。牵头国际商务职教集团获评国家骨干职教集团。
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-3">
            教职工600余人，专任教师硕士以上占比90.72%，高级职称近200人，"双师型"教师占比高达97%——既会教理论又能带实操。
          </p>
        </motion.div>
      </section>

      {/* ====== 10 National Key Majors ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🏅" title="10个国家级骨干专业" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-5"
        >
          <div className="flex flex-wrap gap-2">
            {majors.map((m) => (
              <span
                key={m}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ====== Rankings ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="📊" title="官方排名与社会认可" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {rankings.map((r, i) => (
            <div
              key={r.label}
              className={`flex items-center justify-between px-5 py-3.5 ${
                i < rankings.length - 1 ? "border-b border-[var(--border-color)]" : ""
              }`}
            >
              <span className="text-sm text-[var(--text-secondary)]">{r.label}</span>
              <span className="text-sm font-bold text-[var(--text-primary)]">{r.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====== Six Highlights ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🌟" title="六大办学亮点" />
        <div className="space-y-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="p-4 text-white flex items-center gap-3" style={{ background: h.gradient }}>
                <span className="text-2xl">{h.icon}</span>
                <h3 className="text-sm font-bold">{h.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{h.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== Student Voice ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="💬" title="在校生真实评价" subtitle="来自抖音/B站/小红书 500+ 真实评价" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-5"
        >
          <div className="space-y-3">
            {[
              { quote: "公主楼是山外最好的招生简章", author: "——女生宿舍评价" },
              { quote: "出门就是商圈，下课就能逛街，很多本科院校都没这待遇", author: "——地理位置评价" },
              { quote: "老师普遍负责任，不是那种混日子的，真能学到东西", author: "——师资评价" },
              { quote: "好好学基本不愁工作，老师会主动发招聘信息", author: "——就业评价" },
              { quote: "山外的外语教学比很多本科还强，外教都是真老外不是留学生", author: "——外语评价" },
              { quote: "学跨境电商来山外就对了，资源比很多本科都多", author: "——跨境电商评价" },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
                <p className="text-sm text-[var(--text-secondary)] italic">"{v.quote}"</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{v.author}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ====== Summary ====== */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative overflow-hidden rounded-2xl p-6 text-white text-center"
          style={{ background: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <p className="text-2xl mb-2">🌊</p>
            <p className="text-sm leading-relaxed font-medium">
              青岛是一座来了就不想走的城市。
              <br />
              山外是一所读了会感谢自己选择的学校。
            </p>
            <p className="text-xs text-white/70 mt-3">
              院校代码 <span className="font-bold text-yellow-300">D010</span> · 山东省商务厅直属公办院校
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">数据来源：软科 · 金苹果 · 教育部 · 学校官网 · 在校生真实反馈</p>
      </footer>
    </PageTransition>
  );
}
