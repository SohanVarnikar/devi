import { AppShell } from "@/app/components/layout/AppShell";
import { DashboardView } from "@/app/components/dashboard/DashboardView";

export default function DashboardPage() {
  return (
    <AppShell>
      <DashboardView />
    </AppShell>
  );
}
