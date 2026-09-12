import { useTheme } from "../ThemeContext";
import { Icon } from "./Icon";
import { socialLinks } from "../data/siteContent";

const DOCK_BUTTON_CLASS =
  "group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-(--text-secondary) transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-(--bg-secondary) hover:text-(--text-primary) active:scale-90 sm:h-11 sm:w-11";

function Tooltip({ children }) {
  return (
    <span
      className="
        pointer-events-none absolute bottom-full left-1/2 mb-5
        -translate-x-1 translate-y-1
        whitespace-nowrap rounded-md
        bg-(--surface)
        px-2.5 py-1.5
        text-[11px] font-medium
        text-(--text-primary)
        opacity-0
        shadow-lg
        backdrop-blur-xl
        transition-all duration-150
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      {children}
    </span>
  );
}

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const dockLinks = socialLinks.filter((link) =>
    ["github", "email", "x"].includes(link.icon)
  );

  return (
    <nav
      className="
        fixed bottom-8 left-1/2 z-50
        flex -translate-x-1/2 items-center gap-2
        rounded-full
        border border-(--border)
        bg-(--surface)
        px-2.5 py-2.5
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
      "
      aria-label="Site navigation"
    >
      {/* Home */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className={DOCK_BUTTON_CLASS}
        aria-label="Home"
      >
        <Icon name="home" size={18} />

        <Tooltip>Home</Tooltip>
      </button>

      {/* Social Links */}
      {dockLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.icon !== "email"
            ? {
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {})}
          className={DOCK_BUTTON_CLASS}
          aria-label={link.label}
        >
          <Icon name={link.icon} size={18} />

          <Tooltip>{link.label}</Tooltip>
        </a>
      ))}

      {/* Divider */}
      <span
        className="mx-1.5 h-5 w-px shrink-0 bg-(--border)"
        aria-hidden="true"
      />

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          isDark ? "Switch to light theme" : "Switch to dark theme"
        }
        className={DOCK_BUTTON_CLASS}
      >
        <Icon name={isDark ? "sun" : "moon"} size={18} />

        <Tooltip>{isDark ? "Light theme" : "Dark theme"}</Tooltip>
      </button>
    </nav>
  );
}