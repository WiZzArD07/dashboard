"use client";

const activities = [
  {
    id: 1,
    task: "Requirements",
    optimistic: 2,
    likely: 4,
    pessimistic: 6,
  },
  {
    id: 2,
    task: "Design",
    optimistic: 3,
    likely: 5,
    pessimistic: 8,
  },
  {
    id: 3,
    task: "Development",
    optimistic: 10,
    likely: 14,
    pessimistic: 20,
  },
  {
    id: 4,
    task: "Testing",
    optimistic: 4,
    likely: 6,
    pessimistic: 10,
  },
];

export default function PertCalculator() {
  const calculateTE = (
    o: number,
    m: number,
    p: number
  ) => {
    return ((o + 4 * m + p) / 6).toFixed(2);
  };

  const totalDuration = activities
    .reduce(
      (sum, activity) =>
        sum +
        Number(
          calculateTE(
            activity.optimistic,
            activity.likely,
            activity.pessimistic
          )
        ),
      0
    )
    .toFixed(2);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        PERT / CPM Scheduler
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="p-3 text-left">Task</th>
              <th className="p-3 text-left">O</th>
              <th className="p-3 text-left">M</th>
              <th className="p-3 text-left">P</th>
              <th className="p-3 text-left">Expected Time</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr
                key={activity.id}
                className="border-b border-slate-200 dark:border-white/10"
              >
                <td className="p-3">
                  {activity.task}
                </td>

                <td className="p-3">
                  {activity.optimistic}
                </td>

                <td className="p-3">
                  {activity.likely}
                </td>

                <td className="p-3">
                  {activity.pessimistic}
                </td>

                <td className="p-3 font-semibold text-blue-500">
                  {calculateTE(
                    activity.optimistic,
                    activity.likely,
                    activity.pessimistic
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl bg-blue-500/10 p-5">
        <p className="text-sm text-slate-500">
          Estimated Project Duration
        </p>

        <h3 className="text-3xl font-bold">
          {totalDuration} Days
        </h3>
      </div>
    </div>
  );
}