"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";


export default function SeniorPage() {
  return (
    <PageTransition>
      <BackToTop />

      <div className="px-5 pt-8 pb-2 safe-top">
        <p className="text-xs font-medium text-[var(--text-muted)] tracking-wide">CONTACT</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mt-1">联系学姐</h1>
      </div>

      <section className="px-5 mt-6 mb-8 space-y-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2rem] p-6 text-white text-center"
          style={{ background: "linear-gradient(135deg, #ffb3c6 0%, #f47ba7 50%, #e8578a 100%)" }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center border-2 border-white/30">
              <span className="text-5xl">👩‍🎓</span>
            </div>

            <h2 className="text-xl font-bold mb-1">学姐</h2>
            <p className="text-white/70 text-sm mb-4">你的专属迎新学姐 · 有问必答</p>

            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-left mb-4">
              <p className="text-sm leading-relaxed text-white/90">
                哈喽～2026级的学弟学妹们好呀！👋
              </p>
              <p className="text-sm leading-relaxed text-white/90 mt-2">
                我是学姐，欢迎大家来到山东外贸职业学院！
              </p>
              <p className="text-sm leading-relaxed text-white/90 mt-2">
                关于报到流程、宿舍怎么分、军训多久、食堂什么好吃、青岛哪里好玩……
                任何问题都可以随时问我，我会尽力帮大家解答～
              </p>
              <p className="text-sm leading-relaxed text-white/90 mt-2">
                希望每位新同学都能顺利开启大学生活，青岛这座城市不会让你失望的！✨
              </p>
            </div>

          </div>
        </motion.div>

        {/* QR Code with Real Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 text-center"
        >
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">微信二维码</h3>
          <p className="text-xs text-[var(--text-muted)] mb-4">扫一扫，直接添加学姐</p>
          <div className="w-56 h-56 mx-auto rounded-2xl bg-white p-3 shadow-sm flex items-center justify-center">
            <Image
              src="/qrcode-senior.jpg"
              alt="学姐微信二维码"
              width={200}
              height={200}
              className="rounded-xl"
              priority
            />
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-3">长按或截图保存二维码 → 微信扫一扫</p>
        </motion.div>

        {/* Why contact senior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-5"
        >
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            <span>🌟</span> 学姐能帮你什么？
          </h3>
          <ul className="space-y-2.5">
            {[
              "报到流程不清楚？学姐一步步教你",
              "宿舍怎么选？公主楼还是普通楼？学姐帮你分析",
              "军训要注意什么？学姐有经验分享",
              "青岛哪里好玩？学姐带你玩转青岛",
              "食堂哪个窗口好吃？学姐帮你排雷",
              "还有什么担心的？尽管问，学姐在呢～",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-pink-500 mt-0.5 shrink-0">♥</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* FAQ Quick Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800"
        >
          <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed text-center">
            💡 常见问题可以先看 <a href="/faq" className="underline font-medium"> FAQ 问答专区</a>，
            很多答案已经整理好啦～
          </p>
        </motion.div>
      </section>

      <footer className="px-5 pb-4 text-center">
        <p className="text-xs text-[var(--text-muted)]">学姐在线时间：看到就会回复 💕</p>
      </footer>
    </PageTransition>
  );
}
