import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/about"
          element={
            <div className="py-12 text-center text-(--text-muted)">
              About page loading...
            </div>
          }
        />
        <Route
          path="/blogs"
          element={
            <div className="py-12 text-center text-(--text-muted)">
              Blogs page loading...
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
