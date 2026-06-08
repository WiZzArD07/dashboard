import DashboardLayout from "@/components/layout/dashboard-layout";

import RiskRegister from "@/components/risks/risk-register";
import RiskHeatmap from "@/components/risks/risk-heatmap";
import CreateRiskForm from "@/components/risks/create-risk-form";

export default function RisksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Risk Management
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Monitor project risks, severity levels and mitigation plans.
          </p>
        </div>

        <CreateRiskForm />

        {/* RISK MODULES */}
        <div className="grid gap-6 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <RiskRegister />
          </div>

          <RiskHeatmap />

        </div>

      </div>
    </DashboardLayout>
  );
}