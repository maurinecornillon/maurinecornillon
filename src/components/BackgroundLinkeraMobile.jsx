import React, { useEffect } from "react";

import mockup from "../assets/img/linkera/MockupLinkera.png";

const BackgroundLinkeraWMobile = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <img
        src={mockup} // URL de ton image
        alt="Mockup Linkera"
        className="w-full h-full object-cover"
      />
    </>
  );
};

export default BackgroundLinkeraWMobile;
