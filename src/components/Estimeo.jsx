import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import deux from "../assets/img/estimeo/MockupEstimeo.png";
import trois from "../assets/img/linkera/MockupLinkera2.png";

const Estimeo = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const rightColumnRef = useRef(null);

  const handleBack = () => {
    navigate("/projects");
  };

  const images = [deux, trois];

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
            <h1 className="text-[6vw] mt-40 font-sporting-bold leading-tight mb-4">
              ESTIMEO
            </h1>

            {/* Paragraphe explicatif */}
            <p className="text-[14px] leading-relaxed font-sporting-regular mb-6 mt-10">
              Estimeo is an automated rating and valuation platform specifically
              designed for startups. It leverages predictive algorithms and
              keysucc ess factors to evaluate the potential of innovative
              projects. The platform provides startups with pre-analysis and
              pre-audit reports, considering both tangible and intangible
              assets. By connecting startups with investors and financial
              partners, Estimeo aims to build trust in the growth potential of
              these businesses and help them capitalize on their strengths​
              (PitchBook, EU-Startups). This tool, now integrated with Linkera,
              plays a crucial role in the startup ecosystem by offering clear,
              data-driven insights for valuation and risk analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estimeo;
