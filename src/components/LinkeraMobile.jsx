import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

// Liste d'images pour le carrousel
import accueil from "../../src/assets/img/linkera/Accueil.png";
import message from "../assets/img/linkera/Message.png";
import dataroom from "../assets/img/linkera/DataRoom.png";

const images = [
  {
    src: accueil,
    alt: "Description 1",
    id: 1,
  },
  {
    src: message,
    alt: "Description 2",
    id: 2,
  },
  {
    src: dataroom,
    alt: "Description 3",
    id: 3,
  },
];

const LinkeraMobile = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <motion.div
        ref={targetRef}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <section ref={targetRef} className="relative  w-screen">
          <div className="flex flex-col h-full overflow-y-scroll">
            {images.map((image) => (
              <ImageCard image={image} key={image.id} />
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
};

// Composant pour afficher chaque image du carrousel
const ImageCard = ({ image }) => {
  return (
    <div className="relative flex justify-center items-center h-[400px] w-screen p-4 group transition-all duration-300 ease-in-out cursor-pointer">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

export default LinkeraMobile;
