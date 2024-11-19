import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";

// Custom hook pour gérer les animations avec Intersection Observer
const useAnimatedSection = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return { controls, ref };
};

// Composant réutilisable pour les sections animées
const AnimatedSection = ({ children, controls, refSection, delay = 0.2 }) => (
  <motion.div
    ref={refSection}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  // Gestion du chargement de la vidéo
  useEffect(() => {
    const video = document.querySelector("video");

    const handleVideoLoaded = () => {
      setTimeout(() => setLoading(false), 3000);
    };

    if (video) video.addEventListener("canplaythrough", handleVideoLoaded);

    return () => {
      if (video) video.removeEventListener("canplaythrough", handleVideoLoaded);
    };
  }, []);

  // Gestion du défilement
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion des animations
  const header = useAnimatedSection();
  const presentation = useAnimatedSection();
  const contact = useAnimatedSection();

  // Détecter le chargement des polices
  useEffect(() => {
    document.fonts.load("1em 'Respira Black'").then(() => setFontLoaded(true));
  }, []);

  const translateY = scrollY * 0.2;

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={require("../assets/img/video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-screen justify-between">
            <AnimatedSection controls={header.controls} refSection={header.ref}>
              <Header />
            </AnimatedSection>

            <main className="relative h-screen overflow-hidden flex items-end justify-end">
              <motion.h1
                className={`text-[24vw] sm:text-[24vw] md:text-[24vw] lg:text-[24vw] xl:text-[24vw] font-respira tracking-widest m-0 p-0 leading-none ${
                  fontLoaded ? "" : "text-hidden"
                }`}
                style={{
                  position: "fixed",
                  transform: `translateY(${translateY}px)`,
                  opacity: 1 - scrollY / 1000,
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
              >
                MONA
              </motion.h1>
            </main>
          </div>

          <AnimatedSection
            controls={presentation.controls}
            refSection={presentation.ref}
          >
            <Presentation />
          </AnimatedSection>

          <AnimatedSection controls={contact.controls} refSection={contact.ref}>
            <Contact />
          </AnimatedSection>
        </>
      )}
    </>
  );
};

export default Home;
