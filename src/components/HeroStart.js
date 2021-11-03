import React from "react";

import "../styles/components/HeroStart.scss";

const initialState = {
  left: 0,
  top: 0,
  animationDelay: 0,
};

function HeroStart() {
  const [state, setState] = React.useState(initialState);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const generatePosition = () => {
    let x = randomNumber(0, 100) + "%";
    let y = randomNumber(0, 75) + "%";
    let delay = randomNumber(0, 3) + "s";

    setState({
      left: x,
      top: y,
      animationDelay: delay,
    });
  };

  React.useEffect(() => {
    generatePosition();
  }, []);

  return <div style={state} className="HeroStart"></div>;
}

export { HeroStart };
