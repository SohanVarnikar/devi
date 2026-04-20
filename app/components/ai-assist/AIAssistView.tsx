import { Badge } from "@/app/components/ui/Badge";
import { Input } from "@/app/components/ui/Input";
import { cn } from "@/app/lib/utils";
import {
  aiAssistData,
  type AIAssistData,
} from "@/app/components/ai-assist/data";
import { UserBubble } from "@/app/components/ai-assist/UserBubble";
import { AssistantBubble } from "@/app/components/ai-assist/AssistantBubble";

type AIAssistViewProps = {
  data?: AIAssistData;
  className?: string;
};

// ── Main view ──────────────────────────────────────────────────────────────
export function AIAssistView({
  data = aiAssistData,
  className,
}: AIAssistViewProps) {
  const queryPct =
    data.queriesTotal > 0
      ? Math.max(0, Math.min((data.queriesUsed / data.queriesTotal) * 100, 100))
      : 0;

  return (
    <section
      aria-labelledby="ai-assist-heading"
      className={cn("flex h-[calc(100svh-7rem)] flex-col gap-5", className)}
    >
      {/* Page header */}
      <header className="shrink-0 space-y-2">
        <div className="flex flex-wrap items-center gap-3">
          <h1
            id="ai-assist-heading"
            className="text-3xl font-black tracking-tight text-white md:text-4xl"
          >
            <span className="uppercase">AI</span>{" "}
            <span className="font-light italic text-slate-200">assistant</span>
          </h1>
          <Badge variant="info" className="uppercase tracking-[0.18em]">
            {data.releaseLabel}
          </Badge>
        </div>
        <p className="text-[11px] text-slate-400">{data.subtitle}</p>
      </header>

      {/* Conversation log */}
      <div
        role="log"
        aria-label="AI conversation"
        aria-live="polite"
        aria-atomic="false"
        className="min-h-0 flex-1 space-y-5 overflow-y-auto pr-1"
      >
        {data.messages.map((msg) =>
          msg.role === "user" ? (
            <UserBubble key={msg.id} text={msg.text} />
          ) : (
            <AssistantBubble key={msg.id} message={msg} />
          ),
        )}
      </div>

      {/* Input + status footer */}
      <footer className="shrink-0 space-y-3">
        <div>
          <label htmlFor="ai-query-input" className="sr-only">
            Ask a question about your team data
          </label>
          <Input
            id="ai-query-input"
            type="text"
            placeholder={data.inputPlaceholder}
            autoComplete="off"
            className="w-full"
          />
        </div>

        <div
          role="status"
          aria-label="Session status"
          className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-600"
        >
          <span className="min-w-0 flex-1 truncate">{data.statusLeft}</span>
          <div className="shrink-0 flex items-center gap-2">
            <span
              aria-label={`${data.queriesUsed} of ${data.queriesTotal} queries used`}
            >
              <span className="text-slate-400">{data.queriesUsed}</span>
              {" / "}
              {data.queriesTotal} QUERIES USED
            </span>
            <div
              className="h-1 w-16 overflow-hidden rounded-full bg-white/10"
              aria-hidden="true"
            >
              <div
                className="h-full rounded-full bg-cyan-400/60"
                style={{ width: `${queryPct}%` }}
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
