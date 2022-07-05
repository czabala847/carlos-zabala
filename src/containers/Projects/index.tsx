import React from "react";
import { useAppContext } from "store/AppProvider";

import { Container } from "styles/utils/Containers";

const Projects: React.FC = () => {
  const { projects } = useAppContext();

  console.log(projects);

  return (
    <section className="Projects">
      <Container>
        <h2>Proyectos realizados</h2>
      </Container>
    </section>
  );
};

export { Projects };
