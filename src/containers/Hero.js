import React from "react";

import { HeroCloud } from "../components/HeroCloud";

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

      <div className="Hero_footer"></div>
    </section>
  );
}

export { Hero };
