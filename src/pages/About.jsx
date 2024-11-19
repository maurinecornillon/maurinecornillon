import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

// Hook interne pour gérer les animations d'une section
const useAnimatedSection = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
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

const About = () => {
  const profile = useAnimatedSection(); // Gestion des animations pour Profile
  const skills = useAnimatedSection(); // Gestion des animations pour Skills
  const contact = useAnimatedSection(); // Gestion des animations pour Contact

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
          <div>
            <motion.h1
              className="text-[60px] sm:text-[80px] md:text-[180px] lg:text-[190px] xl:text-[250px] font-respira tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              About
            </motion.h1>
          </div>
        </main>
      </div>

      {/* Profile Section */}
      <AnimatedSection
        controls={profile.controls}
        refSection={profile.ref}
        delay={0.2}
      >
        <Profile />
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        controls={skills.controls}
        refSection={skills.ref}
        delay={0.3}
      >
        <Skills />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        controls={contact.controls}
        refSection={contact.ref}
        delay={0.4}
      >
        <Contact />
      </AnimatedSection>
    </>
  );
};

export default About;
