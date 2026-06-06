"use client";

import { useState } from "react";

export default function EVMCalculator() {
  const [pv, setPv] = useState(100000);
  const [ev, setEv] = useState(85000);
  const [ac, setAc] = useState(90000);

  const cv = ev - ac;
  const sv = ev - pv;

  const cpi = ac !== 0 ? ev / ac : 0;
  const spi = pv !== 0 ? ev / pv : 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
      <h2 className="mb-6 text-xl font-semibold">
        Earned Value Management
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <InputField
          label="Planned Value (PV)"
          value={pv}
          setValue={setPv}
        />

        <InputField
          label="Earned Value (EV)"
          value={ev}
          setValue={setEv}
        />

        <InputField
          label="Actual Cost (AC)"
          value={ac}
          setValue={setAc}
        />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">

        <MetricCard
          title="CV"
          value={cv.toFixed(0)}
          color="blue"
        />

        <MetricCard
          title="SV"
          value={sv.toFixed(0)}
          color="green"
        />

        <MetricCard
          title="CPI"
          value={cpi.toFixed(2)}
          color="purple"
        />

        <MetricCard
          title="SPI"
          value={spi.toFixed(2)}
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