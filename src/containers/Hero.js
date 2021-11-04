import React from "react";

import { HeroStart } from "../components/HeroStart";
import { HeroSurface } from "../components/HeroSurface";
import { HeroCanvas } from "../components/HeroCanvas";

import "../styles/containers/Hero.scss";

function Hero() {
  return (
    <section className="Hero">
      <h1>Nombre del proyecto</h1>
      <ul className="List">
        <li>UI/UX</li>
        <li>Desarrollo Web</li>
      </ul>

      {/* 
      {[...Array(50)].map((e, i) => (
        <HeroStart key={i} />
      ))} */}

      <HeroCanvas />
      {/* <HeroSurface /> */}
    </section>
  );
}

export { Hero };
