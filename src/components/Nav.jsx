import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { Icon } from "./Icon";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 200;
      const projectsEl = document.getElementById("projects");
      const blogsEl =
        document.getElementById("blogs") || document.getElementById("writing");

      if (blogsEl && scrollPos >= blogsEl.offsetTop) {
        setActiveTab("blogs");
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveTab("projects");
      } else {
        setActiveTab("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveTab(id);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el =
        document.getElementById(id) ||
        (id === "blogs" ? document.getElementById("writing") : null);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto flex h-14 sm:h-16 w-full max-w-5xl items-center justify-center px-4 lg:px-8">
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 sm:gap-2"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`
                  relative rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 font-display text-xs sm:text-[13px] font-medium tracking-wide
                  transition-all duration-200 ease-out active:scale-95
                  ${
                    isActive
                      ? "bg-(--bg-secondary) dark:bg-zinc-800 text-(--text-primary)"
                      : "text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary)/60"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}

          {/* Subtle Divider */}
          <span
            className="mx-1 h-3.5 w-px shrink-0 bg-(--border)"
            aria-hidden="true"
          />

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              relative flex h-8 w-8 items-center justify-center rounded-full
              text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary)/60
              active:scale-90 transition-all duration-200
            "
          >
            <Icon name={isDark ? "sun" : "moon"} size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
