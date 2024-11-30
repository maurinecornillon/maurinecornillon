import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedTitle = ({ title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".letter");

    // On applique des animations différentes en fonction de l'index des lettres
    letters.forEach((letter, index) => {
      const randomAnimation = Math.floor(Math.random() * 3); // Trois types d'animation
      if (randomAnimation === 0) {
        // Animation de rebond vertical
        gsap.fromTo(
          letter,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: index * 0.1,
          }
        );
      } else if (randomAnimation === 1) {
        // Animation de rotation sur elle-même
        gsap.fromTo(
          letter,
          { rotation: 360, opacity: 0, scale: 0.5 },
          {
            rotation: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            delay: index * 0.1,
          }
        );
      } else {
        // Animation de montée rapide avec légère inclinaison
        gsap.fromTo(
          letter,
          { y: 50, opacity: 0, rotation: -15 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <h1
      ref={titleRef}
      className=" leading-tight space-x-4 z-10 text-[0.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[4rem] 2xl:text-[4rem] font-bold text-secondary"
    >
      {title.split("").map((char, index) => (
        <span key={index} className="letter inline-block">
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;

// import React, { useEffect, useRef, useState } from "react";

// const AnimatedTitle = ({ title, typingSpeed = 100 }) => {
//   const [displayedTitle, setDisplayedTitle] = useState(""); // Stocke les lettres affichées
//   const titleIndex = useRef(0); // Index de la lettre actuellement affichée

//   useEffect(() => {
//     const typeLetter = () => {
//       if (titleIndex.current < title.length) {
//         setDisplayedTitle((prev) => prev + title[titleIndex.current]);
//         titleIndex.current += 1;
//       }
//     };

//     // Intervalle pour afficher les lettres une par une
//     const interval = setInterval(typeLetter, typingSpeed);

//     // Nettoyage de l'intervalle
//     return () => clearInterval(interval);
//   }, [title, typingSpeed]);

//   return (
//     <h1 className="leading-tight text-center z-10 text-[1rem] sm:text-[1.8rem] lg:text-[2.5rem] xl:text-[4rem] 2xl:text-[3rem] font-bold text-secondary">
//       {displayedTitle}
//       <span className="animate-blink">|</span> {/* Curseur animé */}
//     </h1>
//   );
// };

// export default AnimatedTitle;
