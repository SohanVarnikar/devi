import { InputHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-cyan-400",
        className,
      )}
      {...props}
    />
  );
}
