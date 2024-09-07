import React, { useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import cover1 from "../assets/img/TEST.png";
import cover2 from "../assets/img/cover1.jpg";
import cover3 from "../assets/img/cover3.jpeg";
import cover4 from "../assets/img/cover4.jpeg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
          <div>
            <motion.h1
              className="text-[150px] font-respira tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              Projects_
            </motion.h1>
          </div>

          <div className="mt-60">
            <motion.h2
              className="text-[150px] text-gray-300 font-canela-light-italic tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              work
            </motion.h2>
          </div>
        </main>
      </div>

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
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              { id: 1, title: "ESTIMEO", img: cover1 },
              { id: 2, title: "LINKERA", img: cover2 },
              { id: 3, title: "OTOME GAME5", img: cover3 },
              { id: 4, title: "SMART BACK", img: cover4 },
            ].map((project) => (
              <div key={project.id}>
                <div className="mb-4">
                  <p className="text-4xl font-bold font-sporting-bold text-black">
                    0{project.id}.
                  </p>
                  <p className="text-lg font-light font-sporting-regular text-black">
                    Visual identity for an alternative investment broker
                  </p>
                </div>
                <div className="relative group">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-[500px] object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:-rotate-3"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white font-sporting-bold text-4xl font-bold mix-blend-difference opacity-0 group-hover:opacity-100 group-hover:duration-0">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={refContact}
        initial="hidden"
        animate={controlsContact}
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
        <Contact />
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
