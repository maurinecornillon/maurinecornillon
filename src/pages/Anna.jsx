import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ZoomText from "../components/ZoomText";

import accueil from "../assets/img/anna/5.png";
import menu from "../assets/img/anna/6.png";
import share from "../assets/img/anna/4.png";
import mockup from "../assets/img/anna/MockupAnnaMolly-min.png";

const Anna = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="px-6 relative z-10">
        <div className="w-[100%] mx-auto py-16  text-secondary min-h-screen">
          {/* Header Section */}
          <ZoomText delay={0.2}>
            <div className="relative flex items-center  py-6  border border-secondary  justify-between w-full mb-16">
              {/* Left Arrow */}
              <div
                onClick={() => handleNavigation("/otome")}
                className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
              >
                <span className="text-[1.5rem] font-bold">&#8592;</span>
              </div>

              {/* Right Arrow */}
              <div
                onClick={() => handleNavigation("/linkera")}
                className="absolute right-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
              >
                <span className="text-[1.5rem] font-bold">&#8594;</span>
              </div>
            </div>
          </ZoomText>
          <ZoomText delay={0.2}>
            {/* Two-Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Left Column */}
              <div className="md:col-span-2">
                <LazyLoadImage
                  effect="blur"
                  src={mockup}
                  alt="Large Project View"
                  className="rounded-lg w-full"
                ></LazyLoadImage>{" "}
              </div>

              {/* Right Column */}
              <div className="border-t md:border-t-0 md:border-l p-6 border-secondary flex flex-col justify-between">
                {/* Title and Subtitle at the Top */}
                <div>
                  <h1 className="font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight">
                    ANO <b></b>MUSIC
                  </h1>
                </div>
                {/* "Mon Rôle" Section at the Bottom */}
                <div className="mt-4 sm:mt-8">
                  <h2 className="font-NHAASDS uppercase text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tightmb-4">
                    Mon Rôle
                  </h2>
                  <p className="font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary ">
                    Ce projet est un side project sur lequel je travaille durant
                    mon temps libre, combinant mes deux passions : le code et la
                    musique.
                  </p>
                </div>
              </div>
            </div>
          </ZoomText>
          <ZoomText delay={0.2}>
            {/* Images Section */}
            <div className="grid grid-cols-3 gap-6 mb-16 img-wrap">
              {[accueil, menu, share].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Thumbnail ${index}`}
                  className="rounded-lg shadow-lg cursor-pointer "
                  onClick={() => openModal(image)}
                />
              ))}
            </div>

            {/* Separator */}
            <hr className="border-secondary mb-16" />
          </ZoomText>
          <ZoomText delay={0.2}>
            {/* Bottom Section */}
            <div className="text-center">
              <p className=" relative z-10 text-center w-[90%] mx-auto font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary ">
                Anomusic est une plateforme de réseau social dédiée à la
                musique. Inspirée d’Instagram et de Bandcamp, elle permet aux
                artistes indépendants de partager leurs morceaux. <br />
                Inscrivez-vous, suivez de nouveaux artistes et explorez votre
                fil d’actualité pour découvrir votre prochain son préféré. Grâce
                à des filtres par genre, laissez-vous surprendre par des sons
                que vous n’auriez jamais imaginés.
              </p>
            </div>
            {/* Separator */}
            <hr className="border-secondary mt-16" />
          </ZoomText>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90%] w-auto h-auto">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="rounded-lg w-full h-auto object-cover"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Anna;
