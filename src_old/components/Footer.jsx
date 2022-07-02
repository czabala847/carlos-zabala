import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="container">
        <div className="Footer__container">
          <div className="Footer__socialmedia">
            <a
              href="https://github.com/czabala847"
              target="_blank"
              rel="noreferrer"
              className="Footer__icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="Footer__information">
            <p>
              Copyright © {new Date().getFullYear()} Carlos Zabala | Todos los
              derechos reservados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
