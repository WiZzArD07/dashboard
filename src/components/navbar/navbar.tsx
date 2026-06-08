"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Menu, Search, Settings, LogOut } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";

import Sidebar from "../sidebar/sidebar";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const [open, setOpen] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

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

        {/* PROFILE DROPDOWN */}
        <div
          className="relative"
          ref={dropdownRef}
        >
          <button
            onClick={() =>
              setOpen(!open)
            }
            className={`flex items-center gap-3 rounded-2xl px-3 py-2 transition ${
              isDark
                ? "bg-[#1E293B]"
                : "bg-white"
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-blue-500" />

            <div className="hidden text-left sm:block">
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
          </button>

          {open && (
            <div
              className={`absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border shadow-xl ${
                isDark
                  ? "border-white/10 bg-[#1E293B]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="border-b border-slate-200 p-4 dark:border-white/10">
                <p className="font-semibold">
                  Aryan
                </p>

                <p className="text-sm text-slate-500">
                  Project Manager
                </p>
              </div>

              <button
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                onClick={() =>
                  signOut({
                    callbackUrl:
                      "/login",
                  })
                }
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-500 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}