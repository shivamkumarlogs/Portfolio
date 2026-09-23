import { Navigation } from "./components/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { StackSection } from "./sections/StackSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ActivitySection } from "./sections/ActivitySection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) pb-24">
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <ActivitySection />
      <ContactSection />
      <Navigation />
    </div>
  );
}

export default App;
