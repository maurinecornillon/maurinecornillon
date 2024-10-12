import React, { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Header from "../components/Header";
import ProjectsWeb from "../components/ProjectsWeb";
import ProjectsMobile from "../components/ProjectsMobile";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const targetRefWeb = useRef(null);
  const targetRefMobile = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRefWeb,
  });

  // Adjusted x transformation to avoid the extra space at the end
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const controlsWeb = useAnimation();
  const controlsMobile = useAnimation();
  const [refWeb, inViewWeb] = useInView({
    threshold: 0.1,
  });

  const [refMobile, inViewMobile] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewWeb) {
      controlsWeb.start("visible");
    } else {
      controlsWeb.start("hidden");
    }
  }, [controlsWeb, inViewWeb]);

  useEffect(() => {
    if (inViewMobile) {
      controlsMobile.start("visible");
    } else {
      controlsMobile.start("hidden");
    }
  }, [controlsMobile, inViewMobile]);

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
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

      {/* Affichage pour Desktop */}
      <motion.div
        ref={refWeb}
        initial="hidden"
        animate={controlsWeb}
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
        <div className="hidden md:block">
          <ProjectsWeb />
        </div>
      </motion.div>

      {/* Affichage pour Mobile */}
      <motion.div
        ref={refMobile}
        initial="hidden"
        animate={controlsMobile}
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
        <div className="block md:hidden">
          <ProjectsMobile />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
