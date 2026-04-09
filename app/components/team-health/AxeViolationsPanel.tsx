import { Card } from "@/app/components/ui/Card";
import { cn } from "@/app/lib/utils";
import type {
  ViolationMetric,
  ViolationSeverity,
} from "@/app/components/team-health/data";

type AxeViolationsPanelProps = {
  violations: ViolationMetric[];
};

const tileClasses: Record<ViolationSeverity, string> = {
  critical: "border-emerald-400/20 bg-emerald-500/10",
  serious: "border-emerald-400/20 bg-emerald-500/10",
  moderate: "border-white/10 bg-white/5",
  minor: "border-white/10 bg-white/5",
};

const valueClasses: Record<ViolationSeverity, string> = {
  critical: "text-cyan-300",
  serious: "text-cyan-300",
  moderate: "text-slate-400",
  minor: "text-slate-300",
};

export function AxeViolationsPanel({ violations }: AxeViolationsPanelProps) {
  return (
    <Card className="border-l-cyan-400/80">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-100">
          Axe-Core Violations
        </h3>
        <span className="text-cyan-300" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M18 3h3v3h-2V5h-1Zm3 15v3h-3v-2h1v-1ZM3 18v3h3v-2H5v-1Zm3-15v2H5v1H3V3Zm7 4h2v2h2v2h-2v2h-2v-2H9V9h4Z" />
          </svg>
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {violations.map((item) => (
          <div
            key={item.severity}
            className={cn(
              "rounded-lg border px-4 py-3 text-center",
              tileClasses[item.severity],
            )}
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {item.severity}
            </p>
            <p
              className={cn(
                "mt-1 text-4xl font-semibold leading-none",
                valueClasses[item.severity],
              )}
            >
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
