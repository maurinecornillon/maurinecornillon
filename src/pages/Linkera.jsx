import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";
import LinkeraWeb from "../components/LinkeraWeb";
import LinkeraMobile from "../components/LinkeraMobile";
import BackgroundLinkeraMobile from "../components/BackgroundLinkeraMobile";
import BackgroundLinkeraWeb from "../components/LinkeraBackground";

// import mockup from "../assets/img/linkera/MockupLinkera.png";

const Linkera = () => {
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
              REVOLUTIONIZING THE WAY BUSINESSES BUY, SELL, AND RAISE FUNDS
            </motion.h1>
          </div>
        </div>

        <div className="hidden md:block">
          <BackgroundLinkeraWeb />
        </div>

        <div className="block md:hidden">
          <BackgroundLinkeraMobile />
        </div>

        {/* Premier paragraphe avec padding responsive */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            LINKERA SIMPLIFIES BUSINESS SALES, ACQUISITIONS, AND FUNDRAISING. IT
            PROVIDES TOOLS FOR LISTINGS, CONNECTING BUYERS AND SELLERS, MANAGING
            CONFIDENTIALITY, AND CONDUCTING VALUATIONS. FOR STARTUPS, IT HELPS
            RAISE FUNDS BY IDENTIFYING INVESTORS AND PREPARING FOR TRANSACTIONS.
          </p>
        </div>

        <div className="hidden md:block">
          <LinkeraWeb />
        </div>

        <div className="block md:hidden">
          <LinkeraMobile />
        </div>

        {/* Deuxième paragraphe avec padding responsive */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-60 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            AS PART OF A TECH TEAM, I CONTRIBUTED TO BUILDING THE FIRST VERSION
            OF LINKERA AS A FULL-STACK DEVELOPER. I FOCUSED ON UI/UX DESIGN AND
            DEVELOPED ALGORITHMS FOR FINANCIAL CALCULATIONS AND AUTOMATED PDF
            GENERATION.
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

export default Linkera;
