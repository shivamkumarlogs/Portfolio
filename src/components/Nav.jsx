import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineFolder,
  HiFolder,
  HiOutlineUser,
  HiUser,
  HiOutlineDocumentText,
  HiDocumentText,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { useTheme } from "../ThemeContext";

const NAV_ITEMS = [
  {
    to: "/",
    label: "Home",
    outlineIcon: HiOutlineHome,
    solidIcon: HiHome,
    end: true,
  },
  {
    to: "/projects",
    label: "Projects",
    outlineIcon: HiOutlineFolder,
    solidIcon: HiFolder,
  },
  {
    to: "/about",
    label: "About",
    outlineIcon: HiOutlineUser,
    solidIcon: HiUser,
  },
  {
    to: "/writing",
    label: "Writing",
    outlineIcon: HiOutlineDocumentText,
    solidIcon: HiDocumentText,
  },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Collapse labels strictly to only icons when scrolled down past 20px
      setIsScrolled(window.scrollY > 20);
    };

    // Check immediately on mount in case page is restored with scroll offset
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When scrolled down, strictly show only icons on all devices
  const showLabels = !isScrolled;

  return (
    <nav
      aria-label="Main Navigation"
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
            title={item.label}
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
            {({ isActive }) => {
              const IconComponent = isActive
                ? item.solidIcon
                : item.outlineIcon;
              return (
                <>
                  <IconComponent
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
              );
            }}
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
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className={`
            relative flex flex-col items-center justify-center rounded-full
            text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100
            hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50
            active:scale-90 transition-all duration-200 cursor-pointer
            ${showLabels ? "px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-11 sm:min-w-12" : "p-2 sm:p-2.5"}
          `}
        >
          {isDark ? (
            <HiOutlineSun
              size={18}
              className="transition-transform duration-200 hover:rotate-12"
            />
          ) : (
            <HiOutlineMoon
              size={18}
              className="transition-transform duration-200 hover:-rotate-12"
            />
          )}

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
