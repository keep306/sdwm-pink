"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SearchItem {
  title: string;
  desc: string;
  path: string;
  keywords: string[];
}

const searchIndex: SearchItem[] = [
  { title: "报到流程", desc: "查看新生报到时间、地点和所需材料", path: "/register", keywords: ["报到", "注册", "入学", "材料", "证件"] },
  { title: "学费缴纳", desc: "学费缴纳方式和助学贷款说明", path: "/register", keywords: ["学费", "缴费", "贷款", "助学贷款", "钱"] },
  { title: "宿舍指南", desc: "男女生宿舍介绍、配置和用电指南", path: "/dormitory", keywords: ["宿舍", "寝室", "住宿", "公主楼", "上床下桌"] },
  { title: "军训安排", desc: "军训时间、服装和免训申请", path: "/military", keywords: ["军训", "训练", "服装", "免训", "请假"] },
  { title: "入学清单", desc: "报到必备物品和行李准备建议", path: "/packing", keywords: ["清单", "物品", "行李", "准备", "带什么"] },
  { title: "快递指南", desc: "校园快递地址和菜鸟驿站位置", path: "/express", keywords: ["快递", "地址", "菜鸟驿站", "邮寄"] },
  { title: "食堂美食", desc: "校园食堂菜品和价格介绍", path: "/cafeteria", keywords: ["食堂", "吃饭", "美食", "餐厅", "外卖"] },
  { title: "校园地图", desc: "查看校园布局和主要建筑位置", path: "/map", keywords: ["地图", "位置", "教学楼", "图书馆", "体育场"] },
  { title: "关于山外", desc: "学校简介、办学实力、排名、就业数据", path: "/about", keywords: ["学校", "关于", "实力", "就业", "排名", "历史", "办学", "师资", "跨境电商"] },
  { title: "联系学姐", desc: "小羊学姐微信和迎新服务", path: "/senior", keywords: ["学姐", "微信", "联系", "咨询", "帮忙"] },
  { title: "常见问题", desc: "新生常见问题解答", path: "/faq", keywords: ["问题", "FAQ", "疑问", "解答", "帮助"] },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.includes(q) ||
        item.desc.includes(q) ||
        item.keywords.some((k) => k.includes(q))
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass cursor-text" onClick={() => { setOpen(true); inputRef.current?.focus(); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-muted)] shrink-0">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="搜索报到、宿舍、军训..."
          className="flex-1 bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-[var(--text-muted)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 right-0 glass-strong rounded-2xl overflow-hidden shadow-xl z-50 border border-[var(--border-color)]"
          >
            {results.map((item) => (
              <button
                key={item.path}
                onClick={() => { router.push(item.path); setOpen(false); setQuery(""); }}
                className="w-full text-left px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-b border-[var(--border-color)] last:border-0"
              >
                <div className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full mt-2 left-0 right-0 glass-strong rounded-2xl p-6 text-center shadow-xl z-50"
          >
            <p className="text-sm text-[var(--text-muted)]">未找到相关内容</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
