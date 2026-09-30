import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";
import { useTheme } from "../ThemeContext";
import { SegmentedToggle } from "../components/SegmentedToggle";
import { Bookshelf } from "../components/Bookshelf";
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
      map[item.category].push(item);
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
  const [searchParams, setSearchParams] = useSearchParams();
  const bioTab = searchParams.get("tab") === "beyond" ? "beyond" : "developer";

  const handleTabChange = (newTab) => {
    const nextParams = new URLSearchParams(searchParams);
    if (newTab === "developer") {
      nextParams.delete("tab");
    } else {
      nextParams.set("tab", newTab);
    }
    setSearchParams(nextParams, { replace: true });
  };

  // GitHub Calendar state: clean single-ref architecture
  const calendarRef = useRef(null);
  const [totalCount, setTotalCount] = useState(null);
  const [dimensions, setDimensions] = useState({
    blockSize: 11,
    blockMargin: 3,
    isScrollable: false,
  });

  const scrollToLatest = useCallback(() => {
    const el = calendarRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "instant" });
    }
  }, []);

  const handleTransformData = useCallback((data) => {
    const total = data.reduce((acc, curr) => acc + (curr.count || 0), 0);
    queueMicrotask(() => {
      setTotalCount((prev) => (prev === total ? prev : total));
      requestAnimationFrame(scrollToLatest);
    });
    return data;
  }, [scrollToLatest]);

  useEffect(() => {
    const el = calendarRef.current;
    if (!el) return;

    const updateSize = () => {
      const width = el.offsetWidth;
      if (width <= 0) return;

      if (width < 720) {
        setDimensions({ blockSize: 11, blockMargin: 3, isScrollable: true });
      } else {
        const colWidth = width / 53;
        const margin = Math.max(2, Math.round(colWidth * 0.2 * 10) / 10);
        const size = Math.round((colWidth - margin) * 10) / 10;
        setDimensions({
          blockSize: size,
          blockMargin: margin,
          isScrollable: false,
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(() => {
      updateSize();
      scrollToLatest();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [bioTab, scrollToLatest]);

  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-4">
        <div className="flex flex-col justify-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-(--text-primary)">
            About
          </h1>
          <p className="text-sm text-(--text-secondary) leading-relaxed transition-opacity duration-200">
            {bioTab === "developer"
              ? "Engineering background, technical craft, and full-stack architecture."
              : "A few things that inspire and recharge me away from the screen."}
          </p>
        </div>

        {/* Segmented Pill Toggle */}
        <SegmentedToggle
          value={bioTab}
          onChange={handleTabChange}
          options={[
            { value: "developer", label: "Developer" },
            { value: "beyond", label: "Beyond Code" },
          ]}
        />
      </header>

      {/* Developer Story vs Beyond Code View */}
      <section className="space-y-4">
        {bioTab === "developer" ? (
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-(--text-secondary) font-sans">
            {profile.about?.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                <span
                  className="select-none text-(--text-muted) leading-relaxed text-base"
                  aria-hidden="true"
                >
                  •
                </span>
                <span className="flex-1">{formatBioText(point)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="pt-2">
            <Bookshelf />
          </div>
        )}
      </section>

      {/* Technical Sections: Only shown in Developer tab */}
      {bioTab === "developer" && (
        <>
          {/* GitHub Contributions Activity */}
          <section className="space-y-2.5">
            <div>
              <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-(--text-muted)">
                GitHub Activity
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300 ">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
                aria-hidden="true"
              />

              <div className="mb-5 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-(--text-primary)">
                  {totalCount !== null ? (
                    <span>{totalCount.toLocaleString()} Contributions this year</span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-36 rounded-md bg-(--border-soft) animate-pulse" />
                    </span>
                  )}
                </div>

                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-(--border-soft) bg-(--bg-secondary)/50 text-xs font-medium text-(--text-primary) hover:border-(--border) hover:bg-(--surface-raised) transition-all active:scale-95"
                >
                  <FaGithub size={14} />
                  <span>View profile</span>
                  <span className="text-(--text-muted) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>

              {/* Responsive Calendar Container */}
              <div
                ref={calendarRef}
                className="w-full overflow-x-auto pb-1 scrollbar-none text-(--text-muted)"
              >
                <div className={dimensions.isScrollable ? "min-w-[720px]" : "w-full"}>
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
          </section>

          {/* Categorized Tech Stack */}
          <section className="space-y-2.5">
            <div>
              <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-(--text-muted)">
                Technologies I Work With
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300 ">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col divide-y divide-dashed divide-(--border-soft)">
                {categories.map((cat) => {
                  const items = groupedStack[cat.key];
                  if (!items || !items.length) return null;
                  return (
                    <div
                      key={cat.key}
                      className="flex flex-col gap-2.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6 sm:py-4.5"
                    >
                      <h3 className="w-full shrink-0 font-display text-sm font-semibold text-(--text-muted) sm:w-44 sm:text-base">
                        {cat.label}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {items.map((tech) => (
                          <span
                            key={tech.name}
                            className="
                              group/badge inline-flex items-center gap-2 rounded-lg
                              border border-(--border-soft) bg-(--bg-secondary)/60
                              px-2.5 py-1.5 font-display text-xs sm:text-[13px] font-medium text-(--text-primary)
                              transition-all duration-200
                              hover:-translate-y-0.5 hover:border-(--border)
                              hover:bg-(--surface-raised) hover:shadow-xs
                            "
                          >
                            {typeof tech.icon === "string" ? (
                              <img
                                src={tech.icon}
                                alt=""
                                className={`w-4.5 h-4.5 shrink-0 object-contain transition-transform duration-200 group-hover/badge:scale-110 ${
                                  tech.name === "GitHub" ? "dark:invert" : ""
                                }`}
                                loading="lazy"
                              />
                            ) : (
                              <tech.icon
                                size={17}
                                className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110"
                              />
                            )}
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
