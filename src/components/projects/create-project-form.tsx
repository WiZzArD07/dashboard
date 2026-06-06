"use client";

import { useState } from "react";

export default function CreateProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            budget: Number(budget),

            ownerId:
              "cmq1jtjrv0000javc74uyr4gq",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create project"
        );
      }

      setName("");
      setDescription("");
      setBudget("");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
      <h2 className="mb-6 text-xl font-semibold">
        Create Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          rows={4}
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}