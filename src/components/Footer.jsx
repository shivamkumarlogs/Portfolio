export function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative  mt-14 sm:mt-20 pb-8 sm:pb-8">
      <div className="mx-auto w-full max-w-5xl px-4  lg:px-8">
        <div className="flex items-center justify-between gap-4 text-xs text-(--text-muted)">

          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1 transition-colors hover:text-(--text-primary) cursor-pointer"
            >
              <span>Top</span>
              <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
