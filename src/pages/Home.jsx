import React from "react";
import ZoomText from "../components/ZoomText";
import Logo from "../assets/img/logo/LOGO.svg";

import { AnimatePresence, motion } from "framer-motion";

const LogoZoom = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <section
        id="accueil"
        className=" w-full h-[calc(100vh-80px)] px-6 flex items-center justify-center overflow-hidden h-full "
      >
        <LogoZoom key="logo">
          <img
            src={Logo}
            alt="Logo Maurine Cornillon"
            className="pt-[42px] pointer-events-none"
          />
        </LogoZoom>
      </section>

      <div className=" flex justify-center overflow-hidden ">
        <div
          key="content"
          className=" px-6  py-16 sm:py-16 md:py-16 lg:py-32 sm:text-left w-full"
        >
          <div className="  text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight ">
            <p className="font-NHAASDS  font-bold text-right tracking-wide ">
              JE SUIS MAURINE — DÉVELOPPEUSE WEB SPÉCIALISÉE EN
            </p>

            <div className="flex flex-wrap justify-between sm:justify-between gap-x-4 gap-y-8">
              <ZoomText>
                <span className="tracking-wide font-ITC font-bold text-red ">
                  [ web design ]
                </span>
              </ZoomText>

              <ZoomText>
                <span className=" font-ITC font-bold tracking-wide text-red ">
                  [ développement full stack ]
                </span>
              </ZoomText>

              <ZoomText>
                <span className=" font-ITC  font-bold tracking-wide text-red ">
                  [ branding ]
                </span>
              </ZoomText>
            </div>

            <p className=" font-NHAASDS font-bold tracking-wide text-justify">
              JE CRÉE DES SITES SUR-MESURE QUI MÊLENT DESIGN, INTERACTIVITÉ ET
              PERFORMANCE, POUR CELLES ET CEUX QUI VEULENT AFFIRMER LEUR
              SINGULARITÉ EN LIGNE.
            </p>
          </div>

          <ZoomText>
            <div className="pt-8 ">
              <a
                href="https://linktr.ee/maurinemona"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-ITC  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px]  tracking-wide  leading-none hover:text-red"
              >
                [ démarrer un projet → ]
              </a>
            </div>
          </ZoomText>
        </div>
      </div>

      <></>
    </AnimatePresence>
  );
};

export default Home;
