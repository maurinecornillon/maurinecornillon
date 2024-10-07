import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";

import mockup from "../assets/img/game/MockUpOnePiece.png";

const Game = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/projects");
  };

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
              className="text-center text-[8vw] sm:text-[6vw] lg:text-[4vw] p-20 font-sporting-regular tracking-normal leading-tight"
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
        <div
          className="bg-fixed bg-cover bg-center h-[100vh]"
          style={{
            backgroundImage: `url(${mockup})`,
            backgroundPosition: " center top 40%",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <h2 className="text-black md:hidden sm:text-[6vw] lg:text-[4vw] max-w-[100%] font-sporting-regular ">
              FIGHT GAME
            </h2>
          </div>
        </div>

        {/* Section suivante */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            THIS IS MY FIRST DEVELOPMENT PROJECT, A RETRO 1V1 FIGHTING GAME
            INSPIRED BY THE ONE PIECE UNIVERSE. IT WAS AN EXCITING EXPERIENCE TO
            CREATE DURING MY DEVELOPER TRAINING, AND I’M ALWAYS HAPPY TO
            SHOWCASE IT, AS IT WAS A REAL PLEASURE TO BRING IT TO LIFE AND LEARN
            HOW TO MAKE IT.
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
