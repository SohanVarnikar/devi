import { cn } from "@/app/lib/utils";

export function BotIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("h-4 w-4", className)}
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
