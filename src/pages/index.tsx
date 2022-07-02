import React from "react";

import { Hero } from "containers/Hero";

import { HomeContainer } from "styles/pages/HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      Projects
    </HomeContainer>
  );
};

export default Home;
