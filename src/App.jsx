import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Linkera from "./pages/Linkera";
import Estimeo from "./pages/Estimeo";
import Anna from "./pages/Anna";
import Otome from "./pages/Otome";
import Game from "./pages/Game";
// import SmartBack from "./pages/SmartBack";
import Cursor from "./components/Cursor";

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimeo" element={<Estimeo />} />
        <Route path="/anomusic" element={<Anna />} />
        <Route path="/linkera" element={<Linkera />} />
        <Route path="/otome" element={<Otome />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path="/SmartBack" element={<SmartBack />} /> */}

        {/* Nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
