import React from "react";
import { HeroContainer } from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <h1>Hola! Soy Carlos Zabala!</h1>
        <ul className="List">
          <li>UI/UX</li>
          <li>Desarrollo Web</li>
        </ul>
      </div>
    </HeroContainer>
  );
};

export { Hero };
