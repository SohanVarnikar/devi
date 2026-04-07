import { cn } from "@/app/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#101828] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
