import { Badge } from "@/app/components/ui/Badge";
import { Card } from "@/app/components/ui/Card";
import type {
  BuildMetric,
  TeamHealthData,
} from "@/app/components/team-health/data";

type BuildMetricsPanelProps = {
  metrics: BuildMetric[];
  vulnerabilityStatus: TeamHealthData["vulnerabilityStatus"];
  vulnerabilityProgress: number;
};

const statusLabelMap: Record<TeamHealthData["vulnerabilityStatus"], string> = {
  passed: "PASSED",
  warning: "WARNING",
  failed: "FAILED",
};

const statusVariantMap: Record<
  TeamHealthData["vulnerabilityStatus"],
  "success" | "warning" | "danger"
> = {
  passed: "success",
  warning: "warning",
  failed: "danger",
};

export function BuildMetricsPanel({
  metrics,
  vulnerabilityStatus,
  vulnerabilityProgress,
}: BuildMetricsPanelProps) {
  const clampedProgress = Math.max(0, Math.min(vulnerabilityProgress, 100));

  return (
    <Card className="border-l-cyan-400/80">
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-100">
        Build Metrics
      </h3>

      <div className="mt-5 space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {metric.label}
            </span>
            <span className="font-mono text-sm text-cyan-300">
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Vulnerability Check
          </span>
          <Badge
            variant={statusVariantMap[vulnerabilityStatus]}
            className="tracking-[0.14em]"
          >
            {statusLabelMap[vulnerabilityStatus]}
          </Badge>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-cyan-300"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
