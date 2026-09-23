import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";
import { profile, socialLinks } from "../data/siteContent";

export function HeroSection() {
  const [views, setViews] = useState(1024);

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
      setViews(1025);
    }
  }, []);

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12" aria-labelledby="hero-title">
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
                <span className="tabular-nums font-medium">{views.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Solid Hairline Separator */}
          <div className="border-t border-(--border-soft)" aria-hidden="true" />

          {/* Story / Bullet Points */}
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-(--text-secondary) font-sans">
            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">•</span>
              <span>
                I&rsquo;m a <strong className="font-medium text-(--text-primary)">Full-Stack Developer</strong> passionate about crafting digital products where thoughtful design meets clean, scalable code.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">•</span>
              <span>
                I design and develop modern interfaces and robust backend APIs with <strong className="font-medium text-(--text-primary)">React</strong>, <strong className="font-medium text-(--text-primary)">Node.js</strong>, <strong className="font-medium text-(--text-primary)">Express</strong>, and <strong className="font-medium text-(--text-primary)">MongoDB</strong> focusing on usability, performance, and clean architecture.
              </span>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-(--text-muted) select-none mt-1.5 text-xs">•</span>
              <span>
                I enjoy transforming ideas into polished products, refining interaction details, and creating intuitive, reliable experiences from database schema to UI.
              </span>
            </li>
          </ul>

          {/* Links / Contact Grid in 1 Single Line */}
          <div className="pt-2">
            <div className="flex overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 gap-2.5 scrollbar-none">
              {[
                ...socialLinks,
                {
                  label: "Resume",
                  href: "/Shivam_Kumar_Resume.pdf",
                  icon: "paperclip",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  className="group flex shrink-0 min-w-[120px] lg:min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-(--border-soft) bg-(--surface) py-2.5 px-3 transition-all duration-300 hover:border-(--border) hover:bg-(--bg-secondary) hover:-translate-y-0.5"
                >
                  <span className="text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
                    <Icon name={link.icon} size={15} />
                  </span>
                  <span className="font-display text-xs sm:text-sm font-medium text-(--text-primary) truncate">
                    {link.label}
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
