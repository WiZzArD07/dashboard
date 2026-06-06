"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
};

export default function CreateRiskForm() {
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [mitigation, setMitigation] = useState("");
  const [projectId, setProjectId] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        setProjects(data);

        if (data.length > 0) {
          setProjectId(data[0].id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/risks",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            severity,
            mitigation,
            projectId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create risk"
        );
      }

      setTitle("");
      setSeverity("Medium");
      setMitigation("");

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
        Create Risk
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Risk Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
          required
        />

        <select
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        >
          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>

          <option value="Critical">
            Critical
          </option>
        </select>

        <textarea
          rows={4}
          placeholder="Mitigation Plan"
          value={mitigation}
          onChange={(e) =>
            setMitigation(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        />

        <select
          value={projectId}
          onChange={(e) =>
            setProjectId(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
        >
          {projects.map((project) => (
            <option
              key={project.id}
              value={project.id}
            >
              {project.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-red-500 px-6 py-3 text-white transition hover:bg-red-600 disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : "Create Risk"}
        </button>
      </form>
    </div>
  );
}