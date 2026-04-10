type SectionHeadingProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
