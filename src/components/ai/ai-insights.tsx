"use client";

import {
  Brain,
  AlertTriangle,
  Clock3,
  DollarSign,
} from "lucide-react";

export default function AIInsights() {
  const sprintVelocity = 82;
  const utilization = 77;
  const activeRisks = 14;
  const budgetUsage = 67;

  const healthScore =
    Math.round(
      (sprintVelocity +
        utilization +
        (100 - budgetUsage)) / 3
    );

  const riskPrediction =
    activeRisks > 10
      ? "High Risk"
      : "Low Risk";

  const delayPrediction =
    sprintVelocity < 70
      ? "Potential Delay"
      : "On Track";

  const budgetPrediction =
    budgetUsage > 80
      ? "Overrun Risk"
      : "Budget Safe";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <div className="mb-6 flex items-center gap-3">
        <Brain className="text-blue-500" />

        <h2 className="text-xl font-semibold">
          AI Project Intelligence
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">

        {/* HEALTH SCORE */}
        <div className="rounded-2xl bg-blue-500/10 p-5">
          <p className="text-sm text-slate-500">
            Health Score
          </p>

          <h3 className="mt-2 text-4xl font-bold">
            {healthScore}
          </h3>

          <p className="text-xs">
            /100
          </p>
        </div>

        {/* RISK */}
        <div className="rounded-2xl bg-red-500/10 p-5">

          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle size={18} />
            <span>Risk</span>
          </div>

          <h3 className="text-xl font-bold">
            {riskPrediction}
          </h3>

        </div>

        {/* DELAY */}
        <div className="rounded-2xl bg-yellow-500/10 p-5">

          <div className="mb-2 flex items-center gap-2">
            <Clock3 size={18} />
            <span>Schedule</span>
          </div>

          <h3 className="text-xl font-bold">
            {delayPrediction}
          </h3>

        </div>

        {/* BUDGET */}
        <div className="rounded-2xl bg-green-500/10 p-5">

          <div className="mb-2 flex items-center gap-2">
            <DollarSign size={18} />
            <span>Budget</span>
          </div>

          <h3 className="text-xl font-bold">
            {budgetPrediction}
          </h3>

        </div>

      </div>
    </div>
  );
}