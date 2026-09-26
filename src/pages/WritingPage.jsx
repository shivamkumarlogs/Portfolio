import { blogs } from "../data/siteContent";

export function WritingPage() {
  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-xl font-bold tracking-tight text-(--text-primary)">
          Writing
        </h1>
        <p className="text-sm text-(--text-secondary) leading-relaxed">
          Thoughts on full-stack architecture, backend systems, and web performance.
        </p>
      </header>

      {/* Pure Typographic List */}
      <div className="divide-y divide-dashed divide-(--border-soft)">
        {blogs.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-3.5 sm:py-4 first:pt-0 transition-colors cursor-pointer"
          >
            <span className="text-sm sm:text-base text-(--text-primary) group-hover:text-(--text-muted) transition-colors">
              {post.title}
            </span>

            <span className="shrink-0 text-xs sm:text-sm text-(--text-muted) tracking-tight">
              {post.date} · {post.readTime}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
