import { useState } from "react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { SegmentedToggle } from "../components/SegmentedToggle";
import { Tag } from "../components/Tag";
import { projects, EMAIL } from "../data/siteContent";

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("personal");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "freelance") {
      return project.type === "freelance";
    }
    return project.type !== "freelance";
  });

  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-4">
        <div className="flex flex-col justify-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-(--text-primary)">
            Selected Work
          </h1>
          <p className="text-sm text-(--text-secondary) leading-relaxed transition-opacity duration-200">
            {activeTab === "personal"
              ? "A few projects that capture how I design, build, and ship products."
              : "Client projects, freelance builds, and contract engineering work."}
          </p>
        </div>

        {/* Segmented Pill Toggle */}
        <SegmentedToggle
          value={activeTab}
          onChange={setActiveTab}
          options={[
            { value: "personal", label: "Personal" },
            { value: "freelance", label: "Freelance" },
          ]}
        />
      </header>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article
              key={project.title}
              className="
                relative overflow-hidden rounded-xl
                border border-(--border-soft) bg-(--surface)
                p-5 sm:p-7 transition-all duration-300
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
              <div className="mt-6 flex flex-row items-center justify-between gap-3 pt-2">
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
          ))
        ) : (
          <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) p-8 sm:p-12 text-center transition-all">
            <h3 className="font-semibold text-base sm:text-lg text-(--text-primary) mb-1.5">
              Open for Freelance & Contract Work
            </h3>
            <p className="mx-auto text-xs sm:text-sm text-(--text-secondary) leading-relaxed mb-6">
              I collaborate with founders, startups, and teams to build high-performance web applications, <br/>scalable backend APIs, and responsive interfaces from scratch.
            </p>
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-(--text-primary) text-(--bg-primary) text-xs sm:text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-xs"
            >
                <span>Start a conversation</span>
              </a>
          </div>
        )}
      </div>

    </div>
  );
}
