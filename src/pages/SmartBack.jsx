import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import throttle from "lodash.throttle";

import Header from "../components/Header";
import Contact from "../components/Contact";
import SmartBackWeb from "../components/SmartBackWeb";
import SmartBackMobile from "../components/SmartBackMobile";
import BackgroundLinkeraMobile from "../components/BackgroundLinkeraMobile";
import BackgroundLinkeraWeb from "../components/BackgroundLinkeraWeb";

const SmartBack = () => {
  // Ref pour le conteneur Contact
  const contactRef = useRef(null);

  // Animation Framer Motion
  const controlsContact = useAnimation();

  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Utilisation de l'IntersectionObserver pour gérer les animations sur mobile
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsContact.start("visible");
          } else {
            controlsContact.start("hidden");
          }
        });
      },
      {
        threshold: window.innerWidth < 640 ? 0.05 : 0.1, // Ajuste le seuil selon l'écran
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [controlsContact]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      console.log(position); // Gère ici les animations en fonction du scroll

      // Optionnel : Ajout d'animations en fonction du défilement si nécessaire
    };

    // Utilisation d'un throttle pour limiter la fréquence d'appel
    const throttledScroll = throttle(() => {
      requestAnimationFrame(handleScroll); // Utilisation de requestAnimationFrame pour améliorer les performances du scroll
    }, 200);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="relative h-[200vh]">
        {/* Section avec le titre */}
        <div className="h-[100vh] flex items-center justify-center bg-white">
          <div className="w-full flex justify-center">
            <motion.h1
              className="text-center text-[6vw] sm:text-[6vw] lg:text-[4vw] p-20 font-sporting-regular tracking-normal leading-tight"
              style={{ willChange: "transform" }} // Ajoute will-change pour optimiser les transformations
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              COMING SOON
            </motion.h1>
          </div>
        </div>

        {/* <div className="hidden md:block">
          <BackgroundLinkeraWeb />
        </div>

        <div className="block md:hidden">
          <BackgroundLinkeraMobile />
        </div> */}

        {/* <div className="bg-white flex items-center justify-center m-0 px-10 pt-20  sm:px-20 sm:pt-40  leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            SmartBack simplifies the management of furniture returns, one-to-one
            exchanges, and refurbishment. It provides tools for tracking
            returned items, coordinating exchanges, and facilitating the
            reconditioning process. For businesses, it helps streamline
            logistics, reduce waste, and optimize the lifecycle of furniture
            assets, all while enhancing customer satisfaction.
          </p>
        </div> */}

        {/* <div className="hidden md:block">
          <SmartBackWeb />
        </div> */}

        {/* <div className="block md:hidden">
          <SmartBackMobile />
        </div> */}

        {/* <div className="bg-white flex items-center justify-center m-0 px-10 pt-20 pb-40 sm:px-20 sm:pt-40 sm:pb-80 leading-tight mt-2">
          <p className="font-sporting-regular text-center text-[4vw] sm:text-[2.5vw] lg:text-[30px]">
            As part of the tech team, I developed the MVP of SmartBack in its
            mobile version as a Front-End developer. I also took on the role of
            Product Owner, overseeing the product's vision while ensuring smooth
            execution and delivery.
          </p>
        </div> */}

        {/* Section Contact */}
        <motion.div
          ref={contactRef}
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

export default SmartBack;
