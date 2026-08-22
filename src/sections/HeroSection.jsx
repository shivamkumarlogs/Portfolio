import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { profile } from "../data/siteContent";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center min-h-dvh">
      <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-5 sm:gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-xs text-(--text-secondary)">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to freelance & full-time work
          </span>

          <h1 className="font-serif-accent text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-(--text-primary)">
            {profile.name}
          </h1>

          <p className="font-display text-xs sm:text-sm tracking-[0.06em] text-(--text-muted)">
            {profile.strapline}
          </p>

          <p className="max-w-xl text-[15px] sm:text-base leading-relaxed text-(--text-secondary)">
            {profile.heroDescription}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <Button
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's work together
              <Icon name="arrow-right" size={14} />
            </Button>
            <Button variant="secondary" href="/Shivam_Kumar_Resume.pdf" className="w-full sm:w-auto">
              Download resume
              <Icon name="download" size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}