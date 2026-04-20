import { Card } from "@/app/components/ui/Card";
import { BotIcon } from "@/app/components/ai-assist/BotIcon";
import { RichText } from "@/app/components/ai-assist/RichText";
import { type AIMessage } from "@/app/components/ai-assist/data";

type AssistantBubbleProps = {
  message: Extract<AIMessage, { role: "assistant" }>;
};

export function AssistantBubble({ message }: AssistantBubbleProps) {
  return (
    <div
      className="flex items-start gap-3"
      role="article"
      aria-label="AI assistant response"
    >
      {/* Bot avatar */}
      <div
        aria-hidden="true"
        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300"
      >
        <BotIcon />
      </div>

      <Card className="flex-1 rounded-2xl rounded-tl-sm space-y-4">
        {/* Prose paragraphs */}
        <div className="space-y-3 text-sm leading-relaxed text-slate-300">
          {message.paragraphs.map((para, i) => (
            <p key={i}>
              <RichText segments={para} />
            </p>
          ))}
        </div>

        {/* Metric mini-cards */}
        {message.metrics.length > 0 && (
          <dl className="grid grid-cols-3 gap-3">
            {message.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
              >
                <dt className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  {m.label}
                </dt>
                <dd className="mt-1 text-xl font-semibold tracking-tight text-cyan-300">
                  {m.value}
                </dd>
                <dd className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-slate-500">
                  {m.sublabel}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Suggested action buttons */}
        {message.actions.length > 0 && (
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Suggested follow-up actions"
          >
            {message.actions.map((action) => (
              <button
                key={action.id}
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-cyan-300 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/10"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
