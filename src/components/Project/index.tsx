import React from "react";
import Image from "next/image";

import { Project as ProjectInterface } from "@models/types";
import {
  Project as ProjectMain,
  ProjectContent,
  PillContainer,
  Pill,
} from "./styles";
import { ButtonA, ButtonContainer } from "@styles/utils/Buttons";

type Props = {
  project: ProjectInterface;
};

const Project: React.FC<Props> = ({ project }) => {
  return (
    <ProjectMain>
      <ProjectContent className="fade-in">
        <h4>{project.name}</h4>
        <PillContainer>
          {project.technologies.map((technology, id) => (
            <Pill key={id} type={technology}>
              {technology}
            </Pill>
          ))}
        </PillContainer>
        <p>{project.description}</p>
        <ButtonContainer>
          <ButtonA target="_blank" href={project.urlPublic} variant="light">
            Ir al sitio
          </ButtonA>
          <ButtonA target="_blank" href={project.urlRepo} variant="primary">
            Repositorio
          </ButtonA>
        </ButtonContainer>
      </ProjectContent>

      {/* <div className="Project__img fade-in"> */}
      <Image
        src={project.img}
        alt={"Imagen " + project.name}
        width={547}
        height={280}
        layout="responsive"
      />
      {/* </div> */}
      <div className="Project__overlay"></div>
    </ProjectMain>
  );
};

export { Project };
