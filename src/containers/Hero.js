import React from "react";

import "../styles/containers/Hero.scss";

function Hero() {
  return (
    <section className="Hero">
      <h1>Nombre del proyecto</h1>

      <ul className="List">
        <li>UI/UX</li>
        <li>Desarrollo Web</li>
      </ul>

      <div className="start"></div>
      <div className="start-2"></div>
      <div className="start-3"></div>
      <div className="start-4"></div>
    </section>
  );
}

export { Hero };
