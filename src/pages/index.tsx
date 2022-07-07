import React from "react";
import Head from "next/head";

import { Hero } from "containers/Hero";
import { Projects } from "containers/Projects";
import { HomeContainer } from "styles/pages/HomeStyles";

const Home = () => {
  return (
    <>
      <Head>
        <title>Carlos Zabala</title>
        <meta
          name="description"
          content="Hola, soy Carlos Zabala Desarrollador Web, apasionado con el desarrollo front-end y con experiencia en lenguajes back-end."
        />
      </Head>
      <HomeContainer>
        <Hero />
        <Projects />
      </HomeContainer>
    </>
  );
};

export default Home;
