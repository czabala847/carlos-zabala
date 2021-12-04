import React from "react";

import { Hero } from "../containers/Hero";
import { About } from "../containers/About";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../styles/pages/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export { Home };
