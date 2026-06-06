"use client";

import { useEffect, useState } from "react";

type Risk = {
  id: string;
  title: string;
  severity: string;
  mitigation?: string | null;
};

export default function RiskRegister() {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [editTitle, setEditTitle] =
    useState("");

  const [editSeverity,
    setEditSeverity] =
    useState("Medium");

  const [editMitigation,
    setEditMitigation] =
    useState("");

  const fetchRisks = async () => {
    try {
      const res = await fetch("/api/risks");
      const data = await res.json();

      setRisks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRisks();
  }, []);

  const deleteRisk = async (
    id: string
  ) => {
    try {
      await fetch(
        `/api/risks/${id}`,
        {
          method: "DELETE",
        }
      );

      setRisks((prev) =>
        prev.filter(
          (risk) =>
            risk.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateRisk = async (
    id: string
  ) => {
    try {
      await fetch(
        `/api/risks/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title: editTitle,
            severity:
              editSeverity,
            mitigation:
              editMitigation,
          }),
        }
      );

      setRisks((prev) =>
        prev.map((risk) =>
          risk.id === id
            ? {
                ...risk,
                title: editTitle,
                severity:
                  editSeverity,
                mitigation:
                  editMitigation,
              }
            : risk
        )
      );

      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
        Loading Risks...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        Risk Register
      </h2>

      {editingId && (
        <div className="mb-6 rounded-2xl border border-slate-200 p-4 dark:border-white/10">

          <input
            value={editTitle}
            onChange={(e) =>
              setEditTitle(
                e.target.value
              )
            }
            className="mb-3 w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
            placeholder="Risk Title"
          />

          <select
            value={editSeverity}
            onChange={(e) =>
              setEditSeverity(
                e.target.value
              )
            }
            className="mb-3 w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <textarea
            value={editMitigation}
            onChange={(e) =>
              setEditMitigation(
                e.target.value
              )
            }
            className="mb-3 w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
            rows={4}
          />

          <div className="flex gap-3">

            <button
              onClick={() =>
                updateRisk(
                  editingId
                )
              }
              className="rounded-xl bg-green-500 px-4 py-2 text-white"
            >
              Save
            </button>

            <button
              onClick={() =>
                setEditingId(null)
              }
              className="rounded-xl bg-slate-500 px-4 py-2 text-white"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="p-3 text-left">
                Risk
              </th>

              <th className="p-3 text-left">
                Severity
              </th>

              <th className="p-3 text-left">
                Mitigation
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {risks.map((risk) => (
              <tr
                key={risk.id}
                className="border-b border-slate-200 dark:border-white/10"
              >
                <td className="p-3">
                  {risk.title}
                </td>

                <td className="p-3">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      risk.severity ===
                      "Critical"
                        ? "bg-red-500/20 text-red-500"
                        : risk.severity ===
                          "High"
                        ? "bg-orange-500/20 text-orange-500"
                        : risk.severity ===
                          "Medium"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-green-500/20 text-green-500"
                    }`}
                  >
                    {risk.severity}
                  </span>

                </td>

                <td className="p-3">
                  {risk.mitigation ||
                    "-"}
                </td>

                <td className="p-3">

                  <button
                    onClick={() => {
                      setEditingId(
                        risk.id
                      );

                      setEditTitle(
                        risk.title
                      );

                      setEditSeverity(
                        risk.severity
                      );

                      setEditMitigation(
                        risk.mitigation ||
                          ""
                      );
                    }}
                    className="mr-2 rounded-lg bg-blue-500 px-3 py-1 text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteRisk(
                        risk.id
                      )
                    }
                    className="rounded-lg bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>
        </table>

        {risks.length === 0 && (
          <div className="p-6 text-center text-slate-500">
            No risks found
          </div>
        )}

      </div>
    </div>
  );
}