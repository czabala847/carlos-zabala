import React from "react";

import { HeroSurface } from "../components/HeroSurface";
import { HeroCanvas } from "../components/HeroCanvas";

import "../styles/containers/Hero.scss";

function Hero() {
  return (
    <section className="Hero text-center">
      <div className="container">
        <h1 className="scale-in-center">Hola! Soy Carlos Zabala</h1>
        {/* <h1>Nombre del proyecto</h1> */}
        <ul className="List scale-in-center">
          <li>UI/UX</li>
          <li>Desarrollo Web</li>
        </ul>
      </div>

      {/* 
      {[...Array(100)].map((e, i) => (
        <HeroStart key={i} />
      ))} */}

      <HeroCanvas />
      <HeroSurface />
    </section>
  );
}

export { Hero };
