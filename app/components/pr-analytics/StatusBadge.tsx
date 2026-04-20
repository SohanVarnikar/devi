import { Badge } from "@/app/components/ui/Badge";
import { type PullRequestStatus } from "@/app/components/pr-analytics/data";

type StatusBadgeProps = {
  status: PullRequestStatus;
};

const statusMap: Record<
  StatusBadgeProps["status"],
  { label: string; variant: "success" | "info" | "warning" }
> = {
  merged: { label: "Merged", variant: "success" },
  review: { label: "Review", variant: "info" },
  stalled: { label: "Stalled", variant: "warning" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, variant } = statusMap[status];
  return (
    <Badge variant={variant} className="uppercase tracking-[0.14em]">
      {label}
    </Badge>
  );
}
