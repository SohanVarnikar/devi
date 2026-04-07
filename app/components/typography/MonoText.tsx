import { ReactNode } from "react";

type MonoColor = "cyan" | "green" | "coral" | "muted" | "secondary" | "default";

interface MonoTextProps {
  children: ReactNode;
  color?: MonoColor;
  className?: string;
  as?: "span" | "p" | "div" | "code";
}

const colorMap: Record<MonoColor, string> = {
  cyan: "var(--cyan)",
  green: "var(--green)",
  coral: "var(--coral)",
  muted: "var(--text-muted)",
  secondary: "var(--text-secondary)",
  default: "var(--text-primary)",
};

export function MonoText({
  children,
  color = "default",
  className = "",
  as: Tag = "span",
}: MonoTextProps) {
  return (
    <Tag
      className={`text-xs ${className}`}
      style={{ color: colorMap[color], fontFamily: "var(--font-mono)" }}
    >
      {children}
    </Tag>
  );
}
