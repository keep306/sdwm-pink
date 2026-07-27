"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: "sm" | "md" | "lg";
}

export default function GlassCard({ children, className = "", onClick, padding = "md" }: GlassCardProps) {
  const paddings = { sm: "p-3", md: "p-4 sm:p-5", lg: "p-5 sm:p-6" };

  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      whileTap={onClick ? { scale: 0.97 } : undefined}
      onClick={onClick}
      className={`glass rounded-2xl ${paddings[padding]} card-hover ${className}`}
    >
      {children}
    </Component>
  );
}
