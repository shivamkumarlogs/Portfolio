import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { Icon } from "./Icon";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/projects", label: "Projects", icon: "projects" },
  { to: "/about", label: "About", icon: "about" },
  { to: "/blogs", label: "Blogs", icon: "blogs" },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse labels when scrolled down past 35px
      setIsScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show text labels if user is near top OR hovering over the dock
  const showLabels = !isScrolled || isHovered;

  return (
    <nav
      aria-label="Main Navigation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out"
    >
      <div
        className="
          flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full
          bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl
          border border-zinc-200/80 dark:border-zinc-800/80
          shadow-xl shadow-zinc-950/10 dark:shadow-2xl dark:shadow-black/50
          transition-all duration-300 ease-out
        "
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `
              group relative flex flex-col items-center justify-center rounded-full
              transition-all duration-200 ease-out active:scale-95
              ${showLabels ? "px-3 py-1.5 sm:px-3.5 sm:py-2 min-w-14 sm:min-w-16" : "p-2 sm:p-2.5"}
              ${
                isActive
                  ? "bg-zinc-200/90 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-xs"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
              }
            `}
          >
            {({ isActive }) => (
              <>
                <Icon
                  name={item.icon}
                  size={18}
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-105" : "group-hover:scale-110"
                  }`}
                />

                {/* Collapsible Label */}
                <span
                  className={`
                    font-display text-[10px] sm:text-[11px] font-medium tracking-tight leading-none
                    transition-all duration-300 ease-out
                    ${
                      showLabels
                        ? "max-h-4 opacity-100 mt-1"
                        : "max-h-0 opacity-0 mt-0 pointer-events-none"
                    }
                  `}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}

        {/* Subtle Divider */}
        <span
          className="mx-1 h-5 w-px shrink-0 bg-zinc-200 dark:bg-zinc-800 transition-colors"
          aria-hidden="true"
        />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className={`
            relative flex flex-col items-center justify-center rounded-full
            text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100
            hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50
            active:scale-90 transition-all duration-200 cursor-pointer
            ${showLabels ? "px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-11 sm:min-w-12" : "p-2 sm:p-2.5"}
          `}
        >
          <Icon
            name={isDark ? "sun" : "moon"}
            size={18}
            className="transition-transform duration-200 hover:rotate-12"
          />

          <span
            className={`
              font-display text-[10px] sm:text-[11px] font-medium tracking-tight leading-none
              transition-all duration-300 ease-out
              ${
                showLabels
                  ? "max-h-4 opacity-100 mt-1"
                  : "max-h-0 opacity-0 mt-0 pointer-events-none"
              }
            `}
          >
            {isDark ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </nav>
  );
}
