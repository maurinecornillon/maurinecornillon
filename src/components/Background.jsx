import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

import Flower1 from "../assets/img/logo/el1.png";
import Flower2 from "../assets/img/logo/el2.png";

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
    <div className={`fixed inset-0 -z-10 ${zIndexClass}`}>
      <>
        {/* Fleur 1  GOOD */}
        <img
          src={Flower1}
          alt="Fleur 1"
          ref={(el) => (flowerRefs.current[0] = el)}
          className="absolute w-[600px] bottom-[-10%] left-[5%]"
        />
        {/* Fleur 2 */}
        <img
          src={Flower2}
          alt="Fleur 2"
          ref={(el) => (flowerRefs.current[1] = el)}
          className="absolute w-[600px] top-[-15%] right-[10%]"
        />
        {/* Fleur 3 */}
        <img
          src={Flower1}
          alt="Fleur 3"
          ref={(el) => (flowerRefs.current[2] = el)}
          className="absolute w-[950px] bottom-[-60%] right-[-25%]"
        />

        {/* Fleur 4 */}
        <img
          src={Flower2}
          alt="Fleur 4"
          ref={(el) => (flowerRefs.current[3] = el)}
          className="absolute w-[980px] top-[-40%] left-[-35%]"
        />
        {/* Fleur 5 */}
        <img
          src={Flower1}
          alt="Fleur 5"
          ref={(el) => (flowerRefs.current[4] = el)}
          className="absolute w-[250px] bottom-[50%] right-[5%]"
        />
        {/* Fleur 6 */}
        <img
          src={Flower2}
          alt="Fleur 6"
          ref={(el) => (flowerRefs.current[5] = el)}
          className="absolute w-[280px] top-[40%] left-[10%]"
        />
      </>
    </div>
  );
};

export default BackgroundFlowers;
