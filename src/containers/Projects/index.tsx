import React from "react";
import { Project } from "@components/Project";

import { useAppContext } from "store/AppProvider";

import { Projects as ProjectsMain } from "./styles";
import { Container } from "styles/utils/Containers";

const Projects: React.FC = () => {
  const { projects } = useAppContext();
  return (
    <ProjectsMain>
      <Container>
        <h2>Proyectos realizados</h2>
        {projects.map((data) => (
          <Project project={data} key={data.id} />
        ))}
      </Container>
    </ProjectsMain>
  );
};

export { Projects };
