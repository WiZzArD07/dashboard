import DashboardLayout from "@/components/layout/dashboard-layout";
import ProjectTable from "@/components/projects/project-table";
import KanbanBoard from "@/components/agile/kanban-board";
import CreateProjectForm from "@/components/projects/create-project-form";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Projects
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage projects, tasks and sprint progress.
          </p>
        </div>

        <CreateProjectForm />

        <ProjectTable />

        <KanbanBoard />

      </div>
    </DashboardLayout>
  );
}