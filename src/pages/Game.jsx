import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";

import BackgroundGameWeb from "../components/BackgroundGameWeb";
import BackgroundGameMobile from "../components/BackgroundGameMobile";

const Game = () => {
  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  const controls = useAnimation();
  const [inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    } else {
      controlsContact.start("hidden");
    }
  }, [controlsContact, inViewContact]);

  return (
    <>
      <Header />
      <div className="relative h-[200vh]">
        {/* Section avec le titre */}
        <div className="h-[100vh] flex items-center justify-center bg-white">
          <div className="w-full flex justify-center">
            <motion.h1
              className="text-center text-[6vw] sm:text-[6vw] md:text-[4vw]  lg:text-[4vw] p-20 font-sporting-regular tracking-normal leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              BRINGING RETRO FIGHTS TO LIFE WITH A ONE PIECE-INSPIRED 1V1 GAME
            </motion.h1>
          </div>
        </div>

        {/* Section avec l'effet de parallaxe en dessous du titre */}
        <div className="hidden md:block">
          <BackgroundGameWeb />
        </div>

        <div className="block md:hidden">
          <BackgroundGameMobile />
        </div>

        {/* <div className="h-full flex items-center justify-center">
            <h2 className="text-black md:hidden sm:text-[6vw] lg:text-[4vw] max-w-[100%] font-sporting-regular ">
              FIGHT GAME
            </h2>
          </div> */}

        {/* Section suivante */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-40 sm:px-20 sm:pt-40 sm:pb-80 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            This is my first development project, a retro 1v1 fighting game
            inspired by the one piece universe. It was an exciting experience to
            create during my developer training, and I’m always happy to
            showcase it, as it was a real pleasure to bring it to life and learn
            how to make it.
          </p>
        </div>

        <motion.div
          ref={refContact}
          initial="hidden"
          animate={controlsContact}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.2,
          }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
};

export default Game;
