const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-medium tracking-wide transition-all duration-200 min-h-11 sm:min-h-0 hover:-translate-y-0.5 active:translate-y-0 active:scale-95";

const VARIANT_CLASS = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-fg)] border border-transparent hover:opacity-90",
  secondary:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-secondary)]",
};

const RESPONSIVE_ICON_CLASSES =
  "h-10 w-10 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] " +
  "sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:border sm:border-[var(--border)] sm:text-[var(--text-primary)] " +
  "hover:-translate-y-0 sm:hover:-translate-y-0.5";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  compact = false,
  iconOnly = false,
  responsiveIcon = false,
  icon,
  label,
}) {
  const sizes = compact ? "min-h-10 px-4 py-2 text-xs sm:min-h-0" : "px-6 py-3";
  const iconOnlySizes =
    "h-11 w-11 p-0 sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:text-xs";

  let classes;
  let content;

  if (responsiveIcon) {
    classes = `${BASE} ${RESPONSIVE_ICON_CLASSES} ${className}`;
    content = (
      <>
        <span className="sm:hidden">{icon(24)}</span>
        <span className="hidden sm:block">{icon(14)}</span>
        <span className="hidden sm:inline">{label}</span>
      </>
    );
  } else if (iconOnly) {
    classes = `${BASE} ${VARIANT_CLASS[variant]} ${iconOnlySizes} ${className}`;
    content = (
      <>
        {icon(18)}
        <span className="hidden sm:inline">{label}</span>
      </>
    );
  } else {
    classes = `${BASE} ${VARIANT_CLASS[variant]} ${sizes} ${className}`;
    content = children;
  }

  if (href) {
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={iconOnly || responsiveIcon ? label : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      aria-label={iconOnly || responsiveIcon ? label : undefined}
    >
      {content}
    </button>
  );
}
