import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Estimeo from "./components/Estimeo";
import Linkera from "./components/Linkera";
import Otome from "./components/Otome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/estimeo" element={<Estimeo />} />
        <Route path="/linkera" element={<Linkera />} />
        <Route path="/otome" element={<Otome />} />

        {/* Nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
