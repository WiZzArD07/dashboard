"use client";

import { LucideIcon } from "lucide-react";

import { useTheme } from "next-themes";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
}: StatsCardProps) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-3xl border p-6 transition-all duration-300 ${
        isDark
          ? "border-white/10 bg-[#1E293B]"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className={`text-sm ${
              isDark
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            {title}
          </p>

          <h2
            className={`mt-4 text-5xl font-bold ${
              isDark
                ? "text-white"
                : "text-[#0F172A]"
            }`}
          >
            {value}
          </h2>

          <p className="mt-4 text-green-500">
            {change}
          </p>
        </div>

        <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-500">
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}