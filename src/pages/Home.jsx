import React from "react";

import { Hero } from "../containers/Hero";
import { Projects } from "../containers/Projects";
import { Project } from "../components/Project";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { useProjects } from "../hooks/useProjects";
import "../styles/pages/Home.scss";

function Home() {
  const arrProjects = useProjects();

  return (
    <div className="Home">
      <Header />
      <Hero />
      <Projects
        data={arrProjects}
        render={(element) => <Project data={element} key={element.id} />}
      />
      <Footer />
    </div>
  );
}

export { Home };
