export type MetricItem = {
  label: string;
  value: string;
  delta: string;
  tone: "success" | "warning" | "neutral" | "info";
};

export type AuthorVelocity = {
  author: string;
  cycleHours: number;
  reviewHours: number;
};

export type PullRequestStatus = "merged" | "review" | "stalled";

export type PullRequestRow = {
  id: string;
  title: string;
  authorInitials: string;
  authorName: string;
  cycle: string;
  review: string;
  status: PullRequestStatus;
};

export type PRAnalyticsData = {
  title: string;
  subtitle: string;
  metrics: MetricItem[];
  velocity: AuthorVelocity[];
  activity: PullRequestRow[];
  footerLeft: string;
  footerRight: string;
};

export const prAnalyticsData: PRAnalyticsData = {
  title: "PR Analytics",
  subtitle: "ACME ORG / FRONTEND PLATFORM · 30 DAYS · GITHUB GRAPHQL",
  metrics: [
    {
      label: "AVG CYCLE",
      value: "18.4h",
      delta: "↓ -12% vs prev",
      tone: "success",
    },
    {
      label: "AVG REVIEW",
      value: "6.2h",
      delta: "↘ -4% vs prev",
      tone: "success",
    },
    { label: "MERGED", value: "84", delta: "— Stable", tone: "neutral" },
    {
      label: "FIRST RESP.",
      value: "3.1h",
      delta: "↗ +1.2h delay",
      tone: "warning",
    },
  ],
  velocity: [
    { author: "AK", cycleHours: 22, reviewHours: 8 },
    { author: "SR", cycleHours: 17, reviewHours: 6 },
    { author: "PM", cycleHours: 24, reviewHours: 10 },
    { author: "JL", cycleHours: 13, reviewHours: 5 },
    { author: "TR", cycleHours: 20, reviewHours: 7 },
  ],
  activity: [
    {
      id: "PR-1290",
      title: "feat: migrate auth to Clerk",
      authorInitials: "AK",
      authorName: "Alex K.",
      cycle: "12h 45m",
      review: "2h 10m",
      status: "merged",
    },
    {
      id: "PR-1288",
      title: "refactor: design token pipeline",
      authorInitials: "PM",
      authorName: "Priya M.",
      cycle: "36h 20m",
      review: "8h 45m",
      status: "review",
    },
    {
      id: "PR-1273",
      title: "feat: AI streaming panel",
      authorInitials: "TR",
      authorName: "Tom R.",
      cycle: "18h 12m",
      review: "4h 55m",
      status: "merged",
    },
    {
      id: "PR-1203",
      title: "fix: edge-case in cache hydration",
      authorInitials: "JL",
      authorName: "Justin L.",
      cycle: "4h 10m",
      review: "1h 15m",
      status: "merged",
    },
  ],
  footerLeft: "SYSTEM_STATUS: NOMINAL · LAST_SYNC: 2026-04-20T16:33:12",
  footerRight: "MONITORING ACTIVE",
};
