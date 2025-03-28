import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ZoomText from "../components/ZoomText";

// Liste d'images pour le carrousel
import accueil from "../../src/assets/img/linkera/Accueil.png";
import message from "../assets/img/linkera/Messages.png";
import dataroom from "../assets/img/linkera/DataRoom.png";
import mockup from "../assets/img/linkera/MockupLinkera.png";

const Linkera = () => {
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
        <div className="w-[100%] mx-auto py-16 font-sporting-regular text-secondary min-h-screen">
          {/* Header Section */}
          <ZoomText delay={0.2}>
            <div className="relative flex items-center  py-6  border border-secondary justify-between w-full mb-16">
              {/* Left Arrow */}
              <div
                onClick={() => handleNavigation("/anomusic")}
                className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
              >
                <span className="text-[1.5rem] font-bold">&#8592;</span>
              </div>

              {/* Right Arrow */}
              <div
                onClick={() => handleNavigation("/otome")}
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
                />
              </div>

              {/* Right Column */}
              <div className="border-t md:border-t-0 md:border-l p-6 border-secondary flex flex-col justify-between">
                {/* Title and Subtitle at the Top */}
                <div>
                  <h1 className="font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight">
                    LINKERA
                  </h1>
                </div>
                {/* "Mon Rôle" Section at the Bottom */}
                <div className="mt-4 sm:mt-8">
                  <h2 className="font-NHAASDS uppercase text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tightmb-4">
                    Mon Rôle
                  </h2>
                  <p className="font-NHAASDS  text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] uppercase leading-relaxed tracking-tight text-secondary ">
                    En tant que membre de l'équipe technique, j'ai contribué à
                    la création de la première version de Linkera. Je me suis
                    concentrée sur le design UI/UX et j'ai développé les
                    algorithmes de calculs financiers ainsi que la génération
                    automatique de PDF.
                  </p>
                </div>
              </div>
            </div>
          </ZoomText>

          <ZoomText delay={0.2}>
            {/* Images Section */}
            <div className="grid grid-cols-3 gap-6 mb-16 img-wrap">
              {[accueil, message, dataroom].map((image, index) => (
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
                Linkera simplifie les ventes d'entreprises, les acquisitions et
                les levées de fonds. Elle offre des outils pour publier des
                annonces, mettre en relation acheteurs et vendeurs, gérer la
                confidentialité et valoriser les entreprises. <br /> <br />
                Pour les startups, elle facilite les levées de fonds en
                identifiant les investisseurs et en préparant les transactions.
              </p>
            </div>
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

export default Linkera;
