"use client";

import {
  GitPullRequest,
  GitCommit,
  AlertCircle,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

const metrics = [
  {
    title: "Repositories",
    value: 12,
    icon: FolderGit2,
    color: "blue",
  },
  {
    title: "Open PRs",
    value: 18,
    icon: GitPullRequest,
    color: "purple",
  },
  {
    title: "Open Issues",
    value: 34,
    icon: AlertCircle,
    color: "red",
  },
  {
    title: "Commits Today",
    value: 147,
    icon: GitCommit,
    color: "green",
  },
  {
    title: "Deployments",
    value: 8,
    icon: CheckCircle2,
    color: "orange",
  },
];

export default function ScmDashboard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        SCM & DevOps Dashboard
      </h2>

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">

        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="rounded-2xl border border-slate-200 p-5 dark:border-white/10"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    {metric.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {metric.value}
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Icon size={24} />
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}