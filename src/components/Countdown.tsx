"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target: September 1, 2026 (typical开学 date)
    const target = new Date("2026-09-01T00:00:00+08:00");

    const tick = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center min-w-[56px]">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-white">--</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "天" },
    { value: timeLeft.hours, label: "时" },
    { value: timeLeft.minutes, label: "分" },
    { value: timeLeft.seconds, label: "秒" },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {units.map((unit, i) => (
        <div key={unit.label} className="text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/20 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <p className="text-xs text-white/70 mt-1.5 font-medium">{unit.label}</p>
        </div>
      ))}
    </div>
  );
}
