import { Navigation } from "./components/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { StackSection } from "./sections/StackSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ActivitySection } from "./sections/ActivitySection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen bg-(--bg-primary) text-(--text-primary) pb-24 selection:bg-zinc-800 selection:text-zinc-100 dark:selection:bg-zinc-200 dark:selection:text-zinc-900">
      {/* Subtle ambient lighting at the top */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[600px] sm:w-[800px] rounded-full bg-gradient-to-b from-zinc-200/40 to-transparent dark:from-zinc-800/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <ActivitySection />
        <ContactSection />
      </div>
      <Navigation />
    </div>
  );
}

export default App;
