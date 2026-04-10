import { AppHeader } from "@/app/components/layout/AppHeader";
import { AppSidebar } from "@/app/components/layout/AppSidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppHeader />
          <main className="flex-1 px-4 py-6 lg:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
