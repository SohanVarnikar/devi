import { Card } from "@/app/components/ui/Card";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export function TrendChartCard() {
  return (
    <Card>
      <SectionHeading
        title="Delivery Trend"
        description="Deployment frequency and lead time over the last 30 days."
      />
      <div className="mt-4 h-72 rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center text-sm text-slate-500">
        Chart placeholder
      </div>
    </Card>
  );
}
