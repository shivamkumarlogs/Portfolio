export function Tag({ children, muted = false }) {
  const color = muted ? "text-[var(--text-muted)]" : "text-[var(--text-secondary)]";
  const sizes = muted ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]";
  return (
    <span
      className={`rounded-md border border-(--border-soft) bg-(--bg-secondary) tracking-wide ${color} ${sizes}`}
    >
      {children}
    </span>
  );
}