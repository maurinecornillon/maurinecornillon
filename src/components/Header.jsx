import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Hook pour naviguer

const Header = () => {
  const navigate = useNavigate();

  const handleCrossClick = () => {
    navigate("/menu");
  };

  const handleNavigationHome = () => {
    navigate("/");
  };

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Met à jour l'heure chaque seconde

    return () => clearInterval(intervalId); // Nettoie l'intervalle quand le composant est démonté
  }, []);

  return (
    <>
      <header className="font-sporting text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[12px] relative w-full p-10">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            <div onClick={handleNavigationHome} className="w-30px">
              <h1 className="tracking-wide">Maurine Cornillon</h1>
              <h2 className="tracking-wide">Web Developer</h2>
            </div>
          </Link>

          {/* Ici on change la structure pour centrer correctement */}
          <div className="flex-grow flex justify-center">
            <Link
              to="menu"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              <div
                onClick={handleCrossClick}
                className="flex justify-center items-center h-full relative"
              >
                <div className="group cursor-pointer relative w-8 h-8">
                  <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-black transform -translate-y-1/2 transition-transform duration-300 group-hover:rotate-90"></div>
                  <div className="absolute top-0 left-1/2 h-full w-[0.5px] bg-black transform -translate-x-1/2 transition-transform duration-300 group-hover:rotate-90"></div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-right">
            <p className="tracking-wide">Paris, France</p>
            <span className="ml-4 tracking-wide">{currentTime}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;