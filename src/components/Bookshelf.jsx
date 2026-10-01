import { useState, useRef, useEffect } from "react";
import { books } from "../data/siteContent";

const TILT_ANGLE = 13;

const SHELF_BOOKS = books.map((book) => ({
  ...book,
  coverWidth: Math.round(book.height * 0.65),
  textMaxHeight: `${book.height - 40}px`,
}));

export function Bookshelf() {
  const [hoveredId, setHoveredId] = useState(null);
  const [closingId, setClosingId] = useState(null);
  const closeTimerRef = useRef(null);
  const shelfRef = useRef(null);

  const handleMouseEnter = (title) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setHoveredId(title);
  };

  const handleMouseLeave = (title) => {
    if (hoveredId === title) {
      setClosingId(title);
      closeTimerRef.current = setTimeout(() => {
        setClosingId(null);
      }, 320);
      setHoveredId(null);
    }
  };

  useEffect(() => {
    if (!hoveredId) return;

    const handleClickOutside = (e) => {
      if (shelfRef.current && !shelfRef.current.contains(e.target)) {
        setClosingId(hoveredId);
        closeTimerRef.current = setTimeout(() => {
          setClosingId(null);
        }, 320);
        setHoveredId(null);
      }
    };

    window.addEventListener("pointerdown", handleClickOutside);
    return () => window.removeEventListener("pointerdown", handleClickOutside);
  }, [hoveredId]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <section className="space-y-2.5">
      <div>
        <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-(--text-muted)">
          Books i've read
        </h2>
      </div>

      <div
        ref={shelfRef}
        className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) transition-all duration-300"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
          aria-hidden="true"
        />

        <div className="w-full overflow-x-auto pt-8 pb-0 scrollbar-none [--shelf-scale:0.72] sm:[--shelf-scale:1]">
          <div className="w-full flex items-end min-w-0 sm:min-w-140">
            <div
              className="relative flex items-end z-20"
              style={{
                paddingLeft: "calc(59px * var(--shelf-scale))",
              }}
            >
              {SHELF_BOOKS.map((book, index) => {
                const isHovered = hoveredId === book.title;
                const isClosing = closingId === book.title;
                const isLast = index === SHELF_BOOKS.length - 1;

                return (
                  <div
                    key={book.title}
                    className="relative group"
                    style={{
                      zIndex: isHovered ? 50 : isClosing ? 40 : 20,
                      marginRight: "calc(2px * var(--shelf-scale))",
                    }}
                    onMouseEnter={() => handleMouseEnter(book.title)}
                    onMouseLeave={() => handleMouseLeave(book.title)}
                  >
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} cover`}
                      tabIndex={isHovered ? 0 : -1}
                      className={`absolute bottom-0 ${
                        isLast ? "right-0 sm:right-auto sm:left-0" : "left-0"
                      } transition-all duration-300 ease-out z-50 pointer-events-none transform-gpu will-change-[transform,opacity] ${
                        isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                      style={{
                        width: `calc(${book.coverWidth}px * var(--shelf-scale))`,
                        height: `calc(${book.height}px * var(--shelf-scale))`,
                        translate: isHovered
                          ? isLast
                            ? "0px 0px"
                            : "calc(22px * var(--shelf-scale)) 0px"
                          : "0px 0px",
                        transform: `translateY(${isHovered ? "calc(-14px * var(--shelf-scale))" : "0px"})`,
                      }}
                    >
                      <div className="relative w-full h-full rounded-r-md rounded-l-xs overflow-hidden shadow-[0_22px_40px_-10px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.12)] bg-zinc-900 select-none">
                        <img
                          src={book.cover}
                          alt=""
                          decoding="async"
                          className="w-full h-full object-cover select-none pointer-events-none"
                          loading="eager"
                        />
                        <div className="absolute inset-y-0 left-0 w-3 bg-linear-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                      </div>
                    </a>

                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author}`}
                      className="relative block outline-none focus-visible:ring-2 focus-visible:ring-(--accent-link) transition-all duration-300 ease-out rounded-t-xs z-30 transform-gpu will-change-transform cursor-pointer"
                      style={{
                        width: `calc(${book.width}px * var(--shelf-scale))`,
                        height: `calc(${book.height}px * var(--shelf-scale))`,
                        backgroundColor: book.color,
                        transform: `skewX(${TILT_ANGLE}deg) translateY(${isHovered ? "calc(-14px * var(--shelf-scale))" : "0px"})`,
                        transformOrigin: "bottom center",
                        boxShadow: isHovered
                          ? "0 16px 28px -8px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.10)"
                          : "0 4px 10px -2px rgba(0, 0, 0, 0.3)",
                      }}
                      onClick={(e) => {
                        // On touchscreens without hover, first tap reveals the cover; second tap follows the link
                        if (hoveredId !== book.title) {
                          e.preventDefault();
                          handleMouseEnter(book.title);
                        }
                      }}
                      onFocus={() => handleMouseEnter(book.title)}
                      onBlur={() => handleMouseLeave(book.title)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center py-5 px-1 overflow-hidden pointer-events-none">
                        <span
                          className="font-display font-bold text-[8.5px] sm:text-[14px] whitespace-nowrap text-center"
                          style={{
                            color: book.textColor,
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            letterSpacing: "0.04em",
                            maxHeight: `calc(${book.height - 20}px * var(--shelf-scale))`,
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

            <div className="flex-1 min-w-8 sm:min-w-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
