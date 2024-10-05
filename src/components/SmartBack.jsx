import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import deux from "../assets/img/linkera/MockupLinkera.png";
import trois from "../assets/img/linkera/MockupLinkera2.png";

const SmartBack = () => {
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
            <h1 className="text-[4vw] mt-40 font-sporting-bold leading-tight mb-4">
              SMARTBACK
            </h1>

            {/* Paragraphe explicatif */}
            <p className="text-[14px] leading-relaxed font-sporting-regular mb-6 mt-10">
              SmartBack offers a comprehensive reverse logistics solution,
              focusing on optimizing the return and second-life process for
              household and bedding brands. Their services help reduce logistics
              costs, streamline product returns, and minimize waste through
              reconditioning, resale, and tax-deductible donations, while
              providing a fully tracked and environmentally conscious process.
              <br />
              <br />
              As a front-end developer, I contributed to the development of the
              MVP, focusing on creating a user-friendly interface that allows
              businesses to manage their returns and track key performance
              metrics efficiently.
              <br />
              <br />
              [link]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartBack;
