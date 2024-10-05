import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import deux from "../assets/img/otome/MockUpOtome.png";
import trois from "../assets/img/linkera/MockupLinkera2.png";

const Otome = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const rightColumnRef = useRef(null);

  const handleBack = () => {
    navigate("/projects");
  };

  const images = [deux];

  // Hook pour capturer le scroll global et l'appliquer au carrousel avec ajustement de vitesse
  useEffect(() => {
    const handleScroll = (e) => {
      if (carouselRef.current) {
        // Ajuster le facteur de défilement (0.5 pour plus lent, 1.5 pour plus rapide)
        const scrollSpeedFactor = 0.6; // Ajuste ce chiffre pour modifier la vitesse
        carouselRef.current.scrollTop += e.deltaY * scrollSpeedFactor;
      }
    };

    // Empêcher le scroll dans la colonne de droite
    const stopScrollPropagation = (e) => {
      e.preventDefault(); // Empêche l'événement de scroll
    };

    window.addEventListener("wheel", handleScroll);

    if (rightColumnRef.current) {
      rightColumnRef.current.addEventListener("wheel", stopScrollPropagation);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (rightColumnRef.current) {
        rightColumnRef.current.removeEventListener(
          "wheel",
          stopScrollPropagation
        );
      }
    };
  }, []);

  return (
    <>
      <div className="flex h-screen">
        {/* Colonne de gauche - Carrousel d'images */}
        <div className="w-1/2 overflow-y-auto scrollbar-none" ref={carouselRef}>
          <div className="flex flex-col h-full space-y-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mockup ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>

        {/* Colonne de droite - Titre et texte */}
        <div className="w-1/2 px-12 relative" ref={rightColumnRef}>
          {/* Flèche pour revenir en arrière */}
          <div className="absolute p-10 top-4 left-4">
            <button onClick={handleBack} className="text-lg hover:opacity-75">
              ← Back
            </button>
          </div>

          {/* Contenu fixe */}
          <div className="mt-80">
            {/* Titre du projet */}
            <h1 className="text-[4vw] mt-40 font-sporting-bold leading-tight mb-4">
              OTOME GAME
            </h1>

            {/* Paragraphe explicatif */}
            <p className="text-[14px] leading-relaxed font-sporting-regular mb-6 mt-10">
              BeachDay is an otome game currently in development by an
              independent game studio. As the lead developer on this project, I
              am excited to expand my expertise into new programming languages
              such as Python, while contributing to the creative and technical
              aspects of the game.
              <br />
              <br />
              Stay tuned for updates as we continue to build this exciting
              experience!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otome;
