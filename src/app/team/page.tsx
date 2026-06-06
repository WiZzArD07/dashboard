import DashboardLayout from "@/components/layout/dashboard-layout";

import ResourceSummary from "@/components/team/resource-summary";
import TeamManagement from "@/components/team/team-management";
import CreateMemberForm from "@/components/team/create-member-form";

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Team Management
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Monitor team members, utilization and resource allocation.
          </p>
        </div>

        <CreateMemberForm />

        {/* RESOURCE SUMMARY */}
        <ResourceSummary />

        {/* TEAM TABLE */}
        <TeamManagement />

      </div>
    </DashboardLayout>
  );
}