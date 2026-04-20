export function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end" role="article" aria-label="Your message">
      <div className="max-w-sm rounded-2xl rounded-br-sm bg-white/5 px-4 py-3 text-sm text-slate-200 ring-1 ring-white/10">
        {text}
      </div>
    </div>
  );
}
