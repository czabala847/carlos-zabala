import React from "react";
import { HeroContainer, HeroTitle, HeroList, HeroImage } from "./styles";
import { Container } from "styles/utils/Containers";

import { HeroCanvas } from "@components/HeroCanvas";

import backgroundImage from "@images/pngegg.png";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroTitle>Hola! Soy Carlos Zabala!</HeroTitle>
        <HeroList>
          <li>UI/UX</li>
          <li>Desarrollo Web</li>
        </HeroList>
      </Container>
      <HeroCanvas />
      {/* <HeroImage src={backgroundImage} alt="" /> */}
    </HeroContainer>
  );
};

export { Hero };
