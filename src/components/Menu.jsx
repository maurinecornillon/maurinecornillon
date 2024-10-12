import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Menu = () => {
  const controls = useAnimation();
  const navigate = useNavigate(); // Initialize the navigate function

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Handle navigation when clicking on the menu items
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
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
      id="menu"
      className="h-screen bg-[#212121] flex justify-center items-center px-4 sm:px-10"
    >
      <div className="w-full">
        <div className="w-full border-b border-gray-500 py-12">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex justify-center max-w-full lg:max-w-4xl mx-auto px-4 sm:px-10 font-sporting-regular hover-font-change"
            onClick={() => handleNavigation("/projects")}
          >
            <h2 className="text-white text-2xl font-light text-right pr-4 transform -translate-y-2">
              01.
            </h2>
            <h1 className="cursor-pointer text-white text-[3.125rem] sm:text-[5.625rem] md:text-[7.5rem] lg:text-[6rem]  xl:text-[7.5rem]  2xl:text-[7.5rem]">
              projects
            </h1>
          </motion.div>
        </div>
        <div className="w-full border-b border-gray-500 py-12">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex justify-end max-w-full lg:max-w-4xl mx-auto px-4 sm:px-10 font-sporting-regular hover-font-change"
            onClick={() => handleNavigation("/about")}
          >
            <h2 className="text-white text-2xl font-light text-right pr-4 transform -translate-y-2">
              02.
            </h2>
            <h1 className="cursor-pointer text-white text-[3.125rem] sm:text-[5.625rem]  md:text-[7.5rem] lg:text-[6rem]  xl:text-[7.5rem]  2xl:text-[7.5rem]">
              about
            </h1>
          </motion.div>
        </div>
        <div className="w-full border-b border-gray-500 py-12">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex justify-center max-w-full lg:max-w-4xl mx-auto px-4 sm:px-10 font-sporting-regular hover-font-change"
            onClick={() => handleNavigation("/contact")}
          >
            <h2 className="text-white text-2xl font-light text-right pr-4 transform -translate-y-2">
              03.
            </h2>
            <h1 className="cursor-pointer text-white text-[3.125rem] sm:text-[5.625rem] md:text-[7.5rem] lg:text-[6rem]  xl:text-[7.5rem]  2xl:text-[7.5rem]">
              contact
            </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
