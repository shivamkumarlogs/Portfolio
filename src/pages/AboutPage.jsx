import { useSearchParams } from "react-router-dom";
import { SegmentedToggle } from "../components/SegmentedToggle";
import { Bookshelf } from "../components/Bookshelf";
import { GitHubActivity } from "../components/GitHubActivity";
import { profile, techStack } from "../data/siteContent";

// Safely parse inline markdown bold tags (**text**) into <strong> without dangerouslySetInnerHTML
function formatBioText(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-(--text-primary)">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

const categories = [
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & Database" },
  { key: "mobile", label: "Mobile" },
  { key: "platform", label: "Tools & Platforms" },
];

function groupByCategory() {
  const map = {};
  categories.forEach((c) => (map[c.key] = []));
  techStack.forEach((item) => {
    if (map[item.category]) {
      map[item.category].push(item);
    }
  });
  return map;
}

export function AboutPage() {
  const groupedStack = groupByCategory();
  const [searchParams, setSearchParams] = useSearchParams();
  const bioTab = searchParams.get("tab") === "beyond" ? "beyond" : "developer";

  const handleTabChange = (newTab) => {
    const nextParams = new URLSearchParams(searchParams);
    if (newTab === "developer") {
      nextParams.delete("tab");
    } else {
      nextParams.set("tab", newTab);
    }
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in">
      <header className="flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-4">
        <div className="flex flex-col justify-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-(--text-primary)">
            About
          </h1>
          <p className="text-sm text-(--text-secondary) leading-relaxed transition-opacity duration-200">
            {bioTab === "developer"
              ? "Engineering background, technical craft, and full-stack architecture."
              : "A few things that inspire and recharge me away from the screen."}
          </p>
        </div>

        <SegmentedToggle
          value={bioTab}
          onChange={handleTabChange}
          options={[
            { value: "developer", label: "Developer" },
            { value: "beyond", label: "Beyond Code" },
          ]}
        />
      </header>

      <section className="space-y-4">
        {bioTab === "developer" ? (
          <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-(--text-secondary) font-sans">
            {profile.about?.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                <span
                  className="select-none text-(--text-muted) leading-relaxed text-base"
                  aria-hidden="true"
                >
                  •
                </span>
                <span className="flex-1">{formatBioText(point)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="pt-2">
            <Bookshelf />
          </div>
        )}
      </section>

      {bioTab === "developer" && (
        <>
          <GitHubActivity />

          <section className="space-y-2.5">
            <div>
              <h2 className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-(--text-muted)">
                Technologies I Work With
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-(--border-soft) bg-(--surface) p-5 sm:p-7 transition-all duration-300 ">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--card-highlight) to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col divide-y divide-dashed divide-(--border-soft)">
                {categories.map((cat) => {
                  const items = groupedStack[cat.key];
                  if (!items || !items.length) return null;
                  return (
                    <div
                      key={cat.key}
                      className="flex flex-col gap-2.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-6 sm:py-4.5"
                    >
                      <h3 className="w-full shrink-0 font-display text-sm font-semibold text-(--text-muted) sm:w-44 sm:text-base">
                        {cat.label}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {items.map((tech) => (
                          <span
                            key={tech.name}
                            className="
                              group/badge inline-flex items-center gap-2 rounded-lg
                              border border-(--border-soft) bg-(--bg-secondary)/60
                              px-2.5 py-1.5 font-display text-xs sm:text-[13px] font-medium text-(--text-primary)
                              transition-all duration-200
                              hover:-translate-y-0.5 hover:border-(--border)
                              hover:bg-(--surface-raised) hover:shadow-xs
                            "
                          >
                            {typeof tech.icon === "string" ? (
                              <img
                                src={tech.icon}
                                alt=""
                                className={`w-4.5 h-4.5 shrink-0 object-contain transition-transform duration-200 group-hover/badge:scale-110 ${
                                  tech.name === "GitHub" ? "dark:invert" : ""
                                }`}
                                loading="lazy"
                              />
                            ) : (
                              <tech.icon
                                size={17}
                                className="shrink-0 transition-transform duration-200 group-hover/badge:scale-110"
                              />
                            )}
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
