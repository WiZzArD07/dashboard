import DashboardLayout from "@/components/layout/dashboard-layout";

import AIInsights from "@/components/ai/ai-insights";
import ExecutiveInsights from "@/components/ai/executive-insights";

export default function AIPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            AI Insights
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AI-powered predictions, recommendations and project intelligence.
          </p>
        </div>

        <AIInsights />

        <ExecutiveInsights />

      </div>
    </DashboardLayout>
  );
}