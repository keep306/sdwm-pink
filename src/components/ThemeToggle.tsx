"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />;
  }

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center text-lg"
      aria-label="切换深色模式"
    >
      <motion.span
        initial={false}
        animate={{ rotate: dark ? 360 : 0, scale: [1, 1.2, 1] }}
        transition={{ duration: 0.4 }}
        key={dark ? "moon" : "sun"}
      >
        {dark ? "🌙" : "☀️"}
      </motion.span>
    </motion.button>
  );
}
