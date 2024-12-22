import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

import Creation from "./../components/Creation";
import Optimisation from "./../components/Optimisation";
import Collaboration from "./../components/Collaboration";

import ZoomText from "../components/ZoomText";

import clouds from "../assets/img/logo/12.png";

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
  const [showCard, setShowCard] = useState(false); // Gérer l'état du hover
  const cardRef = useRef(null); // Référence pour la card

  useEffect(() => {
    if (showCard) {
      // Animation d'apparition et d'inclinaison
      gsap.to(cardRef.current, {
        opacity: 1,
        x: 0,
        rotationX: -5, // Inclinaison 3D
        rotationY: 40, // Inclinaison horizontale
        rotationZ: -2, // Légère rotation diagonale
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000, // Perspective pour donner l'effet 3D
      });

      // Effet de flottement continu
      gsap.to(cardRef.current, {
        y: "-=10", // Monte légèrement
        repeat: -1, // Boucle infinie
        yoyo: true, // Revient à sa position initiale
        duration: 1.5,
        ease: "sine.inOut",
      });
    } else {
      // Disparaît proprement quand on quitte le hover
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -50, // Déplacement vers la gauche avant de disparaître
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [showCard]);

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
      <main className="  w-[100%]">
        <div className="bg-violet">
          <Marquee speed={50}>
            <div className=" font-sporting-regular text-secondary text-[100px]">
              <p>
                SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES
                ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊
                SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES
                ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊ SERVICES ❊
                SERVICES ❊ SERVICES ❊ SERVICES ❊
              </p>
            </div>
          </Marquee>
        </div>
        <div className="">
          <img src={clouds} alt="Flower" className="w-full h-full" />
        </div>
        <section
          id="services"
          className=" w-[90%] z-50 mx-auto flex flex-col space-y-16 text-secondary font-sporting-regular"
        >
          <div className="space-y-8 flex flex-col w-[60%] ml-auto relative">
            {/* Service 1 */}
            <ZoomText delay={0.2}>
              <div
                className="flex items-center justify-between border-b border-secondary pb-4 relative"
                onMouseEnter={() => setShowCard(true)} // Afficher la card
                onMouseLeave={() => setShowCard(false)} // Masquer la card
              >
                <span className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold ">
                  01.
                </span>

                <h3
                  id="creation"
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold "
                >
                  Création
                </h3>

                {/* Card flottante */}
                <div
                  ref={cardRef}
                  className="absolute left-[-400px] top-[50px] bg-purple shadow-lg rounded-lg p-4 border border-black opacity-0"
                  style={{
                    transform: "rotateX(-5deg) rotateY(-20deg) rotateZ(-2deg)", // Inclinaison initiale
                    transformOrigin: "center center", // Centre de rotation
                    width: "250px", // Largeur personnalisée
                    height: "300px", // Hauteur personnalisée
                  }}
                >
                  <h4 className="text-lg font-bold">Création</h4>
                  <p className="text-sm">
                    Explorez des solutions innovantes et impactantes.
                  </p>
                </div>
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
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold"
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
                  className="text-[1rem] sm:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4rem] font-bold"
                >
                  Collaboration
                </h3>
              </div>
            </ZoomText>
          </div>
        </section>
      </main>

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
        {/* Description */}
        <div className="w-[90%] mx-auto text-center mb-16 text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem]">
          <ZoomText delay={0.2}>
            <p className="">
              Pour découvrir le pack qui correspond le mieux à vos besoin et
              obtenir une première estimation, utiliser le simulateur de projet
              !
            </p>
          </ZoomText>
        </div>
        {/* Call to Action */}
        <div className="text-center flex justify-center w-full">
          <ZoomText delay={0.2}>
            <a
              href="https://linktr.ee/maurinemona"
              target="_blank"
              rel="noreferrer"
              className=" w-full bg-violet block rounded-full border-2 border-black px-16 py-2 transition-all duration-300 hover:bg-gradient_blue  text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1rem]"
              style={{
                boxShadow: "4px 4px 0px 0px #212121",
              }}
            >
              Simuler mon projet
            </a>
          </ZoomText>
        </div>
      </section>
    </>
  );
};

export default Services;
