import DashboardLayout from "@/components/layout/dashboard-layout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Settings
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Manage your account preferences and application settings.
          </p>
        </div>

        {/* PROFILE */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
          <h2 className="mb-6 text-xl font-semibold">
            Profile Settings
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Aryan"
                className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                defaultValue="aryan@example.com"
                className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-[#0F172A]"
              />
            </div>

          </div>
        </div>

        {/* APPEARANCE */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
          <h2 className="mb-6 text-xl font-semibold">
            Appearance
          </h2>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 dark:border-white/10">
            <div>
              <p className="font-medium">
                Theme
              </p>

              <p className="text-sm text-slate-500">
                Switch between light and dark mode.
              </p>
            </div>

            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              Active
            </span>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
          <h2 className="mb-6 text-xl font-semibold">
            Notifications
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <span>Email Notifications</span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span>Risk Alerts</span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span>Sprint Updates</span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span>Deployment Alerts</span>

              <input type="checkbox" />
            </div>

          </div>
        </div>

        {/* SECURITY */}
        <div className="rounded-3xl border border-slate-200 bg-[var(--card)] p-6 dark:border-white/10">
          <h2 className="mb-6 text-xl font-semibold">
            Security
          </h2>

          <div className="space-y-4">

            <button className="rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
              Change Password
            </button>

            <button className="rounded-xl bg-purple-500 px-4 py-2 text-white transition hover:bg-purple-600">
              Enable 2FA
            </button>

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}