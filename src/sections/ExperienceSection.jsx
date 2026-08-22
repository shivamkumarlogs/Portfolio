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
            <div
              key={job.role + job.company}
              className="rounded-2xl border border-(--border-soft) bg-(--surface) p-4 sm:p-6"
            >
              
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                
                <h3 className="font-serif-accent text-lg sm:text-xl tracking-tight text-(--text-primary)">
                  {job.role} · {job.company}
                </h3>
                <span className="font-display text-xs text-(--text-muted)shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-display text-xs tracking-wide text-[var(--text-muted)]">
                {job.location}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className="text-[var(--text-muted)] shrink-0">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}