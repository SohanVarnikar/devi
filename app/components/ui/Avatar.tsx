import Image from "next/image";

type AvatarProps = {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

export function Avatar({ name, src, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return src ? (
    <Image
      src={src}
      alt={name}
      width={48}
      height={48}
      className={`${sizeMap[size]} rounded-full object-cover`}
    />
  ) : (
    <div
      className={`${sizeMap[size]} flex items-center justify-center rounded-full bg-white/10 text-slate-200`}
      aria-label={name}
    >
      {initials}
    </div>
  );
}
