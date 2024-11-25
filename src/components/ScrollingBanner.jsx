import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="defileParent">
      <div className="defile">
        {Array(1000).fill("Alliez design et performance ✱ ").join(" ")}
      </div>
    </div>
  );
};

export default ScrollingBanner;
