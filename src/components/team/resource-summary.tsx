"use client";

import { useEffect, useState } from "react";

type TeamMember = {
  id: string;
  utilization: number;
};

export default function ResourceSummary() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await fetch("/api/team");
      const data = await res.json();

      setMembers(data);
    };

    fetchMembers();
  }, []);

  const totalMembers = members.length;

  const allocated = members.filter(
    (member) => member.utilization >= 70
  ).length;

  const available = members.filter(
    (member) => member.utilization < 70
  ).length;

  const avgUtilization =
    totalMembers > 0
      ? Math.round(
          members.reduce(
            (sum, member) =>
              sum + member.utilization,
            0
          ) / totalMembers
        )
      : 0;

  return (
    <div className="grid gap-4 md:grid-cols-4">

      <div className="rounded-2xl bg-blue-500/10 p-5">
        <p className="text-sm text-slate-500">
          Total Members
        </p>

        <h3 className="text-3xl font-bold">
          {totalMembers}
        </h3>
      </div>

      <div className="rounded-2xl bg-green-500/10 p-5">
        <p className="text-sm text-slate-500">
          Allocated
        </p>

        <h3 className="text-3xl font-bold">
          {allocated}
        </h3>
      </div>

      <div className="rounded-2xl bg-yellow-500/10 p-5">
        <p className="text-sm text-slate-500">
          Available
        </p>

        <h3 className="text-3xl font-bold">
          {available}
        </h3>
      </div>

      <div className="rounded-2xl bg-purple-500/10 p-5">
        <p className="text-sm text-slate-500">
          Avg Utilization
        </p>

        <h3 className="text-3xl font-bold">
          {avgUtilization}%
        </h3>
      </div>

    </div>
  );
}