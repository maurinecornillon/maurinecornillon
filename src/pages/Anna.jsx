import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";
import AnnaWeb from "../components/AnnaWeb";
import AnnaMobile from "../components/AnnaMobile";

import mockup from "../assets/img/anna/MockupAnnaMolly.png";

const Anna = () => {
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
              className="text-center text-[6vw] sm:text-[6vw] lg:text-[4vw] p-20 font-sporting-regular tracking-normal leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              DISCOVER NEW SOUNDS AND CONNECT WITH INDEPENDENT ARTISTS ON
              ANOMUSIC
            </motion.h1>
          </div>
        </div>

        {/* Section avec l'effet de parallaxe en dessous du titre */}
        <div
          className="bg-fixed bg-cover bg-center h-[100vh]"
          style={{
            backgroundImage: `url(${mockup})`,
            backgroundPosition: "center top",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Section suivante */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            ANOMUSIC IS A MUSICAL SOCIAL NETWORKING PLATFORM. INSPIRED BY
            INSTAGRAM AND BANDCAMP, THE PLATFORM IS DESIGNED FOR INDEPENDENT
            ARTISTS TO SHARE THEIR TRACKS. SIGN UP, FOLLOW NEW ARTISTS, AND
            EXPLORE YOUR FEED IN SEARCH OF YOUR NEW FAVORITE SOUND. WITH GENRE
            FILTERS, DISCOVER WHAT YOU NEVER THOUGHT YOU’D HEAR.
          </p>
        </div>

        <div className="hidden md:block">
          <AnnaWeb />
        </div>

        <div className="block md:hidden">
          <AnnaMobile />
        </div>

        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-60 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            THIS PROJECT IS A SIDE DEVELOPMENT I WORK ON DURING MY FREE TIME,
            COMBINING MY TWO PASSIONS: CODING AND MUSIC.
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

export default Anna;
