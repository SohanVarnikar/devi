export type OnboardingStep = {
  id: string;
  index: string;
  label: string;
  status: "complete" | "current" | "upcoming";
};

export type OnboardingStat = {
  id: string;
  label: string;
  value: string;
  tone?: "neutral" | "info";
};

export type OnboardingData = {
  phase: string;
  title: string;
  description: string;
  steps: OnboardingStep[];
  panelLabel: string;
  panelTitle: string;
  tokenLabel: string;
  tokenPlaceholder: string;
  helperText: string;
  helperLinkLabel: string;
  requiredScope: string;
  securityTitle: string;
  securityBody: string;
  releaseLabel: string;
  primaryAction: string;
  secondaryAction: string;
  stats: OnboardingStat[];
  footerLines: string[];
};

export const onboardingData: OnboardingData = {
  phase: "PHASE 01",
  title: "IDENTITY VERIFICATION",
  description:
    "To synchronize your engineering metrics, DEVI requires a secure link to your version control environment.",
  steps: [
    { id: "step-auth", index: "01", label: "AUTHENTICATE", status: "current" },
    {
      id: "step-repos",
      index: "02",
      label: "SELECT REPOS",
      status: "upcoming",
    },
    { id: "step-sync", index: "03", label: "SYNC DATA", status: "upcoming" },
    {
      id: "step-dashboard",
      index: "04",
      label: "DASHBOARD",
      status: "upcoming",
    },
  ],
  panelLabel: "MVP ALTERNATIVE - PERSONAL ACCESS TOKEN",
  panelTitle: "INPUT GITHUB TOKEN",
  tokenLabel: "GitHub personal access token",
  tokenPlaceholder: "ghp_xxxxxxxxxxxxxxxxxxxxxxxx",
  helperText: "How to generate a PAT?",
  helperLinkLabel: "Open GitHub docs for creating a personal access token",
  requiredScope: "REQ_SCOPE: [repo, user:read]",
  securityTitle: "SECURITY PROTOCOL",
  securityBody:
    "We recommend creating a token with read-only scopes for the highest security posture. Your PAT is encrypted at rest using AES-256.",
  releaseLabel: "STABLE_REL",
  primaryAction: "CONNECT REPO",
  secondaryAction: "USE MOCK DATA INSTEAD",
  stats: [
    { id: "latency", label: "LATENCY", value: "14ms" },
    { id: "provider", label: "PROVIDER", value: "GITHUB_CLOUD" },
    {
      id: "encryption",
      label: "ENCRYPTION",
      value: "AES_256_ACTIVE",
      tone: "info",
    },
  ],
  footerLines: [
    "DVC_86.BF // CORE_SYSTEM_READY",
    "CODE_SET // 02.7234 - PK - 0046",
    "KERNEL_UPTIME // 48:22:10:09",
  ],
};
