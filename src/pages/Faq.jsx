import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";
import FaqBesoins from "../components/FaqBesoins";
import FaqProcess from "../components/FaqProcess";
import FaqResultats from "../components/FaqResultats";
import ZoomText from "../components/ZoomText";

import clouds from "../assets/img/logo/14.png";

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

const Faq = () => {
  const [activeSection, setActiveSection] = useState("creation");
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  // Gère le contenu dynamique en fonction de la section active
  const renderContent = () => {
    switch (activeSection) {
      case "creation":
        return <FaqBesoins />;
      case "optimisation":
        return <FaqProcess />;
      case "collaboration":
        return <FaqResultats />;
      default:
        return null;
    }
  };

  return (
    <>
      <div id="faq" className="w-full mx-auto">
        <Marquee speed={50}>
          <div className=" font-sporting-regular text-secondary text-[150px]">
            <p>
              FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊
              FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊ FAQ ❊
              FAQ ❊ FAQ ❊ FAQ ❊
            </p>
          </div>
        </Marquee>
        <section className=" w-[90%] z-50 mx-auto flex flex-col space-y-16 text-secondary font-sporting-regular">
          {/* NAVIGATION */}
          <ZoomText delay={0.2}>
            <div className="relative border border-secondary rounded-full p-1 sm:p-2 overflow-hidden mt-16 w-full">
              {/* Glider */}
              <Glider position={position} />

              {/* Tabs */}
              <ul className="relative flex items-center justify-between w-full h-[40px] sm:h-[48px] md:h-[60px] px-2 sm:px-4 ">
                <Tab
                  setPosition={setPosition}
                  isActive={activeSection === "creation"}
                  onClick={() => setActiveSection("creation")}
                >
                  BESOINS
                </Tab>
                <Tab
                  setPosition={setPosition}
                  isActive={activeSection === "optimisation"}
                  onClick={() => setActiveSection("optimisation")}
                >
                  PROCESS
                </Tab>
                <Tab
                  setPosition={setPosition}
                  isActive={activeSection === "collaboration"}
                  onClick={() => setActiveSection("collaboration")}
                >
                  RÉSULTATS
                </Tab>
              </ul>
            </div>
          </ZoomText>

          {/* CONTENU DYNAMIQUE */}
          <ZoomText delay={0.2}>
            <div className="mt-8">{renderContent()}</div>
          </ZoomText>
          {/* Description */}
          <div className="w-[90%] mx-auto text-center mb-16 text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
            <ZoomText delay={0.2}>
              <p className="mb-8">
                Vous avez encore des questions ou souhaitez discuter de votre
                projet ? Contactez-moi dès maintenant pour en parler !
              </p>
            </ZoomText>
            {/* Call to Action */}
            <div className="text-center flex flex-col justify-center items-center space-y-4 w-full">
              <a
                href="https://tidycal.com/maurinecornillon/projet"
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[300px] rounded-full border-2 border-black px-8 py-3 transition-all duration-300 hover:bg-gradient_blue text-[0.8rem] sm:text-[1rem]"
                style={{
                  boxShadow: "4px 4px 0px 0px #212121",
                }}
              >
                Parlons de votre projet
              </a>
              <a
                href="https://tidycal.com/maurinecornillon/audit"
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[300px] bg-violet rounded-full border-2 border-black px-8 py-3 transition-all duration-300 hover:bg-gradient_blue text-[0.8rem] sm:text-[1rem]"
                style={{
                  boxShadow: "4px 4px 0px 0px #212121",
                }}
              >
                Audit offert
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="overflow-hidden">
        <img src={clouds} alt="Flower" className="w-full  h-full" />
      </div> */}
    </>
  );
};

export default Faq;
