import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Tag } from "../components/Tag";
import { projects } from "../data/siteContent";

export function ProjectsPage() {
  return (
    <div className="space-y-10 sm:space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Selected Work
        </p>
        <h1 className="font-serif-accent text-3xl sm:text-4xl lg:text-5xl tracking-tight text-(--text-primary) font-medium">
          Projects & Architecture
        </h1>
        <p className="text-sm sm:text-base text-(--text-secondary) max-w-2xl leading-relaxed">
          Full-stack platforms and backend systems focusing on clean architecture,
          performant APIs, and accessible modern interfaces.
        </p>
      </header>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              relative overflow-hidden rounded-2xl
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

            {/* Thumbnail preview if available */}
            {project.screenshot && (
              <div className="w-full overflow-hidden rounded-xl mb-5 border border-(--border-soft)">
                <img
                  src={project.screenshot}
                  alt={`${project.title} preview`}
                  className="w-full h-auto block"
                />
              </div>
            )}

            {/* Header: Title + Live Badge */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif-accent text-2xl sm:text-3xl tracking-tight text-(--text-primary)">
                {project.title}
              </h2>

              {project.spotlight && (
                <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 font-display text-[10px] font-medium uppercase tracking-[0.16em] text-green-600 dark:text-green-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  {project.spotlight}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-(--text-secondary)">
              {project.description}
            </p>

            {/* Bottom Row: Tags + Links */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag} muted>
                    {tag}
                  </Tag>
                ))}
              </div>

              <div className="flex shrink-0 gap-2">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    responsiveIcon
                    icon={(size) => (
                      <Icon
                        name={link.label === "GitHub" ? "github" : "globe"}
                        size={size}
                      />
                    )}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
