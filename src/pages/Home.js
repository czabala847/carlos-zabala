import React from "react";

import { Hero } from "../containers/Hero";

import { Header } from "../components/Header";

import "../styles/pages/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
    </div>
  );
}

export { Home };
