import { type InlineSegment } from "@/app/components/ai-assist/data";

export function RichText({ segments }: { segments: InlineSegment[] }) {
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.type === "name") {
          return (
            <strong
              key={i}
              className="font-semibold text-cyan-300"
              aria-label={`person: ${seg.content}`}
            >
              {seg.content}
            </strong>
          );
        }
        if (seg.type === "value") {
          return (
            <strong key={i} className="font-semibold text-cyan-300">
              {seg.content}
            </strong>
          );
        }
        if (seg.type === "mono") {
          return (
            <code
              key={i}
              className="rounded bg-cyan-500/10 px-1 font-mono text-[0.85em] text-cyan-200"
            >
              {seg.content}
            </code>
          );
        }
        return <span key={i}>{seg.content}</span>;
      })}
    </>
  );
}
