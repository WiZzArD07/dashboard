"use client";

const columns = [
  {
    title: "Backlog",
    tasks: [
      {
        title: "Create Login Module",
        priority: "High",
      },
      {
        title: "Add User Roles",
        priority: "Medium",
      },
    ],
  },
  {
    title: "To Do",
    tasks: [
      {
        title: "Risk Dashboard",
        priority: "High",
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      {
        title: "COCOMO Module",
        priority: "Medium",
      },
    ],
  },
  {
    title: "Testing",
    tasks: [
      {
        title: "Project Analytics",
        priority: "Low",
      },
    ],
  },
  {
    title: "Done",
    tasks: [
      {
        title: "Dashboard Layout",
        priority: "Completed",
      },
    ],
  },
];

export default function KanbanBoard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
      
      <h2 className="mb-6 text-xl font-semibold">
        Agile Sprint Board
      </h2>

      <div className="grid gap-4 lg:grid-cols-5">

        {columns.map((column) => (
          <div
            key={column.title}
            className="rounded-2xl bg-slate-100 p-4 dark:bg-[#0F172A]"
          >
            <h3 className="mb-4 font-semibold">
              {column.title}
            </h3>

            <div className="space-y-3">

              {column.tasks.map((task, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-[#1E293B]"
                >
                  <p className="font-medium">
                    {task.title}
                  </p>

                  <span
                    className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${
                      task.priority === "High"
                        ? "bg-red-500/20 text-red-500"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : task.priority === "Low"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-blue-500/20 text-blue-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}