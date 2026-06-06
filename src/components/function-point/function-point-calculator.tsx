"use client";

import { useState } from "react";

export default function FunctionPointCalculator() {
  const [ei, setEi] = useState(10);
  const [eo, setEo] = useState(8);
  const [eq, setEq] = useState(5);
  const [ilf, setIlf] = useState(4);
  const [eif, setEif] = useState(2);

  const calculateUFP = () => {
    return (
      ei * 4 +
      eo * 5 +
      eq * 4 +
      ilf * 10 +
      eif * 7
    );
  };

  const ufp = calculateUFP();

  const estimatedLOC = ufp * 50;

  const estimatedEffort = (estimatedLOC / 1000) * 2.4;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
      <h2 className="mb-6 text-xl font-semibold">
        Function Point Analysis
      </h2>

      <div className="grid gap-4 md:grid-cols-5">

        <InputField
          label="EI"
          value={ei}
          setValue={setEi}
        />

        <InputField
          label="EO"
          value={eo}
          setValue={setEo}
        />

        <InputField
          label="EQ"
          value={eq}
          setValue={setEq}
        />

        <InputField
          label="ILF"
          value={ilf}
          setValue={setIlf}
        />

        <InputField
          label="EIF"
          value={eif}
          setValue={setEif}
        />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-blue-500/10 p-4">
          <p className="text-sm text-slate-500">
            UFP
          </p>

          <h3 className="text-3xl font-bold">
            {ufp}
          </h3>
        </div>

        <div className="rounded-2xl bg-green-500/10 p-4">
          <p className="text-sm text-slate-500">
            Estimated LOC
          </p>

          <h3 className="text-3xl font-bold">
            {estimatedLOC}
          </h3>
        </div>

        <div className="rounded-2xl bg-purple-500/10 p-4">
          <p className="text-sm text-slate-500">
            Estimated Effort
          </p>

          <h3 className="text-3xl font-bold">
            {estimatedEffort.toFixed(2)}
          </h3>

          <p className="text-xs">
            Person Months
          </p>
        </div>

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