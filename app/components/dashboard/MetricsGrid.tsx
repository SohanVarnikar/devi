import { MetricCard } from "@/app/components/dashboard/MetricCard";

const metrics = [
  {
    label: "Deployment Frequency",
    value: "18 / week",
    delta: "+12%",
    trend: "up" as const,
    status: "success" as const,
  },
  {
    label: "Lead Time",
    value: "1.8 days",
    delta: "-8%",
    trend: "up" as const,
    status: "success" as const,
  },
  {
    label: "Change Failure Rate",
    value: "4.2%",
    delta: "+1.1%",
    trend: "down" as const,
    status: "warning" as const,
  },
  {
    label: "MTTR",
    value: "42 min",
    delta: "-14%",
    trend: "up" as const,
    status: "success" as const,
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}
