import React, { useEffect } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Controls and ref for Profile
  const controlsProfile = useAnimation();
  const [refProfile, inViewProfile] = useInView({
    threshold: 0.1,
  });

  // Controls and ref for Skills
  const controlsSkills = useAnimation();
  const [refSkills, inViewSkills] = useInView({
    threshold: 0.1,
  });

  // Controls and ref for Contact
  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewProfile) {
      controlsProfile.start("visible");
    } else {
      controlsProfile.start("hidden");
    }
  }, [controlsProfile, inViewProfile]);

  useEffect(() => {
    if (inViewSkills) {
      controlsSkills.start("visible");
    } else {
      controlsSkills.start("hidden");
    }
  }, [controlsSkills, inViewSkills]);

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    } else {
      controlsContact.start("hidden");
    }
  }, [controlsContact, inViewContact]);

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
          <div>
            <motion.h1
              className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[150px] font-respira tracking-widest m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              About_
            </motion.h1>
          </div>

          <div className="mt-10 sm:mt-20 md:mt-40 lg:mt-60">
            <motion.h2
              className="text-[60px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[160px] text-gray-300 font-canela-light-italic tracking-widest ml-4 mt-4 m-0 p-0 leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: 0.2,
              }}
            >
              profile
            </motion.h2>
          </div>
        </main>
      </div>

      {/* Profile component */}
      <motion.div
        ref={refProfile}
        initial="hidden"
        animate={controlsProfile}
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
        <Profile />
      </motion.div>

      {/* Skills component */}
      {/* <div className="flex justify-center items-center flex-grow px-10 leading-none m-0 p-0">
        <div>
          <motion.h1
            className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[150px] font-respira tracking-widest m-0 p-0 leading-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            About_
          </motion.h1>
        </div>

        <div className="mt-60">
          <motion.h2
            className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[150px] text-gray-300 font-canela-light-italic tracking-widest m-0 p-0 leading-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.2,
            }}
          >
            skills
          </motion.h2>
        </div>
      </div> */}

      <motion.div
        ref={refSkills}
        initial="hidden"
        animate={controlsSkills}
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
        <Skills />
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
  );
};

export default About;
