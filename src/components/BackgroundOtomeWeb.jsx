import React from "react";

import mockup from "../assets/img/otome/MockUpOtome.png";

const BackgroundOtomeWeb = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <div
        className="bg-fixed h-[100vh]"
        alt="Mockup Otome"
        style={{
          backgroundImage: `url(${mockup})`,
          backgroundPosition: "center top 40%",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default BackgroundOtomeWeb;
