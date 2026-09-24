import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";
import { profile, socialLinks } from "../data/siteContent";

export function HeroSection() {
  // Global live view counter (real-time, session-deduplicated)
  const [views, setViews] = useState(() => {
    try {
      const cached = localStorage.getItem("portfolio_views_count");
      return cached !== null ? parseInt(cached, 10) : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    let mounted = true;

    async function syncViews() {
      try {
        const hasCounted = sessionStorage.getItem("portfolio_view_counted");
        const action = hasCounted ? "get" : "hit";
        const url = `https://countapi.mileshilliard.com/api/v1/${action}/shivamkumar-portfolio-views`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Counter response not ok");
        const data = await res.json();

        if (mounted && typeof data?.value === "number") {
          setViews(data.value);
          localStorage.setItem("portfolio_views_count", data.value.toString());
          if (!hasCounted) {
            sessionStorage.setItem("portfolio_view_counted", "true");
          }
        }
      } catch (err) {
        console.warn("View counter fallback active:", err);
      }
    }

    syncViews();
    return () => {
      mounted = false;
    };
  }, []);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-1rem)] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-10"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-5xl px-4 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Main Card / Container with subtle craft border */}
        <div className="space-y-8 my-auto">
          {/* Header Block: Name + Role + View Count & Status */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1
                id="hero-title"
                className="font-serif-accent text-3xl sm:text-4xl lg:text-5xl tracking-tight text-(--text-primary) font-medium"
              >
                {profile.name}
              </h1>
              <p className="mt-1 font-display text-sm sm:text-base text-(--text-muted) tracking-wide">
                {profile.strapline}
              </p>
            </div>

            {/* Top Right: View Count Badge */}
            <div>
              <div
                title="Global Profile Views (Live)"
                className="inline-flex items-center gap-1.5  px-2.5 py-1 text-xs font-mono text-(--text-muted) transition-colors hover:text-(--text-secondary) select-none"
              >
                <Icon name="eye" size={14} />
                <span className="tabular-nums font-medium">
                  {views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Solid Hairline Separator */}
          <div className="border-t border-(--border-soft)" aria-hidden="true" />

          {/* Story / Bullet Points */}
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-(--text-secondary) font-sans">
            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">
                •
              </span>
              <span>
                I&rsquo;m a{" "}
                <strong className="font-medium text-(--text-primary)">
                  Full-Stack Developer
                </strong>{" "}
                passionate about crafting digital products where thoughtful
                design meets clean, scalable code.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">
                •
              </span>
              <span>
                I design and develop modern interfaces and robust backend APIs
                with{" "}
                <strong className="font-medium text-(--text-primary)">
                  React
                </strong>
                ,{" "}
                <strong className="font-medium text-(--text-primary)">
                  Node.js
                </strong>
                ,{" "}
                <strong className="font-medium text-(--text-primary)">
                  Express
                </strong>
                , and{" "}
                <strong className="font-medium text-(--text-primary)">
                  MongoDB
                </strong>{" "}
                focusing on usability, performance, and clean architecture.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">
                •
              </span>
              <span>
                I enjoy transforming ideas into polished products, refining
                interaction details, and creating intuitive, reliable
                experiences from database schema to UI.
              </span>
            </li>
          </ul>

          <div className="pt-2">
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {[
                {
                  label: "Resume",
                  href: "/Shivam_Kumar_Resume.pdf",
                  icon: "paperclip",
                },
                ...socialLinks,
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") || link.href.endsWith(".pdf")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http") || link.href.endsWith(".pdf")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  title={link.label}
                  className="group relative overflow-hidden flex h-11 sm:h-12 items-center justify-center gap-2 sm:gap-2.5 rounded-xl sm:rounded-xl border border-(--border-soft) bg-(--surface) px-2 sm:px-3.5 transition-all duration-300 hover:border-(--border) hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
                    aria-hidden="true"
                  />

                  <span className="text-(--text-secondary) transition-colors duration-200 group-hover:text-(--text-primary)">
                    <Icon name={link.icon} size={20} />
                  </span>
                  <span className="hidden sm:inline font-display text-xs sm:text-sm font-medium text-(--text-primary) tracking-wide truncate">
                    {link.label}
                  </span>
                  <span className="hidden sm:inline-flex text-(--text-muted) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--text-primary)">
                    <Icon name="arrow-up-right" size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div
        className={`mx-auto w-full max-w-5xl px-6 lg:px-8 pt-6 flex justify-center transition-all duration-300 ${
          hasScrolled ? "opacity-0 pointer-events-none -translate-y-2" : "opacity-100"
        }`}
        aria-hidden={hasScrolled}
      >
        <a
          href="#projects"
          tabIndex={hasScrolled ? -1 : 0}
          className="group inline-flex flex-col items-center gap-1 text-xs font-mono text-(--text-muted) transition-colors duration-200 hover:text-(--text-primary)"
        >
          <span className="tracking-widest uppercase text-[10px] sm:text-[11px]">Explore</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-y-1">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
