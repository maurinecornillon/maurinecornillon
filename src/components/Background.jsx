import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

import cloud from "../assets/img/logo/13.png";
import cloud2 from "../assets/img/logo/11.png";

const BackgroundFlowers = () => {
  const flowerRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    // Stocker la position de la souris
    let mouseX = 0;
    let targetX = 0;

    const moveFlowers = (e) => {
      mouseX = e.clientX;
    };

    // Animation principale pour suivre la souris
    const updatePosition = () => {
      targetX += (mouseX - targetX) * 0.1; // Lissage du mouvement

      flowerRefs.current.forEach((flower, index) => {
        const speed = 10 + index * 5; // Différentes vitesses
        const x = ((targetX / window.innerWidth) * 2 - 1) * speed;

        gsap.to(flower, {
          x,
          duration: 0.1,
          overwrite: "auto",
        });
      });

      requestAnimationFrame(updatePosition);
    };

    // Effet de flottement
    flowerRefs.current.forEach((flower, index) => {
      gsap.to(flower, {
        y: "+=20", // Monte et descend légèrement
        rotation: "+=5", // Ajoute une légère rotation
        duration: 3 + index * 0.5, // Durées différentes pour chaque nuage
        ease: "power1.inOut",
        repeat: -1, // Répétition infinie
        yoyo: true, // Va-et-vient
      });
    });

    window.addEventListener("mousemove", moveFlowers);
    updatePosition(); // Démarrer l'animation de suivi

    return () => {
      window.removeEventListener("mousemove", moveFlowers);
      gsap.killTweensOf(flowerRefs.current); // Nettoyage
    };
  }, []);

  // Déterminer la classe `z-index` en fonction de la page active
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
        {/* Nuages */}
        <img
          src={cloud2}
          alt="Nuage 1"
          ref={(el) => (flowerRefs.current[1] = el)}
          className="absolute overflow-hidden lg:w-[300px] xl:w-[300px] 2xl:w-[300px] md:w-[300px] sm:w-[200px] w-[200px] top-[15%] right-[10%]"
        />
        <img
          src={cloud2}
          alt="Nuage 2"
          ref={(el) => (flowerRefs.current[3] = el)}
          className="absolute overflow-hidden lg:w-[350px] xl:w-[350px] 2xl:w-[350px] md:w-[350px] sm:w-[300px] w-[250px] top-[60%] left-[-0%]"
        />
        <img
          src={cloud2}
          alt="Nuage 3"
          ref={(el) => (flowerRefs.current[4] = el)}
          className="absolute overflow-hidden lg:w-[150px] xl:w-[150px] 2xl:w-[150px] md:w-[150px] sm:w-[120px] w-[120px] bottom-[50%] right-[5%]"
        />
        <img
          src={cloud}
          alt="Nuage 4"
          ref={(el) => (flowerRefs.current[5] = el)}
          className="absolute overflow-hidden lg:w-[180px] xl:w-[180px] 2xl:w-[180px] md:w-[180px] sm:w-[150px] w-[100px] top-[20%] left-[10%]"
        />
      </>
    </div>
  );
};

export default BackgroundFlowers;
