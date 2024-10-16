import React, { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Liste d'images pour le carrousel
import accueil from "../../src/assets/img/smartback/1.png";
import message from "../assets/img/smartback/2.png";

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
];

const SmartBackWeb = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    smooth: true, // Ajout de l'option "smooth" pour un défilement plus fluide
  });

  // Transformation du défilement sur l'axe X, ajustée pour inclure toutes les images sans dépasser
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(images.length - 1) * 100}vw`]
  );

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    } else {
      controlsContact.start("hidden");
    }
  }, [controlsContact, inViewContact]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <section ref={targetRef} className="relative h-[500vh] w-screen">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex w-[300vw] gap-10 will-change-transform" // Ajout de "will-change" pour améliorer les performances
            >
              {images.map((image) => (
                <ImageCard image={image} key={image.id} />
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

// Nouveau composant pour les images du carrousel
const ImageCard = ({ image }) => {
  return (
    <div className="relative flex justify-center items-center h-[600px] w-screen p-4 group transition-all duration-300 ease-in-out cursor-pointer">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 will-change-transform" // Ajout de "will-change"
      />
    </div>
  );
};

export default SmartBackWeb;
