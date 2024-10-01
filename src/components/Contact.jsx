import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <main className="flex justify-start items-end flex-grow px-4 sm:px-6 md:px-10 lg:px-48 xl:px-48 leading-none m-0 pt-20 pb-0">
          <motion.div
            className="text-[60px] sm:text-[60px] md:text-[100px] lg:text-[150px] xl:text-[150px] font-respira tracking-widest m-0 p-0 leading-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            Contact_
          </motion.div>
        </main>

        <div className="flex flex-col items-start font-sporting-bold mt-10 sm:mt-10 md:justify-center lg:justify-center xl:justify-center justify-start px-4 sm:px-6 md:px-10 lg:px-48 xl:px-48 ">
          <div className="flex flex-row items-center w-full max-w-6xl">
            <div className="w-2/3 flex flex-col items-start justify-center">
              <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[40px] xl:text-[40px] text-gray-300 font-sporting-bold">
                Let's collaborate
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center mt-2 sm:mt-2 lg:mt-4">
            <a
              href="mailto:maurinecornillon@gmail.com"
              className="text-[14px] sm:text-[14px] md:text-[20px] lg:text-[40px] xl:text-[40px] font-bold flex items-center space-x-4 cursor-pointer"
            >
              <span className="inline-block">↳</span>
              <span>maurinecornillon@gmail.com</span>
            </a>

            <div className="mt-4 sm:mt-4 lg:mt-8 xl:mt-8 w-full border-t border-black"></div>
          </div>
        </div>

        {/* Ajout de la marge en bas */}
        <div className="mb-10 sm:mb-20 lg:mb-32 xl:mb-40"></div>
      </div>
    </>
  );
};

export default Contact;
