import React from "react";

import mockup from "../assets/img/game/MockUpOnePiece.png";

const BackgroundGameWMobile = () => {
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

export default BackgroundGameWMobile;
