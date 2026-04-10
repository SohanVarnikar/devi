import { Input } from "@/app/components/ui/Input";
import { Avatar } from "@/app/components/ui/Avatar";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#020817]/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 lg:px-6">
        <div className="w-full max-w-md">
          <Input
            aria-label="Search"
            placeholder="Search metrics, teams, pull requests..."
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-white">Sai Kiran</p>
            <p className="text-xs text-slate-500">Frontend Engineer</p>
          </div>
          <Avatar name="Sai Kiran" />
        </div>
      </div>
    </header>
  );
}
