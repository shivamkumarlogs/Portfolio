import { techStack } from "../data/siteContent";

const categories = [
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
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
    <section id="stack" className="relative">
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
                <div key={cat.key} className="py-4 first:pt-0 last:pb-0">
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-sm font-semibold text-(--text-primary) sm:text-base">
                      {cat.label}
                    </h3>
                    <span className="font-display text-xs text-(--text-muted)">
                      {names.length}
                    </span>
                  </div>
                  <ul className="flex list-none flex-wrap items-center gap-x-1 gap-y-1.5 p-0 m-0">
                    {names.map((name, i) => (
                      <li key={name} className="inline-flex items-center">
                        <span className="font-display text-sm text-(--text-primary) sm:text-[15px]">
                          {name}
                        </span>
                        {i < names.length - 1 && (
                          <span
                            className="mx-1.5 text-(--text-muted)"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
