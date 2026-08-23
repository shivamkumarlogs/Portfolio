import { experience } from "../data/siteContent";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Where I've worked
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:mb-10 sm:text-4xl lg:text-5xl">
          Experience
        </h2>

        <div className="space-y-4">
          {experience.map((job) => (
            <article
              key={job.role + job.company}
              className="
                group relative overflow-hidden rounded-2xl
                border border-(--border-soft) bg-(--surface)
                p-5 sm:p-7
                transition-all duration-300
                hover:-translate-y-0.5 hover:border-(--text-muted)/35
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              "
            >
              {/* Green accent line */}
              <div
                className="
                  pointer-events-none absolute inset-x-0 top-0 h-px
                  bg-linear-to-r from-transparent via-green-500/70 to-transparent
                  opacity-70
                "
              />

              {/* Header */}
              <div className="min-w-0">
                <span className="font-display text-[10px] uppercase tracking-[0.18em] text-(--text-muted)">
                  {job.company}
                </span>

                <div className="mt-1.5 flex items-center justify-between gap-4">
                  <h3 className="font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:text-3xl">
                    {job.role}
                  </h3>

                  <span
                    className="
                      shrink-0 inline-flex items-center rounded-full
                      border border-(--border) px-2.5 py-1
                      font-display text-[9px] font-medium uppercase tracking-[0.16em]
                      text-(--text-secondary)
                    "
                  >
                    {job.period}
                  </span>
                </div>

                <p className="mt-1 text-sm text-(--text-secondary)">
                  {job.location}
                </p>
              </div>

              {/* Points */}
              <ul className="mt-4 space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-6 text-(--text-secondary)"
                  >
                    <span className="text-(--text-muted) shrink-0">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
