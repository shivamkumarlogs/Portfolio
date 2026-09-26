export function SegmentedToggle({
  options = [],
  value,
  onChange,
  className = "",
}) {
  const normalizedOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  return (
    <div
      role="tablist"
      className={`shrink-0 self-stretch sm:self-auto flex items-stretch p-1 rounded-full bg-(--surface-raised) border border-(--border-soft) shadow-2xs gap-1 min-h-11 ${className}`}
    >
      {normalizedOptions.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange?.(opt.value)}
            className={`flex-1 sm:flex-initial sm:min-w-24 px-5 sm:px-6 flex items-center justify-center text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-(--surface) text-(--text-primary) shadow-xs"
                : "text-(--text-muted) hover:text-(--text-primary)"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
