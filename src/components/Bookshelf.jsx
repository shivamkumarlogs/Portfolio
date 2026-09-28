import { useState } from "react";
import { books } from "../data/siteContent";

export function Bookshelf() {
  const [hoveredId, setHoveredId] = useState(null);

  // Common uniform lean angle matching the user's sketch
  const TILT_ANGLE = 13;

  return (
    <div className="w-full select-none py-6">
      {/* Scrollable on small screens, full width of whole page on tablet & desktop */}
      <div className="w-full overflow-x-auto pb-6 pt-10 scrollbar-none">
        <div className="w-full flex flex-col min-w-[560px] sm:min-w-full">
          
          {/* Upper Shelf Area: Left Wall + Books */}
          <div className="relative flex items-end w-full">
            
            {/* Left Wall / Bookend: Aligned flush with page's left content margin */}
            <div className="relative z-10 flex flex-col items-end shrink-0">
              <div
                className="w-2 sm:w-2.5 rounded-tl-sm rounded-tr-none bg-gradient-to-r from-(--text-muted)/30 via-(--border) to-(--text-muted)/40 border-l border-t border-(--border) shadow-xs"
                style={{ height: "295px" }}
                aria-hidden="true"
              >
                <div className="w-full h-full border-r border-black/10 dark:border-white/5" />
              </div>
            </div>

            {/* Leaning Books Cluster - pl-[56px] aligns the top of the first book flush against the left wall */}
            <div className="relative flex items-end pl-[56px] sm:pl-[58px] z-20">
              {books.map((book) => {
                const isHovered = hoveredId === book.title;

                return (
                  <div
                    key={book.title}
                    className="relative group transition-transform duration-300 ease-out"
                    style={{
                      zIndex: isHovered ? 40 : 20,
                      marginRight: "2px",
                    }}
                    onMouseEnter={() => setHoveredId(book.title)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Floating Title & Author Tooltip on Hover */}
                    <div
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 z-50 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium shadow-xl border border-(--border) bg-(--surface) text-(--text-primary) ${
                        isHovered
                          ? "opacity-100 -translate-y-1 scale-100"
                          : "opacity-0 translate-y-2 scale-95"
                      }`}
                    >
                      <div className="font-semibold">{book.title}</div>
                      <div className="text-[11px] text-(--text-muted) font-normal">
                        by {book.author}
                      </div>
                      {/* Tooltip beak */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-(--border)" />
                    </div>

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
                      {/* Unified Spine Title: 1 consistent font, cleanly centered, no edges or decorations */}
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

            {/* Empty shelf space extending all the way across to the right edge of the page */}
            <div className="flex-1 min-w-[60px]" />
          </div>

          {/* Clean Modern Shelf Plank: Stretches 100% across the whole page width */}
          <div className="relative w-full z-10">
            {/* Shelf Plank Top Highlight & Thickness */}
            <div className="h-2.5 sm:h-3 w-full rounded-xs bg-gradient-to-r from-(--text-muted)/25 via-(--border) to-(--border-soft) border-t border-b border-(--border) shadow-xs">
              <div className="h-0.5 w-full bg-white/20 dark:bg-white/10" />
            </div>
            {/* Shelf Under-Shadow */}
            <div className="h-4 w-full bg-gradient-to-b from-black/15 via-black/5 to-transparent dark:from-black/45 dark:via-black/15 dark:to-transparent blur-[2px]" />
          </div>

        </div>
      </div>
    </div>
  );
}
