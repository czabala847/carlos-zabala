import React from "react";

import "../styles/components/Project.scss";

const colorPill = (nameTechnologie) => {
  switch (nameTechnologie) {
    case "React JS":
      return "skyblue";
    case "Javascript":
      return "orange";
    case "SASS":
      return "pink";
    default:
      return "default";
  }
};

const Project = ({ data }) => {
  return (
    <div className="Project">
      <div className="Project__text">
        <h4 className="Project__title">{data.name}</h4>
        <div className="Project__description">
          {data.technologies.map((tecno, id) => (
            <span key={id} className={`pill pill__${colorPill(tecno)}`}>
              {tecno}
            </span>
          ))}
          <p>{data.description}</p>
          <a
            rel="noreferrer"
            target="_blank"
            href={data.url}
            className="btn btn__blue"
          >
            Ir al sitio
          </a>
        </div>
      </div>
      <div className="Project__img">
        <figure>
          <img src={data.img} alt={"Imagen " + data.name} />
        </figure>
      </div>
    </div>
  );
};

export { Project };
