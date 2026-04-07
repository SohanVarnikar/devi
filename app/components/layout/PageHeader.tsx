import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  badge?: ReactNode;
  subtitle?: string;
  description?: string;
  meta?: string;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  badge,
  subtitle,
  description,
  meta,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1
            className="text-3xl font-black tracking-tight uppercase"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {title}
          </h1>
          {badge}
        </div>
        {subtitle && (
          <p
            className="text-xs mt-1"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className="text-sm mt-2 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        )}
        {meta && (
          <p
            className="text-xs mt-1"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {meta}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 flex-shrink-0">{actions}</div>
      )}
    </div>
  );
}
