import React from "react";

import mockup from "../assets/img/game/MockUpOnePiece.png";

const BackgroundGameWeb = () => {
  return (
    <>
      {/* Section avec l'effet de parallaxe en dessous du titre */}
      <div
        className="bg-fixed h-[100vh]"
        style={{
          backgroundImage: `url(${mockup})`,
          backgroundPosition: "center top 40%",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default BackgroundGameWeb;
