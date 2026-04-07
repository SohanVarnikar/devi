import { ReactNode } from "react";

type HighlightColor = "cyan" | "coral" | "green";

interface InlineHighlightProps {
  children: ReactNode;
  color?: HighlightColor;
}

const colorMap: Record<HighlightColor, string> = {
  cyan: "var(--cyan)",
  coral: "var(--coral)",
  green: "var(--green)",
};

export function InlineHighlight({
  children,
  color = "cyan",
}: InlineHighlightProps) {
  return (
    <strong
      className="font-bold"
      style={{ color: colorMap[color], fontFamily: "var(--font-mono)" }}
    >
      {children}
    </strong>
  );
}
