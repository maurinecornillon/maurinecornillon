import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/img/logo/9.png";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isTop, setIsTop] = useState(true); // Garde en mémoire si on est en haut de la page
  const location = useLocation();

  const isProjectPage = [
    "/anomusic",
    "/estimeo",
    "/linkera",
    "/otome",
    "/smartback",
    "/game",
  ].includes(location.pathname);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cacher le header lorsqu'on défile vers le bas
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      }

      // Révéler le header uniquement si on est tout en haut de la page
      if (currentScrollY === 0) {
        setIsHidden(false);
        setIsTop(true);
      } else {
        setIsTop(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[100px] sm:h-[100px] transition-transform duration-700 ease-in-out font-sporting-regular ${
        isHidden && !isTop ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full h-full ">
        {/* Conteneur principal */}
        <div className="w-[90%] h-full flex justify-between items-center mx-auto">
          {/* Section gauche (Logo) */}
          <div className="h-full flex-1 flex justify-start items-center">
            <img
              src={logo}
              className="max-h-[60px] hidden sm:block object-contain"
              alt="Logo"
            />
          </div>

          {/* Section centrale (Navigation) */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-4 sm:space-x-6 text-secondary border border-secondary px-6 sm:px-12 md:px-16 lg:px-20 py-2 rounded-full text-[0.6rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[0.8rem]">
              <li>
                {location.pathname === "/" ? (
                  <button onClick={() => scrollToSection("accueil")}>
                    ACCUEIL
                  </button>
                ) : (
                  <Link to="/">ACCUEIL</Link>
                )}
              </li>
              {!isProjectPage && (
                <>
                  <li>
                    {location.pathname === "/" ? (
                      <button onClick={() => scrollToSection("services")}>
                        SERVICES
                      </button>
                    ) : (
                      <Link to="/">SERVICES</Link>
                    )}
                  </li>
                  <li>
                    {location.pathname === "/" ? (
                      <button onClick={() => scrollToSection("projets")}>
                        PROJETS
                      </button>
                    ) : (
                      <Link to="/">PROJETS</Link>
                    )}
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Section droite (CTA) */}
          <div className="flex-1 flex justify-end">
            <a
              href="https://linktr.ee/maurinemona"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block rounded-2xl bg-purple border-2 border-dashed border-black px-6 py-3 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.5rem] sm:text-[0.5rem] md:text-[0.5rem] lg:text-[0.8rem]"
            >
              ME CONTACTER
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
