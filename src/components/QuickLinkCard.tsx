"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface QuickLinkCardProps {
  icon: string;
  title: string;
  desc: string;
  href: string;
  gradient: string;
  delay?: number;
}

export default function QuickLinkCard({ icon, title, desc, href, gradient, delay = 0 }: QuickLinkCardProps) {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push(href)}
      className="relative overflow-hidden rounded-2xl p-4 sm:p-5 text-left w-full group text-white shadow-lg"
      style={{ background: gradient }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 group-active:scale-150 transition-transform duration-500" />

      <div className="relative z-10">
        <span className="text-3xl sm:text-4xl block mb-3">{icon}</span>
        <h3 className="text-base sm:text-lg font-bold mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-white/70">{desc}</p>
      </div>
    </motion.button>
  );
}
