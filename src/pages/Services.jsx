import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Creation from "./../components/Creation";
import Optimisation from "./../components/Optimisation";
import Collaboration from "./../components/Collaboration";

import ZoomText from "../components/ZoomText";


// Composant pour l'effet "glider"
const Glider = ({ position }) => {
  return (
    <motion.div
      animate={position}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute bg-gradient rounded-full z-0 h-[70%] top-[15%] sm:h-[80%] sm:top-[10%]"
    />
  );
};

// Composant Tab
const Tab = ({ children, setPosition, isActive, onClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { offsetLeft, offsetWidth } = ref.current;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  }, [isActive, setPosition]);

  return (
    <li
      ref={ref}
      onClick={onClick}
      className={`relative z-10 flex-1 cursor-pointer text-[0.4rem] sm:text-[0.5rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] uppercase ${
        isActive ? "font-bold text-secondary" : "text-secondary"
      }`}
    >
      <div className="h-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 flex items-center justify-center">
        {children}
      </div>
    </li>
  );
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("creation");
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  // Gère le contenu dynamique en fonction de la section active
  const renderContent = () => {
    switch (activeSection) {
      case "creation":
        return <Creation />;
      case "optimisation":
        return <Optimisation />;
      case "collaboration":
        return <Collaboration />;
      default:
        return null;
    }
  };

  return (
    <>
      <section
        id="services"
        className="w-[90%] z-50 mx-auto flex flex-col space-y-16 text-secondary font-sporting-regular"
      >
        {/* TITRE */}
        <ZoomText delay={0.2}>
          <h2 className="text-left text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-none">
            Mes
            <br /> Services
          </h2>
        </ZoomText>

        <div className="space-y-8 flex flex-col w-[60%] ml-auto mt-8">
          {/* Service 1 */}
          <ZoomText delay={0.2}>
            <div className="flex items-center justify-between border-b border-secondary pb-4">
              <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                01.
              </span>

              <h3
                id="creation"
                className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold "
              >
                Création
              </h3>
            </div>
          </ZoomText>
          {/* Service 2 */}
          <ZoomText delay={0.2}>
            <div className="flex items-center justify-between border-b border-secondary pb-4">
              <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                02.
              </span>
              <h3
                id="optimisation"
                className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold scramble-text"
              >
                Optimisation
              </h3>
            </div>
          </ZoomText>

          {/* Service 3 */}
          <ZoomText delay={0.2}>
            <div className="relative flex items-center justify-between pb-4">
              <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                03.
              </span>
              <h3
                id="collaboration"
                className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold scramble-text relative z-10"
              >
                Collaboration
              </h3>
            </div>
          </ZoomText>
        </div>

        {/* TEXTE ENTRE LISTE ET NAVIGATION */}
        {/* <ZoomText delay={0.2}>
          <p className="text-center w-[90%] mx-auto text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] leading-relaxed">
            Ensemble, transformons vos aspirations en expériences visuelles
            uniques.
          </p>
        </ZoomText> */}

        {/* NAVIGATION */}
        <ZoomText delay={0.2}>
          <div className="relative border border-secondary rounded-full p-1 sm:p-2 overflow-hidden mt-8 w-full">
            {/* Glider */}
            <Glider position={position} />

            {/* Tabs */}
            <ul className="relative flex items-center justify-between w-full h-[40px] sm:h-[48px] md:h-[60px] px-2 sm:px-4 ">
              <Tab
                setPosition={setPosition}
                isActive={activeSection === "creation"}
                onClick={() => setActiveSection("creation")}
              >
                CRÉATION
              </Tab>
              <Tab
                setPosition={setPosition}
                isActive={activeSection === "optimisation"}
                onClick={() => setActiveSection("optimisation")}
              >
                OPTIMISATION
              </Tab>
              <Tab
                setPosition={setPosition}
                isActive={activeSection === "collaboration"}
                onClick={() => setActiveSection("collaboration")}
              >
                COLLABORATION
              </Tab>
            </ul>
          </div>
        </ZoomText>

        {/* CONTENU DYNAMIQUE */}
        <ZoomText delay={0.2}>
          <div className="mt-8">{renderContent()}</div>
        </ZoomText>
      </section>
    </>
  );
};

export default Services;
