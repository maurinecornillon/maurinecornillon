import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

import Flower1 from "../assets/img/logo/M.B (4).png";
import Flower2 from "../assets/img/logo/M.B (3).png";
import cloud from "../assets/img/logo/13.png";
import cloud2 from "../assets/img/logo/11.png";

const BackgroundFlowers = () => {
  const flowerRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    // Mouvement horizontal des fleurs en fonction de la souris
    const moveFlowers = (e) => {
      const { clientX } = e; // On se concentre uniquement sur l'axe X
      const { innerWidth } = window;

      flowerRefs.current.forEach((flower, index) => {
        const speed = 10 + index * 5; // Différentes vitesses
        const x = ((clientX / innerWidth) * 2 - 1) * speed;

        gsap.to(flower, {
          x,
          duration: 1.2,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", moveFlowers);

    // Effet de flottement (léger mouvement vertical et rotation)
    flowerRefs.current.forEach((flower, index) => {
      gsap.to(flower, {
        x: "+=20", // Déplace légèrement vers le haut et le bas
        y: "+=20", // Déplace légèrement vers le haut et le bas
        rotation: "+=5", // Ajoute une rotation
        duration: 3 + index * 0.5, // Différentes durées pour chaque fleur
        ease: "power1.inOut",
        repeat: -1, // Répète indéfiniment
        yoyo: true, // Fait le mouvement en va-et-vient
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveFlowers);
      gsap.killTweensOf(flowerRefs.current);
    };
  }, []);

  // Déterminez la classe `z-index` en fonction de la page active
  const zIndexClass =
    location.pathname === "/" ||
    location.pathname === "/linkera" ||
    location.pathname === "/estimeo" ||
    location.pathname === "/anomusic" ||
    location.pathname === "/smartback" ||
    location.pathname === "/otome" ||
    location.pathname === "/game"
      ? "z-10"
      : "-z-10 pointer-events-none";

  return (
    <div className={`fixed inset-0 -z-20 ${zIndexClass}`}>
      <>
        {/* Fleur 2 */}
        <img
          src={cloud2}
          alt="Fleur 2"
          ref={(el) => (flowerRefs.current[1] = el)}
          className="absolute overflow-hidden lg:w-[300px] xl:w-[300px] 2xl:w-[300px] md:w-[300px] sm:w-[200px] w-[200px] top-[15%] right-[10%]"
        />

        {/* Fleur 4 */}
        <img
          src={cloud2}
          alt="Fleur 4"
          ref={(el) => (flowerRefs.current[3] = el)}
          className="absolute overflow-hidden  lg:w-[350px] xl:w-[350px] 2xl:w-[350px] md:w-[350px] sm:w-[300px] w-[300px] top-[60%] left-[-0%]"
        />
        {/* Fleur 5 ok */}
        <img
          src={cloud2}
          alt="Fleur 5"
          ref={(el) => (flowerRefs.current[4] = el)}
          className="absolute overflow-hidden lg:w-[150px] xl:w-[150px] 2xl:w-[150px] md:w-[150px] sm:w-[120px] w-[120px]  bottom-[50%] right-[5%]"
        />
        {/* Fleur 6 */}
        <img
          src={cloud}
          alt="Fleur 6"
          ref={(el) => (flowerRefs.current[5] = el)}
          className="absolute overflow-hidden  lg:w-[180px] xl:w-[180px] 2xl:w-[180px] md:w-[180px] sm:w-[150px] w-[150px]  top-[20%] left-[10%]"
        />
      </>
    </div>
  );
};

export default BackgroundFlowers;
