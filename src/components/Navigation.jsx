import { useTheme } from "../ThemeContext";
import { Icon } from "./Icon"
import { socialLinks } from "../data/siteContent";

const DOCK_BUTTON_CLASS =
  "flex shrink-0 min-h-10 min-w-10 sm:min-h-11 sm:min-w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] active:scale-95";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Only show icons we actually have (github, linkedin, x, email)
  const dockLinks = socialLinks.filter((l) =>
    ["github", "x", "leetcode", "linkedin", "email"].includes(l.icon)
  );

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-(--border) bg-(--surface) px-2 py-2 shadow-lg backdrop-blur-md"
      aria-label="Site navigation"
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={DOCK_BUTTON_CLASS}
        aria-label="Home"
      >
        <Icon name="home" size={17} />
      </button>

      {dockLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.icon !== "email" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={DOCK_BUTTON_CLASS}
          aria-label={link.label}
        >
          <Icon name={link.icon} size={17} />
        </a>
      ))}

      <span className="mx-1 h-4 w-px shrink-0 bg-(--border)" aria-hidden="true" />

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        className={DOCK_BUTTON_CLASS}
      >
        <Icon name={isDark ? "sun" : "moon"} size={17} />
      </button>
    </nav>
  );
}