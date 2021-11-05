import React from "react";

import "../styles/components/HeroCanvas.scss";

import imgSurface from "../assets/img/hero_footer.png";

function HeroCanvas() {
  const canvasRef = React.useRef(null);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const draw = (ctx) => {
    const widthCanvas = ctx.canvas.width;
    const heightCanvas = ctx.canvas.height;

    //Estrellas
    ctx.save();
    ctx.fillStyle = "#ffffff";

    ctx.shadowColor = "white";
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;

    let xStart, yStart;

    for (let index = 0; index < 70; index++) {
      xStart = randomNumber(0, widthCanvas);
      yStart = randomNumber(0, heightCanvas * 0.7);

      ctx.beginPath();
      ctx.arc(xStart, yStart, 1, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.restore();

    //Imagen de la superficie
    const img = new Image();
    img.src = imgSurface;

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

    //Our draw came here
    const render = () => {
      //   frameCount++;
      //   draw(ctx, frameCount);
      draw(ctx);
      //   animationFrameId = window.requestAnimationFrame(render);
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
