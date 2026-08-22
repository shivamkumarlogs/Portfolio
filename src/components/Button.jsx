const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-medium tracking-wide transition-all duration-200 min-h-11 sm:min-h-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-95";

const VARIANT_CLASS = {
  primary: "bg-[var(--accent)] text-[var(--accent-fg)] border border-transparent hover:opacity-90",
  secondary:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-secondary)]",
};

export function Button({ children, href, onClick, variant = "primary", className = "", compact = false }) {
  const sizes = compact ? "min-h-10 px-4 py-2 text-xs sm:min-h-0" : "px-6 py-3";
  const classes = `${BASE} ${VARIANT_CLASS[variant]} ${sizes} ${className}`;

  if (href) {
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}