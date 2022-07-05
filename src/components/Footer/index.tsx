import React from "react";

import { Footer as FooterMain, FooterIcon } from "./styles";
import { Container } from "styles/utils/Containers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <FooterMain>
      <Container>
        <div className="Footer__container">
          <div className="Footer__socialmedia">
            <FooterIcon href="https://github.com/czabala847" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </FooterIcon>
          </div>
          <div className="Footer__information">
            <p>
              Copyright © {new Date().getFullYear()} Carlos Zabala | Todos los
              derechos reservados
            </p>
          </div>
        </div>
      </Container>
    </FooterMain>
  );
};

export { Footer };
