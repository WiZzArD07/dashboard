"use client";

import { useState } from "react";

export default function RoiNpvCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [cashFlow, setCashFlow] = useState(30000);
  const [years, setYears] = useState(5);
  const [discountRate, setDiscountRate] = useState(10);

  const totalReturn = cashFlow * years;

  const profit = totalReturn - investment;

  const roi = (profit / investment) * 100;

  let npv = -investment;

  for (let t = 1; t <= years; t++) {
    npv +=
      cashFlow /
      Math.pow(1 + discountRate / 100, t);
  }

  const paybackPeriod =
    investment / cashFlow;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        ROI & NPV Analysis
      </h2>

      <div className="grid gap-4 md:grid-cols-4">

        <InputField
          label="Investment"
          value={investment}
          setValue={setInvestment}
        />

        <InputField
          label="Annual Cash Flow"
          value={cashFlow}
          setValue={setCashFlow}
        />

        <InputField
          label="Years"
          value={years}
          setValue={setYears}
        />

        <InputField
          label="Discount Rate (%)"
          value={discountRate}
          setValue={setDiscountRate}
        />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">

        <MetricCard
          title="ROI"
          value={`${roi.toFixed(2)}%`}
          color="blue"
        />

        <MetricCard
          title="NPV"
          value={`$${npv.toFixed(0)}`}
          color="green"
        />

        <MetricCard
          title="Profit"
          value={`$${profit.toFixed(0)}`}
          color="purple"
        />

        <MetricCard
          title="Payback"
          value={`${paybackPeriod.toFixed(1)} yrs`}
          color="orange"
        />

      </div>

    </div>
  );
}

function InputField({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(Number(e.target.value))
        }
        className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
      />
    </div>
  );
}

function MetricCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    blue: "bg-blue-500/10",
    green: "bg-green-500/10",
    purple: "bg-purple-500/10",
    orange: "bg-orange-500/10",
  };

  return (
    <div className={`rounded-2xl p-4 ${colors[color]}`}>
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}