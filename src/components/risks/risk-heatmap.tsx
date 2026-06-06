"use client";

import { useEffect, useState } from "react";

type Risk = {
  id: string;
  severity: string;
};

export default function RiskHeatmap() {
  const [risks, setRisks] = useState<Risk[]>([]);

  useEffect(() => {
    const fetchRisks = async () => {
      const res = await fetch("/api/risks");
      const data = await res.json();

      setRisks(data);
    };

    fetchRisks();
  }, []);

  const low =
    risks.filter(
      (r) => r.severity === "Low"
    ).length;

  const medium =
    risks.filter(
      (r) => r.severity === "Medium"
    ).length;

  const high =
    risks.filter(
      (r) => r.severity === "High"
    ).length;

  const critical =
    risks.filter(
      (r) => r.severity === "Critical"
    ).length;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        Risk Heat Map
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-xl bg-green-500 p-6 text-center text-white">
          <h3 className="text-3xl font-bold">
            {low}
          </h3>

          <p>Low</p>
        </div>

        <div className="rounded-xl bg-yellow-500 p-6 text-center text-black">
          <h3 className="text-3xl font-bold">
            {medium}
          </h3>

          <p>Medium</p>
        </div>

        <div className="rounded-xl bg-orange-500 p-6 text-center text-white">
          <h3 className="text-3xl font-bold">
            {high}
          </h3>

          <p>High</p>
        </div>

        <div className="rounded-xl bg-red-600 p-6 text-center text-white">
          <h3 className="text-3xl font-bold">
            {critical}
          </h3>

          <p>Critical</p>
        </div>

      </div>
    </div>
  );
}