import { Card } from "@/app/components/ui/Card";
import { Avatar } from "@/app/components/ui/Avatar";

const items = [
  { name: "Aarav Singh", text: "Merged PR #1842 in 3h 12m", time: "12m ago" },
  {
    name: "Neha Patel",
    text: "Deployment completed for checkout-service",
    time: "28m ago",
  },
  {
    name: "Rohit Das",
    text: "Incident resolved in 41 minutes",
    time: "1h ago",
  },
];

export function ActivityFeed() {
  return (
    <Card>
      <h3 className="text-base font-semibold text-white">Recent Activity</h3>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div
            key={`${item.name}-${item.time}`}
            className="flex items-start gap-3"
          >
            <Avatar name={item.name} size="sm" />
            <div className="min-w-0">
              <p className="text-sm text-slate-200">{item.text}</p>
              <p className="mt-1 text-xs text-slate-500">
                {item.name} · {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
