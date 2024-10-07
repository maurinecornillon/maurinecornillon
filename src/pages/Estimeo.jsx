import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";

import mockup from "../assets/img/estimeo/MockupEstimeo.png";

const Estimeo = () => {
  useEffect(() => {
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
              TRANSFORMING HOW STARTUPS ARE VALUED, TRUSTED, AND FUNDED{" "}
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
        ></div>

        {/* Section suivante */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-40 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            ESTIMEO IS AN AUTOMATED RATING AND VALUATION PLATFORM TAILORED FOR
            STARTUPS. IT USED PREDICTIVE ALGORITHMS TO EVALUATE BOTH TANGIBLE
            AND INTANGIBLE ASSETS, PROVIDING DETAILED PRE-ANALYSIS REPORTS. BY
            LINKING STARTUPS WITH INVESTORS, IT HELPED BUILD TRUST AND SUPPORT
            GROWTH. ESTIMEO WAS LATER ACQUIRED AND MERGED WITH LINKERA, SO THE
            PLATFORM NO LONGER EXISTS.
          </p>
        </div>

        <div className="hidden md:block">{/* <LinkeraWeb /> */}</div>

        <div className="block md:hidden">{/* <LinkeraMobile /> */}</div>

        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-20 sm:px-20 sm:pt-40 sm:pb-60 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            AS A FULL-STACK DEVELOPER, I WORKED ON THE V2 OF THEIR WEB
            APPLICATION, UPDATING FINANCIAL CALCULATION ALGORITHMS AND MANAGING
            MAINTENANCE AND BUG FIXES.
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

export default Estimeo;
