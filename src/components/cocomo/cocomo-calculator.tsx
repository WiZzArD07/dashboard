"use client";

import { useState } from "react";

export default function CocomoCalculator() {
  const [kloc, setKloc] = useState(10);

  const [type, setType] = useState("organic");

  const calculate = () => {
    let a = 2.4;
    let b = 1.05;

    if (type === "semi") {
      a = 3.0;
      b = 1.12;
    }

    if (type === "embedded") {
      a = 3.6;
      b = 1.20;
    }

    const effort = a * Math.pow(kloc, b);

    const duration = 2.5 * Math.pow(effort, 0.38);

    const teamSize = effort / duration;

    const cost = effort * 5000;

    return {
      effort: effort.toFixed(2),
      duration: duration.toFixed(2),
      teamSize: teamSize.toFixed(1),
      cost: cost.toLocaleString(),
    };
  };

  const result = calculate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
      <h2 className="mb-6 text-xl font-semibold">
        COCOMO II Estimation
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          >
            <option value="organic">
              Organic
            </option>

            <option value="semi">
              Semi Detached
            </option>

            <option value="embedded">
              Embedded
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            KLOC
          </label>

          <input
            type="number"
            value={kloc}
            onChange={(e) =>
              setKloc(Number(e.target.value))
            }
            className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-4">

        <div className="rounded-2xl bg-blue-500/10 p-4">
          <p className="text-sm text-slate-500">
            Effort
          </p>

          <h3 className="text-2xl font-bold">
            {result.effort}
          </h3>

          <p className="text-xs">
            Person Months
          </p>
        </div>

        <div className="rounded-2xl bg-green-500/10 p-4">
          <p className="text-sm text-slate-500">
            Duration
          </p>

          <h3 className="text-2xl font-bold">
            {result.duration}
          </h3>

          <p className="text-xs">
            Months
          </p>
        </div>

        <div className="rounded-2xl bg-purple-500/10 p-4">
          <p className="text-sm text-slate-500">
            Team Size
          </p>

          <h3 className="text-2xl font-bold">
            {result.teamSize}
          </h3>
        </div>

        <div className="rounded-2xl bg-orange-500/10 p-4">
          <p className="text-sm text-slate-500">
            Cost
          </p>

          <h3 className="text-2xl font-bold">
            ${result.cost}
          </h3>
        </div>

      </div>
    </div>
  );
}