import { ReactNode } from "react";

interface PanelProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Panel({
  title,
  icon,
  children,
  className = "",
  noPadding = false,
}: PanelProps) {
  return (
    <div
      className={`rounded-lg border ${className}`}
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {title && (
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div className="flex items-center gap-2">
            {icon && <span style={{ color: "var(--cyan)" }}>{icon}</span>}
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {title}
            </span>
          </div>
        </div>
      )}
      <div className={noPadding ? "" : "p-5"}>{children}</div>
    </div>
  );
}
