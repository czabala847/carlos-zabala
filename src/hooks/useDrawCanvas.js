import React from "react";

function useDrawCanvas() {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const generateStars = (quantity, limit_x, limit_y) => {
    const arrayStars = [];

    for (let i = 0; i < quantity; i++) {
      const x = randomNumber(0, limit_x);
      const y = randomNumber(0, limit_y);

      const size = randomNumber(1, 3);

      arrayStars.push({ x, y, size });
    }

    return arrayStars;
  };

  const drawStars = (ctx) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;

    ctx.clearRect(0, 0, width, height);

    ctx.save();

    //Estilos
    ctx.fillStyle = "white";
    ctx.shadowColor = "white";
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;
    //

    const arrayStars = generateStars(150, width, height * 0.7);
    // generateStars(150, 1000, 1000);

    arrayStars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.restore();
  };

  const drawImage = (ctx, urlImage) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;

    const img = new Image();
    img.src = urlImage;

    img.onload = () => {
      ctx.save();
      ctx.globalAlpha = 0.1;

      const heightImage = height * 0.4;
      const yImage = height * 0.6;
      const widthImage = width;

      ctx.drawImage(img, 0, yImage, widthImage, heightImage);
      ctx.restore();
    };
  };

  return { drawImage, drawStars };
}

export { useDrawCanvas };
