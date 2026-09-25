import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <div className="relative min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-zinc-800 selection:text-zinc-100 dark:selection:bg-zinc-200 dark:selection:text-zinc-900 transition-colors duration-200">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-150 sm:w-200 rounded-full bg-linear-to-b from-zinc-200/40 to-transparent dark:from-zinc-800/20 blur-3xl" />
      </div>

      {/* Main page content slot - pb-28 ensures bottom dock doesn't obscure content */}
      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-28">
        <Outlet />
      </main>

      {/* Persistent floating bottom dock */}
      <Nav />
    </div>
  );
}
