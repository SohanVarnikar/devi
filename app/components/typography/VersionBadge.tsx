interface VersionBadgeProps {
  label: string;
  variant?: "default" | "green" | "cyan";
}

export function VersionBadge({ label, variant = "green" }: VersionBadgeProps) {
  const colors = {
    default: {
      color: "var(--text-secondary)",
      border: "var(--border-default)",
    },
    green: { color: "var(--green)", border: "var(--green-dim)" },
    cyan: { color: "var(--cyan)", border: "var(--cyan-dim)" },
  };
  const { color, border } = colors[variant];

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-xs font-bold tracking-widest uppercase rounded border"
      style={{ color, borderColor: border, fontFamily: "var(--font-mono)" }}
    >
      {label}
    </span>
  );
}
