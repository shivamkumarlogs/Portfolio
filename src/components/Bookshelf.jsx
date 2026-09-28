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
        <div className="w-full flex flex-col min-w-[580px] sm:min-w-full">
          
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
                const isHovered = hoveredId === book.id;

                return (
                  <div
                    key={book.id}
                    className="relative group transition-transform duration-300 ease-out"
                    style={{
                      zIndex: isHovered ? 40 : 20,
                      marginRight: "2px",
                    }}
                    onMouseEnter={() => setHoveredId(book.id)}
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
                        by {book.author} • {book.category}
                      </div>
                      {/* Tooltip beak */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-(--border)" />
                    </div>

                    {/* Book Spine Anchor */}
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${book.title} by ${book.author}`}
                      className="relative block outline-none focus-visible:ring-2 focus-visible:ring-(--accent-link) transition-all duration-300 ease-out"
                      style={{
                        width: `${book.width}px`,
                        height: `${book.height}px`,
                        backgroundColor: book.color,
                        transform: `skewX(${TILT_ANGLE}deg) translateY(${isHovered ? -14 : 0}px)`,
                        transformOrigin: "bottom center",
                        boxShadow: isHovered
                          ? "0 20px 30px -6px rgba(0, 0, 0, 0.45), 0 4px 8px rgba(0, 0, 0, 0.2)"
                          : "0 6px 12px -3px rgba(0, 0, 0, 0.35)",
                        borderRadius: "2px 2px 0 0",
                      }}
                    >
                      {/* Top Pages Edge (Cream paper texture indicating top of book) */}
                      <div
                        className="absolute top-0 inset-x-0 h-[2.5px] rounded-t-xs"
                        style={{
                          backgroundColor: "#f4ede4",
                          boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.25)",
                        }}
                      />

                      {/* Cylindrical 3D Spine Lighting Gradient */}
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            book.id === "dont-believe-everything"
                              ? "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.06) 85%, rgba(0,0,0,0.16) 100%)"
                              : "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(255,255,255,0.18) 12%, rgba(255,255,255,0.02) 48%, rgba(0,0,0,0.16) 86%, rgba(0,0,0,0.46) 100%)",
                        }}
                      />

                      {/* ========================================================================= */}
                      {/* CUSTOM UNIQUE SPINE DESIGN PER REAL BOOK COVER */}
                      {/* ========================================================================= */}

                      {/* 1. The Great Gatsby: Scribner 1925 Art Deco classic */}
                      {book.id === "great-gatsby" && (
                        <>
                          {/* Art Deco top diamond star */}
                          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <span className="text-[8px] text-[#f5d061] opacity-90 leading-none select-none">✦</span>
                          </div>
                          {/* Title */}
                          <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-serif font-medium text-[9.5px] sm:text-[10px] uppercase whitespace-nowrap text-center text-[#fef3c7]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                                letterSpacing: "0.16em",
                              }}
                            >
                              The Great Gatsby
                            </span>
                          </div>
                          {/* Art deco double gold hairline rule at bottom */}
                          <div className="absolute bottom-3.5 inset-x-2 flex flex-col gap-0.5">
                            <div className="h-px w-full bg-[#f5d061]/80" />
                            <div className="h-px w-full bg-[#f5d061]/50" />
                          </div>
                        </>
                      )}

                      {/* 2. Don't Believe Everything You Think: Minimalist Zen Paper Cover */}
                      {book.id === "dont-believe-everything" && (
                        <>
                          {/* Iconic Zen Red Circle */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#dc2626] shadow-2xs" />
                          {/* Title in stark modern ink */}
                          <div className="absolute inset-0 flex items-center justify-center py-8 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-sans font-bold text-[9px] sm:text-[9.5px] uppercase whitespace-nowrap text-center text-[#18181b]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                letterSpacing: "0.08em",
                              }}
                            >
                              Don't Believe Everything You Think
                            </span>
                          </div>
                          {/* Zen minimal clean base - NO lines or stripes */}
                        </>
                      )}

                      {/* 3. I Don't Love You Anymore: Emotive Poetry Cloth Book */}
                      {book.id === "dont-love-you-anymore" && (
                        <>
                          {/* Title in delicate lowercase / light tracking */}
                          <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-sans font-normal text-[9.5px] sm:text-[10px] whitespace-nowrap text-center text-[#fae8eb]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                letterSpacing: "0.14em",
                              }}
                            >
                              i don't love you anymore
                            </span>
                          </div>
                          {/* Single subtle rose-gold hairline at base */}
                          <div className="absolute bottom-4 inset-x-2.5 h-px bg-[#fda4af]/50" />
                        </>
                      )}

                      {/* 4. Siddhartha: Vintage Saffron Literary Paperback */}
                      {book.id === "siddhartha" && (
                        <>
                          {/* Vintage colored header band */}
                          <div className="absolute top-2 inset-x-1 h-3.5 rounded-xs bg-[#5a341b]/80 border-b border-[#f59e0b]/40 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#f59e0b]/70" />
                          </div>
                          {/* Title */}
                          <div className="absolute inset-0 flex items-center justify-center py-8 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-serif font-bold text-[10.5px] sm:text-[11px] uppercase whitespace-nowrap text-center text-[#fef3c7]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                                letterSpacing: "0.22em",
                              }}
                            >
                              Siddhartha
                            </span>
                          </div>
                          {/* Vintage bottom saffron band */}
                          <div className="absolute bottom-2.5 inset-x-1.5 h-1 rounded-xs bg-[#f59e0b]/70" />
                        </>
                      )}

                      {/* 5. The Old Man and the Sea: Classical Scribner Maritime Teal */}
                      {book.id === "old-man-sea" && (
                        <>
                          {/* Scribner sea-foam silver top rule */}
                          <div className="absolute top-3.5 inset-x-2 h-px bg-[#5eead4]/70" />
                          {/* Title */}
                          <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-serif font-semibold text-[9.5px] sm:text-[10px] uppercase whitespace-nowrap text-center text-[#f0fdfa]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                                letterSpacing: "0.14em",
                              }}
                            >
                              The Old Man and the Sea
                            </span>
                          </div>
                          {/* Scribner bottom rule */}
                          <div className="absolute bottom-3.5 inset-x-2 h-px bg-[#5eead4]/70" />
                        </>
                      )}

                      {/* 6. The Metamorphosis: Modernist Kafkaesque Stark Black & Red */}
                      {book.id === "metamorphosis" && (
                        <>
                          {/* Bold stark crimson block */}
                          <div className="absolute top-2.5 inset-x-1 h-4.5 bg-[#b91c1c] rounded-xs shadow-xs" />
                          {/* Stark grotesque / mono title */}
                          <div className="absolute inset-0 flex items-center justify-center py-9 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-mono font-bold text-[9.5px] sm:text-[10px] uppercase whitespace-nowrap text-center text-[#f5f5f5]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                letterSpacing: "0.16em",
                              }}
                            >
                              The Metamorphosis
                            </span>
                          </div>
                          {/* Stark white bottom notch */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-1 bg-white/80" />
                        </>
                      )}

                      {/* 7. The Alchemist: HarperOne Moroccan Terracotta & Gold Sun */}
                      {book.id === "the-alchemist" && (
                        <>
                          {/* Radiant golden sun burst emblem */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full border border-[#facc15] flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#facc15]" />
                            </div>
                          </div>
                          {/* Title with mystical serif flare */}
                          <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-serif font-medium text-[10.5px] sm:text-[11px] uppercase whitespace-nowrap text-center text-[#fef9c3]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                                letterSpacing: "0.2em",
                              }}
                            >
                              The Alchemist
                            </span>
                          </div>
                          {/* Desert gold double band */}
                          <div className="absolute bottom-3 inset-x-1.5 flex flex-col gap-1">
                            <div className="h-0.5 w-full bg-[#facc15]/80" />
                          </div>
                        </>
                      )}

                      {/* 8. Project Hail Mary: Deep Space Sci-Fi with Solar Orbit Ray */}
                      {book.id === "project-hail-mary" && (
                        <>
                          {/* High-contrast electric yellow orbital trajectory bar */}
                          <div
                            className="absolute top-3 inset-x-1 h-[3px] rounded-xs"
                            style={{
                              backgroundColor: "#facc15",
                              boxShadow: "0 0 6px rgba(250, 204, 21, 0.4)",
                            }}
                          />
                          {/* Futuristic bold sci-fi type */}
                          <div className="absolute inset-0 flex items-center justify-center py-7 px-1 overflow-hidden pointer-events-none">
                            <span
                              className="font-sans font-black text-[10px] sm:text-[10.5px] uppercase whitespace-nowrap text-center text-[#fde047]"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                                textShadow: "0 0 8px rgba(250, 204, 21, 0.3)",
                                letterSpacing: "0.18em",
                              }}
                            >
                              Project Hail Mary
                            </span>
                          </div>
                          {/* Segmented orbital dashes at base */}
                          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
                            <div className="w-1.5 h-1 bg-[#facc15]/90 rounded-2xs" />
                            <div className="w-1.5 h-1 bg-[#facc15]/50 rounded-2xs" />
                            <div className="w-1.5 h-1 bg-[#facc15]/20 rounded-2xs" />
                          </div>
                        </>
                      )}

                      {/* Flat bottom baseline edge resting flush on the shelf plank */}
                      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-black/25" />
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
