import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  useEffect(() => {
    const video = document.querySelector("video");

    const handleVideoLoaded = () => {
      setTimeout(() => {
        setLoading(false); // Fin du chargement après au moins 3 secondes
      }, 3000);
    };

    if (video) {
      video.addEventListener("canplaythrough", handleVideoLoaded);
    }

    return () => {
      if (video) {
        video.removeEventListener("canplaythrough", handleVideoLoaded);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = scrollY * 0.2;

  const controlsHeader = useAnimation();
  const [refHeader, inViewHeader] = useInView({
    threshold: 0.1,
  });

  const controlsPresentation = useAnimation();
  const [refPresentation, inViewPresentation] = useInView({
    threshold: 0.1,
  });

  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewHeader) {
      controlsHeader.start("visible");
    } else {
      controlsHeader.start("hidden");
    }
  }, [controlsHeader, inViewHeader]);

  useEffect(() => {
    if (inViewPresentation) {
      controlsPresentation.start("visible");
    } else {
      controlsPresentation.start("hidden");
    }
  }, [controlsPresentation, inViewPresentation]);

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    } else {
      controlsContact.start("hidden");
    }
  }, [controlsContact, inViewContact]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={require("../assets/img/video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-screen justify-between">
            <motion.div
              ref={refHeader}
              initial="hidden"
              animate={controlsHeader}
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
              <Header />
            </motion.div>
            <main className="relative h-screen overflow-hidden flex items-end justify-end">
              <motion.h1
                className=" text-[24vw] sm:text-[24vw] md:text-[24vw] lg:text-[24vw] xl:text-[24vw]  font-respira tracking-widest m-0 p-0 leading-none"
                style={{
                  position: "fixed",
                  transform: `translateY(${translateY}px)`,
                  opacity: 1 - scrollY / 1000,
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
              >
                MONA
              </motion.h1>
            </main>
          </div>

          <motion.div
            ref={refPresentation}
            initial="hidden"
            animate={controlsPresentation}
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
            <Presentation />
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
        </>
      )}
    </>
  );
};

export default Home;
