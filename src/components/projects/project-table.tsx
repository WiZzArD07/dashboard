"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  description?: string | null;
  budget: number;
};

export default function ProjectTable() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [editName, setEditName] =
    useState("");

  const [editDescription,
    setEditDescription] =
    useState("");

  const [editBudget,
    setEditBudget] =
    useState("");

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();

      setProjects(data);
    } catch (error) {
      console.error(
        "Failed to fetch projects",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (
    id: string
  ) => {
    try {
      await fetch(
        `/api/projects/${id}`,
        {
          method: "DELETE",
        }
      );

      setProjects((prev) =>
        prev.filter(
          (project) =>
            project.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateProject = async (
    id: string
  ) => {
    try {
      const res = await fetch(
        `/api/projects/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: editName,
            description:
              editDescription,
            budget:
              Number(editBudget),
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to update project"
        );
      }

      setProjects((prev) =>
        prev.map((project) =>
          project.id === id
            ? {
                ...project,
                name: editName,
                description:
                  editDescription,
                budget:
                  Number(editBudget),
              }
            : project
        )
      );

      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[var(--card)] dark:border-white/10">

      <div className="border-b border-slate-200 p-6 dark:border-white/10">
        <h2 className="text-xl font-semibold">
          Active Projects
        </h2>
      </div>

      {editingId && (
        <div className="border-b border-slate-200 p-6 dark:border-white/10">

          <h3 className="mb-4 text-lg font-semibold">
            Edit Project
          </h3>

          <div className="space-y-4">

            <input
              type="text"
              value={editName}
              onChange={(e) =>
                setEditName(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
              placeholder="Project Name"
            />

            <textarea
              value={editDescription}
              onChange={(e) =>
                setEditDescription(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
              rows={4}
            />

            <input
              type="number"
              value={editBudget}
              onChange={(e) =>
                setEditBudget(
                  e.target.value
                )
              }
              className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
              placeholder="Budget"
            />

            <div className="flex gap-3">

              <button
                onClick={() =>
                  updateProject(
                    editingId
                  )
                }
                className="rounded-xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                Save Changes
              </button>

              <button
                onClick={() =>
                  setEditingId(null)
                }
                className="rounded-xl bg-slate-500 px-4 py-2 text-white hover:bg-slate-600"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className="p-4 text-left">
                Project
              </th>

              <th className="p-4 text-left">
                Description
              </th>

              <th className="p-4 text-left">
                Budget
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-slate-200 transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-slate-800"
              >
                <td className="p-4 font-medium">
                  {project.name}
                </td>

                <td className="p-4">
                  {project.description ||
                    "No description"}
                </td>

                <td className="p-4">
                  $
                  {project.budget.toLocaleString()}
                </td>

                <td className="p-4">

                  <button
                    onClick={() => {
                      setEditingId(
                        project.id
                      );

                      setEditName(
                        project.name
                      );

                      setEditDescription(
                        project.description ||
                          ""
                      );

                      setEditBudget(
                        project.budget.toString()
                      );
                    }}
                    className="mr-2 rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProject(
                        project.id
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

        {projects.length === 0 && (
          <div className="p-6 text-center text-slate-500">
            No projects found
          </div>
        )}

      </div>
    </div>
  );
}