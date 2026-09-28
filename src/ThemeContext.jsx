import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext(undefined);

const STORAGE_KEY = "portfolio-theme";

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Storage may be restricted in private/sandboxed browsing contexts
  }
  return null;
}

function setStoredTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage may be restricted in private/sandboxed browsing contexts
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const stored = getStoredTheme();
    if (stored) return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const stored = getStoredTheme();
      if (!stored) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((value) => {
    setThemeState(value);
    setStoredTheme(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "dark" ? "light" : "dark";
      setStoredTheme(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}