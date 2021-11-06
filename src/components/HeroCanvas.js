import React from "react";

import "../styles/components/HeroCanvas.scss";

import imgSurface from "../assets/img/hero_footer.png";
import { useDrawCanvas } from "../hooks/useDrawCanvas";

function HeroCanvas() {
  const canvasRef = React.useRef(null);
  const { drawImage, drawStars } = useDrawCanvas();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // let frameCount = 0;
    // let animationFrameId;

    const render = () => {
      // frameCount++;
      // drawStart(ctx, frameCount);
      // drawImage(ctx, imgSurface);
      // animationFrameId = window.requestAnimationFrame(render);
      drawStars(ctx);
      drawImage(ctx, imgSurface);
    };

    render();

    // return () => {
    //   window.cancelAnimationFrame(animationFrameId);
    // };
  }, []);

  return (
    <canvas ref={canvasRef} className="HeroCanvas">
      Su navegador no soporta canvas :(
    </canvas>
  );
}

export { HeroCanvas };
