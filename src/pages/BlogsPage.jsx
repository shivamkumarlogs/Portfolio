import { blogs } from "../data/siteContent";

export function BlogsPage() {
  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in max-w-3xl">
      {/* Quiet Header */}
      <header className="space-y-2">
        <h1 className="font-serif-accent text-3xl sm:text-4xl tracking-tight text-(--text-primary) font-medium">
          Writing
        </h1>
        <p className="text-sm text-(--text-muted)">
          Thoughts on full-stack architecture, backend systems, and web performance.
        </p>
      </header>

      {/* Pure Typographic List */}
      <div className="space-y-3 sm:space-y-4 pt-2">
        {blogs.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-2 transition-colors cursor-pointer"
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
