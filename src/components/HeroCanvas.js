import React from "react";

import "../styles/components/HeroCanvas.scss";

// import imgSurface from "../assets/img/hero_footer.png";
import { useDrawCanvas } from "../hooks/useDrawCanvas";

function HeroCanvas() {
  const canvasRef = React.useRef(null);
  const { drawStars, initCanvas } = useDrawCanvas();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    initCanvas(ctx);

    let interval;

    interval = setInterval(() => {
      // animationStar(ctx);
      drawStars(ctx);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="HeroCanvas">
      Su navegador no soporta canvas :(
    </canvas>
  );
}

export { HeroCanvas };
