import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  trend?: "up" | "down" | "neutral";
  status?: "neutral" | "success" | "warning" | "danger" | "info";
};

export function MetricCard({
  label,
  value,
  delta,
  trend = "neutral",
  status = "neutral",
}: MetricCardProps) {
  return (
    <Card className="min-h-[132px]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        <Badge variant={status}>{delta}</Badge>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <p className="text-3xl font-semibold tracking-tight text-white">
          {value}
        </p>
        <span
          className={cn(
            "text-xs",
            trend === "up" && "text-emerald-300",
            trend === "down" && "text-rose-300",
            trend === "neutral" && "text-slate-400",
          )}
        >
          {trend === "up"
            ? "↑ Improving"
            : trend === "down"
              ? "↓ Needs attention"
              : "— Stable"}
        </span>
      </div>
    </Card>
  );
}
