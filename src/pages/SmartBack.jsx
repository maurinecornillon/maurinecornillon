import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SmartBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Force le défilement en haut lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-[90%] mx-auto py-16 font-sporting-regular text-secondary min-h-screen">
      {/* Header Section */}
      <div className="relative flex items-center border border-secondary px-28 py-6 rounded-full justify-between w-full mb-16">
        {/* Left Arrow */}
        <div
          onClick={() => handleNavigation("/anomusic")}
          className="absolute left-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8592;</span>
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleNavigation("/otome")}
          className="absolute right-0 flex items-center justify-center  p-4 w-[4rem] h-[4rem] cursor-pointer"
        >
          <span className="text-[1.5rem] font-bold">&#8594;</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center">
        <p className=" relative z-10 text-center w-[90%] mx-auto text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[1.5rem] 2xl:text-[1rem] text-secondary leading-relaxed">
          A venir
        </p>
      </div>
    </div>
  );
};

export default SmartBack;
