import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { profile } from "../data/siteContent";

// Section IDs live in one place — no magic strings drifting across files.
const SECTIONS = {
  contact: "contact",
  projects: "projects",
};

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const AVAILABILITY_FALLBACK = "Open to full-time & freelance work";

export function HeroSection() {
  const availability = profile.availability ?? AVAILABILITY_FALLBACK;

  return (
    <section id="hero" className="relative flex min-h-dvh flex-col" aria-labelledby="hero-title">
      <div className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 lg:px-8">
          <div className="flex flex-col gap-6 sm:gap-7">

            {/* Decorative dot is hidden from AT; the sentence is the real content. */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-xs text-(--text-secondary)">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              {availability}
            </span>

            <h1
              id="hero-title"
              className="font-serif-accent text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-(--text-primary)"
            >
              {profile.name}
            </h1>

            <p className="font-display text-sm sm:text-base tracking-[0.04em] text-(--text-muted)">
              {profile.strapline}
            </p>

            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-(--text-secondary)">
              {profile.heroDescription}
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => scrollToId(SECTIONS.contact)}
              >
                Let&rsquo;s talk
                <Icon name="arrow-right" size={14} aria-hidden="true" />
              </Button>

              <Button
                variant="secondary"
                href="/Shivam_Kumar_Resume.pdf"
                className="w-full sm:w-auto"
              >
                Resume
                <Icon name="download" size={14} aria-hidden="true" />
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Real anchor so it works without JS / is middle-clickable / shows in status bar. */}
      <div className="flex justify-center pb-28 sm:pb-24">
        <a
          href={`#${SECTIONS.projects}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToId(SECTIONS.projects);
          }}
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-2 text-(--text-muted) transition-colors hover:text-(--text-primary)"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span aria-hidden="true" className="h-8 w-px bg-(--border) animate-pulse" />
        </a>
      </div>
    </section>
  );
}