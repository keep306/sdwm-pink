"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import BackToTop from "@/components/BackToTop";

const campusLinks = [
  { icon: "🗺️", title: "校园地图", desc: "教学楼 · 宿舍 · 食堂 · 图书馆", href: "/map", gradient: "linear-gradient(135deg, #ff9ab2 0%, #e8578a 100%)" },
  { icon: "🍜", title: "食堂美食", desc: "南北口味 · 热门推荐", href: "/cafeteria", gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)" },
  { icon: "📦", title: "快递指南", desc: "快递地址 · 菜鸟驿站", href: "/express", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
  { icon: "🎯", title: "军训专区", desc: "时间安排 · 注意事项", href: "/military", gradient: "linear-gradient(135deg, #ff9ab2 0%, #d43d6e 100%)" },
  { icon: "🏠", title: "宿舍专区", desc: "房型 · 配置 · 用电", href: "/dormitory", gradient: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" },
  { icon: "❓", title: "常见问题", desc: "FAQ · 新生问答", href: "/faq", gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
];

const qingdaoFood = [
  { icon: "🦐", name: "辣炒蛤蜊", desc: "青岛人最爱，来青岛必吃第一道菜" },
  { icon: "🥟", name: "鲅鱼水饺", desc: "鲜到掉眉毛，离开青岛就吃不到这个味道" },
  { icon: "🍺", name: "青岛啤酒+烧烤", desc: "塑料袋打啤酒是青岛特色" },
  { icon: "🦀", name: "海鲜盛宴", desc: "开海季节螃蟹、皮皮虾便宜又新鲜" },
  { icon: "🌮", name: "台东+李村夜市", desc: "锅贴、烤鱿鱼、炒年糕吃到停不下来" },
  { icon: "☕", name: "沿海咖啡店", desc: "八大关、太平角海边咖啡馆，周末发呆好去处" },
];

const cityPerks = [
  { icon: "🛍️", title: "万达广场", desc: "出校门步行5-10分钟，逛街看电影聚餐一站式" },
  { icon: "🌃", title: "李村夜市", desc: "公交几站即达，青岛最大商圈之一，人均几十吃到撑" },
  { icon: "🚇", title: "双地铁", desc: "2号线、3号线步行可达，通达青岛全部核心区域" },
  { icon: "🚄", title: "青岛北站", desc: "打车约20分钟，放假回家、朋友来访都方便" },
  { icon: "🌊", title: "栈桥·八大关", desc: "地铁直达，周末说走就走" },
  { icon: "⛵", title: "崂山·五四广场", desc: "青岛最美地标，三年都玩不腻" },
];

const campusPerks = [
  { icon: "🚫", title: "没有早操！", desc: "不用早上6点爬起来跑操——这在山东高校里非常少见", highlight: true },
  { icon: "🚪", title: "出入自由", desc: "没课就可以出校门，不用请假，周末随便安排", highlight: true },
  { icon: "🌙", title: "门禁宽松", desc: "晚上10:30，比大多数高校更宽松，出去玩不赶时间" },
  { icon: "📏", title: "校园小巧", desc: "从宿舍到教室步行几分钟，不用提前半小时出门" },
  { icon: "📖", title: "图书馆", desc: "四层，8:00-22:00开放，座位充足，学习氛围好" },
  { icon: "🏋️", title: "运动设施", desc: "健身房、篮球场、羽毛球场、乒乓球场、网球场" },
];

export default function CampusPage() {
  const router = useRouter();

  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">CAMPUS LIFE</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">校园生活</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">在青岛市中心读大学是什么体验？</p>
      </div>

      {/* ====== Navigation Grid ====== */}
      <section className="px-5 mt-6 mb-8">
        <SectionHeader icon="🧭" title="校园服务导航" />
        <div className="grid grid-cols-2 gap-3">
          {campusLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push(link.href)}
              className="relative overflow-hidden rounded-2xl p-4 text-left text-white shadow-lg"
              style={{ background: link.gradient }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <span className="text-2xl block mb-2">{link.icon}</span>
                <h3 className="text-sm font-bold mb-0.5">{link.title}</h3>
                <p className="text-xs text-white/70">{link.desc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ====== Campus Freedom Perks ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🗽" title="校园自由生活" subtitle="这些福利，很多学校真没有" />
        <div className="space-y-3">
          {campusPerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className={`rounded-2xl p-4 flex items-start gap-3 ${
                perk.highlight
                  ? "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"
                  : "glass"
              }`}
            >
              <span className="text-2xl shrink-0">{perk.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">{perk.title}</h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== 周边生活圈 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="📍" title="周边生活圈" subtitle="学校在李沧核心商圈，不是郊区" />
        <div className="grid grid-cols-2 gap-3">
          {cityPerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <span className="text-2xl block mb-2">{perk.icon}</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-0.5">{perk.title}</h4>
              <p className="text-xs text-[var(--text-muted)]">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== 青岛美食 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🍜" title="青岛美食地图" subtitle="在青岛读三年大学 = 吃遍海鲜 + 喝遍啤酒" />
        <div className="space-y-3">
          {qingdaoFood.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className="glass rounded-2xl p-4 flex items-center gap-4"
            >
              <span className="text-3xl shrink-0">{food.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">{food.name}</h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{food.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== 青岛气候 ====== */}
      <section className="px-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-5 text-white"
          style={{ background: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="font-bold text-base mb-3 flex items-center gap-2">
              <span>🌤️</span> 青岛气候 —— 冬暖夏凉
            </h3>
            <div className="space-y-2 text-sm text-white/90">
              <p>☀️ 夏季平均25°C，比内陆低5-10°C，全国避暑胜地</p>
              <p>❄️ 冬季有暖气，室内穿单衣，比南方湿冷舒服太多</p>
              <p>🌸 春天樱花满城，中山公园、八大关樱花季全国闻名</p>
              <p>🍂 秋天碧海蓝天，随便一拍就是明信片</p>
            </div>
            <p className="text-xs text-white/60 mt-3 italic">
              "夏天不用空调也能睡，冬天暖气足，气候比老家舒服一万倍"——在校生评价
            </p>
          </div>
        </motion.div>
      </section>

      {/* ====== 青岛城市名片 ====== */}
      <section className="px-5 mb-8">
        <SectionHeader icon="🌊" title="青岛 · 一座来了就不想走的城市" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="glass rounded-2xl p-5"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              "🏅 中国最具幸福感城市", "🏖️ 中国首批优秀旅游城市",
              "🌍 世界啤酒之城", "⛵ 中国帆船之都",
              "🎬 天然摄影棚", "💼 新一线城市",
              "🌳 国家森林城市", "🏗️ 中国品牌之都",
            ].map((item) => (
              <p key={item} className="text-xs text-[var(--text-secondary)]">{item}</p>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4 leading-relaxed">
            GDP超1.5万亿，海尔、海信、青岛啤酒、中车四方等世界500强总部所在地。
            每年夏天国际啤酒节狂欢！《流浪地球》《疯狂的外星人》等大片在此取景。
          </p>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">选大学 = 选城市 · 青岛不会让你失望 🌊</p>
      </footer>
    </PageTransition>
  );
}
