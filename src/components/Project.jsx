import React from "react";

import { useLazyLoading } from "../hooks/useLazyLoading";

import "../styles/components/Project.scss";

const colorPill = (nameTechnologie) => {
  switch (nameTechnologie) {
    case "React JS":
      return "skyblue";
    case "React Apollo":
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
  const [show, refElement] = useLazyLoading();

  return (
    <div className="Project" ref={refElement}>
      {show && (
        <>
          <div className="Project__text fade-in">
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
          <div className="Project__img fade-in">
            <figure>
              <img src={data.img} alt={"Imagen " + data.name} />
            </figure>
          </div>
        </>
      )}
    </div>
  );
};

export { Project };
