import React from "react";

import mockup from "../assets/img/otome/MockUpOtome.png";

const BackgroundOtomeWMobile = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <img
        src={mockup}
        alt="Mockup Otome"
        className="w-full h-full object-cover"
      />
    </>
  );
};

export default BackgroundOtomeWMobile;
