"use client";

import { Bell, Menu, Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useTheme } from "next-themes";

import Sidebar from "../sidebar/sidebar";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-40 flex h-20 items-center justify-between border-b px-6 backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "border-white/10 bg-[#020817]/80"
          : "border-slate-200 bg-[#F8FAFC]/80"
      }`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`rounded-2xl p-3 transition ${
                  isDark
                    ? "bg-[#1E293B] text-white"
                    : "bg-white text-[#0F172A]"
                }`}
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-72 border-none p-0"
            >
              <SheetHeader className="hidden">
                <SheetTitle>
                  Mobile Navigation
                </SheetTitle>

                <SheetDescription>
                  Sidebar navigation menu
                </SheetDescription>
              </SheetHeader>

              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* SEARCH */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className={`w-80 rounded-2xl border py-3 pl-10 pr-4 text-sm outline-none transition ${
              isDark
                ? "border-white/10 bg-[#1E293B] text-white"
                : "border-slate-200 bg-white text-[#0F172A]"
            }`}
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button
          className={`rounded-2xl p-3 transition ${
            isDark
              ? "bg-[#1E293B] text-white"
              : "bg-white text-[#0F172A]"
          }`}
        >
          <Bell size={20} />
        </button>

        <div
          className={`flex items-center gap-3 rounded-2xl px-3 py-2 ${
            isDark
              ? "bg-[#1E293B]"
              : "bg-white"
          }`}
        >
          <div className="h-10 w-10 rounded-full bg-blue-500" />

          <div className="hidden sm:block">
            <p
              className={`text-sm font-semibold ${
                isDark
                  ? "text-white"
                  : "text-[#0F172A]"
              }`}
            >
              Aryan
            </p>

            <p
              className={`text-xs ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Project Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}