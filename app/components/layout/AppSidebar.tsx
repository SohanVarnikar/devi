"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "AI Assist", href: "/ai-assist" },
  { label: "Team Health", href: "/team-health" },
  { label: "PR Analytics", href: "/pr-analytics" },
  { label: "Perf Lab", href: "/perf-lab" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0B1220] lg:block">
      <div className="px-6 py-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Project
          </p>
          <h1 className="mt-2 text-xl font-semibold text-white">DEVI</h1>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-10 items-center rounded-lg px-3 text-sm transition-colors",
                  active
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
