import { useState } from "react";
import { Icon } from "../components/Icon";
import { ViewCounter } from "../components/ViewCounter";
import { profile, socialLinks, EMAIL } from "../data/siteContent";

export function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-12 sm:pt-24 space-y-12 sm:space-y-16 animate-fade-in">
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="font-bold text-2xl lg:text-3xl tracking-tight text-(--text-primary)">
              {profile.name}
            </h1>
            <p className="font-display text-base sm:text-lg text-(--text-muted) tracking-wide">
              {profile.strapline}
            </p>
          </div>

          <ViewCounter />
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-(--text-secondary)">
          {profile.summary}
        </p>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-(--text-muted) select-none">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>
            Open to full-time opportunities, freelance work and product
            collaborations.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <div className="inline-flex items-center h-8 sm:h-9 rounded-lg border border-(--border-soft) bg-(--surface) hover:border-(--border) text-xs sm:text-sm font-medium transition-all shadow-2xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-full px-3 sm:px-3.5 text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--surface-raised) rounded-l-lg transition-colors whitespace-nowrap"
            >
              <span>Get in touch</span>
            </a>

            <span
              className="h-3.5 w-px bg-(--border-soft) shrink-0"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              title={copied ? "Copied to clipboard!" : `Copy ${EMAIL}`}
              className="flex h-full w-7 sm:w-8 shrink-0 items-center justify-center rounded-r-lg text-(--text-muted) hover:text-(--text-primary) hover:bg-(--surface-raised) active:scale-90 transition-all cursor-pointer"
            >
              {copied ? (
                <Icon
                  name="check"
                  size={13}
                  className="text-emerald-500 dark:text-emerald-400"
                />
              ) : (
                <Icon
                  name="copy"
                  size={13}
                  className="transition-transform duration-200 hover:scale-110"
                />
              )}
            </button>
          </div>

          {socialLinks.map(({ label, href, icon: IconComponent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-8 sm:h-9 px-3 sm:px-3.5 rounded-lg border border-(--border-soft) bg-(--surface) hover:bg-(--surface-raised) hover:border-(--border) text-xs sm:text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) shadow-2xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <IconComponent className="text-sm sm:text-[15px] shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
