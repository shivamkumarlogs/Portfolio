import { useState, useRef, useEffect } from "react";
import { Icon } from "../components/Icon";
import { EMAIL } from "../data/siteContent";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="contact" className="relative">
      <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:pb-24 sm:pt-24 lg:px-8">
        <p className="mb-3 font-display text-xs uppercase tracking-[0.2em] text-(--text-muted)">
          Get in touch
        </p>
        <h2 className="mb-8 font-serif-accent text-2xl tracking-tight text-(--text-primary) sm:mb-10 sm:text-4xl lg:text-5xl">
          Let’s build something great together
        </h2>

        <div className="space-y-6 sm:space-y-8">
          <div className="relative overflow-hidden rounded-2xl border border-(--border-soft) bg-(--surface) p-5 sm:p-8 text-center transition-all duration-300 hover:border-(--border) hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
            {/* Subtle top hairline highlight */}
            <div
              className="
                pointer-events-none absolute inset-x-0 top-0 h-px
                bg-linear-to-r from-transparent via-(--card-highlight) to-transparent
              "
            />
            <p className="text-sm leading-relaxed text-(--text-secondary) max-w-md mx-auto mb-5">
              I'm open to new opportunities and collaborations. The best way to
              reach me is via email.
            </p>
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center rounded-full bg-(--accent) text-(--accent-fg) shadow-sm transition-all duration-200 hover:-translate-y-0.5">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center pl-6 pr-4 py-3 font-display text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
                >
                  Send email
                </a>
                <span
                  className="h-4 w-px bg-(--accent-fg)/20"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  title={copied ? "Copied!" : "Copy email address"}
                  className="flex h-11 w-11 items-center justify-center rounded-r-full text-(--accent-fg)/80 hover:text-(--accent-fg) hover:bg-(--accent-fg)/10 active:scale-90 transition-all cursor-pointer"
                >
                  {copied ? (
                    <Icon
                      name="check"
                      size={17}
                      className="text-emerald-400 dark:text-emerald-300"
                    />
                  ) : (
                    <Icon
                      name="copy"
                      size={17}
                      className="transition-transform duration-200 hover:scale-110"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
