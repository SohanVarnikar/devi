import { MetricsGrid } from "@/app/components/dashboard/MetricsGrid";
import { TrendChartCard } from "@/app/components/dashboard/TrendChartCard";
import { ActivityFeed } from "@/app/components/dashboard/ActivityFeed";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function DashboardView() {
  return (
    <>
      <SectionHeading
        title="Engineering Overview"
        description="Track delivery health, team performance, and delivery risks."
      />

      <div className="mt-6">
        <MetricsGrid />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
        <TrendChartCard />
        <ActivityFeed />
      </div>
    </>
  );
}
