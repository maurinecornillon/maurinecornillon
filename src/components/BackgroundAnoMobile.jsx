import React from "react";

import mockup from "../assets/img/estimeo/MockupEstimeo.png";

const BackgroundEstimeoWMobile = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <img
        src={mockup} // URL de ton image
        alt="Mockup Ano"
        className="w-full h-full object-cover"
      />
    </>
  );
};

export default BackgroundEstimeoWMobile;
