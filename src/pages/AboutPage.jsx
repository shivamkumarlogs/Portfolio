import { useState, useEffect, useRef, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../ThemeContext";
import { Icon } from "../components/Icon";
import { profile, techStack, GITHUB_USERNAME } from "../data/siteContent";

function formatBioText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-(--text-primary)">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

const categories = [
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & Database" },
  { key: "mobile", label: "Mobile" },
  { key: "platform", label: "Tools & Platforms" },
];

function groupByCategory() {
  const map = {};
  categories.forEach((c) => (map[c.key] = []));
  techStack.forEach((item) => {
    if (map[item.category]) {
      map[item.category].push(item.name);
    }
  });
  return map;
}

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function AboutPage() {
  const { theme } = useTheme();
  const groupedStack = groupByCategory();

  // GitHub Calendar state
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [totalCount, setTotalCount] = useState(null);
  const [dimensions, setDimensions] = useState({
    blockSize: 11,
    blockMargin: 3,
    isMobile: false,
  });

  const handleTransformData = useCallback((data) => {
    const total = data.reduce((acc, curr) => acc + (curr.count || 0), 0);
    setTotalCount(total);
    return data;
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      if (width <= 0) return;

      const isMobile = width < 640;
      if (isMobile) {
        setDimensions({ blockSize: 11, blockMargin: 3, isMobile: true });
      } else {
        const colWidth = width / 53;
        const margin = Math.max(2, Math.round(colWidth * 0.2 * 10) / 10);
        const size = Math.round((colWidth - margin) * 10) / 10;
        setDimensions({
          blockSize: size,
          blockMargin: margin,
          isMobile: false,
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !dimensions.isMobile) return;

    const scrollToLatest = () => {
      if (el) {
        el.scrollLeft = el.scrollWidth - el.clientWidth;
      }
    };

    scrollToLatest();
    const t1 = setTimeout(scrollToLatest, 150);
    const t2 = setTimeout(scrollToLatest, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [dimensions.isMobile]);

  return (
    <div className="space-y-12 sm:space-y-16 animate-fade-in">
      {/* Header & Story */}
      <section className="space-y-4">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          About Me
        </p>
        <h1 className="font-serif-accent text-3xl sm:text-4xl lg:text-5xl tracking-tight text-(--text-primary) font-medium">
          Background & Philosophy
        </h1>

        <div className="space-y-3 pt-2 text-sm sm:text-base leading-relaxed text-(--text-secondary) font-sans max-w-3xl">
          {profile.about?.map((point, index) => (
            <p key={index}>{formatBioText(point)}</p>
          ))}
        </div>
      </section>

      {/* Categorized Tech Stack */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
            Technologies
          </p>
          <h2 className="font-serif-accent text-2xl sm:text-3xl tracking-tight text-(--text-primary)">
            What I Work With
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300 hover:border-(--border) hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col divide-y divide-(--border-soft)">
            {categories.map((cat) => {
              const names = groupedStack[cat.key];
              if (!names || !names.length) return null;
              return (
                <div
                  key={cat.key}
                  className="flex flex-col gap-2.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6 sm:py-4.5"
                >
                  <h3 className="w-full shrink-0 font-display text-sm font-semibold text-(--text-primary) sm:w-44 sm:text-base">
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {names.map((name) => (
                      <span
                        key={name}
                        className="
                          group/badge inline-flex items-center gap-2 rounded-lg
                          border border-(--border-soft) bg-(--bg-secondary)/60
                          px-2.5 py-1.5 font-display text-xs sm:text-[13px] font-medium text-(--text-primary)
                          transition-all duration-200
                          hover:-translate-y-0.5 hover:border-(--border)
                          hover:bg-(--surface-raised) hover:shadow-xs
                        "
                      >
                        <Icon
                          name={name}
                          size={18}
                          className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110"
                        />
                        <span>{name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub Contributions Activity */}
      <section className="space-y-4">
        <div className="space-y-1">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
            Activity
          </p>
          <h2 className="font-serif-accent text-2xl sm:text-3xl tracking-tight text-(--text-primary)">
            GitHub Contributions
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300 hover:border-(--border) hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
            aria-hidden="true"
          />

          <p className="mb-4 font-display text-sm font-medium text-(--text-primary) sm:text-base">
            {totalCount !== null
              ? `${totalCount.toLocaleString()} contributions this year`
              : "Contributions this year"}
          </p>

          <div ref={containerRef} className="w-full text-(--text-muted)">
            <div
              ref={scrollRef}
              className={`w-full ${
                dimensions.isMobile
                  ? "flex overflow-x-auto pb-1 scrollbar-none"
                  : "overflow-hidden"
              }`}
            >
              <div className={dimensions.isMobile ? "shrink-0" : "w-full"}>
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  theme={calendarTheme}
                  blockSize={dimensions.blockSize}
                  blockMargin={dimensions.blockMargin}
                  blockRadius={2.5}
                  showMonthLabels={true}
                  showWeekdayLabels={false}
                  showColorLegend={false}
                  showTotalCount={false}
                  transformData={handleTransformData}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
