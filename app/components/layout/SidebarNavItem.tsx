"use client";
import { ReactNode } from "react";
import Link from "next/link";

interface SidebarNavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

export function SidebarNavItem({
  icon,
  label,
  href,
  isActive = false,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className="flex items-center gap-3 px-4 py-3 text-xs font-bold tracking-widest uppercase transition-colors relative"
      style={{
        fontFamily: "var(--font-mono)",
        color: isActive ? "var(--cyan)" : "var(--text-secondary)",
        backgroundColor: isActive ? "var(--bg-raised)" : "transparent",
        borderLeft: isActive
          ? "2px solid var(--cyan)"
          : "2px solid transparent",
        textDecoration: "none",
      }}
    >
      <span style={{ color: isActive ? "var(--cyan)" : "var(--text-muted)" }}>
        {icon}
      </span>
      {label}
    </Link>
  );
}
