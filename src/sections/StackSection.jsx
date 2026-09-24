import { techStack } from "../data/siteContent";
import { Icon } from "../components/Icon";

const categories = [
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "platform", label: "Tools & Platforms" },
];

function groupByCategory() {
  const map = {};
  categories.forEach((c) => (map[c.key] = []));
  techStack.forEach((item) => {
    if (map[item.category]) map[item.category].push(item.name);
  });
  return map;
}

export function StackSection() {
  const grouped = groupByCategory();

  return (
    <section id="stack" className="relative scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Tech Stack
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:mb-10 sm:text-4xl lg:text-5xl">
          What I Use
        </h2>

        <div
          className="
            relative overflow-hidden rounded-2xl
            border border-(--border-soft) bg-(--surface)
            p-5 sm:p-7
            transition-all duration-300
            hover:border-(--border)
            hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          "
        >
          {/* Subtle top hairline highlight */}
          <div
            className="
              pointer-events-none absolute inset-x-0 top-0 h-px
              bg-linear-to-r from-transparent via-(--card-highlight) to-transparent
            "
          />

          <div className="flex flex-col divide-y divide-(--border-soft)">
            {categories.map((cat) => {
              const names = grouped[cat.key];
              if (!names.length) return null;
              return (
                <div
                  key={cat.key}
                  className="flex flex-col gap-2.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6 sm:py-4.5"
                >
                  <h3 className="w-full shrink-0 font-display text-sm font-semibold text-(--text-primary) sm:w-40 sm:text-base">
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {names.map((name) => (
                      <span
                        key={name}
                        className="
                          group/badge inline-flex items-center gap-2.5 rounded-lg
                          border border-(--border-soft) bg-(--bg-secondary)/60
                          px-3 py-1.5 font-display text-xs sm:text-[13px] font-medium text-(--text-primary)
                          transition-all duration-200
                          hover:-translate-y-0.5 hover:border-(--border)
                          hover:bg-(--surface-raised) hover:shadow-sm
                        "
                      >
                        <Icon
                          name={name}
                          size={20}
                          className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110"
                        />
                        <span>{name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
