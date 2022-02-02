import React from "react";
import "../styles/components/HeroCanvas.scss";

// import imgSurface from "../assets/img/hero_footer.png";
import { useDrawCanvas } from "../hooks/useDrawCanvas";

function HeroCanvas() {
  const canvasRef = React.useRef(null);
  const { drawStars, initCanvas, loading } = useDrawCanvas();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let interval;

    const handleResize = (e) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize(); //para que se ejecute al iniciar

    window.addEventListener("resize", handleResize);
    initCanvas(ctx);

    // animación
    interval = setInterval(() => {
      drawStars(ctx);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [loading]);

  return (
    <canvas ref={canvasRef} className="HeroCanvas">
      Su navegador no soporta canvas :(
    </canvas>
  );
}

export { HeroCanvas };
