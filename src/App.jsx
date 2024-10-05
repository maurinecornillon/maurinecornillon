import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Estimeo from "./components/Estimeo";
import AnnaMolly from "./components/Annamolly";
import Linkera from "./components/Linkera";
import Otome from "./components/Otome";
import Game from "./components/Game";
import SmartBack from "./components/SmartBack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimeo" element={<Estimeo />} />
        <Route path="/anna" element={<AnnaMolly />} />
        <Route path="/linkera" element={<Linkera />} />
        <Route path="/otome" element={<Otome />} />
        <Route path="/game" element={<Game />} />
        <Route path="/SmartBack" element={<SmartBack />} />

        {/* Nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
