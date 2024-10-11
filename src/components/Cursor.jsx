import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Utilisation de translate pour positionner le cercle directement sur la souris
      cursor.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
    </>
  );
};

export default Cursor;
