import React from "react";
import "../styles/components/HeroCanvas.scss";

// import imgSurface from "../assets/img/hero_footer.png";
import { useDrawCanvas } from "../hooks/useDrawCanvas";

function HeroCanvas() {
  const { refElement } = useDrawCanvas();

  return (
    <canvas ref={refElement} className="HeroCanvas">
      Su navegador no soporta canvas :(
    </canvas>
  );
}

export { HeroCanvas };
