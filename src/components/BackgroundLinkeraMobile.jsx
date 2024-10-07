import React, { useEffect } from "react";

import mockup from "../assets/img/linkera/MockupLinkera.png";

const BackgroundLinkeraWMobile = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <div
        className="bg-fixed h-[100vh]"
        style={{
          backgroundImage: `url(${mockup})`,
          backgroundPosition: "center top 40%",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat", // Empêche la répétition de l'image
        }}
      ></div>
    </>
  );
};

export default BackgroundLinkeraWMobile;
