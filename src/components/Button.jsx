import React from "react";

const BASE =
  "group inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap";

const SIZES = {
  sm: "h-8 sm:h-9 px-3 sm:px-3.5",
  md: "h-9 sm:h-10 px-3.5 sm:px-4",
  compact: "h-7 sm:h-8 px-2.5 sm:px-3 text-xs",
};

const VARIANT_CLASS = {
  primary:
    "rounded-lg bg-(--accent) text-(--accent-fg) border border-transparent hover:opacity-90 shadow-2xs",
  secondary:
    "rounded-lg border border-(--border-soft) bg-(--surface) hover:bg-(--surface-raised) hover:border-(--border) text-(--text-secondary) hover:text-(--text-primary) shadow-2xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
};

const RESPONSIVE_ICON_CLASSES =
  "rounded-full min-h-0 h-10 w-10 text-(--text-secondary) hover:bg-(--bg-secondary) hover:text-(--text-primary) " +
  "sm:rounded-lg sm:h-9 sm:w-auto sm:px-3.5 sm:border sm:border-(--border-soft) sm:bg-(--surface) sm:hover:bg-(--surface-raised) sm:hover:border-(--border) sm:text-(--text-secondary) sm:hover:text-(--text-primary) sm:shadow-2xs dark:sm:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]";

function renderIcon(icon, size) {
  if (!icon) return null;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon === "function") {
    try {
      const rendered = icon(size);
      if (React.isValidElement(rendered)) return rendered;
    } catch {
      // It's a React component
    }
    const IconComponent = icon;
    return <IconComponent size={size} />;
  }
  return icon;
}

export function Button({
  children,
  href,
  onClick,
  variant = "secondary",
  size = "sm",
  className = "",
  compact = false,
  iconOnly = false,
  responsiveIcon = false,
  icon,
  endIcon,
  label,
}) {
  const chosenSize = compact ? SIZES.compact : SIZES[size] || SIZES.sm;
  const iconOnlySizes = "h-8 w-8 sm:h-9 sm:w-9 p-0";

  let classes;
  let content;

  if (responsiveIcon) {
    classes = `${BASE} ${RESPONSIVE_ICON_CLASSES} ${className}`;
    content = (
      <>
        <span className="sm:hidden flex items-center justify-center">
          {renderIcon(icon, 22)}
        </span>
        <span className="hidden sm:inline-flex items-center gap-2">
          {icon && (
            <span className="text-sm sm:text-[15px] shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors flex items-center">
              {renderIcon(icon, 14)}
            </span>
          )}
          <span>{children || label}</span>
          {endIcon && (
            <span className="text-sm shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex items-center">
              {endIcon}
            </span>
          )}
        </span>
      </>
    );
  } else if (iconOnly) {
    classes = `${BASE} ${VARIANT_CLASS[variant]} ${iconOnlySizes} ${className}`;
    content = (
      <>
        {icon && (
          <span className="text-sm sm:text-[15px] shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors flex items-center">
            {renderIcon(icon, 14)}
          </span>
        )}
        {(label || children) && <span className="sr-only">{label || children}</span>}
      </>
    );
  } else {
    classes = `${BASE} ${VARIANT_CLASS[variant]} ${chosenSize} ${className}`;
    content = (
      <>
        {icon && (
          <span className="text-sm sm:text-[15px] shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors flex items-center">
            {renderIcon(icon, 14)}
          </span>
        )}
        <span>{children || label}</span>
        {endIcon && (
          <span className="text-sm shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex items-center">
            {endIcon}
          </span>
        )}
      </>
    );
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
