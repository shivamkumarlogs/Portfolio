import { useState } from "react";
import { books } from "../data/siteContent";

// Uniform lean angle matching the portfolio bookshelf aesthetic
const TILT_ANGLE = 13;

// Precompute static dimensions once at module initialization to avoid runtime recalculations
const SHELF_BOOKS = books.map((book) => ({
  ...book,
  coverWidth: Math.round(book.height * 0.65),
  textMaxHeight: `${book.height - 40}px`,
}));

export function Bookshelf() {
  const [hoveredId, setHoveredId] = useState(null);

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
              {SHELF_BOOKS.map((book) => {
                const isHovered = hoveredId === book.title;

                return (
                  <div
                    key={book.title}
                    className="relative group"
                    style={{
                      zIndex: isHovered ? 40 : 20,
                      marginRight: "3px",
                    }}
                  >
                    {/* The Real Book Cover: emerges upward and outward from behind the spine on hover */}
                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 transition-all duration-300 ease-out z-30 pointer-events-none transform-gpu will-change-[transform,opacity] ${
                        isHovered
                          ? "opacity-100 translate-x-7 -translate-y-9 scale-100"
                          : "opacity-0 translate-x-0 translate-y-0 scale-95"
                      }`}
                      style={{
                        width: `${book.coverWidth}px`,
                        height: `${book.height}px`,
                      }}
                    >
                      <div className="relative w-full h-full rounded-r-md rounded-l-[2px] overflow-hidden shadow-[0_22px_40px_-10px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.12)] bg-zinc-900 pointer-events-none select-none">
                        <img
                          src={book.cover}
                          alt=""
                          decoding="async"
                          className="w-full h-full object-cover select-none pointer-events-none"
                          loading="eager"
                        />
                        {/* Book spine hinge shadow on the left edge */}
                        <div className="absolute inset-y-0 left-0 w-3 bg-linear-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
                        {/* Subtle tactile surface sheen */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                      </div>
                    </div>

                    {/* Book Spine Anchor: Tilted hit-box matches visual spine geometry for 100% reliable hover */}
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author}`}
                      className="relative block outline-none focus-visible:ring-2 focus-visible:ring-(--accent-link) transition-all duration-300 ease-out rounded-t-[2px] z-40 transform-gpu will-change-transform cursor-pointer"
                      style={{
                        width: `${book.width}px`,
                        height: `${book.height}px`,
                        backgroundColor: book.color,
                        transform: `skewX(${TILT_ANGLE}deg) translateY(${isHovered ? -14 : 0}px)`,
                        transformOrigin: "bottom center",
                        boxShadow: isHovered
                          ? "0 22px 34px -6px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.12)"
                          : "0 4px 10px -2px rgba(0, 0, 0, 0.3)",
                      }}
                      onClick={(e) => {
                        // On touchscreens without fine pointer hover, reveal cover on first tap
                        if (
                          hoveredId !== book.title &&
                          typeof window !== "undefined" &&
                          window.matchMedia("(hover: none)").matches
                        ) {
                          e.preventDefault();
                          setHoveredId(book.title);
                        }
                      }}
                      onMouseEnter={() => setHoveredId(book.title)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(book.title)}
                      onBlur={() => setHoveredId(null)}
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
                            maxHeight: book.textMaxHeight,
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

