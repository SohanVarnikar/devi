import type { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type PlaceholderStateProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function PlaceholderState({
  title = "Nothing to show yet",
  description = "This section will appear once content becomes available.",
  children,
  action,
  className,
}: PlaceholderStateProps) {
  return (
    <div
      className={cn(
        "flex h-full min-h-full w-full flex-1 items-center justify-center self-stretch",
        className,
      )}
    >
      <div className="flex w-full max-w-2xl flex-col items-center justify-center px-6 py-10 text-center sm:px-8 sm:py-12">
        {children ? (
          <div className="mb-6 flex justify-center">{children}</div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
        {action ? (
          <div className="mt-6 flex justify-center">{action}</div>
        ) : null}
      </div>
    </div>
  );
}
