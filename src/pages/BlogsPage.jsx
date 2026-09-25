import { Tag } from "../components/Tag";
import { blogs } from "../data/siteContent";

export function BlogsPage() {
  return (
    <div className="space-y-10 sm:space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Writing & Thoughts
        </p>
        <h1 className="font-serif-accent text-3xl sm:text-4xl lg:text-5xl tracking-tight text-(--text-primary) font-medium">
          Articles & Notes
        </h1>
        <p className="text-sm sm:text-base text-(--text-secondary) max-w-2xl leading-relaxed">
          Technical breakdowns, backend patterns, and notes on crafting clean,
          responsive user experiences.
        </p>
      </header>

      {/* Articles List */}
      <div className="space-y-5">
        {blogs.map((post) => (
          <article
            key={post.slug}
            className="
              group relative overflow-hidden rounded-2xl
              border border-(--border-soft) bg-(--surface)
              p-5 sm:p-7 transition-all duration-300
              hover:border-(--border)
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
              dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            "
          >
            {/* Subtle top hairline highlight */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
              aria-hidden="true"
            />

            {/* Meta row: Date + Read time */}
            <div className="flex items-center gap-2 text-xs font-mono text-(--text-muted)">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="mt-2.5 font-serif-accent text-xl sm:text-2xl tracking-tight text-(--text-primary) group-hover:text-(--accent-link) transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-2.5 text-sm leading-relaxed text-(--text-secondary)">
              {post.excerpt}
            </p>

            {/* Tags row */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-1">
              {post.tags.map((tag) => (
                <Tag key={tag} muted>
                  {tag}
                </Tag>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Note at bottom */}
      <div className="rounded-xl border border-(--border-soft) bg-(--bg-secondary)/40 p-4 text-center text-xs text-(--text-muted)">
        More engineering notes and system case studies are currently in progress.
      </div>
    </div>
  );
}
