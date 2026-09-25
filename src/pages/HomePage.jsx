import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";
import { profile, socialLinks, EMAIL } from "../data/siteContent";

export function HomePage() {
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-fade-in">
      {/* Top Header & Identity */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </div>

            <h1 className="font-serif-accent text-4xl sm:text-5xl lg:text-6xl tracking-tight text-(--text-primary) font-medium">
              {profile.name}
            </h1>
            <p className="font-display text-base sm:text-lg text-(--text-muted) tracking-wide">
              {profile.strapline}
            </p>
          </div>

          {/* Live View Count */}
          <div
            title="Global Profile Views (Live)"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-(--border-soft) bg-(--surface) text-xs font-mono text-(--text-muted) select-none"
          >
            <Icon name="eye" size={14} />
            <span className="tabular-nums font-medium">
              {views.toLocaleString()} views
            </span>
          </div>
        </div>

        {/* Crisp Mission Statement */}
        <p className="text-base sm:text-lg leading-relaxed text-(--text-secondary)">
          Crafting digital products where thoughtful interface design meets
          clean, scalable full-stack architecture. Building with React, Node.js,
          Express, and MongoDB.
        </p>

        {/* Quick Actions & Social Handles */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {/* Dual Action: Send Email + Copy Address */}
          <div className="inline-flex items-center rounded-xl border border-(--border-soft) bg-(--surface) text-xs sm:text-sm font-medium transition-all hover:border-(--border) hover:bg-(--surface-raised) shadow-2xs">
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 pl-3.5 pr-2.5 py-2 text-(--text-primary) transition-colors"
            >
              Get in touch
            </a>

            <span className="h-4 w-px bg-(--border-soft)" aria-hidden="true" />

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title={copied ? "Copied to clipboard!" : `Copy ${EMAIL}`}
              className="flex h-8 w-8 items-center justify-center rounded-r-xl text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-secondary)/60 active:scale-90 transition-all cursor-pointer"
            >
              {copied ? (
                <Icon
                  name="check"
                  size={15}
                  className="text-emerald-500 dark:text-emerald-400"
                />
              ) : (
                <Icon
                  name="copy"
                  size={15}
                  className="transition-transform duration-200 hover:scale-110"
                />
              )}
            </button>
          </div>

          <a
            href="/Shivam_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-(--border-soft) bg-(--surface) text-xs sm:text-sm font-medium text-(--text-primary) hover:border-(--border) hover:bg-(--surface-raised) transition-all"
          >
            <span>Resume</span>
            <Icon
              name="arrow-up-right"
              size={14}
              className="text-(--text-muted)"
            />
          </a>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              aria-label={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(--border-soft) bg-(--surface) text-(--text-secondary) hover:text-(--text-primary) hover:border-(--border) hover:bg-(--surface-raised) transition-all"
            >
              <Icon name={link.icon} size={17} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
