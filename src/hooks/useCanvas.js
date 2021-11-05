import React from "react";

function useCanvas() {
  /**
   * Función para generar numeros aleatorios
   * @param {*} min = Número minimo
   * @param {*} max = Número maximo
   * @returns Número aleatorio
   */
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const drawStart = (ctx) => {
    const widthCanvas = ctx.canvas.width;
    const heightCanvas = ctx.canvas.height;

    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
    //Estrellas
    ctx.save();
    ctx.fillStyle = "#ffffff";

    ctx.shadowColor = "white";
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 1;

    let xStart, yStart;

    for (let index = 0; index < 150; index++) {
      xStart = randomNumber(0, widthCanvas);
      yStart = randomNumber(0, heightCanvas * 0.7);

      ctx.beginPath();
      ctx.arc(xStart, yStart, 1, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.restore();
  };

  return <p>Algo</p>;
}

export { useCanvas };
