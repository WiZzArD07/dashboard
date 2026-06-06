"use client";

import { useState } from "react";

export default function CreateMemberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Backend Developer");
  const [utilization, setUtilization] = useState("75");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/team",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            role,
            utilization:
              Number(utilization),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create member"
        );
      }

      setName("");
      setEmail("");
      setRole(
        "Backend Developer"
      );
      setUtilization("75");

      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">

      <h2 className="mb-6 text-xl font-semibold">
        Add Team Member
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        />

        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        >
          <option>
            Project Manager
          </option>

          <option>
            Backend Developer
          </option>

          <option>
            Frontend Developer
          </option>

          <option>
            QA Engineer
          </option>

          <option>
            DevOps Engineer
          </option>

          <option>
            UI/UX Designer
          </option>
        </select>

        <input
          type="number"
          min="0"
          max="100"
          placeholder="Utilization %"
          value={utilization}
          onChange={(e) =>
            setUtilization(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600 disabled:opacity-50"
        >
          {loading
            ? "Adding..."
            : "Add Member"}
        </button>
      </form>
    </div>
  );
}