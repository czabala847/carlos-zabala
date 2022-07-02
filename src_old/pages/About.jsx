import React from "react";
import "../styles/pages/About.scss";

const About = () => {
  return (
    <section className="About" id="about">
      <div className="container">
        <h2>Hola de nuevo, mucho gusto soy Carlos Zabala</h2>
        <p>
          Soy un Desarrollador Web, con conocimientos en tecnologías Frontend y
          Backend, interesado en aportar y seguir aprendiendo en el campo del
          desarrollo de software. Me encuentro en la ciudad de Barranquilla -
          Colombia.
        </p>
        <p>
          Como desarrollador, disfruto el poder crear herramientas y tecnologías
          que aporten a solventar problemas y dificultades que se presenten en
          diferentes campos organizacionales o personales, que estas tecnologías
          de algún modo sean útiles para el crecimiento en materia tecnológica
          de la sociedad y el planeta.
        </p>
        <p>
          Aparte del desarrollo web, me gusta mucho el cine es uno de mis
          hoobies favoritos en el cual encuentro ratos agradables disfrutando de
          ese arte, tambien soy una persona autodidacta por lo que siempre estoy
          queriendo aprender cosas nuevas que aporten valor.
        </p>
      </div>
    </section>
  );
};

export { About };
