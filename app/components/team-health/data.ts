export type HealthTone = "good" | "warning" | "danger";

export type LighthouseMetric = {
  label: string;
  score: number;
  tone: HealthTone;
};

export type ViolationSeverity = "critical" | "serious" | "moderate" | "minor";

export type ViolationMetric = {
  severity: ViolationSeverity;
  count: number;
};

export type ChecklistItem = {
  label: string;
  complete: boolean;
};

export type BuildMetric = {
  label: string;
  value: string;
};

export type TeamHealthData = {
  title: string;
  releaseLabel: string;
  description: string;
  lastScanLabel: string;
  lastScanValue: string;
  lighthouseScores: LighthouseMetric[];
  axeViolations: ViolationMetric[];
  checklist: ChecklistItem[];
  buildMetrics: BuildMetric[];
  vulnerabilityStatus: "passed" | "warning" | "failed";
  vulnerabilityProgress: number;
};

export const teamHealthData: TeamHealthData = {
  title: "TEAM HEALTH",
  releaseLabel: "stable_rel",
  description:
    "Real-time monitoring of team accessibility compliance and core web vitals. Current build targets WCAG 2.1 Level AA conformance.",
  lastScanLabel: "LAST SCAN:",
  lastScanValue: "2023-10-27 14:32:01 UTC",
  lighthouseScores: [
    { label: "Performance", score: 97, tone: "good" },
    { label: "Accessibility", score: 100, tone: "good" },
    { label: "Best Practices", score: 96, tone: "good" },
    { label: "SEO", score: 100, tone: "good" },
  ],
  axeViolations: [
    { severity: "critical", count: 0 },
    { severity: "serious", count: 0 },
    { severity: "moderate", count: 0 },
    { severity: "minor", count: 2 },
  ],
  checklist: [
    { label: "Focus indicators", complete: true },
    { label: "Skip navigation", complete: true },
    { label: "Accessible charts", complete: true },
    { label: "Color contrast", complete: true },
    { label: "Motion preferences", complete: true },
    { label: "Screen reader tested", complete: true },
  ],
  buildMetrics: [
    { label: "Bundle size", value: "142.4 KB" },
    { label: "First paint", value: "0.8s" },
    { label: "Total blocking", value: "12ms" },
  ],
  vulnerabilityStatus: "passed",
  vulnerabilityProgress: 100,
};
