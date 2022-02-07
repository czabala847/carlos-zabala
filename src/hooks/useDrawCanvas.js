import React from "react";

const QUANTITY_STARS = 200;

function useDrawCanvas() {
  const [stars, setStars] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [ctx, setCtx] = React.useState(null);
  const refElement = React.useRef(null);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  React.useEffect(() => {
    const canvas = refElement.current;
    setCtx(canvas.getContext("2d"));

    let interval;

    /**
     * Crear estrellas con posición y tamaños random
     */
    const generateStars = () => {
      const arrayStars = [];

      for (let i = 0; i < QUANTITY_STARS; i++) {
        const x = randomNumber(0, ctx.canvas.width);
        const y = randomNumber(0, ctx.canvas.height);
        const size = Math.random();

        arrayStars.push({ x, y, size });
      }

      setStars(arrayStars);
      setLoading(false);
    };

    /**
     * Cambiar el tamaño y posición de las estrellas, para silumar animación de movimiento
     */
    const animationStar = () => {
      let change = 0.15;

      stars.map((star) => {
        star.x += 0.5;

        if (star.x > ctx.canvas.width) {
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
    };

    /**
     * Pintar estrellas en el lienzo
     */
    const drawStars = () => {
      // setStars(animationStar());
      animationStar();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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

    const initRender = () => {
      if (ctx) {
        generateStars();

        //Repetir animación
        interval = setInterval(() => {
          drawStars();
        }, 100);
      }
    };

    const handleResize = (e) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    //para que se ejecute al iniciar
    handleResize();
    initRender();

    // window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [ctx, refElement, loading]);

  return { refElement };
}

export { useDrawCanvas };
