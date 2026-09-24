import { Button } from "../components/Button";

export function ContactSection() {

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
            />{" "}
            <p className="text-sm leading-relaxed text-(--text-secondary) max-w-md mx-auto mb-5">
              I'm open to new opportunities and collaborations. The best way to
              reach me is via email.
            </p>
            <Button
              variant="primary"
              href="mailto:shivamkumar.byte@gmail.com"
              className="w-full sm:w-auto"
            >
              {" "}
              Send email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
