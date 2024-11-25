import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import AnimatedTitle from "../components/AnimatedTitle";

// Composant principal
const Home = () => {
  const buttonRef = useRef(null);

  // Animation de gravité pour le bouton
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        buttonRef.current,
        { y: "-200vh", rotation: -15, opacity: 0 },
        { y: 100, rotation: 10, opacity: 1, duration: 1.5, ease: "power1.out" }
      )
      .to(buttonRef.current, {
        y: -30,
        rotation: 0,
        duration: 1.2,
        ease: "power2.out",
      })
      .to(buttonRef.current, {
        y: 0,
        rotation: 0,
        duration: 2,
        ease: "elastic.out(1.4, 0.5)",
      });
  }, []);

  // Variants pour l'effet de zoom
  const zoomVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // État initial (invisible et réduit)
    visible: { opacity: 1, scale: 1 }, // État final (visible et normal)
  };

  // Transition personnalisée
  const zoomTransition = {
    duration: 1, // Durée totale
    ease: "easeOut", // Type d'animation
  };

  return (
    <>
      <section
        id="accueil"
        className="mt-20 w-[100%] z-50 mx-auto h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center space-y-8 font-sporting-regular relative overflow-hidden"
      >
        {/* Titre principal avec effet de zoom */}
        <div
          className="relative w-[90%]"
          initial="hidden"
          animate="visible"
          variants={zoomVariants}
          transition={zoomTransition}
        >
          <AnimatedTitle title="vos ambitions" />
          <AnimatedTitle title="mes solutions" />
        </div>
        {/* Bouton d'action */}
        <a
          href="https://calendly.com/maurinecornillon/discutons-de-ton-projet"
          target="_blank"
          rel="noreferrer"
          className="custom-button bg-purple rounded-2xl border-2 border-dashed border-black px-16 py-6 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1rem]"
          ref={buttonRef}
          style={{
            boxShadow: "8px 8px 0px 0px #212121",
          }}
        >
          Prendre rendez-vous
        </a>
      </section>
    </>
  );
};

export default Home;
