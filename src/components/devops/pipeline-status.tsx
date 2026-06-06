"use client";

const pipelines = [
  {
    name: "Frontend Build",
    status: "Success",
  },
  {
    name: "Backend API",
    status: "Running",
  },
  {
    name: "Docker Deploy",
    status: "Success",
  },
  {
    name: "Security Scan",
    status: "Failed",
  },
];

export default function PipelineStatus() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        CI/CD Pipeline Status
      </h2>

      <div className="space-y-4">

        {pipelines.map((pipeline) => (
          <div
            key={pipeline.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-white/10"
          >
            <span>{pipeline.name}</span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                pipeline.status === "Success"
                  ? "bg-green-500/20 text-green-500"
                  : pipeline.status === "Running"
                  ? "bg-blue-500/20 text-blue-500"
                  : "bg-red-500/20 text-red-500"
              }`}
            >
              {pipeline.status}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}