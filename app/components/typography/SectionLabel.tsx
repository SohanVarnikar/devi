import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-bold tracking-widest uppercase ${className}`}
      style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  );
}
