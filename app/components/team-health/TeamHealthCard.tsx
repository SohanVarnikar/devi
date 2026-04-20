import { Badge } from "@/app/components/ui/Badge";
import { cn } from "@/app/lib/utils";
import { AxeViolationsPanel } from "@/app/components/team-health/AxeViolationsPanel";
import { AccessibilityChecklistPanel } from "@/app/components/team-health/AccessibilityChecklistPanel";
import { BuildMetricsPanel } from "@/app/components/team-health/BuildMetricsPanel";
import { LighthouseScoresPanel } from "@/app/components/team-health/LighthouseScoresPanel";
import {
  teamHealthData,
  type TeamHealthData,
} from "@/app/components/team-health/data";

type TeamHealthCardProps = {
  data?: TeamHealthData;
  className?: string;
};

export function TeamHealthCard({
  data = teamHealthData,
  className,
}: TeamHealthCardProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <header className="flex items-start justify-between gap-4">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {data.title}
            </h2>
            <Badge variant="info" className="uppercase tracking-[0.18em]">
              {data.releaseLabel}
            </Badge>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            {data.description}
          </p>
        </div>

        <div className="hidden text-right md:block">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            {data.lastScanLabel}
          </p>
          <p className="mt-1 font-mono text-sm text-cyan-300">
            {data.lastScanValue}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <LighthouseScoresPanel metrics={data.lighthouseScores} />
        <AxeViolationsPanel violations={data.axeViolations} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.9fr_1fr]">
        <AccessibilityChecklistPanel items={data.checklist} />
        <BuildMetricsPanel
          metrics={data.buildMetrics}
          vulnerabilityStatus={data.vulnerabilityStatus}
          vulnerabilityProgress={data.vulnerabilityProgress}
        />
      </div>
    </section>
  );
}
