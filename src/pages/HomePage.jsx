import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const navCards = [
    {
      title: "Projects",
      desc: "Full-stack apps, system architectures, and live demos",
      to: "/projects",
      badge: "3 Live",
      icon: "projects",
    },
    {
      title: "About & Stack",
      desc: "Background, development philosophy, and GitHub activity",
      to: "/about",
      badge: "Profile",
      icon: "about",
    },
    {
      title: "Writing",
      desc: "Articles, technical notes, and architecture breakdowns",
      to: "/blogs",
      badge: "Articles",
      icon: "blogs",
    },
  ];

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
          Crafting digital products where thoughtful interface design meets clean,
          scalable full-stack architecture. Building with React, Node.js, Express, and MongoDB.
        </p>

        {/* Quick Actions & Social Handles */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-(--border-soft) bg-(--surface) text-xs sm:text-sm font-medium text-(--text-primary) hover:border-(--border) hover:bg-(--surface-raised) transition-all cursor-pointer"
          >
            <Icon name={copied ? "check" : "copy"} size={15} />
            <span>{copied ? "Copied to clipboard!" : EMAIL}</span>
          </button>

          <a
            href="/Shivam_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-(--border-soft) bg-(--surface) text-xs sm:text-sm font-medium text-(--text-primary) hover:border-(--border) hover:bg-(--surface-raised) transition-all"
          >
            <span>Resume</span>
            <Icon name="arrow-up-right" size={14} className="text-(--text-muted)" />
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

      {/* Directory Launcher Section */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono tracking-widest uppercase text-(--text-muted)">
          Directory
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {navCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group relative p-5 rounded-2xl border border-(--border-soft) bg-(--surface) hover:border-(--border) hover:bg-(--surface-raised) transition-all duration-200 flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-(--bg-secondary) text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
                  <Icon name={card.icon} size={18} />
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-(--bg-secondary) text-(--text-muted)">
                  {card.badge}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-base font-display font-medium text-(--text-primary) group-hover:text-(--accent-link) transition-colors">
                  <span>{card.title}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-1 text-xs text-(--text-muted) leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
