import { useState } from "react";
import { books } from "../data/siteContent";

export function Bookshelf() {
  const [hoveredId, setHoveredId] = useState(null);

  // Common uniform lean angle matching the user's sketch
  const TILT_ANGLE = 13;

  return (
    <section className="space-y-4">
      {/* Section Header matching GitHub Activity & Tech Stack */}
      <div className="space-y-1">
        <h2 className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Bookshelf
        </h2>
      </div>

      {/* The Card IS the Bookshelf: Left border is the wall, bottom border is the shelf */}
      <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) transition-all duration-300">
        {/* Signature Hairline Card Highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
          aria-hidden="true"
        />

        {/* Books sitting directly on the card floor, framed with ample headroom */}
        <div className="w-full overflow-x-auto pt-20 sm:pt-24 pb-0 scrollbar-none">
          <div className="w-full flex items-end min-w-[560px]">
            {/* Books Cluster: pl-[59px] aligns the top-left of the first book flush against the left wall of the bookshelf */}
            <div className="relative flex items-end pl-[59px] z-20">
              {books.map((book, index) => {
                const isHovered = hoveredId === book.title;
                const isFirst = index === 0;
                const isSecond = index === 1;

                // Book top shifts to the left by height * tan(13deg)
                const topShiftX = Math.round(book.height * Math.tan((TILT_ANGLE * Math.PI) / 180));

                // Precise tooltip alignment so long titles on leftmost books never clip into the left wall
                let tooltipStyle = { left: `calc(50% - ${topShiftX}px)` };
                let tooltipTransform = "-translate-x-1/2";
                let beakClass = "left-1/2 -translate-x-1/2";

                if (isFirst) {
                  // The Great Gatsby: starts 8px from left card wall, beak points at 19px (Gatsby's top)
                  tooltipStyle = { left: "-51px" };
                  tooltipTransform = "translate-x-0";
                  beakClass = "left-[12px]";
                } else if (isSecond) {
                  // Don't Believe Everything You Think: starts 8px from left card wall, beak points at 65px (Book 2's top)
                  tooltipStyle = { left: "-92px" };
                  tooltipTransform = "translate-x-0";
                  beakClass = "left-[57px]";
                }

                return (
                  <div
                    key={book.title}
                    className="relative group transition-transform duration-300 ease-out"
                    style={{
                      zIndex: isHovered ? 40 : 20,
                      marginRight: "3px",
                    }}
                    onMouseEnter={() => setHoveredId(book.title)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Floating Title & Author Tooltip: Anchored precisely over tilted book top */}
                    {isHovered && (
                      <div
                        className="absolute -top-12 pointer-events-none z-50"
                        style={tooltipStyle}
                      >
                        <div
                          className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border border-zinc-800 dark:border-zinc-200 bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 animate-in fade-in zoom-in-95 duration-150 ${tooltipTransform}`}
                        >
                          <div className="font-semibold">{book.title}</div>
                          <div className="text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">
                            by {book.author}
                          </div>
                          {/* Tooltip beak pointing precisely to top of book spine */}
                          <div
                            className={`absolute top-full -mt-px border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100 ${beakClass}`}
                          />
                        </div>
                      </div>
                    )}

                    {/* Book Spine Anchor: Solid cover color, clean uniform design */}
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author}`}
                      className="relative block outline-none focus-visible:ring-2 focus-visible:ring-(--accent-link) transition-all duration-300 ease-out rounded-t-[2px]"
                      style={{
                        width: `${book.width}px`,
                        height: `${book.height}px`,
                        backgroundColor: book.color,
                        transform: `skewX(${TILT_ANGLE}deg) translateY(${isHovered ? -14 : 0}px)`,
                        transformOrigin: "bottom center",
                        boxShadow: isHovered
                          ? "0 18px 26px -6px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)"
                          : "0 4px 10px -2px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {/* Unified Spine Title: 1 consistent font, cleanly centered */}
                      <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                        <span
                          className="font-display font-medium text-[9.5px] sm:text-[10px] uppercase whitespace-nowrap text-center"
                          style={{
                            color: book.textColor,
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            letterSpacing: "0.14em",
                            maxHeight: `${book.height - 40}px`,
                            overflow: "hidden",
                          }}
                        >
                          {book.title}
                        </span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Empty shelf space extending to the right inside the card */}
            <div className="flex-1 min-w-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
