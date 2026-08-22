import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../ThemeContext";
import { config } from "../config";

export function ActivitySection() {
  const { theme } = useTheme();

  return (
    <section id="activity" className="relative">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Open source
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:mb-10 sm:text-4xl lg:text-5xl">
          Activity
        </h2>

        <div className="rounded-2xl border border-(--border-soft) bg-(--surface) p-3 sm:p-6">
          <p className="font-display text-xs tracking-[0.15em] uppercase text-(--text-muted) mb-4">
            GitHub contributions
          </p>
          <div className="overflow-x-auto pb-1">
            <div className="w-max min-w-full">
              <GitHubCalendar
                username={config.githubUsername}
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={12}
                blockMargin={3}
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}