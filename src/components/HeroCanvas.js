import React from "react";

import "../styles/components/HeroCanvas.scss";

import imgSurface from "../assets/img/hero_footer.png";

function HeroCanvas() {
  const canvasRef = React.useRef(null);

  const drawImage = (ctx, urlImage) => {
    const widthCanvas = ctx.canvas.width;
    const heightCanvas = ctx.canvas.height;
    //Imagen de la superficie
    const img = new Image();
    img.src = urlImage;

    img.onload = () => {
      ctx.save();
      ctx.globalAlpha = 0.1;

      const heightImage = heightCanvas * 0.4;
      const yImage = heightCanvas * 0.6;
      const widthImage = widthCanvas;

      ctx.drawImage(img, 0, yImage, widthImage, heightImage);
      ctx.restore();
    };
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    canvas.width = displayWidth;
    canvas.height = displayHeight;

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      drawStart(ctx, frameCount);
      drawImage(ctx, imgSurface);
      // animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="HeroCanvas">
      Su navegador no soporta canvas :(
    </canvas>
  );
}

export { HeroCanvas };
