import DashboardLayout from "@/components/layout/dashboard-layout";
import CocomoCalculator from "@/components/cocomo/cocomo-calculator";
import FunctionPointCalculator from "@/components/function-point/function-point-calculator";
import PertCpmCalculator from "@/components/pert/pert-calculator";
import EvmCalculator from "@/components/evm/evm-calculator";
import RoiNpvCalculator from "@/components/finance/roi-npv-calculator";

export default function EstimationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Estimations
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Software cost, effort, schedule and financial estimations.
          </p>
        </div>

        <CocomoCalculator />

        <FunctionPointCalculator />

        <PertCpmCalculator />

        <EvmCalculator />

        <RoiNpvCalculator />

      </div>
    </DashboardLayout>
  );
}