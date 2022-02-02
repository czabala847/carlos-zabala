import React from "react";

const QUANTITY_STARS = 200;

function useDrawCanvas() {
  const [stars, setStars] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const initCanvas = (ctx) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;
    generateStars(width, height);
  };

  const generateStars = (limit_x, limit_y) => {
    const arrayStars = [];

    for (let i = 0; i < QUANTITY_STARS; i++) {
      const x = randomNumber(0, limit_x);
      const y = randomNumber(0, limit_y);

      const size = Math.random();

      arrayStars.push({ x, y, size });
    }

    setStars(arrayStars);
    setLoading(false);
  };

  const animationStar = (limit_x) => {
    let change = 0.15;

    const newStars = stars.map((star) => {
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

      return star;
    });

    return newStars;
  };

  const drawStars = (ctx) => {
    const height = ctx.canvas.height;
    const width = ctx.canvas.width;

    setStars(animationStar(width));
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    //Estilos
    ctx.fillStyle = "white";
    ctx.shadowColor = "white";
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;

    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.restore();

    // requestAnimationFrame(() => drawStars(ctx));
  };

  return { drawStars, initCanvas, loading };
}

export { useDrawCanvas };
