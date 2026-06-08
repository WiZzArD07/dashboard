"use client";

import DashboardLayout from "@/components/layout/dashboard-layout";
import StatsCard from "@/components/cards/stats-card";
import ProjectChart from "@/components/charts/project-chart";

import {
  FolderKanban,
  ShieldAlert,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Monitor projects, risks and analytics.
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Total Projects"
            value="24"
            icon={FolderKanban}
            change="+12% this month"
          />

          <StatsCard
            title="Current Budget"
            value="$120K"
            icon={DollarSign}
            change="67% utilized"
          />

          <StatsCard
            title="Active Risks"
            value="14"
            icon={ShieldAlert}
            change="3 high severity"
          />

          <StatsCard
            title="Sprint Velocity"
            value="82%"
            icon={TrendingUp}
            change="+9% improved"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-3">

          {/* ANALYTICS */}
          <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10 xl:col-span-2">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              Analytics
            </h2>

            <div className="mt-6 h-80">
              <ProjectChart />
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-4">

              {/* ITEM 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#0F172A]">
                <p className="text-sm font-medium text-[#0F172A] dark:text-white">
                  New sprint created
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Sprint Alpha initialized.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#0F172A]">
                <p className="text-sm font-medium text-[#0F172A] dark:text-white">
                  Risk detected
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Deployment delay predicted.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}