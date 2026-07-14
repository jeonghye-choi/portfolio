import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Main from "@/pages/Main";
import Projects from "@/pages/Projects";
import Notes from "@/pages/Notes";
import Experiences from "@/pages/Experiences";
import Labs from "@/pages/Labs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/labs" element={<Labs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
