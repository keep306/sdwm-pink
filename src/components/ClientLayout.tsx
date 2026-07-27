"use client";

import { useEffect, type ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize theme from localStorage on mount
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <>{children}</>;
}
