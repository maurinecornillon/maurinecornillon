import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Faq from "./pages/Faq";
import Construction from "./components/Construction";
import Anna from "./pages/Anna";
import Linkera from "./pages/Linkera";
import Otome from "./pages/Otome";

const App = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <>
      <Cursor />
      <Header />
      <div className={`${isMainPage ? "" : "pt-[120px]"}`}>
        <Routes>
          {/* Page principale */}
          <Route
            path="/"
            element={
              <main className="scroll-smooth">
                <section id="accueil">
                  <Home />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="projets">
                  <Projects />
                </section>
                <section id="faq">
                  <Faq />
                </section>
              </main>
            }
          />
          {/* Pages des projets */}
          <Route path="/anomusic" element={<Anna />} />
          <Route path="/linkera" element={<Linkera />} />
          <Route path="/otome" element={<Otome />} />
          <Route path="/incoming" element={<Construction />} />
        </Routes>
      </div>
      {location.pathname !== "/incoming" && <Footer />}
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
