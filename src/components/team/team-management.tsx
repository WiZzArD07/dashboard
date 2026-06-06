"use client";

import { useEffect, useState } from "react";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: string;
  utilization: number;
};

export default function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();

      setMembers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const deleteMember = async (
    id: string
  ) => {
    try {
      await fetch(`/api/team/${id}`, {
        method: "DELETE",
      });

      setMembers((prev) =>
        prev.filter(
          (member) =>
            member.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">
        Loading Team...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#1E293B]">

      <h2 className="mb-6 text-xl font-semibold">
        Team Management
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Role
              </th>

              <th className="p-3 text-left">
                Utilization
              </th>

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {members.map((member) => (
              <tr
                key={member.id}
                className="border-b border-slate-200 dark:border-white/10"
              >
                <td className="p-3 font-medium">
                  {member.name}
                </td>

                <td className="p-3">
                  {member.email}
                </td>

                <td className="p-3">
                  {member.role}
                </td>

                <td className="p-3">

                  <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700">

                    <div
                      className="h-3 rounded-full bg-blue-500"
                      style={{
                        width: `${member.utilization}%`,
                      }}
                    />

                  </div>

                  <span className="mt-1 block text-xs text-slate-500">
                    {member.utilization}%
                  </span>

                </td>

                <td className="p-3">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      member.utilization >= 70
                        ? "bg-green-500/20 text-green-500"
                        : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {member.utilization >= 70
                      ? "Allocated"
                      : "Available"}
                  </span>

                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteMember(
                        member.id
                      )
                    }
                    className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {members.length === 0 && (
          <div className="p-6 text-center text-slate-500">
            No team members found
          </div>
        )}

      </div>
    </div>
  );
}