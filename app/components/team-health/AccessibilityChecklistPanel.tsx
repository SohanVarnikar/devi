import { Card } from "@/app/components/ui/Card";
import { cn } from "@/app/lib/utils";
import type { ChecklistItem } from "@/app/components/team-health/data";

type AccessibilityChecklistPanelProps = {
  items: ChecklistItem[];
};

function CheckIcon({ complete }: { complete: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-5 w-5 items-center justify-center rounded-full border",
        complete
          ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-300"
          : "border-white/15 bg-white/5 text-slate-500",
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
        <path d="M6.6 10.8 3.7 8l-1 1 3.9 3.7L13.3 6l-1-1-5.7 5.8Z" />
      </svg>
    </span>
  );
}

export function AccessibilityChecklistPanel({
  items,
}: AccessibilityChecklistPanelProps) {
  return (
    <Card className="border-l-cyan-400/80">
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-100">
        Accessibility Checklist
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-sm text-slate-300">{item.label}</span>
            <CheckIcon complete={item.complete} />
          </div>
        ))}
      </div>
    </Card>
  );
}
