import React from "react";
import { motion } from "framer-motion";

const ZoomText = ({ children, delay = 0 }) => {
  const zoomVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const zoomTransition = {
    duration: 1,
    ease: "easeOut",
    delay,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Déclenche l'animation lorsqu'au moins 20 % de l'élément est visible
      variants={zoomVariants}
      transition={zoomTransition}
      onViewportEnter={() => console.log("Visible:", children)} // Debug : Vérifiez si l'élément devient visible
    >
      {children}
    </motion.div>
  );
};

export default ZoomText;
