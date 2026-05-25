"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-[#020817] text-white"
          : "bg-[#F8FAFC] text-[#0F172A]"
      }`}
    >
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="md:ml-72">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}