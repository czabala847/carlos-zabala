// import React from "react";

function useDrawCanvas() {
  let arrayStars = [];

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const initCanvas = (ctx) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;

    generateStars(200, width, height);
  };

  const generateStars = (quantity, limit_x, limit_y) => {
    arrayStars = [];

    for (let i = 0; i < quantity; i++) {
      const x = randomNumber(0, limit_x);
      const y = randomNumber(0, limit_y);

      const size = Math.random();

      arrayStars.push({ x, y, size });
    }

    // return arrayStars;
  };

  const animationStar = (limit_x) => {
    let change = 0.15;

    arrayStars.forEach((star) => {
      star.x += 0.5;

      if (star.x > limit_x) {
        star.x = 0;
      }

      if (star.size < 0.1) {
        change = 0.1;
      } else if (star.size > 0.9) {
        change = -0.1;
      }

      star.size += change;
    });

    return arrayStars;
  };

  const drawStars = (ctx) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;

    ctx.clearRect(0, 0, width, height);

    animationStar(width);

    ctx.save();

    //Estilos
    ctx.fillStyle = "white";
    ctx.shadowColor = "white";
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;
    //

    // const arrayStars = generateStars(150, width, height * 0.7);

    arrayStars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.restore();
  };

  // const drawImage = (ctx, urlImage) => {
  //   const height = ctx.canvas.height;
  //   const width = ctx.canvas.width;

  //   const img = new Image();
  //   img.src = urlImage;

  //   img.onload = () => {
  //     ctx.save();
  //     ctx.globalAlpha = 0.1;

  //     const heightImage = height * 0.4;
  //     const yImage = height * 0.6;
  //     const widthImage = width;

  //     ctx.drawImage(img, 0, yImage, widthImage, heightImage);
  //     ctx.restore();
  //   };
  // };

  return { drawStars, initCanvas };
}

export { useDrawCanvas };
