import { Card } from "@/app/components/ui/Card";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import {
  prAnalyticsData,
  type PRAnalyticsData,
} from "@/app/components/pr-analytics/data";
import { StatusBadge } from "@/app/components/pr-analytics/StatusBadge";
import { cn } from "@/app/lib/utils";

type PRAnalyticsViewProps = {
  data?: PRAnalyticsData;
  className?: string;
};

export function PRAnalyticsView({
  data = prAnalyticsData,
  className,
}: PRAnalyticsViewProps) {
  const maxBar = data.velocity.length
    ? Math.max(
        1,
        ...data.velocity.map((v) => Math.max(v.cycleHours, v.reviewHours)),
      )
    : 1;

  return (
    <section className={cn("space-y-6", className)}>
      <header className="space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
          {data.title}
        </h1>
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          {data.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <Card
            key={metric.label}
            className="rounded-none border-l-2 border-l-cyan-400/70 p-4"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {metric.label}
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-cyan-300">
              {metric.value}
            </p>
            <p
              className={cn(
                "mt-2 text-[10px] uppercase tracking-[0.14em]",
                metric.tone === "success" && "text-emerald-300",
                metric.tone === "warning" && "text-amber-300",
                metric.tone === "neutral" && "text-slate-400",
                metric.tone === "info" && "text-cyan-300",
              )}
            >
              {metric.delta}
            </p>
          </Card>
        ))}
      </div>

      <Card className="rounded-none">
        <SectionHeading
          title="Cycle vs Review Time by Author"
          description="Distribution of engineering velocity across core repos."
        />
        {data.velocity.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            No velocity data available.
          </p>
        ) : (
          <div
            role="img"
            aria-label="Bar chart showing cycle time and review time in hours per author"
            className="mt-4 flex h-72 items-end justify-around gap-5 border-t border-white/5 pt-6"
          >
            {data.velocity.map((item) => (
              <div
                key={item.author}
                role="group"
                aria-label={item.author}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-end gap-2">
                  <div
                    role="meter"
                    aria-label={`${item.author} cycle time`}
                    aria-valuenow={item.cycleHours}
                    aria-valuemin={0}
                    aria-valuemax={maxBar}
                    aria-valuetext={`${item.cycleHours} hours`}
                    className="w-4 bg-cyan-400/85"
                    style={{
                      height: `${Math.min((item.cycleHours / maxBar) * 180, 180)}px`,
                    }}
                  />
                  <div
                    role="meter"
                    aria-label={`${item.author} review time`}
                    aria-valuenow={item.reviewHours}
                    aria-valuemin={0}
                    aria-valuemax={maxBar}
                    aria-valuetext={`${item.reviewHours} hours`}
                    className="w-4 bg-emerald-300/80"
                    style={{
                      height: `${Math.min((item.reviewHours / maxBar) * 180, 180)}px`,
                    }}
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="text-[10px] uppercase tracking-[0.16em] text-slate-400"
                >
                  {item.author}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card className="rounded-none p-0">
        <div className="border-b border-white/10 px-5 py-4">
          <SectionHeading
            title="Recent Repository Activity"
            action={
              <button className="text-[10px] uppercase tracking-[0.16em] text-cyan-300 transition-colors hover:text-cyan-200">
                Filter
              </button>
            }
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <caption className="sr-only">
              Recent repository pull request activity showing cycle time, review
              time, and merge status per author
            </caption>
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                <th scope="col" className="px-5 py-3 font-medium">
                  Pull Request
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Author
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Cycle
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Review
                </th>
                <th scope="col" className="px-5 py-3 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.activity.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-white/5 text-sm text-slate-200"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium text-white">{row.title}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      {row.id}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center bg-cyan-500/15 text-[10px] font-semibold text-cyan-300">
                        {row.authorInitials}
                      </span>
                      <span>{row.authorName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-mono text-slate-300">
                    {row.cycle}
                  </td>
                  <td className="px-5 py-4 font-mono text-slate-300">
                    {row.review}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-slate-500">
          <span>{data.footerLeft}</span>
          <span className="text-cyan-300">{data.footerRight}</span>
        </div>
      </Card>
    </section>
  );
}
