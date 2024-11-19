import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import ProjectsWeb from "../components/ProjectsWeb";
import ProjectsMobile from "../components/ProjectsMobile";

// Hook interne pour gérer les animations d'une section
const useAnimatedSection = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
    // Démarre ou arrête l'animation selon si la section est visible
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return { controls, ref };
};

// Composant réutilisable pour les sections animées
const AnimatedSection = ({ children, controls, refSection, delay = 0.2 }) => (
  <motion.div
    ref={refSection}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const Projects = () => {
  // Référence pour le défilement de la section "Web Projects"
  const targetRefWeb = useRef(null);

  // Gestion du défilement pour l'animation des éléments liés au scroll
  const { scrollYProgress } = useScroll({
    target: targetRefWeb,
  });

  // Gestion des animations pour la section Web
  const webSection = useAnimatedSection();

  // Gestion des animations pour la section Mobile
  const mobileSection = useAnimatedSection();

  return (
    <>
      {/* En-tête */}
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
          {/* Titre principal */}
          <div>
            <motion.h1
              className="text-[60px] sm:text-[60px] md:text-[180px] lg:text-[190px] xl:text-[250px] font-respira tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              Projects
            </motion.h1>
          </div>
        </main>
      </div>

      {/* Section Projets Web */}
      <AnimatedSection
        controls={webSection.controls}
        refSection={webSection.ref}
        delay={0.2}
      >
        <div className="hidden md:block">
          <ProjectsWeb />
        </div>
      </AnimatedSection>

      {/* Section Projets Mobile */}
      <AnimatedSection
        controls={mobileSection.controls}
        refSection={mobileSection.ref}
        delay={0.3}
      >
        <div className="block md:hidden">
          <ProjectsMobile />
        </div>
      </AnimatedSection>
    </>
  );
};

export default Projects;
