import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import AnimatedTitle from "../components/AnimatedTitle";
import clouds from "../assets/img/logo/14.png";

// Composant principal
const Home = () => {
  const buttonRef = useRef(null);
  const buttonRef1 = useRef(null);

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

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        buttonRef1.current,
        { y: "-200vh", rotation: -20, opacity: 0 }, // Départ incliné et hors écran
        { y: 150, rotation: -25, opacity: 1, duration: 1.8, ease: "power1.out" } // Inclinaison pendant la chute
      )
      .to(buttonRef1.current, {
        y: -20, // Descend légèrement sous sa position finale
        rotation: -10, // Angle intermédiaire
        duration: 1.2,
        ease: "power2.out",
      })
      .to(buttonRef1.current, {
        y: 0, // Retour à la position finale
        rotation: 0, // Retour à l'angle final
        duration: 2.5, // Durée légèrement plus longue
        ease: "power3.out", // Transition très douce sans élasticité
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
        className="mt-20 w-[90%] z-10 mx-auto h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center space-y-8 font-sporting-regular relative overflow-hidden"
      >
        {/* Titre principal avec effet de zoom */}
        <div
          className="relative w-[100%]"
          initial="hidden"
          animate="visible"
          variants={zoomVariants}
          transition={zoomTransition}
        >
          <AnimatedTitle title="vos ambitions" />
          <AnimatedTitle title="mes solutions" />
        </div>
        {/* Bouton d'action */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 w-full space-y-4 sm:space-y-0">
          <a
            href="https://tidycal.com/maurinecornillon/projet"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-[35%] custom-button rounded-full border-2 border-black px-8 py-3 transition-all duration-300 hover:bg-gradient hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none text-[0.7rem] sm:text-[0.9rem] lg:text-[1rem]"
            ref={buttonRef1}
            style={{
              boxShadow: "4px 4px 0px 0px #212121",
            }}
          >
            Parlons de votre projet
          </a>
          <a
            href="https://tidycal.com/maurinecornillon/audit"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-[35%] custom-button bg-violet rounded-full border-2 border-black px-8 py-3 transition-all duration-300 hover:bg-gradient_blue hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none text-[0.7rem] sm:text-[0.9rem] lg:text-[1rem]"
            ref={buttonRef}
            style={{
              boxShadow: "4px 4px 0px 0px #212121",
            }}
          >
            Audit Gratuit
          </a>
        </div>
      </section>
      <div className="overflow-hidden">
        <img src={clouds} alt="Flower" className="w-full max-w-full h-full" />
      </div>
    </>
  );
};

export default Home;
