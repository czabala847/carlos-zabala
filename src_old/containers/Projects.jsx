import React from "react";
import "../styles/containers/Projects.scss";

const Projects = ({ data, render }) => {
  return (
    <section className="Projects" id="projects">
      <div className="container">
        <h2>Proyectos realizados</h2>
        {data.map(render)}
      </div>
    </section>
  );
};

export { Projects };
