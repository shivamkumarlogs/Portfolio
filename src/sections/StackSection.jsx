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
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          What I use
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-[var(--text-primary)] sm:mb-10 sm:text-4xl lg:text-5xl">
          Tech stack
        </h2>

        <div className="flex flex-col gap-6 sm:gap-8">
          {categories.map((cat) => {
            const names = grouped[cat.key];
            if (!names.length) return null;
            return (
              <div key={cat.key}>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                    {cat.label}
                  </h3>
                  <span className="font-display text-xs text-[var(--text-muted)]">
                    {names.length}
                  </span>
                </div>
                <ul className="flex list-none flex-wrap items-center gap-x-1 gap-y-1.5 p-0 m-0">
                  {names.map((name, i) => (
                    <li key={name} className="inline-flex items-center">
                      <span className="font-display text-sm text-[var(--text-primary)] sm:text-[15px]">
                        {name}
                      </span>
                      {i < names.length - 1 && (
                        <span className="mx-1.5 text-[var(--text-muted)]" aria-hidden="true">
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
    </section>
  );
}