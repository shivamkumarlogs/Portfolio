import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Tag } from "../components/Tag";
import { projects } from "../data/siteContent";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
            Projects
          </p>

          <h2
            className="
              font-serif-accent
              text-2xl
              tracking-tight
              text-(--text-primary)
              sm:text-4xl
              lg:text-5xl
            "
          >
            Things I've Built
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-(--border-soft)
        bg-(--surface)
        p-5
        sm:p-7
        transition-all duration-300
        hover:border-(--border)
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* Subtle top hairline highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-linear-to-r
          from-transparent
          via-(--card-highlight)
          to-transparent
        "
      />

      {/* Thumbnail */}
      {project.screenshot && (
        <div className="w-full overflow-hidden">
          <img
            src={project.screenshot}
            alt={`${project.title} preview`}
            className="w-full h-auto block"
          />
        </div>
      )}

      {/* Header */}
      <div className="min-w-0">
        <span
          className="
      font-display
      text-[10px]
      uppercase
      tracking-[0.18em]
      text-(--text-muted)
    "
        >
          {project.eyebrow}
        </span>

        <div className="mt-1.5 flex items-center justify-between gap-4">
          <h3
            className="
        font-serif-accent
        text-2xl
        tracking-tight
        text-(--text-primary)
        sm:text-3xl
      "
          >
            {project.title}
          </h3>

          {/* Live Status */}
          {project.spotlight && (
            <span
              className="
          shrink-0
          inline-flex
          items-center
          gap-1.5
          rounded-full
          border
          border-green-500/15
          bg-green-500/8
          px-2.5
          py-1
          font-display
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-green-600
          dark:text-green-400
        "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              {project.spotlight}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-3xl
          text-sm
          leading-6
          text-(--text-secondary)
        "
      >
        {project.description}
      </p>

      {/* Bottom Row */}
      <div className="mt-6 flex flex-row items-center justify-between gap-3">
        {" "}
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} muted>
              {tag}
            </Tag>
          ))}
        </div>
        {/* Actions */}
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
  );
}
