import { ReactNode } from "react";

export function PhaseLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs font-bold tracking-widest uppercase mb-2"
      style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  );
}
