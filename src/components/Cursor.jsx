import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const svgRef = useRef(null);
  const pointer = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const ease = 0.75;
  const totalLines = 50;

  useEffect(() => {
    const svgns = "http://www.w3.org/2000/svg";
    const root = svgRef.current;

    const updatePointer = (e) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
    };
    window.addEventListener("mousemove", updatePointer);

    let leader = (prop) =>
      prop === "x" ? pointer.current.x : pointer.current.y;

    for (let i = 0; i < totalLines; i++) {
      leader = createLine(leader, i);
    }

    function createLine(leader, i) {
      const line = document.createElementNS(svgns, "line");
      root.appendChild(line);

      gsap.set(line, { x: -1500, y: -750 });
      const pos = gsap.getProperty(line);

      gsap.to(line, {
        duration: 10000,
        x: "+=150",
        y: "+=10",
        repeat: -1,
        ease: "expo.inOut",
        modifiers: {
          x: () => {
            const posX = pos("x");
            const leaderX = leader("x");
            const x = posX + (leaderX - posX) * ease;
            line.setAttribute("x2", leaderX - x);
            return x;
          },
          y: () => {
            const posY = pos("y");
            const leaderY = leader("y");
            const y = posY + (leaderY - posY) * ease;
            line.setAttribute("y2", leaderY - y);
            return y;
          },
        },
      });

      return pos;
    }

    return () => {
      window.removeEventListener("mousemove", updatePointer);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dégradé défini pour stroke */}
        <linearGradient id="cursor-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4D3EF" />
          <stop offset="50%" stopColor="#D9C5FF" />
          <stop offset="100%" stopColor="#CAD0FF" />
        </linearGradient>
      </defs>
      {/* Les lignes dynamiques */}
    </svg>
  );
};

export default CustomCursor;
