import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Contact from "../components/Contact";

import EstimeoWeb from "../components/EstimeoWeb";
import EstimeoMobile from "../components/EstimeoMobile";
import BackgroundEstimeoWeb from "../components/BackgroundEstimeoWeb";
import BackgroundEstimeoMobile from "../components/BackgroundEstimeoMobile";

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
        <div className="hidden md:block">
          <BackgroundEstimeoWeb />
        </div>

        <div className="block md:hidden">
          <BackgroundEstimeoMobile />
        </div>

        {/* Section suivante */}
        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20  sm:px-20 sm:pt-40  leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            Estimeo is an automated rating and valuation platform tailored for
            startups. it used predictive algorithms to evaluate both tangible
            and intangible assets, providing detailed pre-analysis reports. By
            linking startups with investors, it helped build trust and support
            growth. Estimeo was later acquired and merged with Linkera, so the
            platform no longer exists.
          </p>
        </div>

        <div className="hidden md:block">
          <EstimeoWeb />
        </div>

        <div className="block md:hidden">
          <EstimeoMobile />
        </div>

        <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-40 sm:px-20 sm:pt-40 sm:pb-80 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            As a Full-Stack developer, I worked on the v2 of their web
            application, updating financial calculation algorithms and managing
            maintenance and bug fixes.
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
