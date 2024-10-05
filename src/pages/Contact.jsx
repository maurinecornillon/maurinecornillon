import React from "react";
import HeaderBlack from "../components/HeaderBlack";

const Contact = () => {
  return (
    <>
      <HeaderBlack />
      <div className="flex flex-column justify-start items-center bg-[#212121] text-white h-[calc(100vh-100px)]  overflow-hidden  px-20 sm:px-20 md:px-20">
        <div className="text-left">
          <h2 className=" text-[20px] sm:text-[60px] lg:text-[90px]  font-sporting-regular">
            • LET'S <br />
            COLLABORATE
          </h2>
          {/* Ajout du lien mailto */}
          <a
            href="mailto:maurinecornillon@gmail.com"
            className="text-[20px] sm:text-[22px] lg:text-[44px]  mt-4 tracking-wide font-canela-light-italic "
          >
            maurinecornillon@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
