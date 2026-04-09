import Link from "next/link";
import { AppShell } from "@/app/components/layout/AppShell";
import { PlaceholderState } from "@/app/components/ui/PlaceholderState";

function NotFoundIllustration() {
  return (
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">
      <div className="absolute inset-3 rounded-full border border-dashed border-cyan-400/20" />
      <span className="font-mono text-3xl font-semibold tracking-[0.2em] text-cyan-300">
        404
      </span>
    </div>
  );
}

export default function NotFound() {
  return (
    <AppShell>
      <PlaceholderState
        title="Page not found"
        description="The route you requested is not available in this application yet, or the URL does not exist."
        action={
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-cyan-500 px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Back to dashboard
          </Link>
        }
      >
        <NotFoundIllustration />
      </PlaceholderState>
    </AppShell>
  );
}
