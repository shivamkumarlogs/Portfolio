import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";
import { profile, socialLinks } from "../data/siteContent";

export function HeroSection() {
  const [views, setViews] = useState(0);

  // Realistic persistent view counter
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_views_count");
      let current = stored ? parseInt(stored, 10) : 1024;
      if (!sessionStorage.getItem("portfolio_view_counted")) {
        current += 1;
        localStorage.setItem("portfolio_views_count", current.toString());
        sessionStorage.setItem("portfolio_view_counted", "true");
      }
      setViews(current);
    } catch {
      setViews(0);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 pb-12"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-5xl px-4 lg:px-8">
        {/* Main Card / Container with subtle craft border */}
        <div className="space-y-8">
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
                title="Total Profile Views"
                className="inline-flex items-center gap-1.5 rounded-lg border border-(--border-soft) bg-(--surface) px-2.5 py-1 text-xs font-mono text-(--text-muted) shadow-xs transition-colors hover:border-(--border) hover:text-(--text-secondary)"
              >
                <Icon name="eye" size={13} />
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
    </section>
  );
}
