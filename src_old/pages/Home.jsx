import React from "react";

import { Hero } from "../containers/Hero";
import { Projects } from "../containers/Projects";
import { Project } from "../components/Project";

import { useProjects } from "../hooks/useProjects";
import "../styles/pages/Home.scss";

function Home() {
  const arrProjects = useProjects();

  return (
    <div className="Home">
      <Hero />
      <Projects
        data={arrProjects}
        render={(element) => <Project data={element} key={element.id} />}
      />
    </div>
  );
}

export { Home };
