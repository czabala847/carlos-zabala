import React from "react";

import { useDrawCanvas } from "hooks/useDrawCanvas";

import { Canvas } from "./styles";

const HeroCanvas: React.FC = () => {
  const { refElement } = useDrawCanvas();

  return <Canvas ref={refElement}>Su navegador no soporta canvas :(</Canvas>;
};

export { HeroCanvas };
