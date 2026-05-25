"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  LayoutDashboard,
  FolderKanban,
  ShieldAlert,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    title: "Estimations",
    icon: BarChart3,
    href: "/estimations",
  },
  {
    title: "Risks",
    icon: ShieldAlert,
    href: "/risks",
  },
  {
    title: "Team",
    icon: Users,
    href: "/team",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-72 border-r transition-all duration-300 ${
        isDark
          ? "border-white/10 bg-[#0F172A]"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Logo */}
      <div
        className={`border-b p-6 ${
          isDark
            ? "border-white/10"
            : "border-slate-200"
        }`}
      >
        <h1
          className={`text-3xl font-bold ${
            isDark
              ? "text-white"
              : "text-[#0F172A]"
          }`}
        >
          SprintX
        </h1>

        <p
          className={`mt-1 text-sm ${
            isDark
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >
          Software PM Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : isDark
                  ? "text-slate-300 hover:bg-blue-500 hover:text-white"
                  : "text-slate-600 hover:bg-blue-500 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* AI Card */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-5 text-white">
          <h2 className="text-xl font-semibold">
            AI Insights
          </h2>

          <p className="mt-2 text-sm text-white/80">
            Predict delays and risks using AI analytics.
          </p>

          <button className="mt-4 rounded-xl bg-white/20 px-4 py-2 transition hover:bg-white/30">
            Explore
          </button>
        </div>
      </div>
    </aside>
  );
}