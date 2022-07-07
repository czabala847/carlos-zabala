import React from "react";

import {
  About as AboutContainer,
  AboutHero,
  ImageContainer,
  ImageProfile,
  AboutMe,
  ButtonContainer,
  DividerWaves,
} from "../styles/pages/AboutStyles";
import { Container } from "@styles/utils/Containers";

import profileImage from "@images/profile.png";
import { ButtonA } from "@styles/utils/Buttons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Container>
        <AboutHero>
          <ImageContainer>
            <ImageProfile src={profileImage} width="200" height="200" />
          </ImageContainer>
          <ButtonContainer>
            <ButtonA
              target="_blank"
              href="https://github.com/czabala847"
              variant="light"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </ButtonA>
            <ButtonA target="_blank" href="" variant="primary">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </ButtonA>
          </ButtonContainer>
        </AboutHero>
      </Container>

      <AboutMe>
        <DividerWaves>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </DividerWaves>
        <Container>
          <h2>Hola de nuevo, mucho gusto soy Carlos Zabala</h2>
          <p>
            Soy un Desarrollador Web, con conocimientos en tecnologías Frontend
            y Backend, interesado en aportar y seguir aprendiendo en el campo
            del desarrollo de software. Me encuentro en la ciudad de
            Barranquilla - Colombia.
          </p>
          <p>
            Como desarrollador, disfruto el poder crear herramientas y
            tecnologías que aporten a solventar problemas y dificultades que se
            presenten en diferentes campos organizacionales y empresariales, que
            estas tecnologías de algún modo sean útiles para el crecimiento en
            materia tecnológica de la sociedad.
          </p>
          <p>
            Aparte del desarrollo web, me gusta mucho el cine es uno de mis
            hoobies favoritos en el cual encuentro ratos agradables disfrutando
            de ese arte, tambien soy una persona autodidacta por lo que siempre
            estoy queriendo aprender cosas nuevas que aporten valor.
          </p>
        </Container>
      </AboutMe>
    </AboutContainer>
  );
};

export default About;
