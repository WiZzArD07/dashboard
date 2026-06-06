"use client";

export default function ExecutiveInsights() {
  const recommendations = [
    "Increase QA resources to reduce deployment risk.",
    "Review sprint backlog to improve delivery velocity.",
    "Monitor infrastructure spending closely.",
    "Allocate one additional backend engineer.",
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        AI Executive Recommendations
      </h2>

      <div className="space-y-3">

        {recommendations.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-blue-500/10 p-4"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  );
}