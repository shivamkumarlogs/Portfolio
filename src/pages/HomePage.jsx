import { useState } from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { Icon } from "../components/Icon";
import { ViewCounter } from "../components/ViewCounter";
import { profile, socialLinks, RESUME_URL, EMAIL } from "../data/siteContent";

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

        {/* 2-Tier Action Structure */}
        <div className="space-y-6 ">
          {/* Row 1: Primary (Get in touch) & Secondary (Resume) */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center h-9 sm:h-10 rounded-lg border border-(--border-soft) bg-(--surface) hover:border-(--border) text-xs sm:text-sm font-medium transition-all shadow-xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <a
                href={`https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center h-full px-3.5 sm:px-4 text-(--text-primary) font-semibold hover:bg-(--surface-raised) rounded-l-lg transition-colors whitespace-nowrap"
              >
                <span>Get in touch</span>
              </a>

              <span
                className="h-4 w-px bg-(--border-soft) shrink-0"
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title={copied ? "Copied to clipboard!" : `Copy ${EMAIL}`}
                className="flex h-full w-8 sm:w-9 shrink-0 items-center justify-center rounded-r-lg text-(--text-muted) hover:text-(--text-primary) hover:bg-(--surface-raised) active:scale-90 transition-all cursor-pointer"
              >
                {copied ? (
                  <Icon
                    name="check"
                    size={14}
                    className="text-emerald-500 dark:text-emerald-400"
                  />
                ) : (
                  <Icon
                    name="copy"
                    size={14}
                    className="transition-transform duration-200 hover:scale-110"
                  />
                )}
              </button>
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-9 sm:h-10 px-3.5 sm:px-4 rounded-lg border border-(--border-soft) bg-(--surface) hover:bg-(--surface-raised) hover:border-(--border) text-xs sm:text-sm font-medium text-(--text-primary) shadow-2xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <FaRegFileLines className="text-sm shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors" />
              <span>Resume</span>
              <Icon
                name="arrow-up-right"
                size={12}
                className="text-(--text-muted) group-hover:text-(--text-primary) transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Row 2: Tier 3 Socials (GitHub, LinkedIn, Twitter) */}
          <div className="space-y-1">
            <span className="block text-xs font-medium text-(--text-muted)">
              Find me on
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map(({ label, href, icon: IconComponent }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 h-8 sm:h-9 px-3 sm:px-3.5 rounded-lg border border-(--border-soft) bg-(--surface) hover:bg-(--surface-raised) hover:border-(--border) text-xs sm:text-sm font-medium text-(--text-secondary) hover:text-(--text-primary) shadow-2xs dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <IconComponent className="text-sm sm:text-[15px] shrink-0 text-(--text-muted) group-hover:text-(--text-primary) transition-colors" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
