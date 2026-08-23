import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../ThemeContext";
import { Icon } from "../components/Icon";

const GITHUB_USERNAME = "shivamkumartech";

export function ActivitySection() {
  const { theme } = useTheme();

  return (
    <section id="activity" className="relative">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Activity
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:mb-10 sm:text-4xl lg:text-5xl">
          One Commit at a Time
        </h2>

        <div
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
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-display text-[10px] uppercase tracking-[0.18em] text-(--text-muted)">
              GitHub contributions
            </span>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 rounded-full
                border border-(--border) px-3 py-1.5
                font-display text-xs font-medium text-(--text-primary)
                transition-colors hover:bg-(--bg-secondary)
              "
            >
              View profile
              <Icon name="external-link" size={12} />
            </a>
          </div>

          {/* Calendar */}
          <div className="mt-5 flex justify-center overflow-x-auto">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme={theme === "dark" ? "dark" : "light"}
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              style={{ width: "100%", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}