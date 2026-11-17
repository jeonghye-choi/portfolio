import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home/Home";
import Projects from "@/pages/projects/ProjectsPage";
import Notes from "@/pages/notes/NotesPage";
import NoteDetail from "@/pages/notes/NoteDetail";
import Experiences from "@/pages/experiences/ExperiencesPage";
import Labs from "@/pages/labs/LabsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/labs" element={<Labs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
