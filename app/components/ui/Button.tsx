import { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
  secondary: "bg-white/10 text-white hover:bg-white/15",
  ghost: "bg-transparent text-slate-300 hover:bg-white/5",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
