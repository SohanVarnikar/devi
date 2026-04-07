import { ReactNode } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
  isActive?: boolean;
}

interface SidebarProps {
  logo?: string;
  items: NavItem[];
}

export function Sidebar({ logo = "DEVI", items }: SidebarProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className="flex items-center px-4 border-b flex-shrink-0"
        style={{
          height: "var(--topbar-height)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <span
          className="text-xl font-black tracking-widest"
          style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}
        >
          {logo}
        </span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-2">
        {items.map((item) => (
          <div
            key={item.href}
            className="flex items-center gap-3 px-4 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors relative"
            style={{
              fontFamily: "var(--font-mono)",
              color: item.isActive ? "var(--cyan)" : "var(--text-secondary)",
              backgroundColor: item.isActive
                ? "var(--bg-raised)"
                : "transparent",
              borderLeft: item.isActive
                ? "2px solid var(--cyan)"
                : "2px solid transparent",
            }}
          >
            <span
              style={{
                color: item.isActive ? "var(--cyan)" : "var(--text-muted)",
              }}
            >
              {item.icon}
            </span>
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
}
