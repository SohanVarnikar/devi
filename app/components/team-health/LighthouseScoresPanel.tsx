import { Card } from "@/app/components/ui/Card";
import { cn } from "@/app/lib/utils";
import type { LighthouseMetric } from "@/app/components/team-health/data";

type LighthouseScoresPanelProps = {
  metrics: LighthouseMetric[];
};

const toneClasses = {
  good: "bg-cyan-300",
  warning: "bg-amber-300",
  danger: "bg-rose-300",
};

export function LighthouseScoresPanel({ metrics }: LighthouseScoresPanelProps) {
  return (
    <Card className="border-l-cyan-400/80">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-100">
          Lighthouse Scores
        </h3>
        <span className="text-cyan-300" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
          </svg>
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
              <span className="text-slate-300">{metric.label}</span>
              <span className="font-semibold text-cyan-300">
                {metric.score}%
              </span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={cn("h-full rounded-full", toneClasses[metric.tone])}
                style={{
                  width: `${Math.max(0, Math.min(metric.score, 100))}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
