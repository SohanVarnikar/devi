import Link from "next/link";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";
import { cn } from "@/app/lib/utils";
import {
  onboardingData,
  type OnboardingData,
} from "@/app/components/onboarding/data";

type OnboardingViewProps = {
  data?: OnboardingData;
  className?: string;
};

function StepTracker({ steps }: { steps: OnboardingData["steps"] }) {
  return (
    <ol
      aria-label="Onboarding progress"
      className="grid grid-cols-2 gap-6 sm:grid-cols-4"
    >
      {steps.map((step) => {
        const isCurrent = step.status === "current";
        const isComplete = step.status === "complete";
        return (
          <li key={step.id} className="space-y-2">
            <div
              aria-current={isCurrent ? "step" : undefined}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center border text-xs font-semibold tracking-[0.12em]",
                isCurrent && "border-cyan-300 bg-cyan-400/90 text-slate-950",
                isComplete &&
                  "border-emerald-300 bg-emerald-400/90 text-slate-950",
                !isCurrent &&
                  !isComplete &&
                  "border-white/10 bg-white/5 text-slate-400",
              )}
            >
              {step.index}
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {step.label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

export function OnboardingView({
  data = onboardingData,
  className,
}: OnboardingViewProps) {
  return (
    <section
      aria-labelledby="onboarding-title"
      className={cn("space-y-8", className)}
    >
      <StepTracker steps={data.steps} />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.9fr]">
        <aside className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              {data.phase}
            </p>
            <h1
              id="onboarding-title"
              className="text-4xl font-black leading-[0.95] tracking-tight text-white"
            >
              {data.title}
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              {data.description}
            </p>
          </header>

          <Card className="rounded-none border-l border-l-cyan-400/70 p-4">
            <h2 className="text-[10px] uppercase tracking-[0.16em] text-slate-300">
              {data.securityTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {data.securityBody}
            </p>
          </Card>
        </aside>

        <div className="space-y-5">
          <Card className="rounded-none border-l border-l-cyan-400/70 p-7">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                {data.panelLabel}
              </p>
              <Badge variant="info" className="uppercase tracking-[0.16em]">
                {data.releaseLabel}
              </Badge>
            </div>

            <form className="mt-6 space-y-4" aria-label="GitHub token form">
              <div className="space-y-2">
                <label
                  htmlFor="github-token"
                  className="text-[10px] uppercase tracking-[0.18em] text-slate-400"
                >
                  {data.panelTitle}
                </label>
                <Input
                  id="github-token"
                  name="githubToken"
                  type="password"
                  autoComplete="off"
                  spellCheck={false}
                  aria-describedby="pat-helper pat-scope"
                  placeholder={data.tokenPlaceholder}
                  className="h-11 rounded-none border-white/20 bg-black/50 font-mono"
                />
              </div>

              <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                <Link
                  href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
                  target="_blank"
                  rel="noreferrer"
                  id="pat-helper"
                  className="text-slate-400 underline-offset-2 transition-colors hover:text-cyan-300 hover:underline"
                >
                  {data.helperText}
                </Link>
                <span id="pat-scope">{data.requiredScope}</span>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                <Button className="h-11 rounded-none text-xs uppercase tracking-[0.14em]">
                  {data.primaryAction}
                </Button>
                <Button
                  variant="secondary"
                  className="h-11 rounded-none border border-white/20 bg-transparent text-xs uppercase tracking-[0.14em]"
                >
                  {data.secondaryAction}
                </Button>
              </div>
            </form>
          </Card>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {data.stats.map((item) => (
              <Card key={item.id} className="rounded-none p-4">
                <dt className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </dt>
                <dd
                  className={cn(
                    "mt-1 text-sm font-medium tracking-[0.08em] text-slate-300",
                    item.tone === "info" && "text-cyan-300",
                  )}
                >
                  {item.value}
                </dd>
              </Card>
            ))}
          </dl>
        </div>
      </div>

      <footer className="pt-16 text-right text-[9px] uppercase tracking-[0.14em] text-slate-600">
        {data.footerLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </footer>
    </section>
  );
}
