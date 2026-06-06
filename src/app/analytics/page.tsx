import DashboardLayout from "@/components/layout/dashboard-layout";

import ScmDashboard from "@/components/devops/scm-dashboard";
import PipelineStatus from "@/components/devops/pipeline-status";



export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Analytics & Insights
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Monitor engineering performance, DevOps metrics and AI-powered project insights.
          </p>
        </div>

        {/* SCM METRICS */}
        <ScmDashboard />

        {/* PIPELINE STATUS */}
        <PipelineStatus />

      </div>
    </DashboardLayout>
  );
}