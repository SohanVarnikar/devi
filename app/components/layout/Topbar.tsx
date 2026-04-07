import { ReactNode } from "react";

interface TopbarProps {
  logo?: string;
  actions?: ReactNode[];
}

export function Topbar({ logo = "DEVI", actions = [] }: TopbarProps) {
  return (
    <>
      <span
        className="text-xl font-black tracking-widest"
        style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}
      >
        {logo}
      </span>
      <div className="flex items-center gap-3">
        {actions.map((action, i) => (
          <span key={i}>{action}</span>
        ))}
      </div>
    </>
  );
}
