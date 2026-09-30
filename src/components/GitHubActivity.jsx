import { useState, useEffect, useRef, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa6";
import { useTheme } from "../ThemeContext";
import { GITHUB_USERNAME } from "../data/siteContent";

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GitHubActivity() {
  const { theme } = useTheme();
  const calendarRef = useRef(null);
  const [totalCount, setTotalCount] = useState(null);
  const [dimensions, setDimensions] = useState({
    blockSize: 11,
    blockMargin: 3,
    isScrollable: true,
  });

  const scrollToLatest = useCallback(() => {
    const el = calendarRef.current;
    if (!el) return;

    if (el.scrollWidth > el.clientWidth) {
      el.scrollLeft = el.scrollWidth;
    }

    const inner = el.querySelector(".react-activity-calendar__scroll-container");
    if (inner && inner.scrollWidth > inner.clientWidth) {
      inner.scrollLeft = inner.scrollWidth;
    }
  }, []);

  const handleTransformData = useCallback(
    (data) => {
      const total = data.reduce((acc, curr) => acc + (curr.count || 0), 0);
      queueMicrotask(() => {
        setTotalCount((prev) => (prev === total ? prev : total));
        requestAnimationFrame(scrollToLatest);
      });
      return data;
    },
    [scrollToLatest],
  );

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

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
      scrollToLatest();
    });
    resizeObserver.observe(el);

    const mutationObserver = new MutationObserver(() => {
      scrollToLatest();
    });
    mutationObserver.observe(el, { childList: true, subtree: true });

    // Fallbacks for initial network payload arrival and font rendering
    const timers = [50, 150, 300, 600, 1200].map((d) =>
      setTimeout(scrollToLatest, d),
    );

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [scrollToLatest]);

  return (
    <section className="space-y-2.5">
      <div>
        <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-(--text-muted)">
          GitHub Activity
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300">
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
          <div className={dimensions.isScrollable ? "w-max" : "w-full"}>
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
  );
}
