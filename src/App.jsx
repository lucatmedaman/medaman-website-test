import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import VoorWie from "./pages/VoorWie";
import WieIsMedaman from "./pages/WieIsMedaman";
import Contact from "./pages/Contact";
import Links from "./pages/Links";
import NietGevonden from "./pages/NietGevonden";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="voor-wie" element={<VoorWie />} />
        <Route path="wie-is-medaman" element={<WieIsMedaman />} />
        <Route path="contact" element={<Contact />} />
        <Route path="links" element={<Links />} />
        <Route path="*" element={<NietGevonden />} />
      </Route>
    </Routes>
  );
}
