import { Navigation } from "./components/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { StackSection } from "./sections/StackSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ActivitySection } from "./sections/ActivitySection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";

function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary text-(--text-primary) pb-24">
      <HeroSection />
      <StackSection />
      <ProjectsSection />
      <ExperienceSection />

      <ActivitySection />
      <ContactSection />
      <Navigation />
    </div>
  );
}

export default App;
