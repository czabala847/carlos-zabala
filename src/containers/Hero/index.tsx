import React from "react";
import { HeroContainer, HeroTitle, HeroList } from "./styles";
import { Container } from "styles/utils/Containers";

import { HeroCanvas } from "@components/HeroCanvas";

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
    </HeroContainer>
  );
};

export { Hero };
