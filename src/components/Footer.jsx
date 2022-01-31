import React from "react";

import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="container">
        @Carlos Zabala - {new Date().getFullYear()}
      </div>
    </section>
  );
};

export { Footer };
