import React from "react";
import { useLazyLoading } from "@hooks/useLazyLoading";

import { Project as ProjectInterface } from "@models/types";
import {
  Project as ProjectMain,
  ProjectContent,
  PillContainer,
  Pill,
  ProjectImage,
  ProjectImageContainer,
} from "./styles";
import { ButtonA, ButtonContainer } from "@styles/utils/Buttons";

type Props = {
  project: ProjectInterface;
};

const Project: React.FC<Props> = ({ project }) => {
  const [show, refElement] = useLazyLoading();

  return (
    <ProjectMain ref={refElement as React.MutableRefObject<HTMLDivElement>}>
      {show && (
        <>
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
          <ProjectImageContainer>
            <ProjectImage
              src={project.img}
              alt={"Imagen " + project.name}
              layout="fill"
            />
          </ProjectImageContainer>
        </>
      )}
    </ProjectMain>
  );
};

export { Project };
