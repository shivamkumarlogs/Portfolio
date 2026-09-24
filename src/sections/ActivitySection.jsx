import { useState, useEffect, useRef, useCallback } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../ThemeContext";
import { GITHUB_USERNAME } from "../data/siteContent";

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function ActivitySection() {
  const { theme } = useTheme();
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
        // Mobile: keep original crisp 11px blocks with smooth scroll to latest commits
        setDimensions({ blockSize: 11, blockMargin: 3, isMobile: true });
      } else {
        // Desktop: fill 100% of card width from left to right (no empty sides)
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

  // Auto-scroll to latest commits on mobile
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
    <section id="activity" className="relative scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
            Activity
          </p>
          <h2 className="font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
            Github Contributions
          </h2>
        </div>

        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-(--border-soft) bg-(--surface)
            p-5 sm:p-7
            transition-all duration-300
            hover:border-(--border)
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          "
        >
          {/* Subtle top hairline highlight */}
          <div
            className="
              pointer-events-none absolute inset-x-0 top-0 h-px
              bg-linear-to-r from-transparent via-(--card-highlight) to-transparent
            "
          />

          {/* Contributions Counter */}
          <p className="mb-4 font-display text-sm font-medium text-(--text-primary) sm:text-base">
            {totalCount !== null
              ? `${totalCount.toLocaleString()} contributions this year`
              : "Contributions this year"}
          </p>

          {/* Calendar: Mobile scrolls to latest commits; Desktop stretches to fill width without empty sides */}
          <div ref={containerRef} className="w-full text-(--text-muted)">
            <div
              ref={scrollRef}
              className={`w-full ${
                dimensions.isMobile
                  ? "flex overflow-x-auto pb-1 scrollbar-none"
                  : "overflow-hidden"
              }`}
            >
              <div className={dimensions.isMobile ? "shrink-0" : "w-full"} >
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
      </div>
    </section>
  );
}
